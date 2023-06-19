import Bubble from './Bubble'
import { Angular, HTML, CSS, JavaScript, Git, Github, Java, MongoDB, Nodejs, mySQL, React, Spring, TypeScript } from '../../assets'

const Skills = () => {
  return (
    <div className='w-full min-h-fit mt-10'>
      <div className='hidden md:flex flex-col justify-center items-center'>
        <div>
            <span className='text-5xl text-slate-300 p-14'>Skills</span>
        </div>
        <div className='flex w-3/5 m-14 justify-evenly'>
          <Bubble img={HTML} title={'HTML'} />
          <Bubble img={CSS} title={'CSS'} />
          <Bubble img={JavaScript} title={'JavaScript'} />
          <Bubble img={Nodejs} title={'Nodejs'} />
        </div>
        <div className='flex w-3/5 m-14 justify-around'>
          <Bubble img={Java} cssClass={"p-1"} title={'Java'} />
          <Bubble img={Spring} cssClass={"p-3"} title={'Spring'} />
          <Bubble img={Angular} cssClass={"p-3"} title={'Angular'} />
          <Bubble img={React} title={'React'} />
          <Bubble img={TypeScript} title={'TypeScript'} />
        </div>
        <div className='flex w-3/5 m-14 justify-evenly'>
          <Bubble img={Git} padding={"p-1"} title={'Git'} />
          <Bubble img={Github} padding={"p-2"} title={'Github'} />
          <Bubble img={MongoDB} padding={"p-5"} title={'MongoDB'} />
          <Bubble img={mySQL} title={'mySQL'} />
        </div>
      </div>

      <div className='flex md:hidden flex-col justify-center items-center'>
        <div className='mb-10'>
            <span className='text-5xl text-slate-300 p-14'>Skills</span>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 gap-10'>
          <Bubble img={HTML} title={'HTML'} />
          <Bubble img={CSS} title={'CSS'} />
          <Bubble img={JavaScript} title={'JavaScript'} />
          <Bubble img={Nodejs} title={'Nodejs'} />
          <Bubble img={Java} cssClass={"p-1"} title={'Java'} />
          <Bubble img={Spring} cssClass={"p-3"} title={'Spring'} />
          <Bubble img={Angular} cssClass={"p-3"} title={'Angular'} />
          <Bubble img={React} title={'React'} />
          <Bubble img={TypeScript} title={'TypeScript'} />
          <Bubble img={Git} padding={"p-1"} title={'Git'} />
          <Bubble img={Github} padding={"p-2"} title={'Github'} />
          <Bubble img={MongoDB} padding={"p-5"} title={'MongoDB'} />
          <Bubble img={mySQL} title={'mySQL'} />
        </div>
      </div>
      
    </div>
  )
}

export default Skills