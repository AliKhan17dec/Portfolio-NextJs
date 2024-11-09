import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
      <div>
        <h2 className='text-4xl md:text-5xl' data-aos="zoom-in-up">Technologies I work with</h2>
        <p className='text-gray-500 pt-2' data-aos="zoom-in-up">
        I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design. Additionally, I have hands-on experience with Linux, AWS, Git, and GitHub, enabling me to work effectively in diverse development and deployment environments. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
        </p>
      </div>
      <div>
        <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">HTML5</h2>
            </div>
            <div className='space-y-2'>
               <h2 data-aos="zoom-in-up">CSS</h2>
               <h2 data-aos="zoom-in-up">Git & GitHub</h2>
               <h2 data-aos="zoom-in-up">AWS</h2>
               <h2 data-aos="zoom-in-up">Linux</h2>
            </div>
            
        </div>
      </div>  
      </div>
    </div>
  )
}

export default Skills
