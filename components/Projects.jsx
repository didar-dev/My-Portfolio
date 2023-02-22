"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
const PROJECTS = [
  {
    id: 0,
    title: "Gps Plus",
    description:
      "A company that provides GPS tracking services, I redesigned their website and added some new features.",
    link: "https://gpsplus.netlify.app/",
    Logo: "https://gpsplus.netlify.app/images/Logo.png",
    Image: "../Images/Projects/GpsPlus.png",
    ButtonText: "Still in development",
  },
];
export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {PROJECTS.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          className="grid gap-8 items-start justify-center "
        >
          <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            className="relative group w-80 "
          >
            <div
              className="relative rounded-lg  backdrop-blur-sm bg-white/5 border-[#ffffff72] leading-none flex flex-col items-center justify-center 
                border-[1px]
                "
            >
              <div className="h-32">
                <img
                  className="h-auto w-auto"
                  src={project.Image}
                  alt={project.Name}
                />
              </div>
              <div className="h-40 m-2 md:m-4 flex flex-col items-center justify-center gap-2">
                <p className="text-[#d8d8d8] text-2xl font-semibold">
                  {project.title}
                </p>
                <p className="text-[#d8d8d8]  text-sm">{project.description}</p>
              </div>
              <div className=" backdrop-blur-sm bg-white/5 w-full py-2 flex items-center justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ffffff]  text-sm font-semibold flex items-center gap-2"
                >
                  {project.ButtonText}
                  <GoLinkExternal size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
