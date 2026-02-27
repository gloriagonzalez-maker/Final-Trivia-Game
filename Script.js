// Wheel categories with corresponding emojis
const categories = [
  { cat: "Incident Management & Ticketing", emoji: "📊" },
  { cat: "Password & Access", emoji: "🔐🔒🛑🔑" },
  { cat: "Hardware & Equipment", emoji: "🖥️🖥️📱🔌📟" },
  { cat: "Network & Connectivity", emoji: "🌐🔌📶" },
  { cat: "Software & Applications", emoji: "💾" },
  { cat: "User Training & Documentation", emoji: "📚" },
  { cat: "Knowledge & Escalation", emoji: "🧠" }
];

//Your questions
const questions = [
  { q: "How do you assign a ticket in ServiceNow?", cat: "Incident Management & Ticketing", v: 100 },
  { q: "What’s the process for escalating a P1 incident?", cat: "Incident Management & Ticketing", v: 100 },
  { q: "How do you reset a user’s password in AD?", cat: "Password & Access", v: 100 },
  { q: "What do you do if a user is locked out?", cat: "Password & Access", v: 100 },
  { q: "How do you deploy a new laptop?", cat: "Hardware & Equipment", v: 100 },
  { q: "What cables are needed for a desktop setup?", cat: "Hardware & Equipment", v: 100 },
  { q: "How do you troubleshoot no internet?", cat: "Network & Connectivity", v: 100 },
  { q: "What does a flashing router light mean?", cat: "Network & Connectivity", v: 100 },
  { q: "How do you install Office 365?", cat: "Software & Applications", v: 100 },
  { q: "What to do if Outlook won’t open?", cat: "Software & Applications", v: 100 },
  { q: "How do you run a training session?", cat: "User Training & Documentation", v: 100 },
  { q: "Where are the SOPs stored?", cat: "User Training & Documentation", v: 100 },
  { q: "When should you escalate to L2?", cat: "Knowledge & Escalation", v: 100 },
  { q: "What info must you include before escalating?", cat: "Knowledge & Escalation", v: 100 },
  { q: "How do you check if a ticket is resolved?", cat: "Incident Management & Ticketing", v: 100 },
  { q: "What’s the SLA for a P2 incident?", cat: "Incident Management & Ticketing", v: 100 },
{ q: "How do you verify a user’s identity?", cat: "Password & Access", v: 100 }
];

