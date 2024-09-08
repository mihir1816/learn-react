import React from 'react'
import Navbar from './Navbar'
import Album from './Album'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

function Display() {
  return (

    <>
    <div className='w-[75%] h-[100%] overflow-auto' >
        <Navbar />

        <div className=' flex flex-col overflow-auto '>

            <div className='mb-4 '>
                <h1 className='my-5 font-bold text-2xl text-white'>Featured Charts</h1>
                <div className=' flex overflow-auto'>
                    {albumsData.map((item, index) => (
                    <Album key={index} image={item.image} name={item.name} desc={item.desc}  />
                    ))}
                </div>
            </div>

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl text-white'>Today's Top Hits..</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (
                    <SongItem key={index} image={item.image} name={item.name} desc={item.desc}  />
                    ))}
                </div>
            </div>

        </div>

        





    </div>
      
    </>

  )
}

export default Display