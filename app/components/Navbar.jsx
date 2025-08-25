'use client'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="flex items-center space-x-10  bg-white p-4 shadow w-full">
        <div>
            <p>
                educify
            </p>
        </div>
      <input
        type="text"
        placeholder="Search for anything"
        className="w-[300px] rounded-2xl border px-3 py-2 text-sm outline-none"
      />
      <div className="flex items-center gap-4">
        <button className="relative">
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
          🔔
        </button>
        <div className="flex items-center gap-2">
          <Image
            src="file.svg"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-medium">Bekwa Undia</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
