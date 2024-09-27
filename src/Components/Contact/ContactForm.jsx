import React from "react";
import { NavLink } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="container mx-auto p-4 mb-8">
      <h2 className="text-4xl md:text-5xl font-bold text-left mb-7 mt-20">
        Who Are <span className="text-blue-600">We?</span>
      </h2>
      <p className="mb-8">Working Hours: Mon-Fri, 9 AM - 5 PM</p>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 w-1/2 focus:border-light-green-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 w-1/2 focus:border-light-green-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 w-1/2 focus:border-light-green-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            className="border p-2 w-1/2 focus:border-light-green-500 mb-10"
            rows="4"
          ></textarea>
        </div>
        <div className="mt-10">
          <NavLink
            to="/"
            className="bg-blue-500 text-white py-4 px-8  hover:bg-green-500 hover:scale-110 transition-transform duration-200"
          >
            Submit
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
