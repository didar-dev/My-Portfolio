"use client";
import React, { Component } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <motion.p
        className="text-3xl font-semibold text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        Transition={{ duration: 2 }}
      >
        No Public Projects Yet
      </motion.p>
      <motion.p
        className="text-xl text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        Transition={{ duration: 2 }}
      >
        Check back soon!
      </motion.p>
    </motion.div>
  );
}
