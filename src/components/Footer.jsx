import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faInstagram ,faTwitter,faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {
  return (
    <section className='footer'>
        <div className="soc-med">
            <div>
                <a href="https://www.facebook.com/pammpatacsil?mibextid=ZbWKwL" target='_blank'> <FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.instagram.com/_pampatacsil/?hl=en" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/pampatacsil" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.linkedin.com/in/pam-patacsil/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/patacsilpam" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            <div>
                <p>© 2023 Pamela M. Patacsil. All Rights Reserved</p>
            </div>
        </div>
    </section>
  )
}
