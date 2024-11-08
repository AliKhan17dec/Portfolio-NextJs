import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                Drop me a line, give me  call, or send me a message
            </p>
            <div className='flex gap-3 items-center'>
                <a href="mailto:alikhan.dec17@gmail.com" data-aos="zoom-in-up"><AiOutlineMail size={50} /></a>
                <a href="https://github.com/AliKhan17dec" target='_blank' data-aos="zoom-in-up"><FaGithub size={40}/></a>
                <a href="https://www.linkedin.com/in/ali-khan-8694162b7/" target='_blank' data-aos="zoom-in-up"><CiLinkedin size={50}/></a>
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent' 
                id='name'/>
            </div> 
            <div className='flex flex-col gap-1'>
                <label htmlFor="emil">Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent' 
                id='email'/>
            </div> 
            <div className='flex flex-col gap-1'>
                <label htmlFor="msg">Message</label>
                <textarea
                className='bg-transparent border border-accent' 
                id='msg' rows={8}>
                </textarea>    
            </div> 
            <button className='bg-accent p-2 px-6 hover:bg-transparent'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
