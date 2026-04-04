import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Hospital App</h1>

      <div className="space-x-4">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">Login</button>
        <button className="hover:underline">Register</button>
      </div>

      <img src="../assets/hospitallogo2.png" alt="" className="siteLogo" />
    </nav>
  )
}

export default Navbar