import './App.css'
import { Hero } from './components/Hero/index';
import { Navbar } from './components/Navbar/index';
import { Skills } from './components/Skills/index';
import { Work } from './components/Work/index'

function App() {
  return (
      <div className='flex-col h-auto w-full bg-[#18244A]'>
        <Navbar />
        <Hero />
        <Skills />
        <Work />
      </div>
  )
}

export default App
