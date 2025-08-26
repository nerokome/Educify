'use client'
import React, { useState } from 'react'
import { FiLogOut, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="w-64 bg-black text-white flex flex-col min-h-screen">
    
      <nav className="flex-1 space-y-6 px-4 mt-6">
        <a href="#" className="block py-2 hover:text-blue-400">Dashboard</a>
        <a href="#" className="block py-2 hover:text-blue-400">Classes</a>
        <a href="#" className="block py-2 hover:text-blue-400">My Listings</a>
        <a href="#" className="block py-2 hover:text-blue-400">Messages & Requests</a>
        <a href="#" className="block py-2 hover:text-blue-400">Workspace</a>
        <a href="#" className="block py-2 hover:text-blue-400">Financials</a>
        <a href="#" className="block py-2 hover:text-blue-400">My Account</a>
      </nav>

      
      <div className="p-4 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-sm">Available</span>
          <button
            onClick={() => setIsAvailable(!isAvailable)}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
              isAvailable ? 'bg-green-500' : 'bg-gray-500'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white transform transition ${
                isAvailable ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

      
        <button className="flex items-center gap-2 hover:text-blue-400 w-full">
          <FiSettings /> Settings
        </button>
        <button className="flex items-center gap-2 text-red-400 mt-2 w-full">
          <FiLogOut /> Log Out
        </button>
      </div>
    </div>
  )
}

export default Sidebar
