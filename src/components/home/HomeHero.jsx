import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship } from 'lucide-react'

const highlights = [
  { icon: ShieldCheck, label: 'Verified suppliers only' },
  { icon: ClipboardCheck, label: 'On-site QC inspections' },
  { icon: Ship, label: 'Door-to-door shipping support' },
]

const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a91f3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-slate-200">
            <span className="h-2 w-2 rounded-full bg-accent-400" />
            Based in Shenzhen, serving buyers in 30+ countries
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            We help overseas buyers find reliable Chinese suppliers, verify factories,
            inspect product quality, follow production, and coordinate international
            shipping — so you can buy from China with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-accent-400"
            >
              Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {highlights.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                <item.icon className="h-5 w-5 text-accent-400" />
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
