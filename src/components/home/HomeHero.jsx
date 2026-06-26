import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, CheckCircle2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/layout/Container";
import { stats } from "@/data/site";

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-hero-mesh text-paper-50 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-precision-grid opacity-50 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,117,74,0.22), transparent 70%)",
        }}
      />

      <Container className="relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow text-copper-400">
              ARTITECT MACHINERY · EST. 2003
            </span>

            <h1
              id="hero-title"
              className="mt-6 font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tight text-balance text-paper-50"
            >
              Precision metal folding,{" "}
              <span className="text-copper-400">engineered for industry.</span>
            </h1>

            <p
              id="hero-subtitle"
              className="mt-7 text-lg md:text-xl text-paper-50/75 leading-relaxed max-w-2xl"
            >
              From compact metal folders to 8-meter double folding machines,
              ARTITECT builds the bending centers that fabricators rely on
              for accuracy, uptime, and craftsmanship.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-paper-50/85 text-sm">
              {[
                "±0.05° folding repeatability",
                "Hybrid servo-hydraulic drive",
                "Global 48-hour parts support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-copper-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold shadow-lg shadow-copper-500/20 transition-colors"
              >
                Explore machines
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-paper-50/10 hover:bg-paper-50/15 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold border border-paper-50/20 transition-colors"
              >
                Request a quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-3xl border border-paper-50/10"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-3xl border border-paper-50/5"
              />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-navy-900 ring-1 ring-paper-50/10 shadow-2xl shadow-navy-950/40">
                <img
                  alt="ARTITECT precision sheet metal folding machine in production"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-strk-img-id="hero-machine-img-7d2a91"
                  data-strk-img="[hero-subtitle] [hero-title] ARTITECT precision sheet metal folding machine"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-paper-50/10 backdrop-blur-sm border border-paper-50/15 rounded-2xl p-4">
                  <div>
                    <p className="font-display text-paper-50 font-semibold text-base">
                      A7 CNC Controller
                    </p>
                    <p className="text-paper-50/65 text-xs mt-0.5">
                      15.6″ multi-touch HMI
                    </p>
                  </div>
                  <span className="text-copper-400 font-display text-2xl font-bold">
                    ±0.05°
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-paper-50/10 rounded-2xl overflow-hidden border border-paper-50/10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-navy-950/40 backdrop-blur-sm p-6 md:p-8">
              <p className="font-display text-3xl md:text-4xl font-bold text-paper-50">
                {stat.value}
              </p>
              <p className="mt-2 text-paper-50/65 text-xs md:text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#intro"
          aria-label="Scroll to next section"
          className="hidden md:inline-flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-2 text-paper-50/60 hover:text-copper-400 text-xs tracking-[0.2em] uppercase transition-colors"
        >
          <ArrowDown className="w-3.5 h-3.5" />
          Discover ARTITECT
        </a>
      </Container>
    </section>
  );
}