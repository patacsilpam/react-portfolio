import React from 'react'
import img from '../../assets/profile.jpg'
import { Skills } from './Skills'
export const About = () => {
  return (
    <section className='about' id='about'>
        <div className='about-section'>
          <h1>About Me</h1>
          <p>
            I am a <b>fourth-year student taking up a Bachelor of Science
            in Information Technology</b> at Urdaneta City University.
            At uni, I work on projects such as websites, web applications, and mobile applications.
          </p>
          <p>
            Currently, I am seeking an internship role where I can assist in building web 
            and mobile applications using my technical background and understanding of 
            various technology areas.
          </p>
        </div>
        <div className='about-section'>
          <img src={img} alt="" />
        </div>
      </section>
  )
}
