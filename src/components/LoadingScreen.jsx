import React, { useEffect, useRef } from 'react'
import LoadingNavbar from './LoadingNavbar'
import gsap from 'gsap'

const LoadingScreen = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      headingRef.forEach((heading, index) => {
              gsap.set(heading, {
        color: "red",
        y: 300
      })
      })
    })

    return () => ctx.revert()
  },[])

  return (
    <div className='w-full h-screen flex flex-col justify-between bg-[#265B80] px-8 sm:px-12 md:px-20 lg:px-28 py-6 sm:py-8 md:py-10 lg:py-12'>
        <LoadingNavbar />
        <div className='headings-div'>
          <h2 ref={headingRef} className='text-9xl font-semibold text-white'>Living</h2>
          <h2 ref={headingRef} className='text-9xl font-semibold text-white'>Space</h2>
          <h2 ref={headingRef} className='text-9xl font-semibold text-white'>Future</h2>
          <h2 ref={headingRef} className='text-9xl font-semibold text-white'>Impronta</h2>
        </div>
    </div>
  )
}

export default LoadingScreen