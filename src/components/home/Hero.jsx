import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
  Container as ContainerIcon,
  Globe2,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

export function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        data-strk-bg-id="hero-bg-8a3f12"
        data-strk-bg="[hero-title] [hero-subtitle] [hero-eyebrow]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <span
            id="hero-eyebrow"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            China-based sourcing partner
          </span>

          <h1
            id="hero-title"
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            China Sourcing Agent <br className="hidden sm:block" />
            for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-5 max-w-2xl text-base text-primary-100/85 sm:text-lg"
          >
            We help importers, distributors and online sellers find reliable
            Chinese suppliers, verify factories, inspect quality at every
            production stage and ship finished goods to your warehouse.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="btn-accent h-12 px-6 text-sm font-semibold"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-semibold text-white hover:border-white hover:bg-white/5"
            >
              See how it works
            </Link>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-6 text-left">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-primary-100/60">
                Verified suppliers
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-white">1,200+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-primary-100/60">
                Inspections / year
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-white">4,800+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-primary-100/60">
                Markets served
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-white">40+</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-card-hover">
            <img
              alt="Factory inspector checking product quality on a production line"
              data-strk-img-id="hero-inspector-2b71c4"
              data-strk-img="[hero-card-title] [hero-subtitle] [hero-title] [hero-eyebrow]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                id="hero-card-title"
                className="text-sm font-medium text-white"
              >
                On-site QC at a Guangdong electronics supplier
              </p>
            </div>
          </div>

          <div className="absolute -left-6 -top-6 hidden rotate-[-4deg] rounded-lg border border-white/10 bg-white p-4 shadow-card-hover sm:block">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-success/10 text-success">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Factory verified
                </p>
                <p className="text-sm font-semibold text-primary">
                  Business license checked
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-10 hidden rotate-[3deg] rounded-lg border border-white/10 bg-white p-4 shadow-card-hover sm:block">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                <ClipboardCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  PSI report
                </p>
                <p className="text-sm font-semibold text-primary">
                  48h turnaround
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-primary-700/40">
        <div className="container-x grid grid-cols-2 gap-6 py-5 sm:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              label: "Factory verification",
            },
            {
              icon: ClipboardCheck,
              label: "Pre-shipment inspection",
            },
            {
              icon: ContainerIcon,
              label: "Shipping coordination",
            },
            {
              icon: Globe2,
              label: "Buyers in 40+ countries",
            },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-sm text-primary-100/85"
            >
              <Icon className="h-4 w-4 text-accent" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
