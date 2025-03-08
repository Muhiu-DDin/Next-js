import torch
import torch.nn as nn
import os
import io
import base64
from flask import Flask, request, jsonify
from PIL import Image
from torchvision import transforms
from model import AODNet  # Import your model
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

# ✅ Load the model correctly
checkpoint_path = "saved_models/dehaze_net_epoch_17.pth"

try:
    dehaze_net = AODNet()
    torch.serialization.add_safe_globals([AODNet])
    
    checkpoint = torch.load(checkpoint_path, map_location=torch.device('cpu'), weights_only=False)

    # ✅ Handle both cases: state_dict or full model object
    if isinstance(checkpoint, dict) and "state_dict" in checkpoint:
        dehaze_net.load_state_dict(checkpoint["state_dict"])
    elif isinstance(checkpoint, dict):
        dehaze_net.load_state_dict(checkpoint)  # If it's directly a state_dict
    else:
        dehaze_net = checkpoint  # If checkpoint is a full model object

    dehaze_net.eval()
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")

# ✅ Image preprocessing
transform = transforms.Compose([
    transforms.Resize((256, 256)),  
    transforms.ToTensor(),
])

@app.route("/dehaze", methods=["POST"])
def dehaze_image():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    image = Image.open(file).convert("RGB")
    input_tensor = transform(image).unsqueeze(0)  

    # Process image with model
    with torch.no_grad():
        output_tensor = dehaze_net(input_tensor)

    # Convert tensor back to image
    output_image = transforms.ToPILImage()(output_tensor.squeeze(0))

    # Convert image to base64
    buffered = io.BytesIO()
    output_image.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

    return jsonify({"imageUrl": f"data:image/jpeg;base64,{img_str}"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
# -----------------------------------------------------------

