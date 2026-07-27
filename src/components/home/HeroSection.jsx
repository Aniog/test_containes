import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, CheckCircle2, ClipboardCheck, Factory, Ship } from 'lucide-react'
import strkImgConfig from '../../strk-img-config.json'

function HeroSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, sectionRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white text-brand-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,100,184,0.12),transparent_35%),linear-gradient(120deg,rgba(246,248,251,0)_0%,rgba(238,244,251,0.9)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-medium text-brand-navy shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-brand-blue" />
            China-based sourcing agent for overseas buyers
          </div>
          <h1 id="hero-title" className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-brand-ink/75">
            SSourcing China helps international companies find reliable suppliers, verify factories, inspect product quality, follow production, and coordinate shipping details from China.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-brand-line bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:border-brand-blue">
              View sourcing services
            </Link>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['Supplier checks', 'Factory status and capability review'],
              ['Quality control', 'Photos, measurements, and findings'],
              ['Shipment support', 'Cartons, labels, documents, handover'],
            ].map(([term, desc]) => (
              <div key={term} className="rounded-2xl border border-brand-line bg-white p-4 shadow-sm">
                <dt className="text-sm font-semibold text-brand-navy">{term}</dt>
                <dd className="mt-1 text-sm leading-6 text-brand-ink/65">{desc}</dd>
              </div>
            ))}
          </dl>
          <p id="hero-visual-context" className="sr-only">Factory worker checking product quality, warehouse cartons, export shipping coordination, China manufacturing sourcing</p>

        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-brand-line bg-brand-navy shadow-2xl shadow-brand-navy/15">
            <div
              className="h-[520px] bg-cover bg-center"
              data-strk-bg-id="hero-factory-qc-shipping-64b2d1"
              data-strk-bg="[hero-visual-context] [hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
              role="img"
              aria-label="Factory quality inspection and shipping coordination in China"
            >
              <div className="flex h-full items-end bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent p-6">
                <div className="rounded-2xl border border-white/20 bg-white/95 p-5 text-brand-ink shadow-xl backdrop-blur">
                  <p className="text-sm font-semibold text-brand-navy">On-the-ground support</p>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/70">
                    Factory visits, QC checks, production updates, and shipping coordination handled with clear buyer-side reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-4 top-8 hidden rounded-2xl bg-white p-4 text-brand-navy shadow-xl shadow-brand-navy/10 md:block">
            <Factory className="h-6 w-6 text-brand-blue" />
            <p className="mt-2 text-sm font-semibold">Factory verification</p>
          </div>
          <div className="absolute -right-4 top-1/2 hidden rounded-2xl bg-white p-4 text-brand-navy shadow-xl shadow-brand-navy/10 md:block">
            <ClipboardCheck className="h-6 w-6 text-brand-blue" />
            <p className="mt-2 text-sm font-semibold">QC inspection</p>
          </div>
          <div className="absolute -bottom-4 left-10 hidden rounded-2xl bg-white p-4 text-brand-navy shadow-xl shadow-brand-navy/10 md:block">
            <Ship className="h-6 w-6 text-brand-blue" />
            <p className="mt-2 text-sm font-semibold">Shipping details</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
