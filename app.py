import cv2
import numpy as np
from flask import Flask, jsonify, request, send_from_directory
from ultralytics import YOLO

app = Flask(__name__)
model = YOLO("model/yolov11m-v2.pt")
confidence = 0.1

def calculate_scale(original_width, original_height, container_width, container_height):
    original_aspect_ratio = original_width / original_height
    container_aspect_ratio = container_width / container_height

    # Image is wider than the container
    if original_aspect_ratio > container_aspect_ratio:
        scale = original_width / container_width
        y_offset = (original_height - container_height * scale) / 2
        x_offset = 0
    # Image is taller than the container
    else:
        scale = original_height / container_height
        x_offset = (original_width - container_width * scale) / 2
        y_offset = 0

    return scale, x_offset, y_offset

@app.route("/")
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files.get("image")
    detections = []

    if file:
        file_stream = file.stream
        file_bytes = np.frombuffer(file_stream.read(), np.uint8)
        img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    else:
        raise ValueError("No image file provided.")

    # Get original dimensions
    original_height, original_width = img.shape[:2]
    container_width, container_height = 800, 500 # Dimension based on front-end image output

    scale, x_offset, y_offset = calculate_scale(original_width, original_height, 
                                                container_width, container_height)

    results = model.predict(img, conf=confidence)[0]
    
    for box in results.boxes.data.tolist():
        x1, y1, x2, y2, conf, cls = box

        # Adjust bounding box coordinates
        adjusted_x1 = (x1 - x_offset) / scale
        adjusted_y1 = (y1 - y_offset) / scale
        adjusted_x2 = (x2 - x_offset) / scale
        adjusted_y2 = (y2 - y_offset) / scale

        detections.append({
            "bbox": [adjusted_x1, adjusted_y1, adjusted_x2, adjusted_y2],
            "confidence": conf,
            "class": int(cls),
            "label": results.names[int(cls)]
        })

    return jsonify({"detections": detections})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000, debug=True)
