"use client";
import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Github() {
  return (
    <div className="flex flex-col items-center py-4 ">
      <div className="flex flex-col items-center 800 justify-center">
        <a
          href="https://github.com/didar-dev"
          className="p-2 rounded-xl flex flex-row items-center gap-2 bg-gradient-to-r from-[#ff9e0c] to-[#ff9e0c]"
        >
          <FaGithub className="text-4xl text-[#ffffff] hover:text-[#ffffff] hover:scale-110 transition duration-300 ease-in-out transform" />
          <p className="text-xl bg-gradient-to-r bg-clip-text  text-[#ffffff] ">
            My Github Profile
          </p>
        </a>
      </div>
    </div>
  );
}
