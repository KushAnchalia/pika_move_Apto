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


## 🛠 How to Run Locally

### Prerequisites
- Python 3.10+
- Node.js 18+ & npm
- Git

### 1. Backend (Python AI Worker)

 Clone and enter project
git clone https://github.com/your-username/ai-vault.git
cd ai-vault/ai-worker

 Create virtual env
python -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate

 Install dependencies
pip install -r requirements.txt

 Create .env file (see template below)
cp .env.example .env
 Then add your keys

OPENAI_API_KEY=sk-...
GEMINI_API_KEY=your-gemini-key
GETIMG_API_KEY=your-getimg-key
PINATA_API_KEY=your_pinata_key
PINATA_API_SECRET=your_pinata_secret

### Run Backend 

 Go to the backend folder
cd backend

 Install dependencies
npm install

 Start the server
npm start


### Run Frontend

 Go to the frontend folder
cd frontend

 Install dependencies (only needed the first time or after changes)
npm install

 Start the development server
npm start


The Expected Output 


<img width="618" height="565" alt="image" src="https://github.com/user-attachments/assets/b964b7ad-22e4-4a10-919a-b6339afdba48" />
<img width="774" height="682" alt="image" src="https://github.com/user-attachments/assets/ce032c32-4bd2-4a9d-b503-8309a2ec7e64" />

Architecture Link 
<img width="1340" height="789" alt="image" src="https://github.com/user-attachments/assets/899d714f-f4d8-4978-8160-a36fedb3c752" />

Video Demo Link : 
https://drive.google.com/file/d/1NlxhzEKWw6GA4C4vxHOChOMIM3SEW3ne/view?usp=sharing





 s=your-username/ai-vault&type=Date) LicenseMIT © 2025Built with  using React, Python, and a lot of AI magic.

