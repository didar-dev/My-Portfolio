"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function About() {
  const Educations = [
    {
      id: 1,
      title: "Diploma in Computer Science - Gasha Institute / 2021 - Present",
      description:
        "I'm currently studying at Gasha Institute, I'm in my 2nd year of my diploma in Computer Science.",
    },
  ];
  const Experiences = [
    {
      id: 1,
      title: "Full Stack Developer as Freelancer / 2021 - Present",
    },
  ];
  return (
    <div id="about" className="min-h-fit h-full py-4">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-18 w-full h-fit">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center gap-4 justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl  font-semibold text-[#ffffff] text-center "
            >
              Hi,<span className="text-[#ffffff]"> I'm </span> Didar Abdulkhaliq
            </motion.p>
            <motion.p
              className="text-1xl p-2 font-semibold  text-white w-3/4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              I'm a Full Stack Developer, I love to build things that live on
              the internet, whether that be websites, applications, or anything
              in between. My goal is to always build products that provide
              pixel-perfect, performant experiences. I'm a self-taught developer
              with a passion for learning new technologies and building cool
              stuff.
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col h-full p-10 gap-10 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            Transition={{ duration: 2 }}
            className="relative p-4 border-[1px]  backdrop-blur-md bg-white/5
               border-[#ffffff72] rounded-lg leading-none
                flex transition duration-1000 group-hover:duration-200
                 animate-tilt flex-col gap-2
                  "
          >
            <motion.p
              className="text-3xl font-semibold text-[#ffffff] "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              Transition={{ duration: 2 }}
            >
              Education
            </motion.p>
            {Educations.map((Education, index) => (
              <motion.div
                key={Education.id}
                className="flex flex-row gap-2 p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: index * 1 }}
              >
                <div className="flex flex-col">
                  <p className="text-md  text-[#ffffff93] ">
                    {Education.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            Transition={{ duration: 2 }}
            className="relative p-4 border-[1px]  backdrop-blur-md bg-white/5
               border-[#ffffff72] rounded-lg leading-none
                flex transition duration-1000 group-hover:duration-200
                 animate-tilt flex-col gap-2
                  "
          >
            <motion.p
              className="text-3xl font-semibold text-[#ffffff] "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              Transition={{ duration: 2 }}
            >
              Experience
            </motion.p>
            {Experiences.map((Experience, index) => (
              <motion.div
                key={Experience.id}
                className="flex flex-row gap-2 p-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: index * 1 }}
              >
                <div className="flex flex-col">
                  <p className="text-md  text-[#ffffff93] ">
                    {Experience.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