// additional question groups added by user
const extraQuestionGroups = {
  '🎫': [
    "What are the exact steps you take from the moment a ticket arrives until it's closed?",
    "How do you determine ticket priority and severity levels in practice?",
    "What triggers an escalation to tier 2/3 support, and what's your actual process?",
    "How do you handle tickets when the reported issue doesn't match what you find?",
    "What information do you always gather first before troubleshooting any issue?",
    "How do you decide whether to resolve something quickly vs. creating proper documentation?",
    "What's your process for handling tickets that involve multiple teams or departments?",
    "How do you communicate with users during long-running incidents?",
    "What do you do when you receive a duplicate ticket for an ongoing issue?",
    "How do you handle after-hours or weekend tickets that come in?",
    "what is your proceess for handeling tickets that require follow-up after the initial fix?",
    "How do you manage tickets that are waiting on user response or external vendor input?",
    "How do you handle tickets that involve sensitive information or require special perissions?",
    "What do you do when you encounter a difficult user that is unresponsive ,rude or simpily assumes they need to be escalated to a manager?",
    "How do you handle tickets that require on-site support or physical acess to equipment?",
    "What is the process guide to resolving a ticket that keeps accuring for the same user or system,indicating a deeper underlying issue?",
    "How do you handle tickets that involve software or hardware that is out of warranty or no longer supported?",
    "What do you do when you receive a ticket that is outside of your expertise or comfort zone?"
  ],
  '🔐': [
    "What is your actual step-by-step process for onboarding new users and granting access?",
    "What's your actual step-by-step process for password resets (not just 'reset the password')?",
    "How do you verify user identity before resetting passwords or granting access?",
    "What do you do when someone requests access to systems you're unfamiliar with?",
    "How do you handle access requests for terminated employees' accounts?",
    "What's the process when someone is locked out of multiple systems simultaneously?",
    "How do you handle VPN access issues and what are the common fixes?",
    "What do you check when MFA/2FA isn't working for a user?",
    "How do you handle emergency access requests outside business hours?",
    "What is your process for granting temporary access for contractors or short-term employees?",
    "How are permissions reviewed and updated over time, especially when users change roles or departments?",
    "What do you check when the password reset process doesn't work as expected,especially for users that refuse to follow instructions or provide necessary information?",
    "How do you handle situations where a user claims they never received their password reset email or access instructions?",
    "What is your process for handling privileged access accounts ,and ensuring they are secure?",
    "How do you manage and document access changes to ensure compliance with security policies?",
    "How do you handle a user that is not following security best practices or policies?",
    "What do you do when you encounter a user that is resistant to security measures or training?",
    "How do you handle the sttubborn user that refuses to update their password or follow security protocols, even after multiple reminders and escalations?"
  ],
  '💻': [
    "What's your complete process for setting up a new employee's workstation?",
    "What's the process for setting up a new employee's workstation in a remote environment?",
    "what is your step-by-step troubleshooting process for 'computer won't turn on' issues?",
    "what is your step-by-step troubleshooting process for 'computer won't connect to network' issues?",
    "what security checks do you perform when setting up a new device?",
    "How do you troubleshoot 'computer is slow' complaints in practice?",
    "What's your actual procedure for laptop/equipment replacement?",
    "How do you handle equipment requests for remote employees?",
    "What do you do when retrieving equipment from departing employees?",
    "How do you prioritize hardware issues vs. software issues?",
    "What's your process for handling broken or damaged equipment?",
    "How do you track loaner equipment and ensure its return?",
    "What are the steps do you take when a user's device is infected with malware or a virus?",
    "How do you handle situations where a user is experiencing hardware issues ,but is resistant to troubleshooting steps or refuses to follow instructions?",
    "Who do you contact and what do you do when you encounter a hardware issue that is beyond your expertise or requires specialized knowledge to resolve?",
    "What is your process for handling warranty claims or repairs for faulty hardware?"
  ],
  '🛠️': [
    "What's your step-by-step process for installing new software requests?",
    "How do you handle software license issues or 'software won't activate' problems?",
    "What's your troubleshooting sequence for application crashes?",
    "How do you handle requests for software that isn't on the approved list?",
    "What do you do when software updates break existing functionality?",
    "How do you handle browser-specific issues with web applications?",
    "What's your process for removing software from departing employees' machines?",
    "How do you troubleshoot printing issues from specific applications?"
  ],
  '🌐': [
    "What's your diagnostic process for 'internet not working' tickets?",
    "How do you troubleshoot WiFi connectivity issues step-by-step?",
    "What do you check when users can't access shared drives or network resources?",
    "How do you handle VPN connectivity problems?",
    "What's your process when email isn't working for a user?",
    "How do you determine if an issue is network-related vs. device-related?"
  ],
  '📝': [
    "How do you explain technical issues to non-technical users?",
    "What information do you always document in ticket notes vs. what you skip?",
    "How do you handle situations where users are upset or frustrated?",
    "What's your process for following up on unresolved tickets?",
    "How do you communicate known issues or outages to users?",
    "When do you stop troubleshooting and escalate, and what prompts that decision?",
    "What workarounds do you use regularly that aren't documented anywhere?",
    "How do you handle issues you've never seen before?",
    "What resources do you check first when you don't know the answer?",
    "What common issues do you wish had better documentation?"
  ]
};

const emojiCategoryMap = {
  '🎫': "Incident Management & Ticketing",
  '🔐': "Password & Access",
  '💻': "Hardware & Equipment",
  '🛠️': "Software & Applications",
  '🌐': "Network & Connectivity",
  '📝': "User Training & Documentation"
};

// Append extra questions to the main list
Object.entries(extraQuestionGroups).forEach(([emoji, arr]) => {
  const catName = emojiCategoryMap[emoji];
  if (catName) {
    arr.forEach(qText => questions.push({ q: qText, cat: catName, v: 100 }));
  }
});

// Example: Add more questions to reach 100
while (questions.length < 70) {
  const randomCat = categories[Math.floor(Math.random() * categories.length)];
  questions.push({
    q: `Auto-generated Q${questions.length + 1}: What is a  ${randomCat.cat}?`,
    cat: randomCat.cat,
    v: 100
  });
}

// DOM elements
const showAllQuestionsBtn = document.getElementById("show-all-questions");
const generateRandomQuestionBtn = document.getElementById("generate-random-question");
const allQuestionsList = document.getElementById("all-questions-list");
const showAnswersLogBtn = document.getElementById("show-answers-log");
const answersLogList = document.getElementById("answers-log-list");
const wheel = document.getElementById("wheel");
const wheelPointer = document.getElementById("wheel-pointer");
const spinBtn = document.getElementById("spin-btn");
const categoryDisplay = document.getElementById("category-display");
const questionDisplay = document.getElementById("question");
const playerNameInput = document.getElementById("player-name");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");
const reportBtn = document.getElementById("report-btn");
const nextBtn = document.getElementById("next-btn");

// start with idle animations active
wheel.classList.add('pulsing');
wheelPointer.classList.add('idle');

