import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Factory, ClipboardCheck, Ship } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Verified Suppliers" },
  { icon: Factory, label: "On-site Factory Audits" },
  { icon: ClipboardCheck, label: "AQL-Based QC" },
  { icon: Ship, label: "Worldwide Shipping" },
];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F6F1EA] to-white border-b border-[#E5E1D8]"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow">China-Based Sourcing Partner</p>
            <h1
              id="hero-title"
              className="mt-3 font-display text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-semibold leading-[1.05] text-[#0F172A]"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-[17px] md:text-[18.5px] leading-relaxed text-[#475569] max-w-xl"
            >
              SSourcing China helps overseas buyers find reliable suppliers, verify factories on the ground, inspect quality during production, and ship finished goods worldwide — with clear communication at every step.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-[14px] text-[#0F172A]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0E2A47]/5 text-[#0E2A47]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-[#E5E1D8] shadow-[0_20px_50px_-20px_rgba(15,42,71,0.25)]">
                <img
                  alt="SSourcing team reviewing production quality at a Chinese factory"
                  data-strk-img-id="hero-main-factory-7a4c12"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-[360px] md:h-[460px] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block w-44 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                <img
                  alt="Quality inspector checking product specifications on production line"
                  data-strk-img-id="hero-thumb-qc-1c8e90"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-32 object-cover"
                />
              </div>

              <div className="absolute -top-6 -right-6 hidden md:flex items-center gap-3 bg-white rounded-xl border border-[#E5E1D8] shadow-lg px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#C8553D]/10 text-[#C8553D]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="leading-tight">
                  <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wider">On the ground</p>
                  <p className="text-[14px] font-semibold text-[#0F172A]">Shenzhen · Yiwu · Guangzhou</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}