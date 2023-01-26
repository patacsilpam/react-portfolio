import React from 'react'
import data from '../../data.json'
import resume from '../../assets/pdf/resume.pdf'
export const About = () => {
  return (
    <div className="parent-about">
      <div className="hello-con">
        <p>&#128075;</p>
        <strong>Hello,</strong>
      </div>
      <div className="about-me-con">
        <h1>I'm <span>Pam Patacsil</span></h1>
        <p>I specialized in building web  
        & mobile applications based in Philippines.</p>
        <a href={resume} className='btn-download-cv' target="_blank">DOWNLOAD CV</a>
      </div>
      {/*data.map(pdf => {
          return (
            <article>
              <small>{pdf.title}</small>
            
            <p>{pdf.write}</p>
            <img src={pdf.image} width={250} height={300} />
            <a href={pdf.file}>Download</a>
            </article>
          );
      })*/}
    </div>
  )
}
