"use client"
import React from 'react'
// import { useEffect, useState } from 'react'
// import { AnimatePresence } from 'framer-motion';
const { useEffect, useState } = require('react');
import { AnimatePresence } from 'framer-motion';


//components
import FloaterBar from '@/components/Floater/FloaterBar';
import ImagesProduct from '@/components/GallaryProduct/Gallary'
import ImagesInterior from '@/components/GallaryInterior/Gallary'
import GallaryVideo from '@/components/GalleryVideo/Gallary';   
import Preloader from '../components/Preloader/Preloader'
import Header from '@/components/HeaderNew/Index'

// import Landing from '@/components/LandingScroll/landing'
import Landing from '@/components/HeroAutoScroll/index'

import SlidingImages from '@/components/SlidingImages/SlidingImages';
import FAQ from '@/components/FAQ/FAQParent'
import Contact from '@/components/Contact/Contact';

const page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };


  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            // setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 4000)
      }
    )()
  }, [])



  return (
    <div>
      <Header />
      {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      {/* <div className="tab-header mt-16">
        <button
          className={activeTab === 1 ? 'active-tab' : ''}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 2 ? 'active-tab' : ''}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={activeTab === 3 ? 'active-tab' : ''}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div> */}
      <div className="tab-content mt-32">
        <ImagesInterior />
        {/* {activeTab === 1 && <div><ImagesProduct images = {images} /></div>}
        {activeTab === 2 && <div> <ImagesInterior images = {images} /></div>}
        {activeTab === 3 && <div><GallaryVideo /> </div>} */}
        {/* {activeTab === 4 && <div><GallaryVideo /> </div>} */}
      </div>
      <FAQ />
    
     {/* <SlidingImages /> */}
    
     {/* <Contact /> */}
     {/* <FloaterBar activeTab={activeTab} onSharedDataChange={handleTabClick} /> */}
    </div>
  )
}

export default page