'use client'
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import React from "react";


export default function Home() {
  return (
      <>
          <Header/>
          <main>
              <Hero/>
              <About/>
              <Skills/>
              <Portfolio/>
              <Contact/>

          </main>
          <Footer/>
        <div className="background-animation">
          <div id="ball-one"></div>
          <div id="ball-two"></div>
          <div id="ball-three"></div>
        </div>

      </>
  );
}
