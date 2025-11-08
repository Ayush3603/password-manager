// EDIT: Footer component imports - Add new libraries here if needed
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-slate-800 via-gray-800 to-slate-800 text-white w-full border-t border-gray-700 shadow-2xl'>
      {/* EDIT: Footer content wrapper - Change py-8 to adjust vertical padding */}
      <div className='flex flex-col justify-center items-center py-8 px-4 space-y-6'>
        
        {/* EDIT: Logo section - Change text-3xl to modify logo size */}
        <div className="logo font-bold text-3xl group cursor-pointer">
          {/* EDIT: Logo brackets - Change text-blue-400 to modify bracket colors */}
          <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 animate-pulse">&lt;</span>
          {/* EDIT: App name - Change "Pass" to modify app name */}
          <span className="group-hover:scale-110 transition-transform duration-300 inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pass</span>
          <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 animate-pulse">OP/&gt;</span>
        </div>

        {/* EDIT: Tagline section - Customize the description */}
        <div className='text-center space-y-2'>
          <p className='text-lg font-medium text-gray-300'>
            🔐 Your Ultimate Password Security Solution
          </p>
          <p className='text-sm text-gray-400'>
            Secure • Private • Open Source
          </p>
        </div>

        {/* EDIT: Creator section - Change creator name and styling */}
        <div className='flex justify-center items-center text-gray-300 hover:text-white transition-colors duration-300'>
          <span className='text-lg'>Created with</span>
          {/* EDIT: Heart icon - Change w-8 h-8 to modify heart size, or replace with different icon */}
          <img 
            className='w-8 h-8 mx-3 animate-pulse hover:scale-110 transition-transform duration-300' 
            src="icons/heart.png" 
            alt="heart icon" 
          />
          {/* EDIT: Creator name - Change "Shatrughan" to your name */}
          <span className='text-lg font-semibold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent'>
            Shatrughan
          </span>
        </div>

        {/* EDIT: Additional footer links - Add social media or other links */}
        <div className='flex space-x-6 text-sm text-gray-400'>
          <a href="#" className='hover:text-blue-400 transition-colors duration-300'>Privacy Policy</a>
          <span>•</span>
          <a href="#" className='hover:text-purple-400 transition-colors duration-300'>Terms of Service</a>
          <span>•</span>
          <a href="#" className='hover:text-pink-400 transition-colors duration-300'>Support</a>
        </div>

        {/* EDIT: Copyright section - Change year and copyright text */}
        <div className='text-xs text-gray-500 text-center'>
          <p>© 2024 PassOP. All rights reserved.</p>
          <p className='mt-1'>Built with ❤️ using React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
