"use client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Github from "../components/Github";
import Script from "next/script";

export default function Home() {
  return (
    <div className="bg-[#111111]">
      <Script>
        {`   window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-3FW29S7XTM', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3FW29S7XTM"
      ></Script>
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
    </div>
  );
}
