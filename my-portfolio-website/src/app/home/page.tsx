import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pic from '../../../public/pic.jpg'

const HomeMy = () => {
  return (
    <>
      {/* Navbar  */}
      <div className='  min-h-screen flex flex-col  bg-gradient-to-r from-yellow-400 to-black via-purple-950  shadow-lg shadow-glow p-4'>
        <div>
          <ul className='text-white flex gap-5 justify-end pr-3 p-2'>
          
            <li className='text  bg-black hover:bg-gradient-to-r hover:from-yellow hover:to-black hover:via-black-300 p-1 pr-2 pl-2 rounded-full text-xs text-center'><Link href='/home'>Home</Link></li>
            <li className='text  bg-black hover:bg-gradient-to-r hover:from-yellow hover:to-black hover:via-black-300 p-1 pr-2 pl-2 rounded-full text-xs text-center'><Link href='about'>About</Link></li>
            <li className='text  bg-black hover:bg-gradient-to-r hover:from-yellow hover:to-black hover:via-black-300 p-1 pr-2 pl-2 rounded-full text-xs text-center'><Link href='/project'>Project</Link></li>
            <li className='text  bg-black hover:bg-gradient-to-r hover:from-yellow hover:to-black hover:via-black-300 p-1 pr-2 pl-2 rounded-full text-xs text-center'><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div >
          <Image src={pic} alt='pix' width={500} height={500} className='w-40 h-40 mt-5 mr-3 border-4 border-dotted
           border-white m-2  rounded-full float-right'/>
          {/* <p  className='text-gray-400  text-sm '>Frontend Developer</p> */}
          <p className='text-gray-400 text-sm font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-gray-800  to-blue-100'>
  Frontend Developer
</p>

          <h1 className='text-3xl font-bold text-black mb-4 mt-1 font-sans-serif '>Hello i'm <br /><span>Huriya Syed</span></h1>
          <p  className= ' text-white max-w-xl pr-7 '>I'm a passionate developer building amazing web <br />experiences using modern technologies
            like Javascript, <br />Next.js, TypeScript, and Tailwind CSS.</p>
          <Button variant="default" className='mt-4 bg-black place-content-center rounded-full text-xs font-mono hover:text-black hover:bg-gradient-to-r to-gray-400  from-gray-400 via-yellow-300  '>My Work</Button>
        </div>
      </div>
    </>
  )
}

export default HomeMy

