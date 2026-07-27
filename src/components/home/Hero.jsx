import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect, useRef } from "react";
import strkImgConfig from "@/strk-img-config.json";
import { heroTrust } from "@/data/site";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-ink-900 text-white"
    >
      {/* Photo background of a container port / factory floor */}
      <div
        aria-hidden
        className="absolute inset-0"
        data-strk-bg-id="hero-port-bg-7c1a4f"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-accent-600/15 blur-3xl lg:block"
      />

      <div className="container-x relative grid items-center gap-10 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="eyebrow eyebrow-light">
            China sourcing agent · est. 2014
          </span>
          <h1
            id="hero-title"
            className="mt-5 text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[60px]"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/80 md:text-[19px]"
          >
            We find reliable suppliers, verify factories, inspect quality,
            follow production and coordinate shipping — so you can buy from
            China with the same confidence as if you were on the factory
            floor.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/contact" className="btn btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-1.5 px-2 text-[15px] font-medium text-white/90 hover:text-white"
            >
              See how it works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-10 grid max-w-2xl grid-cols-1 gap-2.5 sm:grid-cols-2">
            {heroTrust.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2.5 text-[14.5px] text-white/80"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-600/20 text-accent-500">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-accent-600/60" />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-br-2xl border-b-2 border-r-2 border-accent-600/60" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80 p-1 shadow-2xl backdrop-blur">
              <img
                data-strk-img-id="hero-inspector-img-3b5e21"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="3x2"
                data-strk-img-width="900"
                src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221%22%20height%3D%221%22%20viewBox%3D%220%200%201%201%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23e5e7eb%22%2F%3E%3C%2Fsvg%3E"
                alt="QC inspector checking a product on a factory line"
                className="aspect-[3/2] w-full rounded-xl object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 rounded-xl border border-white/10 bg-white p-4 text-ink-900 shadow-2xl">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                  Pre-shipment report · 12 Jul
                </p>
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-success-600" />
              </div>
              <p className="mt-1.5 text-[14.5px] font-semibold text-ink-900">
                AQL 2.5 · 0 critical defects · pass
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-[12px] text-ink-600">
                <div>
                  <p className="font-semibold text-ink-900">Sampled</p>
                  <p>315 pcs</p>
                </div>
                <div>
                  <p className="font-semibold text-ink-900">Major</p>
                  <p>0</p>
                </div>
                <div>
                  <p className="font-semibold text-ink-900">Minor</p>
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-white/10 bg-ink-800/60">
        <div className="container-x flex flex-wrap items-center gap-x-8 gap-y-2 py-4 text-[12.5px] uppercase tracking-[0.14em] text-white/55">
          <span className="font-semibold text-white/70">Trusted by buyers in</span>
          <span>USA</span>
          <span>UK</span>
          <span>Germany</span>
          <span>Australia</span>
          <span>Canada</span>
          <span>Mexico</span>
          <span>Spain</span>
          <span>UAE</span>
          <span>Japan</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
