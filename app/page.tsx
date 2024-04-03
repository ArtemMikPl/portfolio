import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";


export default function Home() {
  return (
      <>
          <Header/>
          <main>
              <Hero/>
          </main>
        <div className="background-animation">
          <div id="ball-one"></div>
          <div id="ball-two"></div>
          <div id="ball-three"></div>
        </div>

      </>
  );
}
