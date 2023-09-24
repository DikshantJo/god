import FaqItem from '../FAQ/FAQ';
import Link from 'next/link';

const FAQ = () => {
  const faqData = [
    {
      question: 'What is Tailwind CSS?',
      answer:
        'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
    },
    {
        question: 'What is Tailwind CSS?',
        answer:
          'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
      },
      {
        question: 'What is Tailwind CSS?',
        answer:
          'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
      },
      {
        question: 'What is Tailwind CSS?',
        answer:
          'Tailwind CSS is a utility-first CSS framework that allows you to quickly build custom user interfaces.'
      },
    // Add more FAQ items
  ];

  return (
    <div className="container flex flex-col md:flex md:flex-row mx-auto my-44 w-11/12 p-10" style={{background:'#000', minHeight:'50vh', borderRadius:'12px',color:'#fff'}}>
      <div className='w-1/4 mr-16'>
         <h1 className="text-4xl font-semibold mb-4">Frequently Asked Questions</h1>
      </div>
      <div className='w-1/2'>
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className='ml-14 w-1/4'>
        <h3>Still have questions, and want to get in touch with us?</h3>
        <button>
          <Link href="#"> Contact us </Link>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