// ...existing code for wheel rendering, spinning, and event listeners...



    // Create wheel using conic-gradient and overlay category labels
    const sliceAngle = 360 / categories.length;
    // Build conic-gradient with precise color stops for even sectors
    let gradient = '';
    categories.forEach((category, i) => {
      const start = (i * sliceAngle).toFixed(2);
      const end = ((i + 1) * sliceAngle).toFixed(2);
      gradient += `hsl(${i * sliceAngle}, 70%, 50%) ${start}deg ${end}deg`;
      if (i < categories.length - 1) gradient += ', ';
    });
    wheel.style.background = `conic-gradient(${gradient})`;

    // Add category labels, centered in each sector and matching color
    // Use trigonometry to place each label at the center of its sector
    const wheelRadius = 300; // half of wheel size in px
    const labelRadius = 145; // distance from center for label
    categories.forEach((category, i) => {
      const label = document.createElement('div');
      label.className = 'slice-label';
      const angle = ((i + 0.5) * sliceAngle - 90) * Math.PI / 180; // -90 to start at top
      const x = Math.cos(angle) * labelRadius + wheelRadius;
      const y = Math.sin(angle) * labelRadius + wheelRadius;
      label.style.left = `${x}px`;
      label.style.top = `${y}px`;
      label.style.transform = `translate(-50%,-50%)`;
      label.style.border = `2px solid hsl(${i * sliceAngle}, 70%, 60%)`;
      label.innerHTML = `<span style='font-size:1.2em;'>${category.emoji}</span><br><span style='font-size:11px;'>${category.cat}</span>`;
      wheel.appendChild(label);
    });

    let canSpin = true;
let currentQuestion = null;
let lastSliceIndex = 0;

// submit/next listeners attached once
submitBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();
  const playerName = playerNameInput.value.trim();
  if (!userAnswer || !playerName) {
    feedback.textContent = "Please enter your name and answer.";
    feedback.style.color = "orange";
    return;
  }

  const correctAnswer = currentQuestion ? currentQuestion.q.toLowerCase() : ""; // Simplified check
  if (userAnswer.toLowerCase() === correctAnswer) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Incorrect!";
    feedback.style.color = "red";
  }
  submitBtn.disabled = true;
  nextBtn.style.display = "inline-block";

  // Log answer locally for team review
  logAnswer({
    player: playerName,
    answer: userAnswer,
    question: currentQuestion ? currentQuestion.q : "",
    category: currentQuestion ? currentQuestion.cat : "",
    time: new Date().toLocaleString()
  });
  // Send answer to backend for saving
  fetch("/api/save-answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      player: playerName,
      answer: userAnswer,
      question: currentQuestion ? currentQuestion.q : "",
      category: currentQuestion ? currentQuestion.cat : "",
      time: new Date().toISOString()
    })
  });
});

// Next Question button handler
nextBtn.addEventListener("click", () => {
  nextBtn.style.display = "none";
  spinBtn.disabled = false;
  feedback.textContent = "";
  answerInput.value = "";
  submitBtn.disabled = false;
  spinBtn.click();
});

// Wheel transition end – show result and reset states
wheel.addEventListener("transitionend", () => {
  canSpin = true;
  spinBtn.disabled = false;
  // Highlight pointer when spin ends
  wheelPointer.style.borderBottomColor = '#4caf50';
  setTimeout(() => {
    wheelPointer.style.borderBottomColor = '#e91e63';
  }, 1000);

  // re‑enable idle animations
  wheel.classList.add('pulsing');
  wheelPointer.classList.add('idle');

  // display the question corresponding to previously calculated slice
  const selectedCategory = categories[lastSliceIndex].cat;
  const categoryQuestions = questions.filter(q => q.cat === selectedCategory);
  currentQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
  categoryDisplay.textContent = `${categories[lastSliceIndex].emoji} ${selectedCategory}`;
  questionDisplay.textContent = currentQuestion.q;
});

// Spin the wheel
spinBtn.addEventListener("click", () => {
  if (!canSpin) return;

  canSpin = false;
  spinBtn.disabled = true;
  feedback.textContent = "";
  answerInput.value = "";
  submitBtn.disabled = false;

  // disable idle animations while moving
  wheel.classList.remove('pulsing');
  wheelPointer.classList.remove('idle');

  // give the sensation of a faster, more exciting spin by using more rotations
  const randomDegree = 7200 + Math.floor(Math.random() * 360);

  // match the CSS transition curve for a consistent feel
  wheel.style.transition = 'transform 1.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  // Animate pointer color for spin
  wheelPointer.style.borderBottomColor = '#ffeb3b';

  const actualDegrees = randomDegree % 360;
  const sliceDegree = 360 / categories.length;
  lastSliceIndex = Math.floor((360 - actualDegrees) / sliceDegree) % categories.length;
});
