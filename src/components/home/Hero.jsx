import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, ShieldCheck, Search, FileCheck2, Ship } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-brand-900 text-white overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-1f8a3c"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <p
              id="hero-eyebrow"
              className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500"
            >
              China Sourcing Agent
            </p>
            <h1
              id="hero-title"
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
            >
              We help overseas companies find reliable Chinese suppliers,
              verify factories on the ground, inspect production quality, and
              move shipments from factory to your door.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3.5 rounded-md transition shadow-sm"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-brand-800 font-semibold px-6 py-3.5 rounded-md transition"
              >
                See How It Works
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80 max-w-2xl">
              {[
                "English-speaking project managers in Shenzhen",
                "Pre-vetted factories across 5 manufacturing regions",
                "Independent quality inspections, AQL-based",
                "FCL, LCL, air, rail, and DDP shipping",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 md:p-7">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500">
                A typical 4-step flow
              </p>
              <div className="mt-4 space-y-4">
                {[
                  {
                    icon: Search,
                    label: "Sourcing",
                    text: "Shortlist 3–5 verified factories per product.",
                  },
                  {
                    icon: ShieldCheck,
                    label: "Verification",
                    text: "On-site audit of license, capacity, and workforce.",
                  },
                  {
                    icon: FileCheck2,
                    label: "Quality control",
                    text: "Pre-production, during-production, and pre-shipment inspections.",
                  },
                  {
                    icon: Ship,
                    label: "Shipping",
                    text: "Booking, export docs, and door-to-door coordination.",
                  },
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {label}
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/how-it-works"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-500 hover:text-accent-100"
              >
                Read the full process
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
