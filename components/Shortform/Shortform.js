import React, { useState } from "react";
// import { FcCheckmark } from "react-icons/fc";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col p-10">
      <div className=" flex flex-col justify-center items-center text-4xl font-extrabold text-gray-800">
        Contact
        <div className="text-3xl font-extrabold text-gray-800 text-center p-10">
          We are here to help, get in touch with us.
        </div>
      </div>

      <div className="items-center w-full md:w-1/3 self-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (submitted) {
              return;
            }

            setName("");
            setEmail("");
            setMessage("");

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
              }),
            });
          }}
        >
          <div className="flex flex-col gap-5">
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
                className="border-[1px] border-gray-300 rounded-xl p-5"
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
                className="border-[1px] border-gray-300 rounded-xl p-5"
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
                className="border-[1px] border-gray-300 rounded-xl p-5"
              />
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
