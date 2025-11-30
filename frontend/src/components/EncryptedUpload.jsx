import React, { useState } from "react";

export default function EncryptedUpload() {
  const [file, setFile] = useState(null);
  const [sessionKey, setSessionKey] = useState("");
  const [encryptedHash, setEncryptedHash] = useState("");
  const [txHash, setTxHash] = useState("");
  const [aiImageUrl, setAiImageUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0] || null);
    setLogs([]);
    setError("");
  };

  const encryptFile = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const hash = await crypto.subtle.digest("SHA-256", arrayBuffer);
    return new Uint8Array(hash);
  };

  const handleUpload = async () => {
    if (!file) return setError("Please select a file first!");
    setLoading(true);
    setLogs(["Encrypting file..."]);
    setError("");

    try {
      const encrypted = await encryptFile(file);
      const formData = new FormData();
      formData.append("file", new Blob([encrypted]), file.name);

      setLogs((l) => [...l, "Uploading encrypted file to backend..."]);

      const resp = await fetch("https://pika-move-apto-6-8sct.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      if (!resp.ok) {
        const errData = await resp.json();
        throw new Error(errData.error || "Unknown backend error");
      }

      const data = await resp.json();

      setSessionKey(data.session_key);
      setEncryptedHash(data.encrypted_file_hash);
      setTxHash(data.tx_hash);
      setAiImageUrl(data.ai_generated_image_url);
      setQrCode(data.qr_code);
      setLogs((l) => [...l, ...(data.logs || [])]);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLogs((l) => [...l, "Error: " + err.message]);
    }

    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "start", background: "#f0f4f8", padding: "40px" }}>
      <div style={{ width: "100%", maxWidth: "700px", background: "#fff", borderRadius: "12px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)", padding: "30px" }}>
        <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>AI Vault - Encrypted Upload</h2>

        <input type="file" onChange={handleFileChange} style={{ marginBottom: "10px", width: "100%" }} />
        <button
          onClick={handleUpload}
          disabled={loading || !file}
          style={{ width: "100%", padding: "12px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        {sessionKey && (
          <div style={{ marginTop: "30px", padding: "20px", background: "#f9fafb", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
            <p><strong>Session Key:</strong> {sessionKey}</p>
            <p><strong>Encrypted Hash:</strong> {encryptedHash}</p>
            <p>
              <strong>Blockchain TX Hash:</strong>{" "}
              <a href={`https://explorer.aptoslabs.com/txn/${txHash}?network=testnet`} target="_blank" style={{ color: "#4f46e5" }}>
                {txHash}
              </a>
            </p>

            {aiImageUrl && (
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <p><strong>AI Output Image:</strong></p>
                <img src={aiImageUrl} alt="AI Output" style={{ maxWidth: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                <p><a href={aiImageUrl} target="_blank" style={{ color: "#4f46e5" }}>View on IPFS</a></p>
              </div>
            )}

            {qrCode && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p><strong>Your Mood QR Code:</strong></p>
                <img src={qrCode} alt="QR Code" style={{ width: "200px", height: "200px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }} />
              </div>
            )}

            <div style={{ marginTop: "20px" }}>
              <h4>Logs:</h4>
              <pre style={{ background: "#e5e7eb", padding: "10px", borderRadius: "8px", maxHeight: "200px", overflowY: "auto" }}>
                {logs.join("\n")}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
