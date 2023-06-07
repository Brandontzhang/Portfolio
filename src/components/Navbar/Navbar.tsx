import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const [expandMenu, setExpandMenu] = useState(false);

  const tabs = ["Home", "Work", "Projects", "Contact"];

  return (
    <div className="bg-inherit absolute h-screen w-screen">
      <ul className='hidden md:flex float-right flex-wrap justify-evenly'>
        {tabs.map(tab => <li className="text-4xl p-2 m-2 text-slate-300 hover:bg-[#6177AD] hover:cursor-pointer rounded-md">{tab}</li>)}
      </ul>

      <div className='md:hidden flex float-right hover:cursor-pointer' onClick={() => {console.log("hi");setExpandMenu(expanded => !expanded)}}>
        <GiHamburgerMenu className={!expandMenu ? 'text-5xl p-2 m-2 text-slate-300 z-10 rounded-lg' : 'hidden'} />
        <AiOutlineClose className={expandMenu ? 'text-5xl p-2 m-2 text-slate-300 z-10 rounded-lg' : 'hidden'} />
      </div>

      <ul className={expandMenu ? 'md:hidden absolute flex w-full h-full flex-col justify-center items-center' : 'hidden'}>
        {tabs.map(tab => <li className='text-slate-300 py-10 text-5xl'>{tab}</li>)}
      </ul>
    </div>
  )
}

export default Navbar