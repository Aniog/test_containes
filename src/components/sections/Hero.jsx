import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, CheckCircle2, Ship } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative isolate overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        data-strk-bg-id="hero-bg-factory-7fa12c"
        data-strk-bg="[hero-subtitle] [hero-title] modern Chinese electronics factory production line"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy/95 via-brand-navy/85 to-brand-blue/90" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Based in Shenzhen · Trusted by buyers in 30+ countries
            </span>

            <h1
              id="hero-title"
              className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              China Sourcing Agent for Global Buyers
            </h1>

            <p
              id="hero-subtitle"
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200"
            >
              We help overseas importers, brands and distributors find reliable
              Chinese suppliers, verify factories on the ground, inspect product
              quality, follow production, and coordinate shipping — so you can
              order from China with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-brand-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-accent/20 transition-colors hover:bg-brand-accent/90"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-extrabold text-white">12+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-300">Years sourcing in China</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">800+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-300">Verified factories</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">30+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-300">Buyer countries served</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur">
              <img
                alt="Quality inspector checking products on a Chinese factory floor"
                className="aspect-[4/3] w-full rounded-xl object-cover"
                data-strk-img-id="hero-card-qc-9b3e21"
                data-strk-img="[hero-card-caption] [hero-title] QC inspector checking products on Chinese factory line"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-4 shadow-xl ring-1 ring-brand-line sm:block">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent-soft text-brand-accent">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">On-site QC included</p>
                    <p className="text-xs text-brand-muted">AQL inspection before shipment</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 hidden rounded-xl bg-white p-4 shadow-xl ring-1 ring-brand-line sm:block">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent-soft text-brand-accent">
                    <Ship className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-ink">Door-to-door shipping</p>
                    <p className="text-xs text-brand-muted">Sea, air & express options</p>
                  </div>
                </div>
              </div>
              <p id="hero-card-caption" className="sr-only">
                Quality inspector with checklist verifying products at a Shenzhen factory
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-sm text-slate-300">
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-accent" /> Independent verification</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-accent" /> Transparent quotes & costs</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-accent" /> English-speaking team in China</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-accent" /> No supplier kickbacks</span>
        </div>
      </div>
    </section>
  );
}
