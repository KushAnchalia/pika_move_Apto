# 🤖 AI Vault: Encrypted Upload & AI Processing

A secure full-stack demo that lets users upload an **encrypted file hash** (SHA-256), processes it through powerful AI models (OpenAI, Gemini, or Getimg.ai), generates an AI image, pins metadata to IPFS via Pinata, and returns a **mock Aptos blockchain transaction hash**.

Perfect for showcasing end-to-end encrypted workflows, AI orchestration, and Web3-style metadata handling.

### ✨ Live Demo
- **Frontend**: https://pika-move-apto.vercel.app  
- **Backend API**: https://pika-move-apto-7.onrender.com  
- **AI Worker (server.py)**: https://pika-move-apto-6-8sct.onrender.com  

> Try it now → [https://pika-move-apto.vercel.app](https://pika-move-apto.vercel.app)

### 🖼 Project Screenshot

![AI Vault Demo](https://raw.githubusercontent.com/your-username/ai-vault/main/screenshots/demo.png "AI Vault in action – Upload, AI processing, and blockchain-style result")
> *Upload a file → Get AI-generated image + mock Aptos TX + IPFS pin*

*(Replace the link above with your actual screenshot hosted on GitHub, ImgBB, or Vercel)*

## 🚀 Features

- Client-side SHA-256 hashing (real encryption simulation)
- Secure transmission of file hash only (original file never leaves browser)
- AI processing via OpenAI, Gemini, or Getimg.ai
- AI-generated image based on file metadata
- Automatic pinning to IPFS (via Pinata)
- Mock Aptos blockchain transaction hash
- QR code generation for the result
- Beautiful, responsive React frontend

## 📂 Project Structure

├── ai-worker/                  # Python AI backend
│   ├── server.py               # Main FastAPI/Flask server
│   ├── requirements.txt
│   └── .env                    # (gitignored)
├── frontend/                   # React + Vite frontend
│   ├── src/
│   │   └── components/
│   │       └── EncryptedUpload.jsx
│   ├── public/
│   └── package.json
├── screenshots/                # Put your demo images here
├── README.md
└── .gitignore

## 🛠 How to Run Locally

### Prerequisites
- Python 3.10+
- Node.js 18+ & npm
- Git

### 1. Backend (Python AI Worker)

```bash
# Clone and enter project
git clone https://github.com/your-username/ai-vault.git
cd ai-vault/ai-worker

# Create virtual env
python -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (see template below)
cp .env.example .env
# Then add your keys

# Run server
python server.py

Backend runs at → http://localhost:40002. Frontend (React)bash

cd ../frontend
npm install
npm start

Frontend runs at → http://localhost:3000Required API Keys (.env in ai-worker/)env

OPENAI_API_KEY=sk-...
GEMINI_API_KEY=your-gemini-key
GETIMG_API_KEY=your-getimg-key
PINATA_API_KEY=your_pinata_key
PINATA_API_SECRET=your_pinata_secret

 Never commit your .env file! Deployed URLs (Always Up-to-Date)Service
URL
Status
Frontend
https://pika-move-apto.vercel.app
 Live
Backend API
https://pika-move-apto-7.onrender.com
 Live
AI Worker
https://pika-move-apto-6-8sct.onrender.com
 Live

 ContributingContributions are very welcome! Feel free to:Open issues
Submit PRs for bugs, features, or UI improvements
Suggest better AI prompts or blockchain integrations

 Star History![Star History Chart](https://api.star-history.com/svg?repos=your-username/ai-vault&type=Date) LicenseMIT © 2025Built with  using React, Python, and a lot of AI magic.

