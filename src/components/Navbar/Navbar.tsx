import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className="bg-inherit absolute w-screen">
      <ul className='hidden md:flex float-right flex-wrap justify-evenly'>
        <li className="text-4xl p-2 m-2 text-slate-300 hover:bg-[#6177AD] rounded-md">Home</li>
        <li className="text-4xl p-2 m-2 text-slate-300 hover:bg-[#6177AD] rounded-md">Work</li>
        <li className="text-4xl p-2 m-2 text-slate-300 hover:bg-[#6177AD] rounded-md">Projects</li>
        <li className="text-4xl p-2 m-2 text-slate-300 hover:bg-[#6177AD] rounded-md">Contact</li>
      </ul>

      <div className='md:hidden flex float-right'>
        <GiHamburgerMenu className='text-5xl p-2 m-2 text-slate-300' />
      </div>
    </div>
  )
}

export default Navbar