import React from "react";
import { Navbar } from "./src/components/Navbar";
import { Hero } from "./src/pages/Hero";
import { About } from "./src/pages/About";
import { Stats } from "./src/pages/Stats";
import { Process } from "./src/pages/Process";
import { Portfolio } from "./src/pages/Portfolio";
import { Clients } from "./src/pages/Clients";
import { Blog } from "./src/pages/Blog";
import { Footer } from "./src/pages/Footer";
import { ParallaxText } from "./src/components/ParallaxText";

function App() {
  return (
    <div className="relative selection:bg-[#a8ff35] selection:text-black">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <ParallaxText baseVelocity={-2}>
          Software Development - SaaS & AI Tools - Academic Research - Graphic
          Design -
        </ParallaxText>
        <About />
        <Stats />
        <Portfolio />
        <Process />
        <ParallaxText baseVelocity={2}>
          Transparency • Innovation • Accountability • Performance •
        </ParallaxText>
        {/* <Clients /> */}
        <Blog />
      </main>

      <Footer />
    </div>
  );
}

export default App;
