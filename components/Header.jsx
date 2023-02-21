"use client";
import React from "react";

export default function Header() {
  const OpenResume = () => {
    window.open("../Resume/Didar.pdf", "_blank");
  };
  return (
    <div className="gap-2 min-h-screen w-full flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl sm:text-5xl font-semibold text-[#ffffff] text-center px-2">
          Didar Abdulkhaliq
        </p>
        <p
          className="text-1xl sm:text-2xl font-semibold text-[#ffffff] text-center px-2
              bg-gradient-to-r bg-clip-text from-[#ffffff] to-[#ffffff]"
        >
          Full Stack Developer
        </p>
        <p className="w-3/4 sm:w-2/4 md:w-3/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4 text-[#ffffff] text-center px-2">
          An enthusiastic Developer with self-earned experience in both
          front-end and back-end development. Experienced with all stages of the
          development cycle for dynamic web projects
        </p>

        <div className="flex flex-row gap-6  p-2 pt-6">
          <div className="grid gap-8 items-start justify-center">
            <button
              className="relative px-4 py-2 border-[1px]  backdrop-blur-sm bg-white/5
                border-[#ffffff72] rounded-lg
                leading-none flex items-center divide-x divide-gray-600
                 "
              onClick={() => {
                document.getElementById("contact").scrollIntoView();
              }}
            >
              <span className="text-white font-bold">Contact</span>
            </button>
          </div>
          <div className="grid gap-8 items-start justify-center">
            <button
              className="relative px-4 py-2 border-[1px]  backdrop-blur-sm bg-white/5
              border-[#ffffff72] rounded-lg
              leading-none flex items-center divide-x divide-gray-600
               "
              onClick={() => {
                OpenResume();
              }}
            >
              <span className="text-white font-bold">Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
