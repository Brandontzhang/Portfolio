const Contact = () => {
  return (
    <div className="h-fit w-full flex flex-col items-center">
      <span className='text-5xl text-slate-300 p-14'>Contact</span>
      <form className="flex flex-col w-full sm:w-1/2">
        <input className='m-5 rounded-lg bg-[#6179AD] text-slate-300 p-2' placeholder="Name"></input>
        <input className='m-5 rounded-lg bg-[#6179AD] text-slate-300 p-2' placeholder="Email"></input>
        <textarea className='m-5 rounded-lg bg-[#6179AD] h-[300px] text-slate-300 p-2' placeholder="Message"></textarea>
      </form>
      <button className="p-2 w-[100px] text-[#EAB557] border border-[#EAB557] rounded-lg m-10">Submit</button>
    </div>
  )
}

export default Contact