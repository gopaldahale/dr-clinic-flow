import { useState } from "react";

export const Register = () => {
  // style
  const FormClass = "bg-white p-6 rounded shadow-md w-80";
  const h2Class = "text-2xl font-bold mb-4 text-center";
  const inputClass = "w-full mb-3 p-2 border rounded";
  const submitBtnClass = "w-full bg-gradient-to-br from-[#1a6fa8] to-[#38b2ac] text-white p-2 rounded hover:bg-blue-700";

  const [userData, setUserData] = useState({ username: '', email: '', password: '' })
  const { username, email, password } = userData

  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !email.trim() || !password.trim()) {
      alert("Please fill data");
      return;
    }

    const registerData = { ...userData }
    // Local storage user 
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(
      (user) => user.email === userData.email
    );
    if (userExists) {
      alert("User already exists!");
      return;
    }
    existingUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    setTimeout(() => {
      alert("Registered successfully ✅");
    }, 600)
  }
  return (
    <div className="flex justify-center items-center mt-20">
      <form className={FormClass} onSubmit={handleRegisterSubmit} >
        <h2 className={h2Class}>Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Enter username"
          className={inputClass}
          value={username}
          onChange={handleUserChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          className={inputClass}
          value={email}
          onChange={handleUserChange}

        />

        <input
          type="text"
          name="password"
          placeholder="Enter password"
          className={inputClass}
          value={password}
          onChange={handleUserChange}

        />

        <button
          type="submit"
          className={submitBtnClass}
        >
          Register
        </button>
      </form>
    </div>
  )
}
