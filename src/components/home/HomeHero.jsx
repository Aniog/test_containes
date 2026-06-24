import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative bg-graphite text-bone overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-1f7c3a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/95 to-graphite/70" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-8">
          ARTITECT MACHINERY · est. 1986
        </p>

        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl font-light leading-[1.05] max-w-4xl"
        >
          Precision sheet metal folding,{" "}
          <span className="italic text-brass">refined</span> through forty
          years of practice.
        </h1>

        <p
          id="hero-subtitle"
          className="mt-8 max-w-2xl text-lg md:text-xl text-mist/85 font-light leading-relaxed"
        >
          We design double folding machines, sheet metal folders and CNC metal
          folding machines for fabricators who measure success in microns and
          decades.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-brass-soft transition-colors"
          >
            View the machines
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-bone/30 text-bone px-7 py-4 text-xs uppercase tracking-[0.2em] hover:bg-bone/10 transition-colors"
          >
            Talk to an engineer
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl">
          {[
            { v: "40+", l: "Years building folders" },
            { v: "62", l: "Countries shipped to" },
            { v: "± 0.05°", l: "Repeatability, ATF series" },
            { v: "5 yr", l: "Mechanical warranty" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-serif text-4xl text-bone">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-mist/60">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
