import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship, Globe2 } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden bg-brand-900 text-white"
    >
      <div
        className="absolute inset-0 -z-10"
        data-strk-bg-id="hero-bg-7c4d2a"
        data-strk-bg="[hero-title] [hero-subtitle] [hero-eyebrow]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-950/70 via-brand-900/40 to-white" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="lg:col-span-7">
          <span
            id="hero-eyebrow"
            className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Trusted by buyers in 47+ countries
          </span>
          <h1
            id="hero-title"
            className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg"
          >
            We help overseas brands, importers, and distributors find reliable
            Chinese factories, verify them on-site, inspect quality, and
            coordinate shipping — so you can place orders with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-ink-600 bg-ink-800/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
            >
              Explore Our Services
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Stat label="Years in business" value="12+" />
            <Stat label="Verified factories" value="3,800+" />
            <Stat label="Inspections / year" value="2,100+" />
            <Stat label="Countries served" value="47" />
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/40 shadow-2xl backdrop-blur">
            <div
              className="aspect-[4/3] w-full bg-ink-700"
              data-strk-bg-id="hero-card-bg-2b9e1f"
              data-strk-bg="[hero-card-title] [hero-card-caption]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="900"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-300">
                  On the factory floor
                </p>
                <h3
                  id="hero-card-title"
                  className="mt-1 text-xl font-semibold text-white sm:text-2xl"
                >
                  Independent QC inspections
                </h3>
                <p
                  id="hero-card-caption"
                  className="mt-2 text-sm text-ink-200"
                >
                  AQL-based checks at pre-production, in-line, and
                  pre-shipment stages. Reports delivered within 24 hours.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-2 divide-y divide-ink-700 border-t border-ink-700 sm:divide-x sm:divide-y-0">
              <Pillar icon={ShieldCheck} label="Factory verification" />
              <Pillar icon={ClipboardCheck} label="AQL QC inspections" />
              <Pillar icon={Ship} label="Door-to-door shipping" />
              <Pillar icon={Globe2} label="Worldwide delivery" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-ink-400">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold text-white">{value}</dd>
    </div>
  );
}

function Pillar({ icon: Icon, label }) {
  return (
    <li className="flex items-center gap-3 px-5 py-4">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent-600/20 text-accent-300">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="text-sm font-medium text-white">{label}</span>
    </li>
  );
}