'use client'
import React from 'react'
import Image from 'next/image'
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between space-x-10 border b-2 border-gray-300  bg-white p-4 shadow w-full">
        <div className='flex gap-10'>
            <p>
                educify
            </p>
           <div className="flex items-center border rounded-3xl w-[250px] px-2">
  <CiSearch size={25} className="text-gray-700 mr-2" />
  <input
    type="text"
    placeholder="Search for anything"
    className="flex-1 py-2 text-sm outline-none"
  />
</div>
        </div>
      
      <div className="flex items-center gap-4">
         <div className='bg-gray-200 p-2 rounded-full'>
            <GoQuestion  size={24} />
          </div>
        <button className="relative">
          <div className='bg-gray-200 p-2 rounded-full'>
            <IoMdNotificationsOutline size={24} />
          </div>    
          <span className="absolute -top-1 -right-1 inline-flex h-3 w-3 animate-pulse rounded-full bg-red-500"></span>
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
