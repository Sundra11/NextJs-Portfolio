import React from 'react'
import Image from 'next/image'
import webImg from '../../public/assets/skills/web.gif'
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'



function ContactMe() {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full m-auto mx-auto p-2 flex justify-center items-center'>
                <div>
                    <h1 className='uppercase  tracking-widest text-gray-600 py-4 decoration-8 text-xl'>
                        Lets Connect and Build Something Together
                    </h1>
                    {/* <div className='h-auto w-full shadow-xl shadow-gray-200 rounded-xl p-4'> */}
                    <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                        <Image className='py-4' src={webImg} alt='' height='800' width='800' />
                    </div>

                    <div className='flex items-center justify-between max-w-[330px] m-auto py-8'>
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
                        <a href='https://www.instagram.com/sundra_11/' target='_blank'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineInstagram />
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
