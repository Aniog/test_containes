import { ArrowRight, CheckCircle2 } from 'lucide-react'
import CTAButton from '@/components/site/CTAButton.jsx'
import StockImage from '@/components/site/StockImage.jsx'
import { stats } from '@/content.js'

const HomeHero = () => (
  <section className="relative overflow-hidden bg-brand-mist">
    <div className="absolute inset-x-0 top-0 h-40 bg-white" />
    <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div className="flex flex-col justify-center">
        <p id="hero-eyebrow" className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">China-based sourcing support</p>
        <h1 id="hero-title" className="text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl md:text-6xl">China Sourcing Agent for Global Buyers</h1>
        <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-brand-slate">SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical local support.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton>Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></CTAButton>
          <CTAButton to="/services" variant="secondary">View Services</CTAButton>
        </div>
        <div className="mt-8 grid gap-3 text-sm text-brand-slate sm:grid-cols-2">
          {['Supplier search based on your brief', 'Factory checks before purchase orders', 'QC inspection and production updates', 'Shipping coordination with clear documents'].map((item) => (
            <p key={item} className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-brand-blue" />{item}</p>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-brand-border bg-white p-3 shadow-card">
        <div className="overflow-hidden rounded-2xl">
          <StockImage imgId="hero-factory-qc-shipping-c8f31" query="[hero-subtitle] [hero-title] [hero-eyebrow]" ratio="4x3" width="1200" alt="Factory quality inspection and shipping coordination in China" className="h-full min-h-[420px] w-full object-cover" />
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {stats.map(([title, text]) => <div key={title} className="rounded-2xl bg-brand-mist p-4"><p className="font-semibold text-brand-navy">{title}</p><p className="mt-1 text-sm text-brand-muted">{text}</p></div>)}
        </div>
      </div>
    </div>
  </section>
)

export default HomeHero
