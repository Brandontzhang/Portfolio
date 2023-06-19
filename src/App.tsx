import './App.css'
import { Hero } from './components/Hero/index';
import { Navbar } from './components/Navbar/index';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills/index';
import { Work } from './components/Work/index';
import { Contact } from './components/Contact/index';

import { Element, Link } from 'react-scroll';

function App() {
  return (
      <div className='flex-col h-auto w-auto bg-[#18244A]'>
        <Navbar />
        <Element name='About Me'>
          <Hero />
        </Element>
        <Element name='Skills'>
          <Skills />
        </Element>
        <Element name='Work'>
          <Work />
        </Element>
        <Element name='Projects'>
          <Projects />
        </Element>
        <Element name='Contact'>
          <Contact />
        </Element>
      </div>
  )
}

export default App
