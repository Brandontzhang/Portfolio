import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [expandMenu, setExpandMenu] = useState(false);

  const tabs = ["About Me", "Work", "Projects", "Contact"];

  return (
    <div className="bg-[#18244A] fixed h-18 w-full">
      <ul className='hidden md:flex float-right flex-wrap justify-evenly'>
        {tabs.map((tab, index) => <li key={index} className="text-4xl py-1 px-4 m-2 text-slate-300 hover:bg-[#6177AD] hover:cursor-pointer rounded-md"><Link to={tab} smooth={true} offset={tab !== 'About Me' ? -75 : 0}>{tab}</Link></li>)}
      </ul>

      <div className='md:hidden flex float-right hover:cursor-pointer' onClick={() => setExpandMenu(expanded => !expanded)}>
        <GiHamburgerMenu className={!expandMenu ? 'text-5xl p-2 m-2 text-slate-300 z-10 rounded-lg' : 'hidden'} />
        <AiOutlineClose className={expandMenu ? 'text-5xl p-2 m-2 text-slate-300 z-10 rounded-lg' : 'hidden'} />
      </div>

      <ul className={expandMenu ? 'md:hidden absolute bg-inherit flex w-full h-screen flex-col justify-center items-center' : 'hidden'}>
        {tabs.map((tab, index) => <li key={index} className='text-slate-300 py-10 text-5xl'><Link onClick={() => setExpandMenu(expanded => !expanded)} offset={tab !== 'About Me' ? -75 : 0} to={tab} smooth={true}>{tab}</Link></li>)}
      </ul>
    </div>
  )
}

export default Navbar