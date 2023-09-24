"use client"

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import styles from "../app/carousel.module.css"
import Image from 'next/image';

const Carousel = () => {
  const trackRef = useRef(null);
  const [nextPercentage, setNextPercentage] = useState(0);

  useLayoutEffect(() => {
    if (trackRef.current) {
      const handleOnDown = (e) => {
        trackRef.current.dataset.mouseDownAt = e.clientX;
      };

      const handleOnUp = () => {
        trackRef.current.dataset.mouseDownAt = '0';
        trackRef.current.dataset.prevPercentage = nextPercentage;
      };

      const handleOnMove = (e) => {
        if (trackRef.current.dataset.mouseDownAt === '0') return;

        const mouseDelta = parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = parseFloat(trackRef.current.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
        setNextPercentage(nextPercentage);
      };

      window.addEventListener('mousedown', handleOnDown);
      window.addEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
      window.addEventListener('mouseup', handleOnUp);
      window.addEventListener('touchend', (e) => handleOnUp(e.touches[0]));
      window.addEventListener('mousemove', handleOnMove);
      window.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

      return () => {
        window.removeEventListener('mousedown', handleOnDown);
        window.removeEventListener('touchstart', (e) => handleOnDown(e.touches[0]));
        window.removeEventListener('mouseup', handleOnUp);
        window.removeEventListener('touchend', (e) => handleOnUp(e.touches[0]));
        window.removeEventListener('mousemove', handleOnMove);
        window.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
      };
    }
  }, [nextPercentage]);

//   useEffect(() => {
//     if (trackRef.current) {
//       const track = trackRef.current;
//       track.style.transform = `translate(${nextPercentage}%, -50%)`;
//     //   track.style.transitionDuration = ` 1200ms ease `
//     //   track.style.fill = `foreward`

//     //   const images = track.getElementsByClassName('image');
//     //   for (const image of images) {
//     //     image.style.objectPosition = `${100 + nextPercentage}% center`;
//     //   }
//     }
//   }, [nextPercentage]);

  return (
    <div
      ref={trackRef}
      className={styles.imageTrack}
      data-mouse-down-at="0"
      data-prev-percentage="0"
      style={{transform:`translate(${nextPercentage}%, -50%)`}}
    >
      {/* Your carousel images go here */}
      <img
        className={`${styles.image}`}
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        style={{objectPosition: `${100 + nextPercentage}% center`, }}
      />
      <img
        className={`${styles.image}`}
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        style={{objectPosition: `${100 + nextPercentage}% center`,}}
      />
      <img
        className={`${styles.image}`}
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        style={{objectPosition: `${100 + nextPercentage}% center`, }}
      />
      <img
        className={`${styles.image}`}
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        style={{objectPosition: `${100 + nextPercentage}% center`, }}
      />
      <img
        className={`${styles.image}`}
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        draggable="false"
        style={{objectPosition: `${100 + nextPercentage}% center`}}
      />
      {/* Add other images similarly */}
    </div>
  );
};

export default Carousel;



