"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

import styles from '../app/styles/floater.module.css'

const FloaterBar = () => {


    const [social, setSocial] = useState(false);
    const [work,setWork] = useState(false);


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
    <div className='fixed left-1/2 right-1/2 -translate-x-1/2 w-[700px] h-[75px] flex justify-between items-center' style={{backgroundColor:'rgba(34, 34, 34, 0.80)', borderRadius:'12px',boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.12)',padding:'1vh',bottom:'5vh'}}>
        <div style={{width:'20%',height:'100%'}}>
            <Link className='h-full w-full flex justify-center items-center' style={{background:'black', borderRadius:'8px',color:'#fff'}} href="/work/test1"> Book now</Link>
        </div>
        <div className='flex justify-evenly items-center' style={{width:'78%',background:'rgba(0, 0, 0, 0.50);',borderRadius:'8px',height:'100%'}}>
            <div className="flex justify-center items-center" style={{padding:'8px 0', width:'18%',height:'100%'}} onClick = {workClick}>
                <Link className="flex items-center justify-center" style={{width:'100%',height:'100%',borderRadius:'6px',color:'#fff'}} href="./"> Work </Link>
            </div>
            <div className="flex justify-center items-center" style={{padding:'8px 0', width:'18%',height:'100%'}}>
                <Link className="flex items-center justify-center" style={{width:'100%',height:'100%',borderRadius:'6px',color:'#fff'}} href="./"> About </Link>
            </div>
            <div className="flex justify-center items-center" style={{padding:'8px 0', width:'18%',height:'100%'}}>
                <Link className="flex items-center justify-center" style={{width:'100%',height:'100%',borderRadius:'6px',color:'#fff'}} href="./"> Contact </Link>
            </div>
            <div className="flex justify-center items-center" style={{padding:'8px 0', width:'18%',height:'100%'}}>
                <Link className="flex items-center justify-center" style={{width:'100%',height:'100%',borderRadius:'6px',color:'#fff'}} href="./"> Services </Link>
            </div>
            <div className="flex justify-center items-center" style={{padding:'8px 0', width:'18%',height:'100%'}} onClick = {socialsClick}>
                <span className="flex items-center justify-center w-[100%] h-[100%] " style={{color:'#fff'}} > Socials </span>
            </div>
        </div>
        <div className={`${styles.GLSFloaterSlideUp} ${styles.GLSFloaterSlideUpSocial} ${social && styles.GLSFloaterSlideUpAfter}`}>

        </div>
        <div className={`${styles.GLSFloaterSlideUp} ${work && styles.GLSFloaterSlideUpAfter}`}>

        </div>
    </div>
  )
}

export default FloaterBar