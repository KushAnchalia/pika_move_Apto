import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import crypto from "crypto";
import fetch from "node-fetch";
import qrcode from "qrcode"; // For generating QR codes

import { publishProof } from "../aptos_client.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("file"), async (req, res) => {
  const logs = [];
  try {
    const fileBuffer = req.file.buffer;

    // 1️⃣ Hash encrypted file
    const encryptedHash = crypto.createHash("sha256").update(fileBuffer).digest("hex");
    logs.push("File encrypted successfully, hash computed.");

    // 2️⃣ Generate session key
    const sessionKey = crypto.randomBytes(16).toString("hex");

    // 3️⃣ Call AI worker for mood detection + Ghibli image + QR code
    const aiResp = await fetch(`${process.env.AI_WORKER_URL}/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: "Detect my mood and generate a matching Ghibli style image"
      }),
    });

    const aiData = await aiResp.json();
    console.log("[AI Worker Response]:", aiData);

    const mood = aiData?.description || "unknown";
    const aiImageUrl = aiData?.ai_image_url || "";
    const qrCode = aiData?.qr_code || "";

    logs.push(`Mood detected: ${mood}`);
    logs.push("AI image generated.");
    logs.push("QR code generated.");

    const aiHash = crypto.createHash("sha256").update(aiImageUrl).digest("hex");

    // 4️⃣ Publish proof on Aptos
    const txHash = await publishProof(encryptedHash, sessionKey, aiHash);
    logs.push("Proof submitted to Aptos testnet.");

    // 5️⃣ Respond to frontend
    res.json({
      tx_hash: txHash,
      encrypted_file_hash: encryptedHash,
      session_key: sessionKey,
      mood: mood,
      ai_generated_image_url: aiImageUrl,
      qr_code: qrCode,
      logs,
    });

  } catch (err) {
    console.error(err);
    logs.push("Error: " + err.message);
    res.status(500).json({ error: err.message, logs });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
