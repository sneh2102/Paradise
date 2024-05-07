
# Paradise - Trekking Travel Booking Site

Welcome to **Paradise**, a travel booking site designed for trekking enthusiasts. This project features three distinct panels for Admin, Manager, and User roles, allowing for efficient management and booking of trekking plans. Admin and Manager have access to plan management, while Users can book trekking plans.

## Sneak Peek

Here's a preview of what the Paradise travel booking site looks like:

### Application Interface
<div align="center">
    <img src="./Screenshots/Landing_Page.gif" alt="Application Overview">
</div>

### Plans
<div align="center" style=" margin: 40px;">
    <img src="./Screenshots/Plans2.png" alt="Plans" title="Plans Page" style="width: 700px;" />
    <img src="./Screenshots/Plans.png" alt="Plan detail" title="Plan detail Page" style="width: 700px;" />
</div>


### Admin Panel
<div align="center" style=" margin: 40px;">
    <img src="./Screenshots/Admin_Panel.png" alt="Admin Panel Overview" title="Admin Panel Overview" style="width: 700px;" />
    <img src="./Screenshots/Admin_Panel_2.png" alt="Admin Panel Overview" title="Admin Panel Overview" style="width: 700px;" />
</div>



## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation & Setup](#installation--setup)

## Project Overview
Paradise is a MERN stack-based travel booking platform designed for trekking. It allows administrators to create, activate/deactivate, manage plans, set prices, manage dates, and create discount coupons. Managers can manage plans but cannot create new ones. Users can browse and book available plans for trekking.



## Features
- **Admin Panel**:
  - Create new trekking plans.
  - Activate/Deactivate plans.
  - Update plan details (price, dates, etc.).
  - Manage discount coupons.

- **Manager Panel**:
  - Manage existing trekking plans.
  - Cannot create new plans but can perform other administrative tasks.

- **User Panel**:
  - Browse and book trekking plans.
  - Apply discount coupons.

## Dependencies
### Backend

 [![Colors](https://img.shields.io/badge/colors-1.4.0-brightgreen)](https://www.npmjs.com/package/colors)
[![Cors](https://img.shields.io/badge/cors-2.8.5-blue)](https://www.npmjs.com/package/cors)
[![Dotenv](https://img.shields.io/badge/dotenv-10.0.0-yellowgreen)](https://www.npmjs.com/package/dotenv)
[![Express](https://img.shields.io/badge/express-4.17.1-lightgrey)](https://expressjs.com/)
[![Firebase Admin](https://img.shields.io/badge/firebase--admin-10.0.1-orange)](https://www.npmjs.com/package/firebase-admin)
[![MongoDB](https://img.shields.io/badge/mongodb-4.1.4-green)](https://www.npmjs.com/package/mongodb)
[![Validator](https://img.shields.io/badge/validator-13.7.0-yellow)](https://www.npmjs.com/package/validator)


### Frontend
[![Axios](https://img.shields.io/badge/axios-0.24.0-blue)](https://www.npmjs.com/package/axios)
[![Bootstrap](https://img.shields.io/badge/bootstrap-5.1.3-purple)](https://getbootstrap.com/)
[![Firebase](https://img.shields.io/badge/firebase-9.4.1-yellow)](https://www.npmjs.com/package/firebase)
[![History](https://img.shields.io/badge/history-5.1.0-orange)](https://www.npmjs.com/package/history)
[![jQuery](https://img.shields.io/badge/jquery-3.6.4-lightgrey)](https://jquery.com/)
[![React](https://img.shields.io/badge/react-17.0.2-61DAFB)](https://react.dev/)
[![React Bootstrap](https://img.shields.io/badge/react--bootstrap-2.0.2-purple)](https://www.npmjs.com/package/react-bootstrap)
[![React DOM](https://img.shields.io/badge/react--dom-17.0.2-61DAFB)](https://www.npmjs.com/package/react-dom)
[![React Hook Form](https://img.shields.io/badge/react--hook--form-7.20.2-brightgreen)](https://www.npmjs.com/package/react-hook-form)
[![React Router DOM](https://img.shields.io/badge/react--router--dom-5.3.4-orange)](https://www.npmjs.com/package/react-router-dom)
[![React Scripts](https://img.shields.io/badge/react--scripts-5.0.1-61DAFB)](https://www.npmjs.com/package/react-scripts)






## Installation and Development

Paradise requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start.

### _Frontend_

```sh
# client
cd Paradise/Frontend/
npm install
npm start
```

### _Backend_

```sh
# server
cd Paradise/Server/
npm install
```
### Environment variables

Before starting, the servers must set up some environment variables on both the `Paradise/Frontend` and `Paradise/Server`.

#### _Frontend_

Enter all variables in the `Frontend/.env.local` file.

| Variables | Description |
| ------ | ------ |
| REACT_APP_FIREBASE_APIKEY | Firebase api key |
| REACT_APP_FIREBASE_AUTHDOMAIN | Firebase auth domain |
| REACT_APP_FIREBASE_PROJECTID | Firebase project ID |
| REACT_APP_FIREBASE_STORAGEBUCKET | Firebase storage bucket |
| REACT_APP_FIREBASE_MESSAGINGSENDERID | Firebase messaging sender ID |
| REACT_APP_FIREBASE_APPID | Firebase APP ID |
| REACT_APP_SERVER_BACKEND_API_URL | Server side URL of birdseye |


#### _Backend_

Enter all variables in the `Server/.env` file.

| Variables | Description |
| ------ | ------ |
| PORT | Port number for local |
| LOCAL_URI | MongoDB uri for local |
| DEV_URI | MongoDB uri for development |
| PRODUCTION_URI | MongoDB uri for production |
| FIREBASE_SERVICE_ACCOUNT_INFO | Firebase service account information |

    