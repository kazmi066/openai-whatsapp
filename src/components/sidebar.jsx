import React from 'react';
import {ReactComponent as MessageIcon } from '../assets/messageIcon.svg';
import {ReactComponent as ThreeDots } from '../assets/threeDots.svg';
import {ReactComponent as UserGroup } from '../assets/userGroup.svg';
import {ReactComponent as StatusCircle } from '../assets/statusCircle.svg';

export const Sidebar = () => {
  return (
    <main className='bg-primary min-w-[450px] min-h-screen overflow-hidden text-white border-r-[.4px] border-gray-600'>
      <nav className="bg-secondary py-3 px-4">
        <div className='flex items-center justify-between'>
          <div className='w-10 h-10 overflow-hidden rounded-full'>
            <img
              className='object-cover'
              src="https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg"
              alt="robot" />
          </div>
          <div className='flex items-center gap-6 text-[#aebac1]'>
            <UserGroup />
            <MessageIcon />
            <StatusCircle />
            <ThreeDots />
          </div>
        </div>
      </nav>
      <div className="w-full bg-[#2a3942] py-[13px] px-4">
        <div className='flex items-center w-full gap-4'>
          <div div className='w-[53px] h-[53px] overflow-hidden rounded-full'>
            <img
              className='object-cover'
              src="https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg"
              alt="robot" />
          </div>
          <div className='flex-1'>
            <div className='flex items-start justify-between'>
              <div>
                <h5 className='font-semibold text-[15px]'>Robot Alive</h5>
                <p className="font-normal text-gray-400 text-[14px]">Some old message here....</p>
              </div>
              <p className='text-[12px] font-normal opacity-50'>7:37 AM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[13px] px-4">
        <div className='flex items-center w-full gap-4'>
          <div div className='w-[53px] h-[53px] overflow-hidden rounded-full'>
            <img
              className='object-cover'
              src="https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg"
              alt="robot" />
          </div>
          <div className='flex-1'>
            <div className='flex items-start justify-between'>
              <div>
                <h5 className='font-semibold text-[15px]'>Dead Man</h5>
                <p className="font-normal text-gray-400 text-[14px]">Nothing to see here....</p>
              </div>
              <p className='text-[12px] font-normal opacity-50'>7:37 AM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[13px] px-4">
        <div className='flex items-center w-full gap-4'>
          <div div className='w-[53px] h-[53px] overflow-hidden rounded-full'>
            <img
              className='object-cover'
              src="https://static.vecteezy.com/system/resources/previews/000/199/370/original/vector-robot-cheerful-isolated-on-blue-background-concept-illustration.jpg"
              alt="robot" />
          </div>
          <div className='flex-1'>
            <div className='flex items-start justify-between'>
              <div>
                <h5 className='font-semibold text-[15px]'>Dead Man</h5>
                <p className="font-normal text-gray-400 text-[14px]">Nothing to see here....</p>
              </div>
              <p className='text-[12px] font-normal opacity-50'>7:37 AM</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
