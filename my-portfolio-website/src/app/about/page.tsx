'use client'
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaNodeJs } from 'react-icons/fa';  // Importing icons
import { SiTypescript } from 'react-icons/si';
import { FiWind } from 'react-icons/fi';
import Link from 'next/link'

const About = () => {
  // Resume download handler
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'resume.pdf'; 
    link.click();
  };

  return (
    <>
     {/* Navbar  */}
    
      <div className='min-h-screen flex flex-col items-center justify-center bg-white bg-gradient-to-r from-purple-950 to-black via-black'>
        <h1 className='text-4xl font-bold text-white mb-3 pt-4'>About Me</h1>
        <p className='text-lg text-gray-300 max-w-lg text-center'>
          I'm a web developer with a passion for creating beautiful and functional websites. 
          I specialize in frontend technologies like Next.js and Tailwind CSS, and 
          have a keen interest in UI/UX design.
        </p>

        {/* Resume Download Button */}
        <button
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:bg-gradient-to-l hover:from-pink-600 hover:to-purple-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={downloadResume}
        >
          Download Resume
        </button>

        {/* Skills Section */}
        <div className='w-full max-w-6xl mx-auto mt-16 p-8 bg-gradient-to-r from-black to-purple-950 rounded-lg'>
          <h1 className='text-4xl font-bold text-white mb-6 text-center'>Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-center">
            {/* HTML5 */}
            <div className="flex flex-col items-center">
              <div className="rounded-full p-3 border-4 border-white hover:border-orange-500 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50">
                <FaHtml5 size={40} className='text-orange-500 hover:scale-110 transition-transform duration-300 ease-in-out' />
              </div>
              <p className="text-white text-sm mt-2">HTML5</p>
            </div>

            {/* CSS3 */}
            <div className="flex flex-col items-center">
              <div className="rounded-full p-3 border-4 border-white hover:border-blue-500 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50">
                <FaCss3 size={40} className="text-blue-500 hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
              <p className="text-white text-sm mt-2">CSS3</p>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col items-center">
              <div className="rounded-full p-3 border-4 border-white hover:border-yellow-500 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-yellow-500/50">
                <FaJs size={40} className="text-yellow-500 hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
              <p className='text-white text-sm mt-2'>JavaScript</p>
            </div>

            {/* TypeScript */}
            <div className="flex flex-col items-center">
              <div className="rounded-full p-3 border-4 border-white hover:border-blue-600 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-600/50">
                <SiTypescript size={40} className="text-blue-600 hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
              <p className='text-white text-sm mt-2'>TypeScript</p>
            </div>

            {/* Node.js */}
            <div className="flex flex-col items-center">
              <div className="rounded-full p-3 border-4 border-white hover:border-green-500 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-green-500/50">
                <FaNodeJs size={40} className="text-green-500 hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
              <p className='text-white text-sm mt-2'>Node.js</p>
            </div>

            {/* Tailwind CSS */}
            <div className="flex flex-col items-center">
              <div className="rounded-full p-3 border-4 border-white hover:border-cyan-500 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/50">
                <FiWind size={40} className="text-cyan-500 hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
              <p className='text-white text-sm mt-2'>Tailwind CSS</p>
            </div>
            <ul>
  <li className="text-gray-400 text-sm justify-end">
    <Link href='/home'>Go Back</Link>
  </li>
</ul>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default About;
