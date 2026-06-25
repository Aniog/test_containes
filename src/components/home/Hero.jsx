import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship, BadgeCheck } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-brand">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="hero-bg-7c2a91"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand/95 to-accent/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 ring-1 ring-inset ring-white/15">
              <BadgeCheck className="h-3.5 w-3.5" />
              Based in China · Working with Global Buyers
            </span>
            <h1
              id="hero-title"
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85"
            >
              We help overseas buyers find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping — so you can buy from China with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-sm transition hover:bg-white/95"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See How It Works
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                { k: "10+", v: "Years sourcing in China" },
                { k: "850+", v: "Suppliers in our network" },
                { k: "40+", v: "Countries served" },
                { k: "98%", v: "On-time shipment rate" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-2xl md:text-3xl font-semibold text-white">{s.k}</dt>
                  <dd className="mt-1 text-xs text-white/70 leading-snug">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5">
              <img
                alt="China factory production line with quality inspection"
                className="rounded-xl w-full h-auto object-cover aspect-[4/3]"
                data-strk-img-id="hero-factory-9a3c41"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-lg ring-1 ring-line">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-verified/10 text-verified">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-ink">Factory Verified</p>
                  <p className="text-[11px] text-muted">On-site audit completed</p>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 hidden md:flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-lg ring-1 ring-line">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <ClipboardCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-ink">QC Report Ready</p>
                  <p className="text-[11px] text-muted">AQL 2.5 inspection</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-inset ring-white/15 text-white/90">
              <Ship className="h-5 w-5 text-white/80 shrink-0" />
              <p className="text-sm">
                FOB, CIF, DDP and Amazon FBA — we coordinate the entire shipment to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
