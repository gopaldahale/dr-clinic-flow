import Appointment from "../models/Appointment.js";

// Create appointment (patient only)
export const createAppointment = async (req, res) => {
    try {
        const { doctorId, date, startTime, endTime, department, reason } = req.body;

        const appointment = await Appointment.create({
            patient: req.user.id,
            doctor: doctorId,
            date,
            startTime,
            endTime,
            department,
            reason,
        });

        res.status(201).json({
            message: "Appointment created",
            appointment,
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get patient appointments
export const getMyAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({
            patient: req.user.id,
        }).populate("doctor", "username email");

        res.json(appointments);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get doctor appointments
export const getDoctorAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({
            doctor: req.user.id,
        }).populate("patient", "username email");

        res.json(appointments);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};