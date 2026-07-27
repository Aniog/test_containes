import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import strkImgConfig from '../../strk-img-config.json'
import CTAButton from '../common/CTAButton'

export default function HeroSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 bg-slate-900/95" />
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-35 lg:block"
        data-strk-bg-id="hero-factory-qc-shipping-2f9a1c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white">China-based sourcing support</p>
          <h1 id="hero-title" className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">China Sourcing Agent for Global Buyers</h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical local support.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CTAButton />
            <CTAButton to="/services" variant="secondary">View sourcing services <ArrowRight className="ml-2 h-4 w-4" /></CTAButton>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-white/85 sm:grid-cols-3">
            {['Supplier search', 'Factory checks', 'QC and logistics'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <CheckCircle2 className="h-4 w-4 text-amber-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-xl backdrop-blur lg:mt-10">
          <img
            alt="Factory quality inspection and shipping coordination in China"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
            data-strk-img-id="hero-inspection-team-7e4b2a"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            {['Requirement review', 'Supplier screening', 'Shipment handoff'].map((item) => (
              <div key={item} className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-bold text-slate-900">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
