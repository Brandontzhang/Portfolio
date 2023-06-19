import './App.css'
import { Hero } from './components/Hero/index';
import { Navbar } from './components/Navbar/index';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills/index';
import { Work } from './components/Work/index';
import { Contact } from './components/Contact/index';

function App() {
  return (
      <div className='flex-col h-auto w-auto bg-[#18244A]'>
        <Navbar />
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </div>
  )
}

export default App
