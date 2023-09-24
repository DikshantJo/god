"use client"
// import { FcCheckmark } from "react-icons/fc";
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const options = ['Still life product photography', 'General videography', 'Lifestyle location shoot', 'Model Studio Shoot', 'Music videos','Wedding films' ]; // Replace with your checkbox options

  const handleCheckboxChange = (option) => {
    if (selectedCheckboxes.includes(option)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== option));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, option]);
    }
    console.log('Selected Checkboxes:', selectedCheckboxes);
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Now, `selectedCheckboxes` contains an array of selected checkbox values.
  //   console.log('Selected Checkboxes:', selectedCheckboxes);

  //   // Send `selectedCheckboxes` array to your API.
  //   // You can use fetch or any other method to send the data.
  // };

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
          //   setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 4000)
      }
    )()
  }, [])


  return (
    <div className="flex p-10 relative">
      <div className="w-1/2 flex flex-col justify-center items-center text-4xl font-extrabold text-white bg-black fixed top-0 left-0 lg:h-[100vh]">
        Contact
        <div className="text-3xl font-extrabold text-white text-center p-10">
          We are here to help, get in touch with us.
        </div>
      </div>
      <div className='w-1/2 flex-col lg:h-[100vh]' ></div>
      <div className="sm:w-full md:w-full lg:w-1/2 flex items-center justify-center">
        <form
        className='w-3/4 flex flex-col justify-center items-center mt-16'
          onSubmit={(e) => {
            e.preventDefault();

            if (submitted) {
              return;
            }
            setName("");
            setEmail("");
            setMessage("");
            setSelectedCheckboxes([]);

            setSubmitted(true);
            console.log(name, email, message);
            fetch("/api/sendEmail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                message,
                selectedCheckboxes
              }),
            });
          }}
        >
          <div className="flex flex-col w-full gap-5">
            <h2>Let's connect</h2>
            <div className="flex flex-col gap-5">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name="name"
                id="name"
                required
                className="border-[1px] border-gray-300 rounded-xl h-[55px]"
              />
            </div> 
            <div className="flex flex-col gap-5">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                name="email"
                id="email"
                required
                className="border-[1px] border-gray-300 rounded-xl h-[55px]"
              />
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="name">Website or Instagram URL</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                name="name"
                id="URL"
                required
                className="border-[1px] border-gray-300 rounded-xl h-[55px]"
              />
            </div> 
            {/* <div className="flex flex-col gap-5">
              <h2>Type of Services</h2>
              <label><input type="checkbox" value = "Still life product photography" onChange={handleCheckboxChange} /> Still life product photography </label> 
              <label><input type="checkbox"/> General videography </label> 
              <label><input type="checkbox"/> Lifestyle location shoot </label> 
              <label><input type="checkbox"/> Model Studio Shoot </label> 
              <label><input type="checkbox"/> Music videos </label> 
              <label><input type="checkbox"/>Wedding films</label> 
            </div> */}
            <div className='flex flex-col gap-5'>
                {options.map((option) => (
                  <label key={option}>
                    <input
                      type="checkbox"
                      checked={selectedCheckboxes.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    {option}
                  </label>
                ))}
            </div>
            <div className="flex flex-col gap-5">
              <label htmlFor="name">Message</label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                id="message"
                required
                className="border-[1px] border-gray-300 rounded-xl p-5"
              />
            </div>
            <div className="flex flex-col gap-5">
              <button
                type="submit"
                className={
                  submitted
                    ? "bg-green-200 rounded-xl p-5 flex items-center justify-center gap-5 text-green-600"
                    : "bg-blue-500 text-white rounded-xl p-5"
                }
              >
                {submitted && <h1>Submitted</h1>}
                {submitted ? "Successfully Submitted" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
