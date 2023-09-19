import React from 'react'
import Image from 'next/image'

function Experience() {
    return (
        <div id='experience' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#0082c6]'>Projects</p>
                <h2 className='py-4'>Projects I Have Worked On</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/assets/skills/epf.jpeg'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>EPF</h3>
                                <h3>React Native</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/assets/skills/tm.png'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>TM Merdeka</h3>
                                <h3>NextJs</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src='/../public/assets/skills/powerfy.png'
                                    width={64}
                                    height={64}
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>Powerfy</h3>
                                <h3>NextJs</h3>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>

    )
}

export default Experience
