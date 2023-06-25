import WorkCard from "./WorkCard"
import { Amwell, Angular, Draper, EZMaxMobile, EZMaxPlanner, InterPro, Java, JavaScript, Nodejs, Python, React, Spring, TypeScript, mySQL } from "../../assets"
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
    ], 
    images : [<img className="m-10" src={InterPro} /> , <img className="m-10" src={EZMaxMobile} />, <img className="m-10" src={EZMaxPlanner} />]
  }

  const experiences = [
    {
      position : "Software Solutions Engineer",
      startDate : 'Aug 2021',
      details : [
        'Worked directly with clients as a development lead on multiple projects, focusing on gathering and implementing different client requirements, setting customer expectations, and assisting with product rollouts. ',
        'Implemented custom screens and functionalities for mobile planning and work tracking solutions interacting with the Maximo application suite.',
        'Manually tested company products to verify development requirements according to client expectations.',
        'Facilitated communication between clients and development team members on support tickets.',
      ], 
      images : [<img className="m-10" src={InterPro} /> , <img className="m-10" src={EZMaxMobile} />, <img className="m-10" src={EZMaxPlanner} />],
      skills : [{img : Angular, name: 'Angular'}, {img : TypeScript, name : "TypeScript"}, {img : Java, name : "Java"}, {img : Spring, name : "Spring"}, {img : mySQL, name : "mySQL"}]
    },
    {
      position : "Software QA Engineering Co-op",
      startDate : 'July 2020',
      endDate : 'Dec 2020',
      details : [
        "Automated unit and integration tests for the android mobile app using Java and Appium.",
        "Refactored and improved the organization of the mobile automation framework using page objects.",
        "Created and organized JIRA test tickets using a Kanban board."
      ],
      images : [<img className="object-scale-down h-40" src={Amwell}/>],
      skills : [{img : JavaScript, name: "JavaScript"}, {img : Java, name: "Java"}, {img : Nodejs, name: "Nodejs"}]
    },
    {
      position : "System Software Development and Testing Intern",
      startDate : "Jan 2019",
      endDate : "June 2019",
      details : [
        "Conducted automated testing using JavaScript for Draper’s new product lifecycle management system (PLM).",
        "Analyzed and ran 400-500 user access tests daily to identify security failures in the PLM system.",
        "Organized and processed company project data using the Python Pandas library.",
        "Updated and reorganized old test scripts using Object Oriented Design."
      ],
      images : [<img className="object-scale-down h-40 w-11/12" src={Draper}/>],
      skills : [{img : JavaScript, name: "JavaScript"}, {img : Java, name: "Java"}, {img : Nodejs, name: "Nodejs"}, {img : Python, name : "Python"}, {img : React, name : "React"}]
    }
  ]

  return (
    <div className="flex flex-col justify-start items-center mt-10">
        <span className='text-5xl text-slate-300'>Experience</span>
        {experiences.map(job => {
          return(
            <WorkCard work={job}>
              { job.images.map(img => img) }
              <div className='grid grid-cols-2 gap-10 sm:flex sm:justify-evenly m-10'>
                { job.skills.map(skill => <Bubble className='m-10' img={skill.img} title={skill.name} />) }
              </div>
            </WorkCard>
          );
        })}
    </div>
    
  )
}

export default Work