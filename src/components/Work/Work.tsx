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
    <WorkCard work={example}>
      {/* <img src={InterPro} />
      <img src={EZMaxMobile} />
      <img src={EZMaxPlanner} /> */}
      <div className='flex justify-evenly w-full'>
        <Bubble img={Angular} padding={'p-1'} />
        <Bubble img={Angular} padding={'p-1'} />
        <Bubble img={Angular} padding={'p-1'} />
        <Bubble img={Angular} padding={'p-1'} />
        <Bubble img={Angular} padding={'p-1'} />
      </div>
    </WorkCard>
  )
}

export default Work