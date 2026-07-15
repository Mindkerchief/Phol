document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.getElementById('upload');
    const confidenceSlider = document.getElementById('confidence');
    const confValue = document.getElementById('conf-value');
    const outputImage = document.getElementById('output-image');
    const dropArea = document.getElementById("display-container");
    const fileInput = document.getElementById("file-input");
    const bboxContainer = document.getElementById("bbox-container");
    const predCount = document.getElementById("prediction-count");
    let detections = [];
    
    function displayResults() {
        // Update confidence value
        confValue.textContent = confidenceSlider.value;
        // Clear previous bounding boxes
        bboxContainer.innerHTML = "";
        // Display number of detections
        if (outputImage.src)
            predCount.textContent = `${detections.length} Detected`;

        // Filter bounding boxes based on confidence
        let confThreshold = parseFloat(confidenceSlider.value);
        detections.forEach(d => {
            if (d.confidence >= confThreshold) {
                let box = document.createElement("div");
                box.className = "bounding-box";
                box.style.left = d.bbox[0] + "px";
                box.style.top = d.bbox[1] + "px";
                box.style.width = (d.bbox[2] - d.bbox[0]) + "px";
                box.style.height = (d.bbox[3] - d.bbox[1]) + "px";
                box.innerText = `${Math.round(d.confidence * 100)}%`;
                bboxContainer.appendChild(box);
            }
        });
    }

    // Drag Over Effect
    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.style.backgroundColor = "#A0ACB1";
    });

    // Drag Leave Effect
    dropArea.addEventListener("dragleave", () => {
        dropArea.style.backgroundColor = "#C6CDD0";
    });

    // Drag & Drop File Event
    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dropArea.style.backgroundColor = "#C6CDD0";

        let file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    });

    // Handle File Selection
    fileInput.addEventListener("change", function () {
        if (this.files[0]) {
            handleFile(this.files[0]);
        }
    });

    function handleFile(file) {
        // Reset outputs
        predCount.textContent = null;
        bboxContainer.innerHTML = "";

        let formData = new FormData();
        formData.append("image", file);

        let reader = new FileReader();
        reader.onload = function (e) {
            // Display uploaded image
            outputImage.src = e.target.result;
        };
        reader.readAsDataURL(file);

        fetch("/predict", { method: "POST", body: formData })
            .then(response => response.json())
            .then(data => {
                // Store all bounding boxes
                detections = data.detections;
                displayResults();
            });
    }

    // Filter bounding box based on confidence
    confidenceSlider.addEventListener("input", displayResults);

    // Trigger file upload
    uploadButton.addEventListener("click", () => fileInput.click());
});
