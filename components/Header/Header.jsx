'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Rounded from '../../common/RoundedButton';
// import Magnetic from '../../common/Magnetic';

import Link from 'next/link';



import Message from '../../public/header/message.svg'

export default function Header() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})}
            }
        })
    }, [])

    return (
        <>
        <div ref={header} className={styles.header}>
            <div className={styles.logo}>
                {/* <p className={styles.copyright}>©</p>
                <div className={styles.name}>
                    <p className={styles.codeBy}>Code by</p>
                    <p className={styles.dennis}>Dikshant</p>
                    <p className={styles.snellenberg}>Joshi</p>
                </div> */}
                <h1>GOD LIKE STUDIO</h1>
            </div>
            <div className={styles.nav}>
                {/* <Magnetic>
                    <div className={styles.el}>
                        <a>
                        <Image src={Message} alt=""></Image>
                        </a>
                        <Link href="/">
                            GOD LIKE
                        </Link>
                        <div className={styles.indicator}>
                        
                        </div>
                    </div>
                </Magnetic> */}
                <Magnetic>
                    <div className={styles.el}>
                        <a>About</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a>Contact</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
                <Magnetic>
                    <div className={styles.el}>
                        <a>Services</a>
                        <div className={styles.indicator}></div>
                    </div>
                </Magnetic>
            </div>
           
            <div ref={button} className={`${styles.headerButtonContainer} lg:hidden`}>
                <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button}`}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </div>
        </>
    )
}
