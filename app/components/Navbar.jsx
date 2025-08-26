'use client'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between space-x-10 border b-2 border-gray-300  bg-white p-4 shadow w-full">
        <div className='flex gap-10'>
            <p>
                educify
            </p>
            <input
        type="text"
        placeholder="Search for anything"
        className="w-[300px] rounded-2xl border px-3 py-2 text-sm outline-none"
      />
        </div>
      
      <div className="flex items-center gap-4">
        <button className="relative">
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          🔔
        </button>
        <div className="flex items-center gap-2 bg-gray-200 py-2 px-5 rounded-4xl">
          <div className='flex flex-col '>
           <span className="font-medium">Bekwa Undia</span>
           <span className="text-sm">Tutor</span>
          </div>
          
          <Image
            src="file.svg"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          
        </div>
      </div>
    </header>
  )
}

export default Navbar
