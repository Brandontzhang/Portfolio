import { useState, useEffect } from 'react';

const Bubble = (props : any) => {
    const [cssClass, setCSSClass] = useState('p-2');
    const [titleVisible, setTitleVisible] = useState(false);
    const { title } = props;

    useEffect(() => {
      setCSSClass(props.cssClass ? props.cssClass : cssClass);
    }, [props.padding])
    
    const toggleTitle = () => {
        setTimeout(() => setTitleVisible(titleVisible => !titleVisible), 300);
    }

    return (
        <div className="flex flex-col items-center bg-[#3479b1] w-20 h-20 rounded-full transition ease-in-out bg-blue hover:-translate-y-2 hover:scale-125 duration-300" onMouseEnter={toggleTitle} onMouseLeave={toggleTitle}>
            <img className={cssClass + ' object-contain'} src={props.img} />
            <span className={`text-slate-300 ${!titleVisible ? 'hidden' : ''}`}>{title}</span>
        </div>
    )
}

export default Bubble