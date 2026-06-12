import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, BadgeCheck, Truck, ClipboardCheck } from "lucide-react";

const HomeHero = () => {
  return (
    <section className="relative bg-white border-b border-border-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p
              id="hero-eyebrow"
              className="text-xs md:text-sm uppercase tracking-[0.22em] text-accent font-semibold"
            >
              China-based sourcing agent for B2B buyers
            </p>
            <h1
              id="hero-title"
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand leading-[1.05]"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              We help overseas buyers find reliable suppliers, verify
              factories, inspect quality, follow production, and coordinate
              shipping — so you can buy from China with clarity, control, and
              full accountability on the ground.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-white font-semibold px-6 py-3 text-base hover:bg-accent-600 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-brand border border-border-soft font-semibold px-6 py-3 text-base hover:border-accent hover:text-accent transition-colors"
              >
                See How It Works
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: "Verified factories" },
                { icon: BadgeCheck, label: "On-site QC" },
                { icon: ClipboardCheck, label: "Production follow-up" },
                { icon: Truck, label: "Door-to-door shipping" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-border-soft shadow-sm bg-slate-100">
                <img
                  alt="Sourcing agent inspecting goods inside a Chinese factory"
                  data-strk-img-id="home-hero-main-3a8f2c"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="hidden md:block absolute -left-6 bottom-8 w-48 rounded-xl overflow-hidden border border-border-soft shadow-md bg-white">
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    alt="Container ship leaving a Chinese port"
                    data-strk-img-id="home-hero-card1-7d12be"
                    data-strk-img="container ship port shipping logistics china export"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[11px] uppercase tracking-wider text-muted">Shipping</p>
                  <p className="text-sm font-semibold text-brand">FOB / CIF / DDP</p>
                </div>
              </div>

              <div className="hidden md:block absolute -right-6 top-8 w-48 rounded-xl overflow-hidden border border-border-soft shadow-md bg-white">
                <div className="aspect-[4/3] bg-slate-100">
                  <img
                    alt="QC inspector checking product quality on a production line"
                    data-strk-img-id="home-hero-card2-92cea1"
                    data-strk-img="quality control inspector checking product china factory production line"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[11px] uppercase tracking-wider text-muted">Quality</p>
                  <p className="text-sm font-semibold text-brand">AQL inspection reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
