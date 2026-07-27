import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'
import strkImgConfig from '@/strk-img-config.json'

const proofPoints = ['Supplier screening', 'Factory checks', 'QC inspections', 'Shipping coordination']

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white text-sourcing-ink">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-sourcing-sky lg:block" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="relative z-10">
          <p className="inline-flex rounded-full border border-sourcing-line bg-sourcing-soft px-4 py-2 text-sm font-semibold text-sourcing-blue">
            China sourcing support for overseas buyers
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-sourcing-navy sm:text-5xl md:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-sourcing-muted">
            SSourcing China helps importers, ecommerce sellers, distributors, and product teams find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} to="/contact" className="gap-2 text-base">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/services" variant="secondary" className="text-base">
              View Services
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <p key={point} className="flex items-center gap-3 text-sm font-semibold text-sourcing-ink">
                <CheckCircle2 className="h-5 w-5 text-sourcing-green" /> {point}
              </p>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-sourcing-card shadow-b2b">
            <div
              className="h-80 bg-cover bg-center md:h-[34rem]"
              data-strk-bg-id="hero-factory-qc-export-92c4da"
              data-strk-bg="[hero-visual-context] [hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
            <span id="hero-visual-context" className="sr-only">Factory quality control inspector checking finished products production line export packaging cartons manufacturing warehouse</span>
            <div className="grid gap-4 bg-white p-5 text-sourcing-ink sm:grid-cols-3">
              <div>
                <p className="text-2xl font-bold text-sourcing-navy">5</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-sourcing-muted">Core sourcing steps</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-sourcing-navy">QC</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-sourcing-muted">Inspection reports</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-sourcing-navy">CN</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-sourcing-muted">China-side follow-up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
