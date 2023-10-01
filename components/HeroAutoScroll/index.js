import React from 'react'
import style from './style.module.scss'
import Link from 'next/link'

import Image1 from '../../public/Home/Beauty product shoot1778.jpg'
import Image2 from '../../public/Home/Beauty product shoot1818.jpg'
import Image3 from '../../public/Home/Product shoot2643.jpg'
import Image4 from '../../public/Home/product.jpg'
import Image5 from '../../public/Home/Video.jpg'
import Image6 from '../../public/Home/Product shoot4698.jpg'
import Image7 from '../../public/Home/Product shoots7119-Edit.jpg'
import Image8 from '../../public/Home/Interior.jpg'
import Image9 from '../../public/Home/Interior.jpg'
import Image10 from '../../public/Home/product shoot7240.jpg'
import Image11 from '../../public/Home/product shoot7240.jpg'
import Image12 from '../../public/Home/Product III.jpg'


const images = [
    'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',
    'https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1551797802-f2dd1ec0033e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    'https://images.unsplash.com/photo-1636743790301-daf4fc1ce968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1626807236036-9cf12909b45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    'https://plus.unsplash.com/premium_photo-1675896084251-9f6b085deed1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=635&q=80',
    'https://images.unsplash.com/photo-1630261234684-d22b0892a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
    'https://images.unsplash.com/photo-1615900119829-2158e385f448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80',
    'https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'
    // Add more image paths here
  ];

const index = () => {
  return (
    <div className={`flex justify-between items-center w-full h-full`}>
        <div className='flex justify-between items-center w-full h-full bg-black'>
            <div className={`${style.sliderI}`}>
                <div className={`${style.slidetrack} `}>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1636743790301-daf4fc1ce968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630261234684-d22b0892a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    {/* asd */}
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                </div>
            </div>
            <div className={`${style.sliderII}`}>
                <div className={`${style.slidetrack} ${style.slidetrackII}`}>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1626807236036-9cf12909b45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1626807236036-9cf12909b45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'></img>
                    </div>
                    {/* asd */}
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1626807236036-9cf12909b45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1626807236036-9cf12909b45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80'></img>
                    </div>
                </div>
            </div>
            <div className={`${style.sliderIII}`}>
                <div className={`${style.slidetrack} ${style.slidetrackI}`}>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1615900119829-2158e385f448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1551797802-f2dd1ec0033e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1615900119829-2158e385f448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>

                    {/* asd */}
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://plus.unsplash.com/premium_photo-1675982631977-0e4f08339bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630688231126-dd36840fce51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1611930021592-a8cfd5319ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1636743790301-daf4fc1ce968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1630261234684-d22b0892a809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
                    <div className={`${style.slide}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className={`${style.img}`} src = './Home/Product shoot2643.jpg'></img>
                    </div>
            
                    
                </div>
            </div>
        </div>
        <div className='w-full h-full absolute top-0 left-0' style={{ backgroundColor: "rgba(0, 0, 0, 0.60)"}}>
            <div className='w-[80vw] md:w-[75%] lg:w-[50vw] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <span className='block text-lg sm:text-xl text-white text-center font-light'>Your Products, Our Photography Magic</span>
                <h1 className={`sm:text-xl md:text-4xl lg:text-6xl text-white ${style.title}`}>Elevate Your Brand with Stunning Product Shots</h1>
                <Link className='text-center m-auto flex text-white text-lg w-[125px] h-[50px] font-normal bg-black rounded-full justify-center 
                items-center mt-4' href="/">Work</Link>
            </div>
            <div className='w-full h-[18vh] absolute bottom-0 left-0 flex flex-col items-center justify-center'>
                <div className='flex justify-between items-center w-[90%]'>
                <div className='z-10 -mr-[10%]'><span className={`text-white mx-2 text-sm ${style.copyRight}`} >God like studio | All rights reserved </span></div>
                </div>
                <div className='w-[90%] h-[1px] bg-white rounded-md z-10 my-4'></div>
                <div className='flex justify-between items-center w-[90%]'>
                    <div className='flex'>
                        <div className='flex flex-col items-baseline justify-center z-10'>
                            <span className='text-white mx-2 text-xs'>
                                version 
                            </span>
                            <span className='text-white mx-2 text-xs sm:text-sm'>
                                2023 © Edition
                            </span>
                        </div>
                    </div>
                    
                    <div className='flex justify-between items-center  z-10'>
                        <Link className={`text-white mx-2 ${style.socialLinks}`} href="/">Facebook</Link>
                        <Link className={`text-white mx-2 ${style.socialLinks}`} href="/">Instagram</Link>
                        <Link className={`text-white mx-2 ${style.socialLinks}`} href="/">Linkedin</Link>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 h-[20vh] w-full" style={{backgroundImage: "linear-gradient(#000 12%,transparent)"}}></div>
            <div className="absolute bottom-0 left-0 h-[20vh] w-full" style={{backgroundImage:"linear-gradient(transparent,#000)"}}></div>
        </div>
    </div>
  )
}

export default index