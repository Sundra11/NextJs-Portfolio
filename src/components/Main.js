import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

function Main() {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full m-auto mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600 '>
                        Lets Build Something Together
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-[#0082c6]'> Sundra </span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        A Front-End Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        👋 Welcome to my portfolio! I'm a junior front-end developer with a focus on creating user-friendly web and mobile applications. I have experience with React, React Native, and Next.js, and I'm passionate about crafting seamless user experiences.

                        I'm eager to learn and grow in the field and excited to collaborate on new projects. Check out my work, and feel free to reach out for potential collaborations.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a href='https://www.linkedin.com/in/sundrabalakrishnan/' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href='https://github.com/Sundra11' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                        <a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </a>
                        {/* <a href='' target='_blank'> */}
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                        {/* </a> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
