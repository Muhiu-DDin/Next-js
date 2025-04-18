# import torch
# import torch.nn as nn
# import os
# import io
# import base64
# import uuid
# import requests
# from flask import Flask, request, jsonify
# from PIL import Image
# from torchvision import transforms
# from model import AODNet  # Import your model
# from flask_cors import CORS 

# app = Flask(__name__)
# CORS(app)

# # ✅ Ensure model directory exists
# MODEL_DIR = "saved_models"
# MODEL_PATH = os.path.join(MODEL_DIR, "dehaze_net_epoch_17.pth")
# MODEL_URL = "https://your-external-storage.com/dehaze_net_epoch_17.pth"

# if not os.path.exists(MODEL_PATH):
#     print("Downloading model...")
#     os.makedirs(MODEL_DIR, exist_ok=True)
#     try:
#         response = requests.get(MODEL_URL, stream=True)
#         response.raise_for_status()
#         with open(MODEL_PATH, "wb") as file:
#             for chunk in response.iter_content(chunk_size=8192):
#                 file.write(chunk)
#         print("✅ Model downloaded successfully!")
#     except requests.exceptions.RequestException as e:
#         print(f"❌ Error downloading model: {e}")

# # ✅ Load Model Safely
# try:
#     torch.serialization.add_safe_globals([nn.ReLU, AODNet])
    
#     checkpoint = torch.load(MODEL_PATH, map_location=torch.device('cpu'), weights_only=False)
    
#     dehaze_net = AODNet()
#     if isinstance(checkpoint, dict) and "state_dict" in checkpoint:
#         dehaze_net.load_state_dict(checkpoint["state_dict"])
#     elif isinstance(checkpoint, dict):
#         dehaze_net.load_state_dict(checkpoint)
#     else:
#         dehaze_net = checkpoint  # If checkpoint is a full model object

#     dehaze_net.eval()
#     print("✅ Model loaded successfully!")
# except Exception as e:
#     print(f"❌ Error loading model: {e}")

# # ✅ Image Preprocessing
# transform = transforms.Compose([
#     transforms.Resize((256, 256)),  
#     transforms.ToTensor(),
# ])

# @app.route("/dehaze", methods=["POST"])
# def dehaze_image():
#     if "file" not in request.files:
#         return jsonify({"error": "No file uploaded"}), 400

#     file = request.files["file"]
#     image = Image.open(file).convert("RGB")
#     input_tensor = transform(image).unsqueeze(0)  

#     with torch.no_grad():
#         output_tensor = dehaze_net(input_tensor)

#     output_image = transforms.ToPILImage()(output_tensor.squeeze(0))

#     # ✅ Ensure static folder exists
#     static_folder = "static"
#     os.makedirs(static_folder, exist_ok=True)

#     # ✅ Generate a unique filename and save the image
#     output_filename = f"{uuid.uuid4().hex}.jpg"
#     output_path = os.path.join(static_folder, output_filename)
#     output_image.save(output_path)

#     # return jsonify({"imageUrl": f"http://127.0.0.1:5000/static/{output_filename}"})
#     return jsonify({
#         "imageUrl": f"{request.host_url}static/{output_filename}"
#     })

# if __name__ == "__main__":
#     app.run(debug=True, host="0.0.0.0", port=5000)


import torch
import torch.nn as nn
import os
import io
import base64
import uuid
import requests
from flask import Flask, request, jsonify
from PIL import Image
from torchvision import transforms
from model import AODNet  # Import your model
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

# ✅ Ensure model directory exists
MODEL_DIR = "saved_models"
MODEL_PATH = os.path.join(MODEL_DIR, "dehaze_net_epoch_17.pth")
MODEL_URL = "https://your-external-storage.com/dehaze_net_epoch_17.pth"

if not os.path.exists(MODEL_PATH):
    print("Downloading model...")
    os.makedirs(MODEL_DIR, exist_ok=True)
    try:
        response = requests.get(MODEL_URL, stream=True)
        response.raise_for_status()
        with open(MODEL_PATH, "wb") as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)
        print("✅ Model downloaded successfully!")
    except requests.exceptions.RequestException as e:
        print(f"❌ Error downloading model: {e}")

# ✅ Load Model Safely
try:
    torch.serialization.add_safe_globals([nn.ReLU, AODNet])
    
    checkpoint = torch.load(MODEL_PATH, map_location=torch.device('cpu'), weights_only=False)
    
    dehaze_net = AODNet()
    if isinstance(checkpoint, dict) and "state_dict" in checkpoint:
        dehaze_net.load_state_dict(checkpoint["state_dict"])
    elif isinstance(checkpoint, dict):
        dehaze_net.load_state_dict(checkpoint)
    else:
        dehaze_net = checkpoint  # If checkpoint is a full model object

    dehaze_net.eval()
    print("✅ Model loaded successfully!")
except Exception as e:
    print(f"❌ Error loading model: {e}")

# ✅ Image Preprocessing
transform = transforms.Compose([transforms.Resize((256, 256)), transforms.ToTensor()])

@app.route("/dehaze", methods=["POST"])
def dehaze_image():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    image = Image.open(file).convert("RGB")
    input_tensor = transform(image).unsqueeze(0)  

    with torch.no_grad():
        output_tensor = dehaze_net(input_tensor)

    output_image = transforms.ToPILImage()(output_tensor.squeeze(0))

    # ✅ Ensure static folder exists
    static_folder = "static"
    os.makedirs(static_folder, exist_ok=True)

    # ✅ Generate a unique filename and save the image
    output_filename = f"{uuid.uuid4().hex}.jpg"
    output_path = os.path.join(static_folder, output_filename)
    output_image.save(output_path)

    return jsonify({
        "imageUrl": f"{request.host_url}static/{output_filename}"
    })

@app.route("/health")
def health_check():
    return jsonify(status="ok"), 200

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
