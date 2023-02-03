import React from 'react'
import skills from '../../skills.json'
import html from '../../assets/tech-stack/html.png'
export const Skills = () => {
  return (
    <section className='skills'>
        
        <div className='skills-section'>
        <h1>Skills</h1>
           <div>
           {skills.map(skill => {
                return (
                    <div key={skill.id}>
                        <img src={skill.img} alt="" />
                        <p>{skill.skill}</p>
                    </div>
                )
            })}
           </div>
        </div>

    </section>
    
  )
}
