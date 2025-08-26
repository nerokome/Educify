"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [isStudent, setIsStudent] = useState(false);
  const tabs = ["My Profile", "My Availability", "Recommendations", "Reviews", "Notification"];

  const handleToggle = () => setIsStudent(!isStudent);

  return (
    <div className="bg-white px-6 flex items-center justify-between">
      

      {/* Tabs */}
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <a
            key={tab}
            href="#"
            className={`py-4 text-md font-medium ${
              tab === "Recommendations"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </a>
        ))}
      </nav>
            <div className="flex items-center gap-2">
        <span className="text-gray-700 font-medium">Become a student</span>
        <button
          onClick={handleToggle}
          className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${
            isStudent ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              isStudent ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        
      </div>
    </div>
  );
};

export default Tabs;
