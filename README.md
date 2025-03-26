# Phol ![app badge][app-badge]
A simple web application that can be used to test object detecttion model like YOLO. User can upload an image to test the model's bounding boxes confidence. Bounding boxes can be filtered based on their confidence level using a slider.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features
![main interface][main-interface]
- **Upload** - Upload or Drag & Drop an image for object detection testing.
- **Confidence Slider** - Adjust the visible bounding boxes based on confidence.

## Installation
1. Download and install the latest release of [Phol][release-page].
2. Make sure to include `pip` during Python installation.
3. Run the application and open [127.0.0.3:3000](http://127.0.0.3:3000) using browser to access the web application.

## License
This project is licensed under the <licence-name> License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- **[Visual Studio Code][visual-studio-code]**: For development environment.
- **[Advanced Installer][advanced-installer]**: For installer.
- **[LSPU-SPCC BSCS-3IS2 A.Y 2024-2025][lspu-spcc-bscs-3is2-ay-2024-2025]**: For their pothole images contribution.
- **[css.gg][css-gg]**: For upload icon.
- **[flask_cors][flask-cors]**: For handling resource sharing between Python and JavaScript.
- **[waitress][waitress]**: For production-ready WSGI server.
- **[opencv-python][opencv-python]**: For image processing.
- **[numpy][numpy]**: For handling different types of arrays.
- **[pandas][pandas]**: For data manipulation and analysis of Excel data.
- **[openpyxl][openpyxl]**: For reading and writing Excel files.
- **[matplotlib][matplotlib]**: For generating scatter-plot chart.
- **[ultralytics][ultralytics]**: For providing different YOLO models.

<!-- Reference -->
[app-badge]: https://img.shields.io/badge/WebApp-Object_Detection-323A3F

[main-interface]: https://github.com/user-attachments/assets/c32bd39d-8c32-45dc-a80f-cfeb7f7bc3b6

[release-page]: https://github.com/Mindkerchief/Phol/releases
[visual-studio-code]: https://code.visualstudio.com/docs
[advanced-installer]: https://www.advancedinstaller.com/user-guide/using.html
[lspu-spcc-bscs-3is2-ay-2024-2025]: https://drive.google.com/drive/folders/1-M3mTLCz7qoXWtNzQ77ioJd7ToagRcac
[css-gg]: https://css.gg/
[flask-cors]: https://flask-cors.readthedocs.io/en/latest/api.html
[waitress]: https://docs.pylonsproject.org/projects/waitress/en/stable/index.html
[opencv-python]: https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html
[numpy]: https://numpy.org/doc/stable/index.html
[pandas]: https://pandas.pydata.org/docs/
[openpyxl]: https://openpyxl.readthedocs.io/en/stable/
[matplotlib]: https://matplotlib.org/stable/users/index
[ultralytics]: https://docs.ultralytics.com/models/
