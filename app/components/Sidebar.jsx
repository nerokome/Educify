'use client'
import React from 'react'
import { FiLogOut, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className=' w-64 bg-black text-white flex flex-col'>
    
      <nav className="flex-1 space-y-6 px-4">
        <a href="#" className="block py-2 hover:text-blue-400">Dashboard</a>
        <a href="#" className="block py-2 hover:text-blue-400">Classes</a>
        <a href="#" className="block py-2 hover:text-blue-400">My Listings</a>
        <a href="#" className="block py-2 hover:text-blue-400">Messages & Requests</a>
        <a href="#" className="block py-2 hover:text-blue-400">Workspace</a>
        <a href="#" className="block py-2 hover:text-blue-400">Financials</a>
        <a href="#" className="block py-2 hover:text-blue-400">My Account</a>
      </nav>
      <div className=" p-4 space-y-6">
        <button className="flex items-center gap-2 hover:text-blue-400">
          <FiSettings /> Settings
        </button>
        <button className="flex items-center gap-2 text-red-400 mt-2">
          <FiLogOut /> Log Out
        </button>
      </div>
    
    </div>
  )
}

export default Sidebar
