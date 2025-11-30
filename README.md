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

Backend Setup (Python)
The backend handles receiving encrypted data, orchestrating AI calls, and interacting with external services like Pinata (IPFS).

A. Setup Environment and Dependencies

Navigate to the root project directory (where this README.md is located).

Create and activate a Python virtual environment:

Windows:
python -m venv ai-worker/venv
ai-worker\venv\Scripts\activate

macOS/Linux:
python3 -m venv ai-worker/venv
source ai-worker/venv/bin/activate

Install the required Python packages:
pip install -r ai-worker/requirements.txt

B. Configure Secrets (.env)

Create a .env file inside the ai-worker/ directory.

Add your API keys in the following format:
OPENAI_API_KEY=your_openai_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
PINATA_API_KEY=your_pinata_api_key_here
PINATA_API_SECRET=your_pinata_api_secret_here
GETIMG_API_KEY=your_getimg_api_key_here

⚠️ Do not commit .env files. Add them to .gitignore to keep secrets safe.

C. Run the Backend Server

With the virtual environment activated, run:
python ai-worker/server.py

The backend will be running at http://localhost:4000

Frontend Setup (Node.js)
The frontend is a React application that handles file selection and displays results.

A. Install Dependencies

Navigate to the frontend directory: cd frontend

Install Node.js dependencies: npm install

B. Start the Frontend

Start the React development server: npm start

The frontend will typically open at http://localhost:3000
 and connect to the backend on port 4000

Usage

Ensure both backend and frontend are running in separate terminals.

Open the frontend in your browser.

Select any file. The frontend calculates a SHA-256 hash (as the "encrypted" file) and sends it to the backend.

Click Upload.

The backend processes the hash, interacts with AI services, generates a mock transaction, and returns metadata (session key, TX hash, AI image URL, QR code).

View the results displayed on the frontend interface.

Contributing

Contributions are welcome. Open issues or submit pull requests for improvements or bug fixes.ons are welcome! Open issues or submit pull requests for improvements or bug fixes.
