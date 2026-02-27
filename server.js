// server.js
// Node.js backend for saving answers to Google Sheet // Path to your service account key file  
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { google } = require('googleapis');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// static file serving will allow the front‑end to live in the same project
const app = express();

// apply basic security headers
app.use(helmet());

// CORS configuration with an explicit allowlist
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',').map(o => o.trim()).filter(Boolean);
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // non-browser clients
    if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error('Not allowed by CORS'));
  }
}));

// basic rate limiting to mitigate abuse
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per window
});
app.use(limiter);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// optional: return index.html for any unmatched route (single‑page feel)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Google Sheets setup
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_ID = process.env.SHEET_ID; // set in .env or App Engine
const SHEET_RANGE = 'Sheet1!A:E'; // adjust if you renamed the tab

// deferred Google API client, will be created during initialization
let sheetsClient;

async function initGoogle() {
  if (!SHEET_ID) {
    throw new Error('Missing SHEET_ID environment variable');
  }

  const options = { scopes: SCOPES };

  // allow either a path to a key file or the raw JSON string (useful in cloud deploys)
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
    try {
      options.credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);
    } catch (e) {
      throw new Error('Invalid JSON in GOOGLE_APPLICATION_CREDENTIALS_JSON');
    }
  } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    options.keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  } else if (process.env.NODE_ENV !== 'production') {
    // fall back to a local file if one exists (for development only)
    const credPath = path.join(__dirname, 'credentials.json');
    options.keyFile = credPath;
  }

  const auth = new google.auth.GoogleAuth(options);
  const authClient = await auth.getClient();
  sheetsClient = google.sheets({ version: 'v4', auth: authClient });
  console.log('Google Sheets client initialized');
}

// call the initializer once at startup
initGoogle().catch((err) => {
  console.error('Failed to initialize Google API client:', err);
  process.exit(1);
});

app.post('/api/save-answer', async (req, res) => {
  try {
    if (!sheetsClient) {
      return res.status(503).json({ success: false, error: 'Google client not ready' });
    }

    // lightweight request validation
    const { player, answer, question, category, time } = req.body;
    if (!player || !answer || !question) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    await sheetsClient.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[player, answer, question, category, time]],
      },
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error saving answer:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
