"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.p
        className="text-3xl text-[#ffffff] "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        Transition={{ duration: 1 }}
      >
        No Public Projects Yet :( Check Back Later!
      </motion.p>
    </div>
  );
}
