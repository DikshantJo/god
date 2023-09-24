'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

import Image1 from '../../../public/Home/Beauty product shoot1778.jpg'
import Image2 from '../../../public/Home/Beauty product shoot1818.jpg'
import Image3 from '../../../public/Home/Product shoot2643.jpg'
import Image4 from '../../../public/Home/product.jpg'
import Image5 from '../../../public/Home/Video.jpg'
import Image6 from '../../../public/Home/Product shoot4698.jpg'
import Image7 from '../../../public/Home/Product shoots7119-Edit.jpg'
import Image8 from '../../../public/Home/Interior.jpg'
import Image9 from '../../../public/Home/Interior.jpg'
import Image10 from '../../../public/Home/product shoot7240.jpg'
import Image11 from '../../../public/Home/product shoot7240.jpg'
import Image12 from '../../../public/Home/Product III.jpg'

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
]

export default function Home() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2.2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  const y5 = useTransform(scrollYProgress, [0, 1], [0, height * 2.2])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={`${styles.main} mx-auto`}>
      {/* <div className={styles.spacer}></div> */}
      <div>
        <h1 className={`${styles.backText}`}>GOD LIKE</h1>
      </div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2],images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5],images[2]]} y={y2}/>
        <Column images={[images[6], images[7], images[8],images[2]]} y={y3}/>
        <Column images={[images[0], images[10], images[11],images[2]]} y={y4}/>
        <Column images={[images[1], images[10], images[8],images[2]]} y={y5}/>
        <div className={styles.overlay}>
          <h2>
            GOD LIKE STUDIO
          </h2>
        </div>
      </div>
      {/* <div className={styles.spacer}></div> */}
    </main>
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src, i) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={src}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}