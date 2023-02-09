"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      id: 0,
      Name: "React",
      Logo: "/Images/Skills/React.png",
    },
    {
      id: 1,
      Name: "React Native",
      Logo: "/Images/Skills/React.png",
    },
    {
      id: 2,
      Name: "JavaScript",
      Logo: "/Images/Skills/JavaScript.png",
    },
    {
      id: 3,
      Name: "TypeScript",
      Logo: "/Images/Skills/TypeScript.png",
    },
    {
      id: 4,
      Name: "Node.js",
      Logo: "/Images/Skills/Node.png",
    },
    {
      id: 5,
      Name: "Express.js",
      Logo: "/Images/Skills/Express.png",
    },
    {
      id: 6,
      Name: "MongoDB",
      Logo: "/Images/Skills/MongoDB.png",
    },
    {
      id: 7,
      Name: "Git",
      Logo: "/Images/Skills/Git.png",
    },
    {
      id: 8,
      Name: "GitHub",
      Logo: "/Images/Skills/GitHub.png",
    },
    {
      id: 9,
      Name: "Tailwind CSS",
      Logo: "/Images/Skills/Tailwind.png",
    },
    {
      id: 10,
      Name: "AWS Amplify",
      Logo: "/Images/Skills/awsAmplify.png",
    },
  ];
  return (
    <motion.div
      className="flex flex-col items-center h-fit pb-16 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <motion.h1
        className="text-5xl font-semibold bg-gradient-to-r bg-clip-text  text-[#ffffff] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        Skills
      </motion.h1>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              class="grid gap-8 items-start justify-center"
            >
              <div class="relative group ">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-[#ff9e0c72] to-[#ff9e0c2a] rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div
                  class="relative  h-32 w-32  bg-black
                   border-[1px] border-[#ff9e0c72] rounded-lg
                leading-none flex flex-col items-center justify-center  gap-2
                 transition duration-1000 group-hover:duration-200 animate-tilt
                "
                >
                  <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="h-14"
                    height="14px"
                    width="auto"
                    src={skill.Logo}
                    alt={skill.Name}
                  />
                  <p className="text-[#d8d8d8]  text-sm">{skill.Name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
