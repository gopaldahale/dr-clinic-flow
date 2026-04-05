import React from 'react'
import PatientDashboard from '../components/PatientDashboard'
import DoctorDashboard from '../components/DoctorDashboard'

const Dashboard = () => {

  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"))
  console.log(currentUser.role)

  return (
    <>
      hi,
      {currentUser.role === "patient" && (
        <PatientDashboard />
      )}

      {currentUser.role === "doctor" && (
        <DoctorDashboard />
      )}
    </>
  )
}

export default Dashboard