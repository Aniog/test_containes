import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { CheckCircle2, ClipboardCheck, Factory, Ship } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import strkImgConfig from '@/strk-img-config.json'

const heroStats = [
  { label: 'Supplier search', icon: Factory },
  { label: 'Factory verification', icon: ClipboardCheck },
  { label: 'QC inspection', icon: CheckCircle2 },
  { label: 'Shipping coordination', icon: Ship },
]

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white text-brand-ink">
      <div
        className="absolute inset-y-0 right-0 hidden w-[45%] bg-cover bg-center lg:block"
        data-strk-bg-id="ssourcing-hero-factory-qc-bg-7c41a2"
        data-strk-bg="[hero-visual-context] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="1200"
        aria-hidden="true"
      />
      <div className="absolute inset-y-0 right-0 hidden w-[45%] bg-brand-navy/55 lg:block" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative z-10">
          <p className="mb-5 inline-flex rounded-full border border-brand-line bg-brand-sky px-4 py-2 text-sm font-semibold text-brand-blue">
            China-based sourcing agent for overseas buyers
          </p>
          <h1 id="hero-title" className="max-w-3xl text-4xl font-semibold tracking-tight text-brand-navy md:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted md:text-xl">
            SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>
          <p id="hero-visual-context" className="sr-only">Modern China factory quality control inspection team checking products, cartons, production line, export warehouse, and shipping documents</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact" className="text-base">Get a Free Sourcing Quote</CTAButton>
            <CTAButton href="/services" variant="secondary" className="text-base">View Services</CTAButton>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
            {heroStats.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-brand-line bg-white p-4 text-brand-ink shadow-sm">
                <Icon className="h-5 w-5 text-brand-blue" />
                <span className="text-sm font-semibold text-brand-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 lg:hidden">
          <div
            className="min-h-[360px] rounded-3xl bg-cover bg-center shadow-soft"
            data-strk-bg-id="ssourcing-mobile-hero-factory-qc-bg-b94e31"
            data-strk-bg="[hero-visual-context] [hero-subtitle] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
        </div>
      </div>
    </section>
  )
}
