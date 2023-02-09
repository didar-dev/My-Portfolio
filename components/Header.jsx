"use client";
import React, { useEffect } from "react";
export default function Header() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2
         min-h-screen w-full"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl sm:text-5xl font-semibold text-[#ffffff] text-center px-2">
          Didar Abdulkhaliq
        </p>
        <p
          className="text-1xl sm:text-2xl font-semibold text-[#ff9e0c] text-center px-2
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
          <div class="grid gap-8 items-start justify-center">
            <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button
                class="relative px-4 py-2 bg-black border-[1px] border-orange-600 rounded-lg
               leading-none flex items-center divide-x divide-gray-600
               hover:bg-orange-600 hover:text-white
                transition duration-1000 group-hover:duration-200 animate-tilt
               "
                onClick={() => {
                  document.getElementById("contact").scrollIntoView();
                }}
              >
                <span class="text-white font-bold">Contact</span>
              </button>
            </div>
          </div>
          <div class="grid gap-8 items-start justify-center">
            <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button
                class="relative px-4 py-2 bg-black border-[1px] border-orange-600 rounded-lg
               leading-none flex items-center divide-x divide-gray-600
               hover:bg-orange-600 hover:text-white
                transition duration-1000 group-hover:duration-200 animate-tilt
               "
                onClick={() => {
                  document.getElementById("projects").scrollIntoView();
                }}
              >
                <span class="text-white font-bold">Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center rounded-full p-4 bg-gradient-to-tr from-gray-800 to-gray-900 opacity-90">
          <div className="flex flex-col items-center justify-center bg-black rounded-full">
            <img
              src="/Images/Didar/Didar.png"
              alt="Didar Abdulkhaliq"
              className="rounded-full w-auto h-[280px] md:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
