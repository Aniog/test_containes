import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const HomeHero = () => {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink text-bone">
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          data-strk-bg-id="home-hero-bg-7c4a2e"
          data-strk-bg="[hero-subtitle] [hero-title] industrial sheet metal folding machine factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
        <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
      </div>

      {/* Top label */}
      <div className="absolute top-28 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center gap-3 text-bone/80">
          <span className="h-px w-10 bg-accent" />
          <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
            Sheet Metal Folding Machinery
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1
                id="hero-title"
                className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-tight text-bone"
              >
                Folded with
                <br />
                <span className="italic text-accentSoft">precision.</span>
                <br />
                Built to endure.
              </h1>
              <p
                id="hero-subtitle"
                className="mt-8 max-w-xl text-[17px] md:text-lg leading-relaxed text-silver"
              >
                ARTITECT MACHINERY engineers double folding machines and sheet
                metal folders for fabricators who measure quality in microns and
                careers in decades.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-3 bg-bone text-ink px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-accent hover:text-ink transition-colors group"
                >
                  Explore Machines
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-bone/40 text-bone px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-bone hover:text-ink transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-white/10">
              <dl className="grid grid-cols-3 lg:grid-cols-1 gap-8 lg:gap-10">
                <div>
                  <dt className="text-xs uppercase tracking-widest2 text-accent">Range</dt>
                  <dd className="mt-2 font-serif text-3xl md:text-4xl text-bone">3,200 mm</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest2 text-accent">Accuracy</dt>
                  <dd className="mt-2 font-serif text-3xl md:text-4xl text-bone">±0.03°</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest2 text-accent">Heritage</dt>
                  <dd className="mt-2 font-serif text-3xl md:text-4xl text-bone">25+ yrs</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 md:right-10 z-10 hidden md:flex flex-col items-center gap-3 text-bone/70">
        <span className="text-[10px] uppercase tracking-widest2 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
};

export default HomeHero;
