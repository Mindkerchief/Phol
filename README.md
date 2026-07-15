# <img src="https://github.com/Mindkerchief/Phol/blob/03dc817f1705ca7f11f55e2a948bdaa08c18220c/app/static/images/icon.png" width="28" alt="Logo Thumbnail"> Phol ![phol badge][phol-badge]
A simple Windows application that can be used to test object detection model like YOLO. User can upload an image to test the model's capability by showing the bounding boxes with confidence. Bounding boxes can be filtered based on their confidence level using a slider.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features
# <img src="https://github.com/Mindkerchief/Phol/blob/03dc817f1705ca7f11f55e2a948bdaa08c18220c/docs/detection.jpg" width="640" alt="detection screenshot">

- **Upload** - Upload or Drag & Drop an image for object detection testing.
- **Confidence Slider** - Adjust the visible bounding boxes based on confidence.

## Installation
1. Download and install the latest release of [Phol][release-page].

## License
This project is licensed under the <licence-name> License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- **[LSPU-SPCC BSCS-3IS2 A.Y 2024-2025][lspu-spcc-bscs-3is2-ay-2024-2025]**: For their pothole images contribution.
- **[flask_cors][flask-cors]**: For handling resource sharing between Python and JavaScript.
- **[waitress][waitress]**: For production-ready WSGI server.
- **[PyWebview][pywebview]**: For standalone web app wrapper.
- **[PyInstaller][pyinstaller]**: For building the app into executables.
- **[Inno Setup][inno-setup]**: For installer.
- **[opencv-python][opencv-python]**: For image processing.
- **[ultralytics][ultralytics]**: For providing different YOLO models.
- **[numpy][numpy]**: For handling different types of arrays.
- **[pandas][pandas]**: For data manipulation and analysis of Excel data.
- **[openpyxl][openpyxl]**: For reading Excel files.
- **[matplotlib][matplotlib]**: For generating different charts.

<!-- Reference -->
[phol-badge]: https://img.shields.io/badge/Windows-Object_Detection-323A3F

[main-interface]: https://github.com/user-attachments/assets/c32bd39d-8c32-45dc-a80f-cfeb7f7bc3b6

[release-page]: https://github.com/Mindkerchief/Phol/releases
[lspu-spcc-bscs-3is2-ay-2024-2025]: https://drive.google.com/drive/folders/1-M3mTLCz7qoXWtNzQ77ioJd7ToagRcac
[flask-cors]: https://flask-cors.readthedocs.io/en/latest/api.html
[waitress]: https://docs.pylonsproject.org/projects/waitress/en/stable/index.html
[pywebview]: https://pywebview.flowrl.com/guide/
[pyinstaller]: https://pyinstaller.org/en/stable/
[inno-setup]: https://jrsoftware.org/ishelp/

[opencv-python]: https://docs.opencv.org/4.13.0/index.html
[ultralytics]: https://docs.ultralytics.com/models/
[numpy]: https://numpy.org/doc/stable/index.html
[pandas]: https://pandas.pydata.org/docs/
[openpyxl]: https://openpyxl.readthedocs.io/en/stable/
[matplotlib]: https://matplotlib.org/stable/users/index
