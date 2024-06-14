# student-fullstack-portal
A fullstack-portal using CRUD Operations to handle student registration form

# Student Portal Form

## Overview

This project is a web-based student portal form that allows students to log in to their individual accounts. The frontend of the application is built using React+Vite, while the backend is built with Node.js/Express.js. The portal provides a seamless user experience for students to access their accounts securely and manage their personal information.

## Features

- User authentication: Students can register and log in to their accounts.
- Secure password management: Passwords are hashed and securely stored.
- Responsive design: The portal is accessible on various devices, including desktops, tablets, and mobile phones.
- User-friendly interface: Intuitive and easy-to-navigate frontend design.
- API integration: Efficient communication between frontend and backend.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: For managing navigation and routing in the application.
- **CSS Modules/Tailwind**: For styling components with modular and scoped CSS.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing user data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **jsonwebtoken**: For creating and verifying JSON Web Tokens (JWT) for user authentication.
- **bcrypt**: For hashing passwords before storing them in the database.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB server running locally or on a cloud service.

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/student-portal-form.git
   cd student-portal-form
   ```

2. **Install frontend dependencies:**
   ```sh
   cd frontend
   npm install
   ```

3. **Install backend dependencies:**
   ```sh
   cd ../backend
   npm install
   ```

4. **Start the backend server:**
   ```sh
   npm start
   npm run dev
   ```

6. **Start the frontend development server:**
   ```sh
   cd ../frontend
   npm start
   npm run dev
   ```

7. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
student-portal-form/
│
├── backend/               # Backend source code
│   ├── models/            # Database models (Mongoose schemas)
│   ├── routes/            # API routes
│   ├── controllers/       # Route controllers (business logic)
│   ├── middleware/        # Express middleware functions
│   ├── config/            # Configuration files
│   ├── .env               # Environment variables
│   └── server.js          # Entry point for the backend server
│
├── frontend/              # Frontend source code
│   ├── src/               # React application source
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # React pages (views)
│   │   ├── services/      # API service functions
│   │   ├── App.js         # Main app component
│   │   ├── index.js       # Entry point for the React application
│   │   └── styles/        # CSS and style files
│   ├── public/            # Public assets and index.html
│   └── package.json       # Frontend dependencies and scripts
│
├── README.md              # Project README file
└── .gitignore             # Git ignore file
```

## Usage
//API Endpoints
Login (access new user account)
GET /api/login

Signup (create new user account)
POST /api/signup

Forgot Password (update password)
PATCH /api/forgot_password


1. **Registration:** (User Signup)
   - Navigate to the registration page.
   - Fill out the registration form with your details.
   - Submit the form to create a new account.

2. **Login:** (User Login)
   - Navigate to the login page.
   - Enter your credentials (email and password).
   - Submit the form to log in to your account.

3. **Forgot Password:** (Reset Password)
   - Allow users to reset their password
   - This updates credentials in the database

4. **Account Management:** (User Account Management) --Later update
   - Once logged in, you can view and update your personal information.
   - Securely log out from your account when done.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

---

