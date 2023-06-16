import WorkCard from "./WorkCard"
import { Angular, EZMaxMobile, EZMaxPlanner, InterPro } from "../../assets"
import { Bubble } from "../Skills"

const Work = () => {

  const example = {
    position : "Software Solutions Engineer",
    startDate : 'Aug 2021',
    details : [
      'first point',
      'first point',
      'first point',
      'first point',
      'first point',
    ]
  }

  return (
    <div className="flex flex-col justify-start items-center">
        <span className='text-5xl text-slate-300 p-14'>Experience</span>
        <WorkCard work={example}>
          {/* <img src={InterPro} /> */}
          {/* <img src={EZMaxMobile} /> */}
          {/* <img src={EZMaxPlanner} /> */}
          <div className='flex justify-evenly w-full'>
            <Bubble img={Angular} padding={'p-1'} />
            <Bubble img={Angular} padding={'p-1'} />
            <Bubble img={Angular} padding={'p-1'} />
            <Bubble img={Angular} padding={'p-1'} />
          </div>
        </WorkCard>
    </div>
    
  )
}

export default Work