"use client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Github from "../components/Github";
export default function Home() {
  return (
    <main className="bg-[#111111]">
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
    </main>
  );
}
