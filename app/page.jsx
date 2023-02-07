"use client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Github from "../components/Github";
import Splash from "../components/Splash";
import { useEffect, useState } from "react";
export default function Home() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2100);
    return () => {};
  }, []);
  return (
    <main className="bg-gray-900">
      {show ? (
        <Splash />
      ) : (
        <div>
          <div className="min-h-screen">
            <Navbar />
            <Header />
          </div>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <About />
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <Github />
          <div id="contact">
            <Contact />
          </div>
        </div>
      )}
    </main>
  );
}
