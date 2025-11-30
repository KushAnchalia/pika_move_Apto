import os
import json
import base64
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from google import genai

# QR code imports
import qrcode
from io import BytesIO

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

app = Flask(__name__)
gemini_client = genai.Client(api_key=GEMINI_API_KEY)


# --- Generate AI Text Description ---
def generate_description(prompt: str):
    resp = gemini_client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )
    return resp.text.strip()


# --- Generate QR Code ---
def generate_qr_code(text: str):
    qr = qrcode.QRCode(box_size=10, border=4)
    qr.add_data(text)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    buffer = BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)

    return "data:image/png;base64," + base64.b64encode(buffer.read()).decode("utf-8")


@app.route("/generate", methods=["POST"])
def generate():
    body = request.json
    prompt = body.get("prompt", "Describe the mood of this moment.")

    try:
        # 1️⃣ Gemini description
        description = generate_description(prompt)
        print("[Gemini] Text generated.")

        # 2️⃣ QR Code (just encoding the description text)
        qr_code = generate_qr_code(f"Mood: {description}")

        return jsonify({
            "description": description,
            "qr_code": qr_code
        })

    except Exception as e:
        print("Worker Error:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    # Ensure worker listens correctly
    app.run(host="0.0.0.0", port=5001)
