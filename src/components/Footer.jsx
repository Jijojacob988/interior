import React from 'react'
import { FaInstagram, FaWhatsapp, FaEnvelope, FaFacebook } from "react-icons/fa";
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-extrabold tracking-wide text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-center md:text-left">
      ⚡Interioverse
</h1>
            <p className='text-gray-400 mt-4'>Interioverse is the ultimate destination for elegant and functional interior designs. With a keen eye for detail and creativity, they craft stunning spaces tailored to your style.</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About us</a>
                <a href="#Contact" className='hover:text-white'>Contact us</a>
                <a href="#" className='hover:text-white'>Privacy policy</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>Stay Connected With Us !</h3>
        
            <div className='flex gap-4'>
    <a 
        href="https://www.instagram.com/aravind__raman?igsh=ZWR5aTRsMGNycXYy" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='text-gray-400 hover:text-pink-500 text-2xl'
    >
        <FaInstagram />
    </a>
    <a 
        href="https://wa.me/917012864809" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='text-gray-400 hover:text-green-500 text-2xl'
    >
        <FaWhatsapp />
    </a>
    <a 
        href="mailto:designeraravind95@gmail.com" 
        className='text-gray-400 hover:text-red-500 text-2xl'
    >
        <FaEnvelope />
    </a>
    <a 
        href="https://www.facebook.com/share/15xGCzhZEj/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className='text-gray-400 hover:text-blue-500 text-2xl'
    >
        <FaFacebook />
    </a>
</div>

        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10  text-center text-gray-500'>
      <p className="text-center text-gray-500 text-sm">
    Copyright 2025 ©  
    <a 
        href="https://jijojacob.vercel.app" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline"
    >
        Jijo Jacob
    </a>. All Rights Reserved.
</p>

      </div>
    </div>
  )
}

export default Footer
