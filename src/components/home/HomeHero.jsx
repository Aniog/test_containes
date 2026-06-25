import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-ink text-bone">
      <div
        className="absolute inset-0 opacity-60"
        data-strk-bg-id="home-hero-bg-7a2c91"
        data-strk-bg="[home-hero-subtitle] [home-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-ink/70 to-ink/90" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-44">
        <p className="text-xs uppercase tracking-[0.35em] text-accent-soft mb-8">
          Precision · Folding · Architecture
        </p>
        <h1
          id="home-hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] max-w-4xl text-bone"
        >
          Sheet metal,<br />
          folded with intent.
        </h1>
        <p
          id="home-hero-subtitle"
          className="mt-8 max-w-xl text-base md:text-lg text-bone/75 leading-relaxed"
        >
          ARTITECT Machinery designs double folding machines and sheet metal
          folders for studios that believe the bend matters as much as the line.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-3 bg-bone text-ink hover:bg-accent hover:text-bone transition px-8 py-4 text-xs uppercase tracking-[0.25em]"
          >
            Explore Machines
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-bone/40 text-bone hover:border-accent hover:text-accent-soft transition px-8 py-4 text-xs uppercase tracking-[0.25em]"
          >
            Request a Quote
          </Link>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl">
          {[
            { k: "30+", v: "Years of folding craft" },
            { k: "±0.05", v: "mm repeatability" },
            { k: "42", v: "Countries served" },
            { k: "100%", v: "Engineered in-house" },
          ].map((s) => (
            <div key={s.v} className="border-t border-bone/20 pt-4">
              <div className="font-serif text-3xl md:text-4xl text-bone">{s.k}</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-bone/60 mt-2">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
