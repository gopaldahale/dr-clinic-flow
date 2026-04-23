import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// 1. Load the plugin
dayjs.extend(customParseFormat);

const DoctorDashboard = () => {

  const { user } = useAuth()
  const [patientAppt, setPatientAppt] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPatientAppt = async () => {
    try {
      setLoading(true)
      const res = await axios.get('http://localhost:5000/api/appointments/doctor-appointment', { withCredentials: true })
      // console.log("API DATA:", res.data)
      setPatientAppt(res.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const updateSatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/appointments/${id}/status`, { status }, { withCredentials: true })
      fetchPatientAppt();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPatientAppt()
  }, [])

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Dr. <span className='text-red-400'>{(user.username).charAt(0).toUpperCase() + (user.username).slice(1).toLowerCase()}</span> Dashboard 👨‍⚕️
        </h1>

        {patientAppt.length === 0 ? (
          <p className="text-center text-gray-500">
            No appointments yet
          </p>
        ) : (
          <div className="space-y-4">
            {patientAppt.map((appt, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <h2 className="font-bold">
                  <span className='font-light'>Patient</span> <span className='capitalize'>{appt.patient.username}</span>
                </h2>
                <p>{appt.patient.email}</p>
                <p className="text-sm text-gray-500">{new Date(appt.date).toDateString()}</p>
                <p> {dayjs(appt.startTime, "HH:mm").format('h:mm A')} - {dayjs(appt.endTime, "HH:mm").format('h:mm A')} </p>

                <p className="mt-2 font-semibold">
                  Status: <span className={`${appt.status !== 'confirmed' ? 'text-red-600' : 'text-green-600'} capitalize`}>{appt.status}</span>
                </p>

                <div className="mt-3 space-x-2">
                  <button
                    onClick={() => updateSatus(appt._id, "confirmed")}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Confirm
                  </button>

                  <button
                    onClick={() => updateSatus(appt._id, "cancelled")}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>

            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default DoctorDashboard