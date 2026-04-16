import React from 'react'
import doctors from '../data/doctors'
import DoctorCard from './DoctorCard'
import axios from 'axios'


const PatientDashboard = () => {

  const handleBookAppointment = async (e) => {
    e.preventDefault();

    try {

    } catch (error) {

    }
  }

  return (
    <> Patient Dashboard
      <div className='grid grid-cols-3 gap-6 w-max mx-auto my-10'>
        {doctors.map((docData) =>
          <DoctorCard key={docData.id} doctor={docData} handleBooking={handleBookAppointment} />
        )}

      </div>


    </>
  )
}

export default PatientDashboard