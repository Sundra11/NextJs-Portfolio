import React from 'react'
import webImg from '../../public/assets/skills/web.gif'
import Image from 'next/image'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ContactMe from './ContactMe';

function Contact() {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#0082c6]'>Contact</p>
                <h2 className='py-4'> Get in Touch </h2>
                <div className='grid lg:grid-cols-5 gap-8'></div>
                <ContactMe />
            </div>


        </div>
    )
}

export default Contact
