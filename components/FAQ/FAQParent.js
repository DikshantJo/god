import FaqItem from '../FAQ/FAQ';
import Link from 'next/link';
import {useState, useEffect} from 'react'

import style from './page.module.scss'

import { getProjectFAQ } from '@/sanity/sanity-utils';




const FAQ = () => {
  const [FAQ, setFAQ] = useState([])

  useEffect(()=>{
    (
      async () => {
        const FAQI = await getProjectFAQ();
        setFAQ(FAQI)
        console.log(FAQI)
      }
    )()
   },[])


  // const faqData = [
  //   {
  //     question: 'What is Tailwind CSS?',
  //     answer:
  //       'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
  //   },
  //   {
  //       question: 'What is Tailwind CSS?',
  //       answer:
  //         'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
  //     },
  //     {
  //       question: 'What is Tailwind CSS?',
  //       answer:
  //         'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
  //     },
  //     {
  //       question: 'What is Tailwind CSS?',
  //       answer:
  //         'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
  //     },
  //   // Add more FAQ items
  // ];

  return (
    <div className="container flex flex-col md:flex md:flex-row md:flex-wrap mx-auto my-44 w-[90vw] p-10" style={{background:'#fff', borderRadius:'12px',color:'#000'}}>
      <div className='w-full md:w-full mr-16'>
         <h1 className="text-8xl font-semibold mb-12"><span>You have questions</span>
           <p className='flex items-center mt-3 text-[#777]'> <span>Wse have </span><img className='w-[50px] h-[50px] mx-4' src = '/message.png'></img> <span>answers</span> </p>
         </h1>
      </div>
      <div className='w-full  md:w-[65%]'>
        {FAQ.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className='w-full md:w-[30%] mt-6 flex flex-col items-end'>
        <Link className='w-full md:w-3/4 px-4 py-4 my-4 bg-white text-black text-center font-semibold rounded-lg border-solid border-2 border-black' href="./">
          Photography
        </Link>
        <Link className='w-full md:w-3/4 px-4 py-4 bg-white my-4 text-black text-center font-semibold rounded-lg border-solid border-2 border-black' href="./">
          Videography
        </Link>
        
        <span className='text-center block w-full md:w-3/4 text-[#777] my-4'>----- OR -----</span>

        <Link className='w-full md:w-3/4 px-4 py-4 bg-black my-4 text-white text-center font-semibold rounded-lg' href="./">
          Get a quote
        </Link>
        
      </div>
      <div className='w-full mt-10'>
        <div className={`flex justify-between items-center ${style.ContactFormContainer}`}>
          <div className='flex flex-col items-start'>
            <h3 className={`text-center ${style.ContactFormTitle}`}>Still have questions?</h3>
            <p className={`${style.contactFormText}`}>Can't find the answer you are looking for? Feel free to ask it directly from us.</p>
          </div>
          <button className='bg-black text-white px-4 py-3 rounded-xl mt-2 font-semibold'>
            <Link href="#"> Ask a Question </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
