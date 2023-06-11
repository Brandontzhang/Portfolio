

const WorkCard = (props : any) => {
  return (
    <div className="bg-inherit w-full h-screen flex justify-center items-center">
        <div className="w-11/12 h-5/6 mt-20 rounded-lg bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#091332] to-[#212E5E]">
          <div className="flex md:flex-row flex-col w-full h-full justify-around items-center divide-x-2">
            <div className="flex-1 h-full flex flex-col justify-evenly items-center p-5">
              {props.children}
            </div>
            <div className="flex-1 flex flex-col justify-center items-center h-5/6">
              <p className="text-slate-300 text-3xl font-bold p-4">Brandon Zhang</p>
              <hr className="w-40 text-slate-300"/>
              <p className="text-slate-300 text-3xl font-bold p-4">Software Engineer, Web Developer</p>
              <p className="text-slate-300 p-4">Short section with text about me yadadadadadadadad more text this will be a short introduction, I will include more of an about me in another section</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WorkCard