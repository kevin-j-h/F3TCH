import React from 'react'
import GetAll from '../components/GetAll/GetAll';
import Upload from '../components/Upload/Upload';

const Mainpage = () => {
  return (
    <div className='grid grid-cols-2 h-full '>
        <div className='col-span-1  scroll-hidden'>
            <Upload/>
            </div>
        <div className='col-span-1 scroll'>
            <h1>My Files</h1>
            <GetAll/>
            </div>
    </div>
  )
}

export default Mainpage