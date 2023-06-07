
const Hero = () => {
  return (
    <div className="bg-inherit w-full h-screen flex justify-center items-center">
        <div className="w-11/12 h-5/6 mt-20 rounded-lg bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#4A3297] to-[#091332]">
          <div className="flex md:flex-row flex-col w-full h-full justify-around items-center">
            <div className="flex-1 flex flex-col justify-center items-center">
              Profile Image here
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <p className="text-slate-300 text-3xl font-bold p-4">Brandon Zhang</p>
              <hr className="w-40 text-slate-300"/>
              <p className="text-slate-300 text-3xl font-bold p-4">Software Engineer, Web Developer</p>
              <p className="text-slate-300 p-4">Short section with text about me yadadadadadadadad more text this will be a short introduction, I will include more of an about me in another section</p>
              <div className="flex mt-10 justify-normal items-center">
                <button className="mx-12 p-3 text-[#EAB557] border border-[#EAB557] rounded-lg">View Work</button>
                <button className="mx-12 p-3 text-[#EAB557] border border-[#EAB557] rounded-lg">Contact</button>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Hero