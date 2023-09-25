import React from 'react'
import Image from 'next/image'

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
                                    src='/../public/assets/skills/5.png'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>HTMLSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/assets/skills/8.png'
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
                                    src='/../public/assets/skills/4.png'
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
                                    src='/../public/assets/skills/2.png'
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
                                    src='/../public/assets/skills/1.png'
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
                                    src='/../public/assets/skills/3.png'
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
                                    src='/../public/assets/skills/6.png'
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
                                    src='/../public/assets/skills/7.png'
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
                                    src='/../public/assets/skills/9.png'
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
                                    src='/../public/assets/skills/native.png'
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
                                    src='/../public/assets/skills/Android-Studio.png'
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


                </div>
            </div>
        </div>
    )
}

export default Skills
