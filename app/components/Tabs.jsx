'use client'
import React from 'react'

const Tabs = () => {
    const tabs = ["My Profile", "My Availability", "Recommendations", "Reviews", "Notification"];
  return (
    <div>
        <div className=" bg-white px-6">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <a
            key={tab}
            href="#"
            className={`py-4 text-sm font-medium ${
              tab === "Recommendations"
                ? "border-b-2 border-black text-black-"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </a>
        ))}
      </nav>
    </div>
      
    </div>
  )
}

export default Tabs
