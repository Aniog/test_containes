import { Hero } from "../components/home/Hero";
import { TrustPoints } from "../components/home/TrustPoints";
import { Services } from "../components/home/Services";
import { SourcingProcess } from "../components/home/SourcingProcess";
import { ProblemsWeSolve } from "../components/home/ProblemsWeSolve";
import { FAQ } from "../components/home/FAQ";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof ImageHelper !== 'undefined') {
      try {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch (e) {
        console.error("Image loading error:", e);
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <Hero />
      <TrustPoints />
      <Services />
      <SourcingProcess />
      <ProblemsWeSolve />
      <FAQ />
    </div>
  );
}

export default Home;
