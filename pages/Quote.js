import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CareersForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(data) {
    const formdata = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "careerCV") {
        formdata.set(key, value[0]);
      } else {
        formdata.set(key, value);
      }
    });

    let config = {
      method: "POST",
      url: "/api/Book",
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    };

    try {
      const res = await axios(config);
      if (res.status === 200) {
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="pt-3 mt-24">
      <div className="text-center">
        <h2 className="text-3xl text-primary font-bold mb-4">
          Careers
        </h2>
        <p className="text-gray-600">
          We are always looking for formal, friendly professionals to expand
          our operation. Please send us your details using the contact form
          below, and we will get in touch.
        </p>
      </div>

      <div className="flex justify-center mt-8">
        <form
          className="text-primary mb-3 contact-form w-full max-w-md"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="careerName" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="careerName"
              className={`mt-1 p-2 border rounded-md w-full ${
                errors.careerName ? "border-red-500" : ""
              }`}
              placeholder="Enter your name"
              {...register("careerName", {
                required: { value: true, message: "Your Name is required" },
              })}
            />
            {errors?.careerName && (
              <p className="mt-2 text-red-500">{errors?.careerName?.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="careerEmail" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="careerEmail"
              className={`mt-1 p-2 border rounded-md w-full ${
                errors.careerEmail ? "border-red-500" : ""
              }`}
              placeholder="Enter your email"
              {...register("careerEmail", {
                required: { value: true, message: "Your Email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors?.careerEmail && (
              <p className="mt-2 text-red-500">{errors?.careerEmail?.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="careerTelephone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="careerTelephone"
              className={`mt-1 p-2 border rounded-md w-full ${
                errors.careerTelephone ? "border-red-500" : ""
              }`}
              placeholder="Enter your phone number"
              {...register("careerTelephone", {
                required: {
                  value: true,
                  message: "Your Phone Number is required",
                },
                pattern: {
                  value:
                    /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/,
                  message: "Invalid Phone Number",
                },
              })}
            />
            {errors?.careerTelephone && (
              <p className="mt-2 text-red-500">{errors?.careerTelephone?.message}</p>
            )}
          </div>

           {/* Website */}
           <div className="mb-4">
            <label htmlFor="websiteURL" className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              type="text"
              id="websiteURL"
              className={`mt-1 p-2 border rounded-md w-full ${
                errors.websiteURL? "border-red-500" : ""
              }`}
              placeholder="Enter website"
              {...register("websiteURL", {
                required: {
                  value: false,
                  message: "Enter the URL to your website if you have one.",
                }
              })}
            />
            {errors?.websiteURL && (
              <p className="mt-2 text-red-500">{errors?.websiteURL?.message}</p>
            )}
          </div>

            {/*Instagram */}
            <div className="mb-4">
            <label htmlFor="Insta" className="block text-sm font-medium text-gray-700">
               Instagram
            </label>
            <input
              type="text"
              id="Insta"
              className={`mt-1 p-2 border rounded-md w-full ${
                errors.Insta? "border-red-500" : ""
              }`}
              placeholder="Enter website"
              {...register("Insta", {
                required: {
                  value: false,
                  message: "Enter your Instagram",
                }
              })}
            />
            {errors?.Insta && (
              <p className="mt-2 text-red-500">{errors?.Insta?.message}</p>
            )}
          </div>

          {/* Badge Number */}
          <div className="mb-4">
            <label htmlFor="careerBadge" className="block text-sm font-medium text-gray-700">
              Badge Number
            </label>
            <input
              type="text"
              id="careerBadge"
              className={`mt-1 p-2 border rounded-md w-full ${
                errors.careerBadge ? "border-red-500" : ""
              }`}
              placeholder="Enter your badge number"
              {...register("careerBadge", {
                required: {
                  value: true,
                  message: "Your Badge Number is required",
                },
                maxLength: {
                  value: 16,
                  message: "Must be a 16 digit number",
                },
                minLength: {
                  value: 16,
                  message: "Must be a 16 digit number",
                },
              })}
            />
            {errors?.careerBadge && (
              <p className="mt-2 text-red-500">{errors?.careerBadge?.message}</p>
            )}
          </div>

          {/* Your CV */}
          <div className="mb-4">
            <label htmlFor="careerCV" className="block text-sm font-medium text-gray-700">
              Your CV
            </label>
            <input
              type="file"
              id="careerCV"
              multiple
              className={`mt-1 p-2 border rounded-md w-full ${
                errors.careerCV ? "border-red-500" : ""
              }`}
              {...register("careerCV", {
                required: {
                  value: true,
                  message: "Your CV is required",
                },
              })}
            />
            {errors?.careerCV && (
              <p className="mt-2 text-red-500">{errors?.careerCV?.message}</p>
            )}
          </div>

          {/* Message (optional) */}
          <div className="mb-4">
            <label htmlFor="careerMessage" className="block text-sm font-medium text-gray-700">
              Message (optional)
            </label>
            <textarea
              id="careerMessage"
              rows="3"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Leave a message here"
              {...register("careerMessage")}
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 text-black bg-primary rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary border-black"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
