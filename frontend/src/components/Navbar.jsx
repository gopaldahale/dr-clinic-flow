import React from 'react'
import logo from '../assets/hospitallogo2.PNG'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="relative bg-white border-b border-[#dce8f0] px-10 py-2 flex justify-between items-center shadow-[0_2px_16px_rgba(14,80,130,0.07)]">

            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1a6fa8] via-[#38b2ac] to-[#1a6fa8] bg-[length:200%_100%] animate-shimmer" />

            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[#1a6fa8] to-[#38b2ac] flex items-center justify-center shadow-[0_4px_12px_rgba(26,111,168,0.25)]">
                    <img src={logo} alt="" className="h-15 rounded" />
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="text-[1.05rem] text-[#0e3a5c] tracking-tight">
                        <span className='text-red-600 font-[600]'>Devi Ratna</span> Hospital
                    </span>
                    <span className="text-[0.62rem] text-[#7fa8c4] tracking-widest uppercase font-medium">
                        Care you can trust
                    </span>
                </div>
            </div>

            <div className="flex items-center ">
                <Link to="/" className="text-sm font-medium text-[#3a6080] px-4 py-2 rounded-lg hover:bg-[#edf5fb] hover:text-[#1a6fa8] transition-all cursor-pointer">
                    Home
                </Link>

                <div className="w-px h-5 bg-[#dce8f0] mr-5" />

                <Link to="/login" className="text-sm font-medium text-[#1a6fa8] px-4 py-2 mr-5 rounded-lg border border-[#c2ddf0] hover:border-[#1a6fa8] hover:bg-[#edf5fb] transition-all cursor-pointer">
                    Login
                </Link>

                <Link to={"/register"} className="text-sm font-medium text-white px-4 py-2 rounded-lg bg-gradient-to-br from-[#1a6fa8] to-[#2589c8] shadow-[0_3px_10px_rgba(26,111,168,0.3)] hover:shadow-[0_4px_14px_rgba(26,111,168,0.4)] cursor-pointer">
                    Register
                </Link>
            </div>
        </nav>
    )
}

export default Navbar