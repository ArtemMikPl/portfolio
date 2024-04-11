import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";


export default function Home() {
  return (
      <>
          <Header/>
          <main>
              <Hero/>
              <About/>
              <Skills/>
          </main>
        <div className="background-animation">
          <div id="ball-one"></div>
          <div id="ball-two"></div>
          <div id="ball-three"></div>
        </div>

      </>
  );
}
