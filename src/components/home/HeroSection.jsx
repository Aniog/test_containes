import { CheckCircle2, ClipboardCheck, Factory, Ship } from 'lucide-react'
import CTAButton from '@/components/common/CTAButton'
import VisualImage from '@/components/common/VisualImage'

const highlights = [
  { icon: Factory, label: 'Supplier search and verification' },
  { icon: ClipboardCheck, label: 'Factory QC and production follow-up' },
  { icon: Ship, label: 'Export shipping coordination' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-sky via-white to-slate-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <p id="hero-eyebrow" className="text-sm font-semibold uppercase tracking-widest text-brand-blue">
            China-based sourcing agent for overseas buyers
          </p>
          <h1 id="hero-title" className="mt-5 text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-description" className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            SSourcing China helps importers find reliable suppliers, verify factories, inspect product quality, follow production, and coordinate shipping from China.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact">Get a Free Sourcing Quote</CTAButton>
            <CTAButton to="/how-it-works" variant="secondary">See How It Works</CTAButton>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white p-4 text-slate-900 shadow-sm">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
                  <p className="text-sm font-medium leading-5 text-slate-700">{item.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-slate-200">
            <div className="aspect-video">
              <VisualImage
                alt="Factory quality control inspection in China"
                imgId="hero-factory-qc-9e4c21"
                query="[hero-description] [hero-title] [hero-eyebrow]"
                ratio="4x3"
                width="1100"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-brand-navy p-5 text-white shadow-xl sm:left-auto sm:w-80">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-amber" aria-hidden="true" />
              <div>
                <p className="font-semibold">Practical sourcing support</p>
                <p className="mt-1 text-sm leading-6 text-blue-100">Clear supplier comparisons, inspection notes, and production updates for better purchasing decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
