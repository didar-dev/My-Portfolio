"use client";
import React, { Component, useState } from "react";
import { FaFacebook, FaPhone, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { motion } from "framer-motion";
export default function Contact() {
  const [issending, setIssending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setIssending(true);
    fetch("/api/Contact", {
      method: "POST",
      body: JSON.stringify({
        Name: name,
        From: from,
        Message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setIssending(false);
          setIsSent(true);
        } else {
          setIssending(false);
          setIsSent(false);
        }
      });
  };

  return (
    <div className="grid grid-cols-1 h-screen md:grid-cols-1 lg:grid-cols-2 gap-18 w-4/5 mx-auto">
      <div className="flex flex-col w-full justify-center items-center p-2 gap-2">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-xl  text-[#ffffff] text-center px-2"
        >
          I'm currently looking for new opportunities and would love to hear
          from you!
        </motion.p>
        <div id="links" className="flex flex-row gap-2 p-2">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            href="https://www.facebook.com/DidarDotdev/"
            aria-label="Facebook Profile"
            className="p-3  bg-white/5   border-[#ffffff72] border-2  rounded-full"
          >
            <FaFacebook className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            href="https://www.linkedin.com/in/didar-abdulkhaliq-65022221b/"
            aria-label="LinkedIn Profile"
            className="p-3  bg-white/5   border-[#ffffff72] border-2  rounded-full"
          >
            <FaLinkedin className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            href="https://twitter.com/Didarokk"
            aria-label="Twitter Profile"
            className="p-3  bg-white/5   border-[#ffffff72] border-2  rounded-full"
          >
            <FaTwitter className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            href="tel:+964773 454 8667"
            aria-label="Phone Number"
            className="p-3  bg-white/5   border-[#ffffff72] border-2  rounded-full"
          >
            <FaPhone className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            href="mailto:didar0xalil@gmail.com"
            aria-label="Email Address"
            className="p-3  bg-white/5   border-[#ffffff72] border-2  rounded-full"
          >
            <MdEmail className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          </motion.a>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center p-2 gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex  backdrop-blur-md  bg-white/5   border-[#ffffff72] border-[1px] 
           flex-col w-full  justify-center 
           items-center p-4 gap-2 min-h-[468px] rounded-md"
        >
          {isSent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col w-full justify-center items-center p-2 gap-2"
            >
              <motion.p className="text-7xl  text-[#ffffff] text-center py-6">
                😍
              </motion.p>

              <motion.p className="text-xl  text-[#ffffff] text-center px-2">
                Your message has been sent successfully!
              </motion.p>

              <motion.button
                onClick={() => {
                  setIsSent(false);
                }}
                className="p-2  bg-white/5 mt-4 text-white border-[#ffffff72] border-2  rounded-md"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              method="POST"
              onSubmit={(e) => sendEmail(e)}
              className="flex flex-col w-full justify-center items-center p-2 gap-2"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full  bg-white/5   border-[#ffffff72] border-2  h-12 px-2 text-xl  text-[#ffffff] rounded-md focus:outline-none "
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full  bg-white/5   border-[#ffffff72] border-2  h-12 px-2 text-xl  text-[#ffffff] rounded-md focus:outline-none "
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                className="w-full  bg-white/5   border-[#ffffff72] border-2  px-2 text-xl  text-[#ffffff] rounded-md focus:outline-none "
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button
                type="submit"
                className="w-full h-12 px-2 text-xl text-black  bg-white   border-[#ffffff72] border-2 rounded-md"
                onClick={(e) => {
                  sendEmail(e);
                }}
              >
                Send
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
