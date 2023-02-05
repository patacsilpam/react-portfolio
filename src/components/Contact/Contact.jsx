import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faInstagram ,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
export const Contact = () => {
  return (
    <section className='contact'>
      <h1>Get in touch</h1>
      <div className='contact-section'>
        <div>
          <p>Currently, I am looking for opportunities and accepting freelance projects. 
            If you think I am a good asset, kindly send me a message.
          </p>
          <a href="mailto:pammpatacsil@gmail.com" >pammpatacsil@gmail.com</a>
        </div>
        <div className="soc-med">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <a href="#">© 2023 Pamela M. Patacsil. All Rights Reserved</a>
        </div>
      </div>
    </section>
  )
}
