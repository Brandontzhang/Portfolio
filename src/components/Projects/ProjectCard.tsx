import { useState } from 'react';

const ProjectCard = (props : any) => {

    const [hover, setHover] = useState(false);
    const {title, codeUrl, demoUrl} = props.project;


    return (
        <div className="bg-future bg-contain w-fit h-fit backdrop-blur-md rounded-lg m-16 -z-5">
            <div className="h-[250px] w-[250px] rounded-lg transition ease-in-out hover:backdrop-blur-sm duration-1000" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className={hover ? 'flex h-full w-full justify-evenly items-center' : 'hidden'}>

                    <a href={codeUrl}>
                        <button className=''>Code</button>
                    </a>
                    <a href={demoUrl}>
                        <button>Demo</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard