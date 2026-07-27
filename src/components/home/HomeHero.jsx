import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, FileText, Users } from 'lucide-react'

const trustItems = [
  { icon: ShieldCheck, label: 'Verified supplier network' },
  { icon: FileText, label: 'Photo-documented reports' },
  { icon: Users, label: 'Bilingual sourcing team' },
]

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="home-hero-bg-3f8c21"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-slate-900/70" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
            SSourcing China — Sourcing Agent, Shenzhen
          </p>
          <h1 id="hero-title" className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            We help overseas buyers find reliable Chinese suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — with clear,
            honest reporting at every step.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-800 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-slate-400 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Our Services
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <item.icon className="h-5 w-5 text-blue-300" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
