import React, { Component } from "react";
import { FaFacebook, FaPhone, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <div className="flex flex-col items-center py-4 ">
      <div className="flex flex-col items-center justify-center ">
        <h3 className="text-xl  text-[#ffffff] text-center px-2">
          I'm currently looking for new opportunities and would love to hear
          from you!
        </h3>
      </div>
      <div id="links" className="flex flex-row gap-2 p-2">
        <a
          href="https://www.facebook.com/DidarDotdev/"
          className="p-3 bg-gradient-to-r from-[#ff9e0c] to-[#ff9e0c] rounded-full"
        >
          <FaFacebook className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
        </a>

        <a
          href="https://www.linkedin.com/in/didar-abdulkhaliq-65022221b/"
          className="p-3 bg-gradient-to-r from-[#ff9e0c] to-[#ff9e0c] rounded-full"
        >
          <FaLinkedin className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
        </a>
        <a
          href="https://twitter.com/Didarokk"
          className="p-3 bg-gradient-to-r from-[#ff9e0c] to-[#ff9e0c] rounded-full"
        >
          <FaTwitter className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
        </a>
        <a
          href="tel:+964773 454 8667"
          className="p-3 bg-gradient-to-r from-[#ff9e0c] to-[#ff9e0c] rounded-full"
        >
          <FaPhone className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
        </a>
        <a
          href="mailto:didar0xalil@gmail.com"
          className="p-3 bg-gradient-to-r from-[#ff9e0c] to-[#ff9e0c] rounded-full"
        >
          <MdEmail className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
        </a>
      </div>
    </div>
  );
}
