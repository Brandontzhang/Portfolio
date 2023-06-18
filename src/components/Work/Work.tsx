import WorkCard from "./WorkCard"
import { Angular, EZMaxMobile, EZMaxPlanner, InterPro, Java, Spring, TypeScript, mySQL } from "../../assets"
import { Bubble } from "../Skills"

const Work = () => {

  const example = {
    position : "Software Solutions Engineer",
    startDate : 'Aug 2021',
    details : [
      'Worked directly with clients as a development lead on multiple projects, focusing on gathering and implementing different client requirements, setting customer expectations, and assisting with product rollouts. ',
      'Implemented custom screens and functionalities for mobile planning and work tracking solutions interacting with the Maximo application suite.',
      'Manually tested company products to verify development requirements according to client expectations.',
      'Facilitated communication between clients and development team members on support tickets.',
    ]
  }

  return (
    <div className="flex flex-col justify-start items-center">
        <span className='text-5xl text-slate-300'>Experience</span>
        <WorkCard work={example}>
          <img className="m-10" src={InterPro} />
          <img className="m-10" src={EZMaxMobile} />
          <img className="m-10" src={EZMaxPlanner} />
          <div className='flex justify-evenly w-full m-10'>
            <Bubble img={Angular} title={'Angular'} />
            <Bubble img={TypeScript} title={'TypeScript'} />
            <Bubble img={Java} title={'Java'} />
            <Bubble img={Spring} title={'Spring'} />
            <Bubble img={mySQL} title={'mySQL'} />
          </div>
        </WorkCard>
    </div>
    
  )
}

export default Work