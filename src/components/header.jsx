import React from 'react'
import {ReactComponent as ThreeDots } from '../assets/threeDots.svg';

export const Header = () => {
  return (
    <nav className="bg-secondary w-full py-3 px-4 text-white">
      <div className='flex items-center justify-between'>
        <div className='flex gap-4 items-center'>
          <div className='w-10 h-10 overflow-hidden rounded-full'>
            <img
              className='object-cover'
              src="https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg"
              alt="robot" />
          </div>
          <h5 className='font-semibold text-[15px]'>ChatGPT</h5>
        </div>
        <div className='flex items-center gap-6 text-[#aebac1]'>
          <ThreeDots />
        </div>
      </div>
    </nav>
  )
}
