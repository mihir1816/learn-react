import React from 'react'
import { assets } from '../assets/assets'

function Navbar() {
  return (
    <>
    
    <div className='flex flex-col gap-2 '>

        <div className='w-full flex justify-between items-center font-semibold mt-4 '>
            <div className='flex items-center gap-2'>
                <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
                <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer text-white bg-green-800'>Install App</p>
                <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>G</p>
            </div>
        </div>

        <div className='flex items-center gap-2 mt-2 '>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-gray-600 text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-gray-600 text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
        </div>
    </div>
    
    </>
  )
}

export default Navbar