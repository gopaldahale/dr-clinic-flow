import { useEffect, useState } from "react";
import axios from 'axios'

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchMyAppointments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/appointments/my', { withCredentials: true })
      setAppointments(res.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchMyAppointments();
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        My Appointments 📅
      </h1>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">
          No appointments booked
        </p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div key={appt._id} className="border rounded p-4">
              <p><strong>Doctor:</strong> {appt.doctor?.username}</p>
              <p><strong>Department:</strong> {appt.department}</p>
              <p><strong>Date:</strong> {new Date(appt.date).toDateString()}</p>
              <p><strong>Time:</strong> {appt.startTime} - {appt.endTime}</p>
              <p><strong>Reason:</strong> {appt.reason}</p>
              <p><strong>Status:</strong> {appt.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;