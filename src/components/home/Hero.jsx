import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, BadgeCheck, Globe2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="home-hero-bg-9f23ac"
        data-strk-bg="[home-hero-subtitle] [home-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 ring-1 ring-white/15">
            China Sourcing Agent · Yiwu · Shenzhen · Ningbo
          </span>
          <h1
            id="home-hero-title"
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="home-hero-subtitle"
            className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            We help overseas buyers find reliable suppliers, verify factories, inspect quality,
            follow production, and coordinate shipping — end to end, on the ground in China.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-blue-600 transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <TrustItem icon={ShieldCheck} title="Verified factories" desc="On-site audits & document checks" />
            <TrustItem icon={BadgeCheck} title="Independent QC" desc="Pre-shipment inspections" />
            <TrustItem icon={Globe2} title="Global shipping" desc="Air, sea & door-to-door" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="text-xs text-white/70 mt-0.5">{desc}</p>
      </div>
    </div>
  )
}
