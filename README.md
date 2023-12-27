
# Thai ID OCR App Assignment

Develop an Optical Character Recognition (OCR) application tailored specifically for Thai ID cards, enabling seamless extraction of essential information for efficient data retrieval. The primary goal of this assignment is to create a user-friendly and robust mobile or web application that utilizes OCR technology to recognize and capture details from Thai national ID cards.

## Features
### OCR Processing:
The application integrates with the Google Vision API for OCR processing. This ensures precise text extraction from different Thai ID cards. Users can also explore other OCR solutions such as Tesseract OCR or Amazon Textract based on their preferences.

1. https://cloud.google.com/vision/docs/ocr#optical_character_recognition_ocr
2. https://github.com/tesseract-ocr/tesseract
3. https://aws.amazon.com/textract/

### Data Extraction and Structuring:
To interpret and structure OCR results, the application employs a custom logic for parsing the OCR results. Key information such as ID number, name, last name, date of birth, date of issue, and date of expiry is extracted and structured. Users can upload Thai ID card images in PNG, JPEG, or JPG format (limited to 2MB) via the user interface. The output JSON, reflecting successful and failed OCR operations, is displayed on the UI.

### User interface
####  1. Upload Image: 
Users can upload Thai ID card images in PNG, JPEG, or JPG format, with a maximum file size of 2MB.

#### 2. Display OCR Output:
The application shows the output JSON on the UI, providing a clear representation of the OCR results.

#### 3. History and Filtering:
Users can view a history of OCR results and filter records based on criteria such as date, status, or other relevant fields.

### DataBase and REST API Endpoints

Secure MongoDB database for storing extracted information with privacy and compliance measures.

#### REST API Endpoints

1. Create a New OCR Record
Develop an API endpoint to create a new record in the database. This record should reflect the success or failure status of an OCR process.
The data structure should include relevant details like the OCR result, timestamp, status (success/failure), and any error messages if applicable.

2. Update Existing OCR Data
3. Retrieve and Display OCR Data
4. Delete OCR Records

## API Endpoints

#### 1. Add OCR Record:

 POST - https://ocr-application-backend.onrender.com/api/v1/idCard/fetch

#### 2. Retrieve OCR Data:

GET - https://ocr-application-backend.onrender.com/api/v1/idCard/getAllDetails

#### 3. Update OCR Record:

PUT - https://ocr-application-backend.onrender.com/api/v1/idCard/update/:id

#### 4. Delete OCR Record:

DELETE - https://ocr-application-backend.onrender.com/api/v1/idCard/delete/:id


### JSON Output

The final output should be a well-structured JSON object containing all the extracted data.


# Demo of Website using Screenshots

## Landing Page 
![Screenshot (266)](https://github.com/AdityaSoni007/OCR-Application-Adi/assets/89586938/b1659798-93b2-4d28-9506-4c206af27b2a)

## Fetching Details
![Screenshot (267)](https://github.com/AdityaSoni007/OCR-Application-Adi/assets/89586938/e22d6536-e5d4-4af4-8736-b925c3aa79e8)

## API Response
![Screenshot (268)](https://github.com/AdityaSoni007/OCR-Application-Adi/assets/89586938/cc9771f0-74d5-4e18-93fb-018bd37b866b)

## All Card details (with Update and delete options)
![Screenshot (269)](https://github.com/AdityaSoni007/OCR-Application-Adi/assets/89586938/3612992d-c6d6-451e-84c7-b5f75b8a14e7)

## Update Details 
![Screenshot (270)](https://github.com/AdityaSoni007/OCR-Application-Adi/assets/89586938/57d5861f-5c31-4d3c-9780-924be8399820)

## Filtering Option ( on the basis of Identification number,name,last name and DOB)
![Screenshot (271)](https://github.com/AdityaSoni007/OCR-Application-Adi/assets/89586938/c127e735-4eb3-4afd-8e6a-9eb2ca1e9ac4)

# Deployment

### Frontend Deployment with Netlify 
The frontend of the Thai ID Scanner & Data Keeper application is seamlessly deployed using Netlify. By connecting your GitHub repository to Netlify, every push triggers an automatic deployment, making the latest changes instantly accessible through a Netlify domain.

#### LIVE LINK : https://ocr-app-v1.netlify.app

### Backend Deployment with Render
The backend of the Thai ID Scanner & Data Keeper application is efficiently deployed using Render. Set up environment variables, clone the repository, and let Render handle the rest. The backend updates automatically with every push to the connected GitHub repository.

#### LIVE LINK : https://ocr-application-backend.onrender.com

