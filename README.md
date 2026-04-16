# 🏥 DR Management System

A full-stack MERN web application for managing patient appointments,
doctor schedules, and hospital workflow for DR Hospital.

---

## 🌟 Features

- 👤 User Authentication (Patient / Doctor / Admin)
- 📅 Appointment Booking & Management
- 🩺 Doctor Schedule Management
- 📋 Patient Medical Records
- 💊 Prescription Management
- 💳 Payment Tracking
- 📧 Appointment Reminders
- 📊 Admin Dashboard

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS / Material UI
- Redux Toolkit (State Management)
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt.js

---

## 📁 Folder Structure
HEALTHCARE-REACTJS/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── appointmentController.js
│   │   ├── authController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Appointment.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── appointmentRoutes.js
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── BookingModal.jsx
│   │   │   │   ├── DoctorCard.jsx
│   │   │   │   ├── DoctorDashboard.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── PatientDashboard.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── data/
│   │   │   └── doctors.js
│   │   │
│   │   ├── lib/
│   │   │
│   │   ├── pages/
│   │   │   ├── DoctorDashboardPage.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MyAppointments.jsx
│   │   │   ├── PatientDashboardPage.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── routes/
│   │   │   ├── PrivateRoute.jsx
│   │   │   └── PublicRoutes.jsx
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── components.json
│   │
│   ├── index.html
│   ├── eslint.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── tsconfig.json
│   └── vite.config.js
│
└── .gitignore