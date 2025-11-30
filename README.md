# Aptos AI Project

This project is an Aptos-based AI application with a Python backend and Node.js frontend. It allows secure interactions with AI services while integrating blockchain-based features.

---

## How to Run

### 1. Backend (Python)

1. Create and activate a virtual environment:

```bash
python -m venv ai-worker/venv
# Windows
ai-worker\venv\Scripts\activate
# macOS/Linux
source ai-worker/venv/bin/activate
Install dependencies:
pip install -r ai-worker/requirements.txt
Create a .env file in ai-worker/ with your secrets:

env

# .env.example
# OpenAI API Key
OPENAI_API_KEY=your_openai_api_key_here
# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here
# Pinata API Key & Secret
PINATA_API_KEY=your_pinata_api_key_here
PINATA_API_SECRET=your_pinata_api_secret_here
# Getimg API Key
GETIMG_API_KEY=your_getimg_api_key_here

Run the backend:
python ai-worker/server.py
2. Frontend (Node.js)
cd frontend
npm install
Start the frontend:
npm start












ChatGPT can 
