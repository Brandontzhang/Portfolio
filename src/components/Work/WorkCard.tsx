

const WorkCard = (props : any) => {

  const {startDate, endDate, position, details} = props.work;

  return (
    <div className="bg-inherit w-full min-h-fit flex justify-center items-center">
        <div className="w-11/12 min-h-fit mt-14 rounded-lg bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-[#091332] to-[#212E5E] m-5 p-5">
          <div className="flex lg:flex-row flex-col w-full h-full justify-around items-center divide-x-2">
            <div className="flex-1 h-full flex flex-col sm:justify-evenly items-center">
              {props.children}
            </div>
            <div className="flex-1 flex justify-around flex-col h-full min-h-[500px] w-11/12">
              <div className="flex justify-between w-auto">
                <div className="text-slate-300 italic text-3xl mx-5 my-10">{position}</div>
                <div className="text-slate-300 m-5">{startDate} - {endDate ? endDate : 'Present'}</div>
              </div>
              <ul className="list-disc list-inside">
                {
                  details.map((detail : string, index : number) => <li key={index} className="text-slate-300 text-xl px-10 py-5">{detail}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WorkCard