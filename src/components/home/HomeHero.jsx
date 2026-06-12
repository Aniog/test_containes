import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative bg-brand text-white overflow-hidden">
      {/* Background image with darkening overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-shipping-port-7f31a9"
          data-strk-bg="container shipping port cranes cargo"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(120deg, #0B2545 0%, #0B2545 55%, rgba(11,37,69,0.85) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-100 ring-1 ring-white/20">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-500" />
              <span>China-based sourcing partner since 2014</span>
            </div>
            <h1
              id="hero-title"
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="mt-5 max-w-2xl text-lg text-slate-200 leading-relaxed"
            >
              We help overseas buyers find reliable Chinese suppliers, verify
              factories, inspect quality, follow production, and coordinate
              shipping — so you can buy from China with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent/90 transition"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                See how it works
              </Link>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              {[
                'Verified suppliers, not just listings',
                'On-site QC inspections',
                'Door-to-door shipping support',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-accent/20 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  alt="Quality control inspector checking products at a Chinese factory"
                  className="block w-full h-auto"
                  data-strk-img-id="hero-card-qc-inspection-9f12be"
                  data-strk-img="quality control inspector factory production line clipboard inspection"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-3 text-center">
                  <p className="text-xl font-bold text-white">12+</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Years in China</p>
                </div>
                <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-3 text-center">
                  <p className="text-xl font-bold text-white">800+</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Vetted suppliers</p>
                </div>
                <div className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-3 text-center">
                  <p className="text-xl font-bold text-white">40+</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Countries served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
