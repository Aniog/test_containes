import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroHighlights, stats } from '../../data/siteContent'
import StockImage from '../shared/StockImage'

const HomeHero = () => (
  <section className="overflow-hidden bg-slate-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
      <div>
        <p className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100">
          China-based sourcing support for importers, brands, and distributors
        </p>
        <h1 id="home-hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          China Sourcing Agent for Global Buyers
        </h1>
        <p id="home-hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          SSourcing China helps overseas buyers find reliable suppliers, verify factories,
          inspect quality, follow production, and coordinate shipping with clear practical communication.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800" to="/contact">
            Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <Link className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10" to="/how-it-works">
            See how it works
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {heroHighlights.map((item) => {
            const Icon = item.icon
            return (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100" key={item.label}>
                <Icon className="h-5 w-5 text-blue-200" />
                {item.label}
              </div>
            )
          })}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl">
          <StockImage
            alt="Factory quality control inspection in China"
            className="h-80 w-full object-cover md:h-[470px]"
            id="home-hero-factory-qc-7b21d9"
            query="[home-hero-subtitle] [home-hero-title]"
            ratio="4x3"
            width="1200"
          />
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div className="bg-slate-900/95 p-5 text-white" key={stat.label}>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-6 left-6 hidden max-w-xs rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-xl md:block">
          <div className="flex gap-3">
            <CheckCircle2 className="h-6 w-6 text-blue-700" />
            <p className="text-sm leading-6 text-slate-700">
              Practical supplier checks, QC coordination, and production follow-up for buyers who need more visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HomeHero
