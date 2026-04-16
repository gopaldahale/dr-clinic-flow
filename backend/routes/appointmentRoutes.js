import express from "express";
import {
  createAppointment,
  getMyAppointments,
  getDoctorAppointments,
} from "../controllers/appointmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createAppointment);
router.get("/my", protect, getMyAppointments);
router.get("/doctor-appointment", protect, getDoctorAppointments);

export default router;