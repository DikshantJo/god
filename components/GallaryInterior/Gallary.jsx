// import React, { useState, useEffect } from 'react';
"use client"
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from 'next/image';


// Import from sanity
import { getProjectsInterior } from '@/sanity/sanity-utils';

const Gallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [ project, setProject] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const Card = useRef(null);


  // useLayoutEffect( () => {
  //   gsap.registerPlugin(ScrollTrigger)
  //   gsap.to(Card.current, {
  //       scrollTrigger: {
  //           trigger: document.documentElement,
  //           start: 100,
  //           end: window.innerHeight,
  //           onLeave: () => {gsap.to(Card.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
  //           onEnterBack: () => {gsap.to(Card.current, {scale: 1, duration: 0.25, ease: "power1.out"})}
  //       }
  //   })
  // }, [])


  useEffect(() => {
    const handleArrowKeys = (e) => {
      if (showModal) {
        if (e.key === 'ArrowLeft') {
          navigateImages(-1);
        } else if (e.key === 'ArrowRight') {
          navigateImages(1);
        }
      }
    };

    document.addEventListener('keydown', handleArrowKeys);

    return () => {
      document.removeEventListener('keydown', handleArrowKeys);
    };
  }, [showModal]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const navigateImages = (offset) => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + offset + project.length) % project.length
    );
  };


  useEffect(()=>{
    (
      async () => {
        const project = await getProjectsInterior();
        setProject(project)
        console.log(project)
      }
    )()
   },[])

  return (
    <>
        <div>
            <h1 className='text-center mb-0 relative px-20' style={{fontSize:'80px', fontWeight:'bold'}}>
              {/* <span className='absolute' style={{fontSize:'14px'}}>Portfolio</span> */}
                Interior
                <span style={{color:'#777', marginLeft:'16px'}}>Photography</span>
               </h1>
              <span className='block w-full text-center' style={{fontSize:'14px'}}>Scroll down</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-20 pt-10">
          {/* {images.map((image, index) => (
            <div ref={Card} key={index} className="relative cursor-zoom-in" style={{ height: '60vh' }} onClick={() => openModal(index)}>
              <Image src={image} alt={`Image ${index}`} className="w-full h-full object-cover rounded-lg" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))} */}

          {project.map((pro, index) => (
            <div ref={Card} key={index} className="relative cursor-zoom-in" style={{ height: '60vh' }} onClick={() => openModal(index)}>
              <Image src={pro.image } alt={`Image ${index}`} className="w-full h-full object-cover rounded-lg" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          ))}


          {/* Modal */}
          {showModal && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
              onClick={closeModal}
            >
              <div className="modal-content">
                <span
                  className="absolute top-0 right-0 m-4 text-white text-2xl cursor-pointer"
                  onClick={closeModal}
                >
                  &times;
                </span>
                <Image
                  // fill={true}
                  width={500}
                  height={500}
                  src={project[currentImageIndex].image}
                  alt={`Modal Image`}
                  // className="w-full h-auto"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default Gallery;
