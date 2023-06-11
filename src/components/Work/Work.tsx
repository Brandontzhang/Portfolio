import WorkCard from "./WorkCard"
import { Angular, EZMaxMobile, EZMaxPlanner, InterPro } from "../../assets"
import { Bubble } from "../Skills"

const Work = () => {
  return (
    <WorkCard>
      <img src={InterPro} />
      <img src={EZMaxMobile} />
      <img src={EZMaxPlanner} />
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