import React from 'react'
import recycleCaps from '../../assets/recycleCaps.jpg' // Update with the correct path to your image in the assets folder

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img 
          src={recycleCaps} 
          alt="Hero Background" 
          className="absolute inset-0 object-cover w-full h-full transform scale-110 transition-transform duration-500 ease-in-out" 
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative flex items-center justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Site</h1>
        </div>
      </div>
    </>
  )
}

export default Hero
