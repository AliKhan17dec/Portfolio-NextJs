import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/main.png)] bg-cover' 
    style={{backgroundSize: "35%", backgroundPosition: "left 120px top 100px"}}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-150px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-start items-center'>
            <div>
                <p data-aos="zoom-in-up">I am</p>
                <p data-aos="zoom-in-up"><span className='text-accent'>Ali </span>Khan</p>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
