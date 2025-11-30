🤖 AI Vault: Encrypted Upload & AI ProcessingThis project provides a secure, full-stack demonstration of uploading an encrypted file hash, processing the data using an AI backend (OpenAI/Gemini/Getimg), and receiving structured metadata, including an AI-generated image and a mock blockchain transaction hash (e.g., Aptos).The architecture consists of a Python Backend (AI Worker) handling the heavy lifting (file processing, AI interaction, IPFS pinning) and a React Frontend for the user interface.📂 Project Structure.
├── ai-worker/              # Python Backend (Flask/FastAPI/etc.)
│   ├── server.py           # Main application logic
│   ├── requirements.txt    # Python dependencies
│   └── venv/               # Virtual environment (ignored by Git)
├── frontend/               # React/Node.js Frontend
│   ├── src/                # Source code (e.g., EncryptedUpload.jsx)
│   ├── package.json        # Node dependencies
│   └── node_modules/       # Node packages (ignored by Git)
├── README.md               # This file
└── .gitignore              # Git ignore file
🚀 How to RunFollow these steps to set up and run the project locally.PrerequisitesPython 3.x installedNode.js and npm installed1. Backend Setup (Python)The backend is responsible for receiving the encrypted data, orchestrating AI calls, and handling external services like Pinata (IPFS).A. Setup Environment and DependenciesNavigate to the root project directory (where this README.md is).Create and activate a Python virtual environment:OSCommandWindowspython -m venv ai-worker/venvai-worker\venv\Scripts\activatemacOS/Linuxpython3 -m venv ai-worker/venvsource ai-worker/venv/bin/activateInstall the required Python packages:Bashpip install -r ai-worker/requirements.txt
B. Configure Secrets (.env)Create a file named .env inside the ai-worker/ directory.Populate it with your API keys using the example format below:Code snippet# .env in ai-worker/

# OpenAI API Key
OPENAI_API_KEY=your_openai_api_key_here

# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key_here

# Pinata API Key & Secret (for IPFS pinning)
PINATA_API_KEY=your_pinata_api_key_here
PINATA_API_SECRET=your_pinata_api_secret_here

# Getimg API Key (for image generation)
GETIMG_API_KEY=your_getimg_api_key_here
C. Run the Backend ServerWith the virtual environment activated, start the Python server:Bashpython ai-worker/server.py
The backend should now be running, typically accessible at http://localhost:4000.2. Frontend Setup (Node.js)The frontend is a React application that provides the user interface for file selection and displays the results.A. Install DependenciesNavigate into the frontend directory:Bashcd frontend
Install the Node.js dependencies:Bashnpm install
B. Start the Frontend ApplicationStart the React development server:Bashnpm start
The frontend will typically open automatically in your browser at http://localhost:3000 and will attempt to connect to the backend running on port 4000.💡 UsageEnsure both the backend (python ai-worker/server.py) and the frontend (npm start in frontend/) are running in separate terminals.Open the frontend application in your browser.Select any file. The frontend calculates a SHA-256 hash (acting as the "encrypted" file) and sends this hash to the backend.Click "Upload".The backend processes the hash, interacts with the configured AI services, generates a mock transaction, and returns the metadata (session key, TX hash, AI image URL, QR code).View the results displayed on the frontend interface.🤝 ContributingContributions are welcome! Please feel free to open issues or submit pull requests for any improvements or bug fixes.
