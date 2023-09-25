import React from 'react'
import Image from 'next/image'
import Photo from '../../public/assets/skills/about.jpg'

function About() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text=xl tracking-widest text-[#0082c6] '>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'> I am a junior Frontend developer</p>
                    <p className='py-2 text-gray-600'>
                        As a self-taught junior frontend developer, I bring a unique blend of passion, self-motivation,
                        and real-world experience to the table. With a foundation in web development and
                        a keen interest in cutting-edge technologies, I've honed my skills through hands-on work on
                        diverse projects, including some significant undertakings. My expertise includes React, React Native, and Next.js,
                        allowing me to craft dynamic and responsive web and mobile applications.
                        I've also demonstrated proficiency in crafting polished user interfaces using Tailwind CSS. My journey as a frontend developer over the past few months has equipped me with the agility to adapt and learn quickly, making me a valuable asset to any team seeking a driven and adaptable developer.
                    </p>
                    <p className='py-2 text-gray-600'>
                        I've had the privilege of participating in real-time project scenarios such as EPF, TM Merdeka project, and Powerfy project,
                        where I actively contributed as a team member. During this time, I took the initiative to embark on my journey to learn Nextjs and React Native independently.
                        I'm enthusiastic about continuously expanding my skill set and exploring new technologies to stay at the forefront of frontend development.
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my projects</p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src={Photo} width={500} height={500} />
                </div>
            </div>

        </div>
    )
}

export default About
