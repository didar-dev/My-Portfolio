"use client";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-3FW29S7XTM`}
        />
        <Script id="ga-script" strategy="lazyOnload">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3FW29S7XTM', {
        page_path: window.location.pathname,
      });
          `}
        </Script>
      </Head>

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
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
