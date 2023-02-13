import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faInstagram ,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
export const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <div>
            <h1>Get in touch</h1>
            <p>I would be happy to discuss my experiences with you more, write me an email or message me on LinkedIn!</p><br />
            <a href="mailto:pammpatacsil@gmail.com" className='email'>pammpatacsil@gmail.com</a>
        </div>
    </section>
  )
}
