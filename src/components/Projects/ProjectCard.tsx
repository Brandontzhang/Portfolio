import { useState } from 'react';

const ProjectCard = () => {

    const [hover, setHover] = useState(false);

    return (
    <div className="bg-future bg-contain w-fit h-fit backdrop-blur-md rounded-lg">
        <div className="h-[250px] w-[250px] rounded-lg transition ease-in-out hover:backdrop-blur-sm duration-1000" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className={hover ? 'flex h-full w-full justify-evenly items-center' : 'hidden'}>
                <button className=''>Code</button>
                <button>Demo</button>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard