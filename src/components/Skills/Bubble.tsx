import { useState, useEffect } from 'react';

const Bubble = (props : any) => {
    const [img, setImg] = useState(props.img);
    const [padding, setPadding] = useState('p-4');

    useEffect(() => {
      setPadding(props.padding ? props.padding : padding);
    }, [props.padding])
    

    return (
        <div className="bg-[#3479b1] w-20 h-20 rounded-full transition ease-in-out bg-blue hover:-translate-y-2 hover:scale-125 hover:bg-indigo-500 duration-300">
            <img className={padding + ' object-contain'} src={img} />
        </div>
    )
}

export default Bubble