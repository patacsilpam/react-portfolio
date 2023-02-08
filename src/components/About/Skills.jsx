import React from 'react'
import skills from '../../skills.json'
import html from '../../assets/tech-stack/html.png'
export const Skills = () => {
  return (
    <section className='skills'>
       <div><h1>Skills</h1></div>
       <div className='skills-section'>
          {skills.map(skill => {
            return (
            <div key={skill.id}>
              <img src={skill.img} alt="" />
              <p>{skill.tool}</p>
            </div>  
              )
          })}
           </div>
    </section>
  )
}
