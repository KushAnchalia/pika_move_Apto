# 🤖 AI Vault: Encrypted Upload & AI Processing

This project provides a secure, full-stack demonstration of uploading an **encrypted file hash**, processing the data using an AI backend (OpenAI/Gemini/Getimg), and receiving structured metadata, including an AI-generated image and a mock blockchain transaction hash (e.g., Aptos).

The architecture consists of:

- **Python Backend (AI Worker):** Handles file processing, AI interaction, and IPFS pinning.
- **React Frontend:** Provides a user-friendly interface.

---

## 📂 Project Structure

├── ai-worker/ # Python Backend (Flask/FastAPI/etc.)
│ ├── server.py # Main application logic
│ ├── requirements.txt # Python dependencies
│ └── venv/ # Virtual environment (ignored by Git)
├── frontend/ # React/Node.js Frontend
│ ├── src/ # Source code (e.g., EncryptedUpload.jsx)
│ ├── package.json # Node dependencies
│ └── node_modules/ # Node packages (ignored by Git)
├── README.md # This file
└── .gitignore # Git ignore file

yaml
Copy code

---

## 🚀 How to Run

### Prerequisites

- Python 3.x  
- Node.js and npm  

---

## 1. Backend Setup (Python)

The backend handles receiving encrypted data, orchestrating AI calls, and interacting with external services like Pinata (IPFS).

### A. Setup Environment and Dependencies

1. Navigate to the root project directory (where this `README.md` is located).  
2. Create and activate a Python virtual environment:

```bash
# Windows
python -m venv ai-worker/venv
ai-worker\venv\Scripts\activate

# macOS/Linux
python3 -m venv ai-worker/venv
source ai-worker/venv/bin/activate
Install the required Python packages:

bash
Copy code
pip install -r ai-worker/requirements.txt
B. Configure Secrets (.env)
Create a .env file inside the ai-worker/ directory.

Add your API keys in the following format:

env
Copy code
# .env in ai-worker/

# OpenAI API Key
OPENAI_API_KEY=your_openai_api_key_here

# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Pinata API Key & Secret (for IPFS pinning)
PINATA_API_KEY=your_pinata_api_key_here
PINATA_API_SECRET=your_pinata_api_secret_here

# Getimg API Key (for image generation)
GETIMG_API_KEY=your_getimg_api_key_here
⚠️ Do not commit .env files. Add them to .gitignore to keep secrets safe.

C. Run the Backend Server
With the virtual environment activated, run:

bash
Copy code
python ai-worker/server.py
The backend will be running at: http://localhost:4000.

2. Frontend Setup (Node.js)
The frontend is a React application that handles file selection and displays results.

A. Install Dependencies
bash
Copy code
cd frontend
npm install
B. Start the Frontend
bash
Copy code
npm start
The frontend will typically open at http://localhost:3000 and connect to the backend on port 4000.

💡 Usage
Ensure both backend (python ai-worker/server.py) and frontend (npm start in frontend/) are running in separate terminals.

Open the frontend in your browser.

Select any file — the frontend calculates a SHA-256 hash (as the "encrypted" file) and sends it to the backend.

Click Upload.

The backend processes the hash, interacts with AI services, generates a mock transaction, and returns metadata (session key, TX hash, AI image URL, QR code).

View the results displayed on the frontend interface.

🤝 Contributing
Contributions are welcome! Open issues or submit pull requests for improvements or bug fixes.
