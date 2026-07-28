import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Truck } from "lucide-react";

const HERO_BULLETS = [
  "Vetted Chinese suppliers",
  "On-site factory audits",
  "Pre-shipment inspections",
];

const HERO_TRUST = [
  { icon: ShieldCheck, label: "Independent QC reports" },
  { icon: FileText, label: "Transparent pricing" },
  { icon: Truck, label: "Worldwide shipping" },
];

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-surface-subtle">
      <div className="container-x py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-light text-primary px-3 py-1 text-xs font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              B2B China Sourcing · Based in Shanghai
            </div>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.1] text-balance"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl"
            >
              We help importers, brand owners, and procurement teams find reliable
              Chinese suppliers, verify factories on the ground, inspect quality,
              and ship goods on time — without leaving your office.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-accent">
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                See Our Services
              </Link>
            </div>

            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {HERO_BULLETS.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-sm text-ink-soft"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-accent/10 blur-2xl" aria-hidden="true" />
              <div className="relative card overflow-hidden shadow-elevated">
                <div
                  className="aspect-[4/3] w-full bg-surface-muted"
                  data-strk-bg-id="hero-bg-card-a1b2c3"
                  data-strk-bg="[hero-card-title] [hero-card-subtitle] [hero-title]"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
                <div className="p-5 md:p-6">
                  <p
                    id="hero-card-title"
                    className="text-sm font-semibold text-ink uppercase tracking-wider"
                  >
                    On the ground in China
                  </p>
                  <p
                    id="hero-card-subtitle"
                    className="mt-1 text-base text-ink-soft"
                  >
                    Audits, inspections, and production follow-up — handled in person, not just by email.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {HERO_TRUST.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex flex-col items-start gap-1.5 rounded-md bg-surface-muted px-3 py-2.5"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-ink leading-tight">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
