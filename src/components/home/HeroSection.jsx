import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, ShieldCheck, Factory, Container, Languages, FileCheck2 } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Supplier verification" },
  { icon: Factory, label: "On-site factory audits" },
  { icon: FileCheck2, label: "Pre-shipment QC" },
  { icon: Container, label: "Shipping coordination" },
  { icon: Languages, label: "English & Mandarin" },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-brand-surface">
      <div className="container-x py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">China Sourcing Agent for Global Buyers</p>
            <h1
              id="hero-title"
              className="mt-4 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl"
            >
              Source from China with eyes on the factory floor.
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-brand-muted"
            >
              SSourcing China helps overseas buyers find reliable suppliers, verify
              factories, inspect production, and ship on time. One team, one contract,
              one point of contact — from inquiry to delivery.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {TRUST_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 rounded-md border border-brand-line bg-white px-3 py-2.5 text-xs font-medium text-brand-text"
                >
                  <item.icon className="h-4 w-4 text-brand-primary" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl border border-brand-line bg-white shadow-sm aspect-[4/3]">
                <img
                  alt="Inspector reviewing production samples inside a Chinese factory"
                  data-strk-img-id="hero-factory-8a4d2e"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-lg border border-brand-line bg-white p-4 shadow-sm sm:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Pre-shipment inspection
                </p>
                <p className="mt-1 text-sm font-semibold text-brand-ink">
                  AQL-based sampling, photo report
                </p>
                <div className="mt-3 h-1 w-full rounded-full bg-brand-surface">
                  <div className="h-1 w-3/4 rounded-full bg-brand-accent" />
                </div>
                <p className="mt-2 text-xs text-brand-muted">Defect rate &lt; 1.5% typical</p>
              </div>

              <div className="absolute -top-5 -right-4 hidden w-44 rounded-lg border border-brand-line bg-white p-3 shadow-sm sm:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Verified suppliers
                </p>
                <p className="mt-1 text-lg font-bold text-brand-ink">600+</p>
                <p className="text-xs text-brand-muted">across 8 product hubs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
