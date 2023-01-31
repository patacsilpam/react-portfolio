import React from 'react'
import img from '../../assets/profile.jpg'
export const About = () => {
  return (
    <section className='about' id='about'>
        <div className='about-section'>
          <h1>About Me</h1>
          <p>
            I am a <b>fourth-year student taking up a Bachelor of Science
            in Information Technology</b> at Urdaneta City University.
          </p>
          <p>
            My main focus these days is to explore the field, and to find opportunities that will help 
            me grow and enhance my skills, especially 
            on building profitable responsive websites
            and web applications.
          </p>
        </div>
        <div className='about-section'>
          <img src={img} alt="" />
        </div>
      </section>
  )
}
