# Octalogic (Vehicle Booking Form)

A modern React-based Form

## UI Screenshots

###  Page 1 - What is your name
![Page 1](./screenshot/page1.PNG)

### Page 2 - Number of wheels
![Page 2](./screenshot/page2.PNG)

### Page 3 - Type of vehicle
![Page 3](./screenshot/page3.PNG)

### Page 4 - Specific Model
![Page 4](./screenshot/page4.PNG)

###  Page 5 - Date range picker
![Page 5](./screenshot/page5.PNG)

## Tech Stack

- React
- Formik + Yup
- React-Bootstrap

##  Folder Structure

Octalogic/
├── public/
├── src/
│   ├── components
│   |   ├── BookingForm.js
        ├── steps
            ├── Step1UserInfo.js
│           ├── Step2SelectWheels.js
│           ├── Step3VehicleType.js
│           └── Step4Vehicle.js
            └── Step5BookingDates.js
│   ├── data
│   |   ├── EndPoints.js
    ├── validations
│   |   ├── bookingValidations.js
│   ├── App.js
│   ├── .index.js
    ├── style.css   
├── screenshot/
│   ├── page1.png
│   ├── page2.png
│   ├── page3.png
│   ├── page4.png
│   └── page5.png
├── .gitignore
├── package.json
├── README.md

## Getting Started

```bash
npm install
npm start

