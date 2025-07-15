import React from 'react'
import LoadingNavbar from './LoadingNavbar'

const LoadingScreen = () => {
  return (
    <div className='w-full h-screen bg-[#265B80] px-8 sm:px-12 md:px-20 lg:px-28 py-6 sm:py-8 md:py-10 lg:py-12'>
        <LoadingNavbar />
    </div>
  )
}

export default LoadingScreen