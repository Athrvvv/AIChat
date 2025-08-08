# AIChat

AIChat is a full-stack AI-powered chat application that integrates Google's Gemini models to provide intelligent responses. The project is divided into two main parts: the frontend (React + Vite) and the backend (Node.js + Express).

## 📁 Project Structure
```
📁 PROJECT AI/
├── 📁 AIChat/          # Frontend (React + Vite)
│   ├── 📁 node_modules/
│   ├── 📁 public/
│   ├── 📁 src/
│   │   ├── 📁 assets/
│   │   └── 📁 components/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
└── 📁 backend/          # Backend (Node.js + Express)
    ├── 📁 node_modules/
    ├── .env
    ├── package-lock.json
    ├── package.json
    └── server.js
```

## 🚀 Features
- **AI-Powered Chat** – Uses Google's Gemini model for natural and context-aware responses.
- **Full-Stack Architecture** – Frontend in React + Vite, backend in Node.js + Express.
- **Environment Variables** – API keys and sensitive data stored in `.env` files.
- **REST API** – Backend handles AI requests and returns model responses to frontend.

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **AI API:** Google Generative AI (Gemini models)
- **Package Manager:** npm

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/aichat.git
cd aichat
```

### 2️⃣ Install dependencies for frontend
```bash
cd AIChat
npm install
```

### 3️⃣ Install dependencies for backend
```bash
cd ../backend
npm install
```

### 4️⃣ Create `.env` files
- In **AIChat/.env** (frontend)
```
VITE_GEMINI_API_KEY=your_api_key_here
```
- In **backend/.env** (backend)
```
GEMINI_API_KEY=your_api_key_here
PORT=5000
```

### 5️⃣ Run the application
- **Start backend**
```bash
cd backend
npm start
```
- **Start frontend**
```bash
cd AIChat
npm run dev
```

## 📌 Notes
- Ensure you have valid Gemini API keys from [Google AI Studio](https://makersuite.google.com/app/apikey).
- Both frontend and backend must be running simultaneously for full functionality.

---
💡 *This project demonstrates AI integration with a modern full-stack setup.*
