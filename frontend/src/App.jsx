import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { Register } from './pages/Register.jsx'
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoutes from "./routes/PrivateRoute.jsx";
import PublicRoute from "./routes/PublicRoutes.jsx";
import { useState } from "react";
import PatientDashboardPage from "./pages/PatientDashboardPage";
import DoctorDashboardPage from "./pages/DoctorDashboardPage";
import MyAppointments from './pages/MyAppointments.jsx'

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/patient-dashboard" element={ <PrivateRoutes> <PatientDashboardPage /> </PrivateRoutes> } />
        <Route path="/doctor-dashboard" element={ <PrivateRoutes> <DoctorDashboardPage /> </PrivateRoutes> } />
        <Route path="/my-appointments" element={ <PrivateRoutes> <MyAppointments /> </PrivateRoutes> } />
      </Routes>
    </>
  )
}

export default App