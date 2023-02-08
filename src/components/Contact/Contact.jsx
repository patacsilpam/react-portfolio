import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faInstagram ,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
export const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <div>
            <h1>Get in touch</h1>
            <p>Currently, I am looking for opportunities and accepting freelance projects. 
              If you think I am a good asset, kindly send me a message.
            </p><br />
            <a href="mailto:pammpatacsil@gmail.com" className='email'>pammpatacsil@gmail.com</a>
        </div>
    </section>
  )
}
