import React,{useRef,useEffect} from 'react'
import resume from '../../assets/pdf/resume.pdf'
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
            <span >&#128075; Hello,</span>
            <h1>I'm <span>Pam Patacsil</span></h1>
            <p>I focus on creating web & mobile applications based in  the Philippines.</p>
            <div><br />
              <a href={resume} className='btn-download-cv' target="_blank">DOWNLOAD CV</a>
            </div>
          </div>
      </section>
  )
}
