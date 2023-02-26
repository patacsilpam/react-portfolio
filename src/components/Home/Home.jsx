import React,{useRef,useEffect} from 'react'
import resume from '../../assets/pdf/PATACSIL_PAMELA_RESUME.pdf'
//import gsap from 'gsap'
/** const helloRef = useRef(null);
  useEffect(()=>{
    const elHello = helloRef.current;
    gsap.fromTo(elHello,{rotation:0},{rotation:-20,duration:3})
  },[]) */
export const Home = () => { 
 
  return (
      <section className='home' id='home'>
          <div>
            <span>&#128075; Hello, I'm</span>
            <h1><span>Pam Patacsil</span></h1>
            <p>I focus on creating web & mobile applications based in  the Philippines.</p>
            <div><br />
              <a href={resume} className='btn-download-cv' target="_blank">Resume</a>
            </div>
          </div>
      </section>
  )
}
