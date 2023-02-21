"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
export default function Skills() {
  const skills = [
    {
      id: 0,
      Name: "React",
      Logo: "/Images/Skills/React.png",
      Category: "Front-End",
    },
    {
      id: 1,
      Name: "React Native",
      Logo: "/Images/Skills/React.png",
      Category: "Front-End",
    },
    {
      id: 2,
      Name: "Next.js",
      Logo: "/Images/Skills/nextjs.png",
      Category: "Front-End",
    },
    {
      id: 3,
      Name: "JavaScript",
      Logo: "/Images/Skills/JavaScript.png",
      Category: "Front-End",
    },
    {
      id: 4,
      Name: "TypeScript",
      Logo: "/Images/Skills/TypeScript.png",
      Category: "Front-End",
    },
    {
      id: 5,
      Name: "Node.js",
      Logo: "/Images/Skills/Node.png",
      Category: "Back-End",
    },
    {
      id: 6,
      Name: "Express.js",
      Logo: "/Images/Skills/Express.png",
      Category: "Back-End",
    },
    {
      id: 7,
      Name: "MongoDB",
      Logo: "/Images/Skills/MongoDB.png",
      Category: "Back-End",
    },
    {
      id: 8,
      Name: "Git",
      Logo: "/Images/Skills/Git.png",
      Category: "Tools",
    },
    {
      id: 9,
      Name: "GitHub",
      Logo: "/Images/Skills/GitHub.png",
      Category: "Tools",
    },
    {
      id: 10,
      Name: "Tailwind CSS",
      Logo: "/Images/Skills/Tailwind.png",
      Category: "Front-End",
    },
    {
      id: 11,
      Name: "AWS Amplify",
      Logo: "/Images/Skills/awsAmplify.png",
      Category: "Tools",
    },
    {
      id: 12,
      Name: "Framer Motion",
      Logo: "/Images/Skills/FramerMotion.webp",
      Category: "Front-End",
    },
    {
      id: 13,
      Name: "PostgreSQL",
      Logo: "/Images/Skills/PostgreSQL.svg",
      Category: "Back-End",
    },
  ];
  return (
    <motion.div
      className="flex flex-col items-center min-h-screen pb-16"
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
        <div className="mt-6">
          <p className="text-2xl mb-2 font-semibold text-[#ffffff]">
            Frontend Development
          </p>
          <motion.div
            className="flex flex-col items-center justify-center w-full h-full gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {skills
                .filter((skill) => skill.Category === "Front-End")
                .map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="grid gap-4 items-start justify-center"
                  >
                    <div
                      className="relative p-2 border-[1px]  backdrop-blur-md bg-white/5 w-28 h-28 border-[#ffffff72] rounded-lg leading-none items-center justify-center
               flex transition duration-1000 group-hover:duration-200
                animate-tilt flex-col gap-4
                 "
                    >
                      <motion.img
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="h-10"
                        height="10px"
                        width="auto"
                        src={skill.Logo}
                        alt={skill.Name}
                      />
                      <p className="text-[#d8d8d8]  text-sm">{skill.Name}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
        <div className="mt-6">
          <p className="text-2xl mb-2 font-semibold text-[#ffffff]">
            Backend Development
          </p>
          <motion.div
            className="flex flex-col items-center justify-center w-full h-full gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {skills
                .filter((skill) => skill.Category === "Back-End")
                .map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="grid gap-4 items-start justify-center"
                  >
                    <div
                      className="relative p-2 border-[1px]  backdrop-blur-md bg-white/5 w-28 h-28 border-[#ffffff72] rounded-lg leading-none items-center justify-center
               flex transition duration-1000 group-hover:duration-200
                animate-tilt flex-col gap-4
                 "
                    >
                      <motion.img
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="h-10"
                        height="10px"
                        width="auto"
                        src={skill.Logo}
                        alt={skill.Name}
                      />
                      <p className="text-[#d8d8d8]  text-sm">{skill.Name}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
        <div className="mt-6">
          <p className="text-2xl mb-2 font-semibold text-[#ffffff]">
            Version Control and Deployment
          </p>
          <motion.div
            className="flex flex-col items-center justify-center w-full h-full gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {skills
                .filter((skill) => skill.Category === "Tools")
                .map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="grid gap-4 items-start justify-center"
                  >
                    <div
                      className="relative p-2 border-[1px]  backdrop-blur-md bg-white/5 w-28 h-28 border-[#ffffff72] rounded-lg leading-none items-center justify-center
               flex transition duration-1000 group-hover:duration-200
                animate-tilt flex-col gap-4
                 "
                    >
                      <motion.img
                        initial={{ opacity: 0 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="h-10"
                        height="10px"
                        width="auto"
                        src={skill.Logo}
                        alt={skill.Name}
                      />
                      <p className="text-[#d8d8d8]  text-sm">{skill.Name}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
