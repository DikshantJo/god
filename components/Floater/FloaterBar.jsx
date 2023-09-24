"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

import styles from './style.module.scss'

const FloaterBar = ({activeTab, onSharedDataChange}) => {


    const [social, setSocial] = useState(false);
    const [work,setWork] = useState(false);


    // const handleTabClick = (tabIndex) => {
    //     updateSharedData(tabIndex);
    //   };

    
  const handleUpdateClick = (tabIndex) => {
    onSharedDataChange(tabIndex);
  };


    const socialsClick = () => {
        if(social){
            setSocial(false)
        }
        else {
            setSocial(true)
            setWork(false)
        }
    }

    const workClick = () => {
        if(work){
            setWork(false)
        }
        else {
            setWork(true)
            setSocial(false)
        }
    }

  return (
    <div className={`fixed left-1/2 right-1/2 -translate-x-1/2 w-[600px] h-[70px] flex justify-between items-center ${styles.GLSFloaterContainer}`} style={{backgroundColor:'rgba(34, 34, 34, 0.80)', borderRadius:'12px',boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.12)',bottom:'3vh'}}>
        <div style={{width:'20%',height:'100%'}}>
            <Link className='h-full w-full flex justify-center items-center' style={{background:'black', borderRadius:'8px',color:'#fff'}} href="/Quote"> Book now</Link>
        </div>
        <div className='flex justify-evenly items-center' style={{width:'79%',background:'rgba(0, 0, 0, 0.50)',borderRadius:'8px',height:'100%'}}>
            {/* <div className="flex justify-center items-center" style={{padding:'8px 0', width:'18%',height:'100%'}} onClick = {workClick}> */}
            <div className={`flex justify-center items-center`} style={{padding:'6px 0', width:'23%',height:'100%'}}   
            onClick={() => handleUpdateClick(1)}>
                <Link className={`flex items-center justify-center ${activeTab === 1 ? styles.activeTab : ''}`} style={{width:'100%',height:'100%',borderRadius:'6px',color:'#fff',border:'1px solid #4e4e4e'}} href=""> Product </Link>
            </div>
            <div className="flex justify-center items-center" style={{padding:'6px 0', width:'23%',height:'100%'}}  onClick={() => handleUpdateClick(2)}>
                <Link className={`flex items-center justify-center ${activeTab === 2 ? styles.activeTab : ''}`} style={{width:'100%',height:'100%',borderRadius:'6px',color:'#fff',border:'1px solid #4e4e4e'}} href=""> Interior </Link>
            </div>
            <div className="flex justify-center items-center" style={{padding:'6px 0', width:'23%',height:'100%'}}  onClick={() => handleUpdateClick(3)}>
                <Link className={`flex items-center justify-center ${activeTab === 3 ? styles.activeTab : ''}`} style={{width:'100%',height:'100%',borderRadius:'6px',color:'#fff',border:'1px solid #4e4e4e'}} href=""> Video </Link>
            </div>
            {/* <div className="flex justify-center items-center" style={{padding:'6px 0', width:'18%',height:'100%'}}>
                <Link className="flex items-center justify-center" style={{width:'100%',height:'100%',borderRadius:'6px',color:'#fff',border:'1px solid #4e4e4e'}} href="./"> About </Link>
            </div> */}
            {/* <div className="flex justify-center items-center" style={{padding:'8px 0', width:'18%',height:'100%'}} onClick = {socialsClick}> */}
            <div className="flex justify-center items-center" style={{padding:'6px 0', width:'23%',height:'100%'}}>
                <Link className={`flex items-center justify-center ${activeTab === 4 ? styles.activeTab : ''}`} style={{width:'100%',height:'100%',borderRadius:'6px',color:'#fff',border:'1px solid #4e4e4e'}} href="/contact-us"> Contact </Link>
            </div>
        </div>
        {/* <div className={`${styles.GLSFloaterSlideUp} ${styles.GLSFloaterSlideUpSocial} ${social && styles.GLSFloaterSlideUpAfter}`}>

        </div>
        <div className={`${styles.GLSFloaterSlideUp} ${work && styles.GLSFloaterSlideUpAfter}`}>

        </div> */}
    </div>
  )
}

export default FloaterBar