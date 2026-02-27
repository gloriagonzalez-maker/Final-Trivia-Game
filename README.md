# Final Trivia Game

This is an "IT Wheel of Fortune" style trivia game built with plain HTML/CSS/JavaScript and a small Node.js backend for logging answers to Google Sheets. The project is configured to work locally and to be deployed to Google App Engine.

## Features added

- Faster spin animation (1.8s) with cubic-bezier easing for a smooth feel
- Increased rotation count (20+ full revolutions) for excitement
- Pulsing glow animation on wheel when idle
- Pointer wobble animation when idle; stops while spinning
- JS/ CSS transition curves are synchronized
- Static assets are served by Express for easier deployment

## Local setup

1. Copy `.env.example` to `.env` and fill in `SHEET_ID` and point `GOOGLE_APPLICATION_CREDENTIALS` to your credentials file.
2. Place your `credentials.json` from Google Cloud in the project root (do not commit that file).
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm run dev   # requires nodemon
   # or npm start
   ```
5. Open `http://localhost:3001` in your browser.

## Deploying to App Engine

1. Ensure you have the [Google Cloud SDK](https://cloud.google.com/sdk) installed and initialized.
2. Authenticate and select your project:
   ```sh
   gcloud auth login
   gcloud config set project YOUR_PROJECT_ID
   ```
3. Update `app.yaml` with your real `SHEET_ID` (or use Secrets Manager).
4. Copy the service account JSON (for Sheets access) to the project and update `GOOGLE_APPLICATION_CREDENTIALS` accordingly.
5. Deploy:
   ```sh
   gcloud app deploy
   ```

App Engine will install dependencies based on `package.json` and start the server using the `start` script.

## Notes

- Static files (`index.html`, `style.css`, `Script.js`, etc.) live in the project root and are automatically served.
- All game logic runs in the browser; the backend only appends answers to a sheet.
- Make sure your Google Sheet is shared with the service account email from the credentials.
