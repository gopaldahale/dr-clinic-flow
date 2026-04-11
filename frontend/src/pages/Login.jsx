import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserIn }) => {
  // style
  const loginFormClass = "bg-white p-6 rounded shadow-md w-80";
  const h2Class = "text-2xl font-bold mb-4 text-center";
  const inputClass = "w-full mb-3 p-2 border rounded";
  const submitBtnClass = "w-full text-white p-2 rounded";

  const navigate = useNavigate();

  const [emailInput, setEmailInputt] = useState('')
  const [passInput, setPassword] = useState('')

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!emailInput.trim() || !passInput.trim()) {
      alert("Please fill all fields");
      return;
    }

    const getStoredUserFromlocal = JSON.parse(localStorage.getItem("users")) || [];

    const loggedInUser = getStoredUserFromlocal.find(
      (users) => users.email === emailInput && users.password === passInput
    )

    if (loggedInUser) {
      // localStorage.setItem("isUserLoggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      // navigate("/dashboard");
      if (loggedInUser.role === "patient") {
        navigate("/patient-dashboard");
      } else {
        navigate("/doctor-dashboard");
      }
      setTimeout(() => {
        alert('User logged in!')
      }, 700)

    } else { alert("Invalid email or password ❌"); return; }

  }
  return (
    <div className="flex justify-center items-center mt-20">
      <form className={loginFormClass} onSubmit={handleLoginSubmit} >
        <h2 className={h2Class}>Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          className={inputClass}
          value={emailInput}
          onChange={(e) => { setEmailInputt(e.target.value) }}
        />

        <input
          type="text"
          placeholder="Enter password"
          className={inputClass}
          value={passInput}
          onChange={(p) => setPassword(p.target.value)}
        />

        <button
          type="submit"
          className={`${submitBtnClass} bg-emerald-500`}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login