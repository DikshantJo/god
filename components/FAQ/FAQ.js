import { useState } from 'react';

import styles from './page.module.scss'

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border rounded-md p-4 my-2 ${styles.FAQContainer}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">{question}</h2>
        <button
          className="transition transform hover:scale-105"
          onClick={toggleAccordion}
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
};

export default FaqItem;
