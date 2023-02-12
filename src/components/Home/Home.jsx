import React,{useRef,useEffect} from 'react'
import resume from '../../assets/pdf/resume.pdf'
import gsap from 'gsap'
export const Home = () => { 
  const helloRef = useRef(null);
  useEffect(()=>{
    const elHello = helloRef.current;
    gsap.fromTo(elHello,{rotation:0},{rotation:-20,duration:3})
  },[])
  return (
      <section className='home' id='home'>
          <div>
            <span ref={helloRef}>&#128075; Hello,</span>
            <h1>I'm <span>Pam Patacsil</span></h1>
            <p>I specialize in building web & mobile applications based in Philippines.</p>
            <div><br />
              <a href={resume} className='btn-download-cv' target="_blank">DOWNLOAD CV</a>
            </div>
          </div>
      </section>
  )
}
