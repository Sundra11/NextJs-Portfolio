import React from 'react'
import Image from 'next/image'
import Skill1 from '../../public/assets/skills/5.png'
import Skill2 from '../../public/assets/skills/8.png'
import Skill3 from '../../public/assets/skills/4.png'
import Skill4 from '../../public/assets/skills/2.png'
import Skill5 from '../../public/assets/skills/1.png'
import Skill6 from '../../public/assets/skills/3.png'
import Skill7 from '../../public/assets/skills/6.png'
import Skill8 from '../../public/assets/skills/7.png'
import Skill9 from '../../public/assets/skills/9.png'
import Skill10 from '../../public/assets/skills/native.png'
import Skill11 from '../../public/assets/skills/Android-Studio.png'
import Skill12 from '../../public/assets/skills/Sass.png'

function Skills() {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#0082c6]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill1}
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill2}
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill3}
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill4}
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill5}
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill6}
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>NextJs</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill7}
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>GitHub</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill8}
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill9}
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>Node JS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill10}
                                    width={120}
                                    height={110}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>React Native</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill11}
                                    width={120}
                                    height={120}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>Android Studio</h3>
                            </div>
                        </div>

                        
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Skill12}
                                    width={120}
                                    height={120}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>SASS</h3>
                            </div>
                        </div>

                        
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Skills
