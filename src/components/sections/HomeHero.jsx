import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Users, Award } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

const trustBadges = [
  { icon: ShieldCheck, label: "AQL-based inspections" },
  { icon: Users, label: "Dedicated sourcing agent" },
  { icon: Award, label: "On the ground since 2016" },
];

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="home-hero-bg-8f2a9c"
        data-strk-bg="[home-hero-title] [home-hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-light/80" />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-20 md:py-28">
          <div className="lg:col-span-7">
            <p className="kicker text-accent mb-4">China-based sourcing agent</p>
            <h1
              id="home-hero-title"
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="home-hero-subtitle"
              className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl"
            >
              We help overseas buyers find reliable suppliers, verify factories, inspect
              quality, follow production, and coordinate shipping — all from a single
              dedicated point of contact in mainland China.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary !text-base">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary-light !text-base">
                See how it works
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {trustBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/90"
                >
                  <b.icon className="w-4 h-4 text-accent" />
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <img
                alt="Quality inspector reviewing product samples at a Chinese factory"
                data-strk-img-id="home-hero-img-c1d2e3"
                data-strk-img="[home-hero-title] [home-hero-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/95 to-transparent p-4">
                <div className="text-white/90 text-sm font-medium">
                  On-site inspection · Shenzhen, China
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
