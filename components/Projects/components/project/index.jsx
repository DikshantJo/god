'use client';
import React from 'react'
import styles from './style.module.scss';
import Image from 'next/image';

// import Product from '../../../../../public/Home/product.jpg'
import Product from '../../../../../public/Home/Interior.jpg'

export default function index({index, title, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={`${styles.project} relative`}>
           
           <div className='relative h-[80%] w-full'>
                <Image src = {Product} alt='product' fill = {true} className='' style={{borderRadius:'20px'}}></Image>
            </div>

           <div>
                <h2>{title}</h2>
                <p>Design & Development</p>
           </div>
        </div>
    )
}
