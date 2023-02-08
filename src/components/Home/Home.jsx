import React from 'react'

import resume from '../../assets/pdf/resume.pdf'
import { About } from '../About/About'
export const Home = () => {
  return (
      <section className='home' id='home'>
          <div>
            <span>&#128075; Hello,</span>
            <h1>I'm <span>Pam Patacsil</span></h1>
            <p>I specialize in building web & mobile applications based in Philippines.</p>
            <div><br />
              <a href={resume} className='btn-download-cv' target="_blank">DOWNLOAD CV</a>
            </div>
          </div>
      </section>
  )
}
