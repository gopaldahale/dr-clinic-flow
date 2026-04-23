import React, { useEffect, useState } from 'react'
// import doctors from '../data/doctors'
import DoctorCard from './DoctorCard'
import axios from 'axios'
import { useDoctor } from '../context/AuthContext'


const PatientDashboard = () => {

  const { doctors, fetchDoctor } = useDoctor();
  const [myAppointments, setMyAppointments] = useState([]);

  useEffect(() => { fetchDoctor(); console.log(doctors) }, [])

  const fetchMyAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/appointments/my",
        { withCredentials: true }
      );
      setMyAppointments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMyAppointments();
  }, []);


  return (
    <> Patient Dashboard
      <div className='grid grid-cols-3 gap-6 w-max mx-auto my-10'>
        {doctors.map((doctor) =>
          <DoctorCard key={doctor._id} doctors={doctor} appointments={myAppointments} setMyAppointments={setMyAppointments} fetchMyAppointments={fetchMyAppointments}/>
        )}

      </div>


    </>
  )
}

export default PatientDashboard