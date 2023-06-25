import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

  const form = useRef<HTMLFormElement>() as React.MutableRefObject<HTMLFormElement>;

  const sendEmail = (e : any) => {
    e.preventDefault();

    emailjs.sendForm('service_tas3xk7', 'template_y7s4geu', form.current, 'exk9PJ7CWBWuMxpr1')
      .then((result) => {
          form.current.reset();
          console.log(result.text);
      }, (error) => {
        console.log('service_tas3xk7')
          console.log(error.text);
      });
  };

  return (
    <div className="h-fit w-full flex flex-col items-center">
      <span className='text-5xl text-slate-300 p-14'>Contact</span>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full sm:w-1/2 justify-center items-center">
        <input className='m-5 rounded-lg bg-[#6179AD] text-slate-300 p-2 w-3/4' placeholder="Name" name="from_name"></input>
        <input className='m-5 rounded-lg bg-[#6179AD] text-slate-300 p-2 w-3/4' placeholder="Email" name="reply_to"></input>
        <textarea className='m-5 rounded-lg bg-[#6179AD] h-[300px] text-slate-300 p-2 w-3/4' placeholder="Message" name="message"></textarea>
        <button type='submit' className="p-2 w-[100px] text-[#EAB557] border border-[#EAB557] rounded-lg m-10">Submit</button>
      </form>
    </div>
  )
}

export default Contact