import ProjectCard from './ProjectCard'


const Projects = () => {
  const projects = [
    {
      title : "project1",
      codeUrl : "codeUrl",
      demoUrl : "demoUrl"
    },
    {
      title : "project2",
      codeUrl : "codeUrl",
      demoUrl : "demoUrl"
    },
    {
      title : "project3",
      codeUrl : "codeUrl",
      demoUrl : "demoUrl"
    },
    {
      title : "project4",
      codeUrl : "codeUrl",
      demoUrl : "demoUrl"
    },
    {
      title : "project5",
      codeUrl : "codeUrl",
      demoUrl : "demoUrl"
    },
  ]


  return (
    <div className='w-full h-fit flex flex-col items-center'>
      <span className='text-5xl text-slate-300 p-14'>Projects</span>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
      </div>
    </div>
  )
}

export default Projects