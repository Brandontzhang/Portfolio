import './App.css'
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar/index';

function App() {
  return (
      <div className='flex-col h-auto w-full bg-[#18244A]'>
        <Navbar />
        <Hero />
      </div>
  )
}

export default App
