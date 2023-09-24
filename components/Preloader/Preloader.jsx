'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';
import Image from 'next/image';

import Loader from '../../public/Loader/loader.svg'

// const words = ["Hello", " 你好 (Nǐ hǎo)", "Hola", "नमस्ते", "Bonjour", "مرحباً", "Halo", "నమస్కారం,Hello", " 你好 (Nǐ hǎo)", "Hola", "नमस्ते", "Bonjour", "مرحباً", "Halo", "నమస్కారం"]

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});
    const [count, setCount] = useState(1);

    //Counter
    
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          // Add a one-second delay when count reaches 47
          clearInterval(interval);
          setTimeout(() => {
            setCount(prevCount + 1);
          }, 1000);
        }
        else if (prevCount === 47) {
          // Add a one-second delay when count reaches 47
          clearInterval(interval);
          setTimeout(() => {
            setCount(prevCount + 1);
          }, 1000);
        } else if (prevCount < 100) {
          return prevCount + 1;
        } else {
          // Clear the interval when count reaches 100
          clearInterval(interval);
        }
        return prevCount;
      });
    }, 20); // Interval of 40 milliseconds to achieve the count in 4 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [count]);

      

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    // useEffect( () => {
    //     if(index == words.length - 1) return;
    //     setTimeout( () => {
    //         setIndex(index + 1)
    //     }, index == 0 ? 1000 : 250)
    // }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 1000} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.3, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 1}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 && 
            <>
                {/* <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]}</motion.p> */}
                {/* <motion.div className='Logo' variants={opacity} initial="initial" animate="enter"
                 style={{position:'relative',margin:'auto', width:'30vh', height:'30vh',zIndex:'9'}}>
                  <Image src = {Loader} alt="loader Logo" fill={true}></Image>
                </motion.div> */}
                <motion.div className={styles.brandName} variants={opacity} initial="initial" animate="enter">
                  <Image src = {Loader} alt="loader Logo" fill={true}></Image>
                </motion.div>
                <motion.p variants={opacity} initial="initial" animate="enter" className={styles.percentage}><span></span>{count}</motion.p>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}
