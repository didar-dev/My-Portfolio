"use client";
import React, { Component } from 'react'
import { motion } from "framer-motion";

 
export default function Header() {
  return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2
         min-h-screen w-full">
          <div className="flex flex-col items-center justify-center">
            <motion.p
              className="text-3xl sm:text-5xl  
                font-semibold text-[#ffffff] text-center px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Didar Abdulkhaliq
            </motion.p>
            <motion.p
              className="text-1xl sm:text-2xl font-semibold text-[#ffffff] text-center px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              className="w-5/6 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 2xl:w-1/2 text-[#ffffff] text-center px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              An enthusiastic Developer with self-earned experience in both
              front-end and back-end development. Experienced with all stages of
              the development cycle for dynamic web projects
            </motion.p>

            <div className="flex flex-row gap-2 p-2">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onClick={() => {
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#ffffff] hover:bg-[#ffffff] text-black font-bold py-2 px-4 rounded-full
               mt-4 m-1"
              >
                Projects
              </motion.button>
              <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onClick={() => {}}
                className="bg-[#ffffff] hover:bg-[#ffffff] text-black font-bold py-2 px-4 rounded-full
              mt-4 m-1"
              >
                Resume
              </motion.button>
            </div>
          </div>
          <motion.div  
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }} className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-full p-4 bg-gradient-to-tr from-gray-800 to-gray-900 opacity-90">
              <div className="flex flex-col items-center justify-center bg-gray-800 rounded-full">
                <img
                  src="/Images/Didar/Didar.png"
                  alt="Didar Abdulkhaliq"
                  className="rounded-full w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[500px] xl:h-[500px] 2xl:w-[500px] 2xl:h-[500px] "
                />
              </div>
            </div>
          </motion.div>
        </div>
    )
}