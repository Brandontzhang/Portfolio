import Bubble from './Bubble'
import { Angular, HTML5, CSS, JavaScript } from '../../assets'

const Skills = () => {
  return (
    <div className='w-full min-h-fit mt-10 p-10'>
      <div className='flex flex-col justify-center items-center'>
        <div>
            <span className='text-5xl text-slate-300'>Experience</span>
            <hr className='my-10'></hr>
        </div>
        <div className='flex w-3/5 m-14 justify-evenly'>
          <Bubble img={Angular} padding={"p-1"}/>
          <Bubble img={HTML5} padding={"p-2"}/>
          <Bubble img={CSS} padding={"p-5"}/>
          <Bubble img={JavaScript} />
        </div>
        <div className='flex w-3/5 m-14 justify-around'>
          <Bubble img={Angular} padding={"p-1"}/>
          <Bubble img={HTML5} padding={"p-2"}/>
          <Bubble img={CSS} padding={"p-5"}/>
          <Bubble img={JavaScript} />
          <Bubble img={JavaScript} />
        </div>
        <div className='flex w-3/5 m-14 justify-evenly'>
          <Bubble img={Angular} padding={"p-1"}/>
          <Bubble img={HTML5} padding={"p-2"}/>
          <Bubble img={CSS} padding={"p-5"}/>
          <Bubble img={JavaScript} />
        </div>
      </div>
      
    </div>
  )
}

export default Skills