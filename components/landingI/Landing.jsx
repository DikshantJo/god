'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';



import product from '../../../public/Home/ProductI.jpg'
import Interior from '../../../public/Home/Interior.jpg'
import video from '../../../public/Home/Video.jpg'
import productPhotography from '../../../public/Home/Product III.jpg'

export default function Home() {
  const [cardAnimate, setCardAnimation] = useState('');

  useEffect(()=>{
    setTimeout(()=>{
      setCardAnimation('class')
    },4000)
  },[])


  // const firstText = useRef(null);
  // const secondText = useRef(null);
  // const slider = useRef(null);
  // let xPercent = 0;
  // let direction = -1;

  useLayoutEffect( () => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(slider.current, {
    //   scrollTrigger: {
    //     trigger: document.documentElement,
    //     scrub: 0.25,
    //     start: 0,
    //     end: window.innerHeight,
    //     onUpdate: e => direction = e.direction * -1
    //   },
    //   x: "-500px",
    // })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    // if(xPercent < -100){
    //   xPercent = 0;
    // }
    // else if(xPercent > 0){
    //   xPercent = -100;
    // }
    // gsap.set(firstText.current, {xPercent: xPercent})
    // gsap.set(secondText.current, {xPercent: xPercent})
    // requestAnimationFrame(animate);
    // xPercent += 0.1 * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={`${styles.landing} flex-col justify-center items-start`} >
      {/* <Image 
        src="/images/background.jpg"
        fill={true}
        alt="background"
      /> */}

      {/* <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div> */}

      {/* <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        <p style={{color:'#000'}}>Freelance</p>
        <p style={{color:'#000'}}>Designer & Developer</p>
      </div> */}
      {/* <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'10vh',width:'100vw'}}>
        <div data-scroll data-scroll-speed={0.1}  className="" style={{height:'20vh',width:'80vw',background:'#fff', display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
          <h1 style={{fontSize:'10vh', fontWeight:'700',color:'grey'}}>GOD LIKE STUDIOS</h1>
        </div>
        <div style={{height:'80vh',width:'80vw',background:'#fff', display:'flex', alignItems:'center',justifyContent:'center'}}>
          <div data-scroll data-scroll-speed={0.4} style={{background:"#000", width:'25vw', height:'90%', margin:'0 30px'}}>

          </div>
          <div data-scroll data-scroll-speed={0.3}  style={{background:"#000", width:'25vw', height:'90%',margin:'0 30px'}}>

          </div>
          <div data-scroll data-scroll-speed={0.2} style={{background:"#000", width:'25vw', height:'90%',margin:'0 30px'}}>

          </div>
        </div>
      </div> */}
      {/* <div className='w-[90vw] ml-auto mr-auto mb-4 mt-4'>
        <h1 style={{fontSize: '24px', fontWeight:'700',textAlign:'center'}}>GOD LIKE STUDIOS</h1>
      </div> */}

      <div className='flex justify-evenly items-center w-[85vw]  ml-auto mr-auto'>
       <div>
          <div className={`mx-1 ${styles.GLSHomePageCard}`} data-scroll data-scroll-speed={0.4}>
                <div className={`w-0 h-0 absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 ${styles.GLSHomePageCardOverlay}`} style={{borderRadius: '20px'}}>
                  {/* <h2 className={`absolute bottom-5 left-10 ${styles.GLSHomePageCardTitle}`}>
                    Product
                  </h2> */}
                </div>
                <Image className={styles.GLSHomePageCardImage} src = {product} alt = "product Image" priority = {true} objectFit = "cover" placeholder= "blur" fill ={true}  ></Image>
          </div>

          <h2 className='text-2xl font-semibold mt-4'>Product photography</h2>
       </div>
       <div>
          <div className={`mx-1 ${styles.GLSHomePageCard}`} data-scroll data-scroll-speed={0.3}>
              <div className={`w-0 h-0 absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 ${styles.GLSHomePageCardOverlay}`} style={{borderRadius: '20px'}}>
                {/* <h2 className={`absolute bottom-5 left-10 ${styles.GLSHomePageCardTitle}`}>
                  Architecture
              </h2> */}
              </div>
              <Image className={styles.GLSHomePageCardImage} src = {Interior} alt = "product Image" priority = {true} objectFit = "cover" placeholder= "blur" fill ={true}  ></Image>
          </div>
          <h2 className='text-2xl font-semibold mt-4'>Product photography</h2>
       </div>
       <div>
          <div className={`mx-1 ${styles.GLSHomePageCard}`} data-scroll data-scroll-speed={0.2}>
                <div className={`w-0 h-0 absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 ${styles.GLSHomePageCardOverlay}`} style={{borderRadius: '20px'}}>
                  {/* <h2 className={`absolute bottom-5 left-10 ${styles.GLSHomePageCardTitle}`}>
                    Video
                  </h2> */}
                </div>
                <Image className={styles.GLSHomePageCardImage} src = {video} alt = "product Image" priority = {true} objectFit = "cover" placeholder= "blur" fill ={true}  ></Image>
            </div>
          <h2 className='text-2xl font-semibold mt-4'>Product photography</h2>
       </div>
        
      </div>

      
    </motion.main>
  )
}
