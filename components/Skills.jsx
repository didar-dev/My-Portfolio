"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

export default function Skills() {
  const skills = [ 
    {
      id: 0,
      Name: "React",
      Logo: "/Images/skills/React.png",
    },
    {
      id: 1,
      Name: "React Native",
      Logo: "/Images/skills/React.png",
    },
    {
      id: 2,
      Name: "JavaScript",
      Logo: "/Images/skills/JavaScript.png",
    },
    {
      id: 3,
      Name: "TypeScript",
      Logo: "/Images/skills/TypeScript.png",
    },
    {
      id: 4,
      Name: "Node.js",
      Logo: "/Images/skills/Node.png",
    },
    {
      id: 5,
      Name: "Express.js",
      Logo: "/Images/skills/Express.png",
    },
    {
      id: 6,
      Name: "MongoDB",
      Logo: "/Images/skills/MongoDB.png",
    },
    {
      id: 7,
      Name: "Git",
      Logo: "/Images/skills/Git.png",
    },
    {
      id: 8,
      Name: "GitHub",
      Logo: "/Images/skills/GitHub.png",
    },
    {
      id: 9,
      Name: "Tailwind CSS",
      Logo: "/Images/skills/Tailwind.png",
    },
    {
      id: 10,
      Name: "AWS Amplify",
      Logo: "/Images/skills/awsAmplify.png",
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
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="flex flex-col items-center justify-between
                rounded-2xl shadow-xl p-4 gap-2
                cursor-pointer bg-gray-800
                hover:shadow-xl  transition duration-500 ease-in-out"
              whileHover={{
                transition: { duration: 0.3 },
                boxShadow: "0px 0px 25px 0px rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.5 },
              }}
            >
              <motion.img
                src={skill.Logo}
                alt={skill.Name}
                className="h-[40px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 120 }}
              />
              <p className="text-[#d8d8d8]  text-sm">{skill.Name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

 
