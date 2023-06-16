

const WorkCard = (props : any) => {

  const {startDate, endDate, position, details} = props.work;

  return (
    <div className="bg-inherit w-full h-screen flex justify-center items-center">
        <div className="w-11/12 h-5/6 mt-14 rounded-lg bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#091332] to-[#212E5E]">
          <div className="flex md:flex-row flex-col w-full h-full justify-around items-center divide-x-2">
            <div className="flex-1 h-full flex flex-col justify-evenly items-center p-5">
              {props.children}
            </div>
            <div className="flex-1 flex flex-col justify-start h-5/6 w-11/12">
              <div className="flex justify-between w-full">
                <div className="text-slate-300 italic text-3xl p-10">{position}</div>
                <div className="text-slate-300 p-10">{startDate} - {endDate ? endDate : 'Present'}</div>
              </div>
              <ol className="list-disc list-inside">
                {
                  details.map((detail : string, index : number) => <li key={index} className="text-slate-300 text-xl px-10 py-5">{detail}</li>)
                }
              </ol>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WorkCard