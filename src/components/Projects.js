import React from 'react'
import Experience from './Experience'
import ProjectItem from './ProjectItem'
import sampleImg from '../../public/assets/skills/proj1.gif'
import weatherImg from '../../public/assets/skills/weather.gif'
import dashboardImg from '../../public/assets/skills/dashboard.gif'
import lmsImg from '../../public/assets/skills/library.png'

function Projects() {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-8 '>
                <Experience />
                <p className='text-xl tracking-widest uppercase text-[#0082c6]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem
                        title='Calculator App'
                        backgroundImg={sampleImg}
                        projectUrl='/calculator'
                        frameWork='React Js'

                    />
                    <ProjectItem
                        title='Weather App'
                        backgroundImg={weatherImg}
                        projectUrl='/calculator'
                        frameWork='React Js'

                    />
                    <ProjectItem
                        title='Admin Dashboard'
                        backgroundImg={dashboardImg}
                        projectUrl='/calculator'
                        frameWork='Next JS'

                    />
                    <ProjectItem
                        title='Library Management System'
                        backgroundImg={lmsImg}
                        projectUrl='/calculator'
                        frameWork='Android Studio'

                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
