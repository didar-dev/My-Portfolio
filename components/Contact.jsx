import React, { Component } from "react";
import { FaFacebook, FaPhone, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-1 lg:grid-cols-2 gap-18 w-4/5 mx-auto">
      <div className="flex flex-col w-full justify-center items-center p-2 gap-2">
        <p className="text-xl  text-[#ffffff] text-center px-2">
          I'm currently looking for new opportunities and would love to hear
          from you!
        </p>
        <div id="links" className="flex flex-row gap-2 p-2">
          <a
            href="https://www.facebook.com/DidarDotdev/"
            aria-label="Facebook Profile"
            className="p-3 bg-gradient-to-r from-[#ffffff56] to-[#ffffff] rounded-full"
          >
            <FaFacebook className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/didar-abdulkhaliq-65022221b/"
            aria-label="LinkedIn Profile"
            className="p-3 bg-gradient-to-r from-[#ffffff56] to-[#ffffff] rounded-full"
          >
            <FaLinkedin className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </a>
          <a
            href="https://twitter.com/Didarokk"
            aria-label="Twitter Profile"
            className="p-3 bg-gradient-to-r from-[#ffffff56] to-[#ffffff] rounded-full"
          >
            <FaTwitter className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </a>
          <a
            href="tel:+964773 454 8667"
            aria-label="Phone Number"
            className="p-3 bg-gradient-to-r from-[#ffffff56] to-[#ffffff] rounded-full"
          >
            <FaPhone className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </a>
          <a
            href="mailto:didar0xalil@gmail.com"
            aria-label="Email Address"
            className="p-3 bg-gradient-to-r from-[#ffffff56] to-[#ffffff] rounded-full"
          >
            <MdEmail className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center p-2 gap-2">
        <form
          action="https://formspree.io/f/xnqkzqjy"
          method="POST"
          className="flex bg-[#ffffff63] 
           flex-col w-full  justify-center 
           items-center p-4 gap-2
            rounded-md"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full h-12 px-2 text-xl text-[#ffffff] bg-black border-2 border-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full h-12 px-2 text-xl text-[#ffffff] bg-black border-2 border-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-transparent"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            className="w-full h-48 px-2 text-xl text-[#ffffff] bg-black border-2 border-[#ffffff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full h-12 px-2 text-xl text-[#ffffff] bg-[#ffffff] border-2 border-[#ffffff] rounded-md hover:bg-[#ffffff] hover:text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-transparent"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
