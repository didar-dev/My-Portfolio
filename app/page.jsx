"use client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(../Images/Background.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
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
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
