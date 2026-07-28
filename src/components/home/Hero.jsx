import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, CheckCircle2, Globe2 } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { getStrkImageUrl } from '@/lib/strk-image-utils.js'
import CTAButton from '@/components/common/CTAButton.jsx?ssourcing=20260728'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white text-slate-950">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-white" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
            <Globe2 className="h-4 w-4" /> China-based support for overseas buyers
          </div>
          <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical local support in China.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact" className="gap-2">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="/services" variant="secondary">View Services</CTAButton>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
            {['Supplier verification', 'QC inspection', 'Shipping coordination'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 ring-1 ring-slate-200">
                <CheckCircle2 className="h-5 w-5 text-blue-700" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-blue-100" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <img
              alt="Quality control inspection at a China factory"
              className="h-80 w-full object-cover sm:h-96"
              data-strk-img-id="hero-qc-factory-7c91ad"
              data-strk-img="[hero-visual-caption] [hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={getStrkImageUrl('hero-qc-factory-7c91ad')}
            />
            <div className="border-t border-slate-200 bg-white p-5 text-slate-950">
              <p id="hero-visual-caption" className="text-sm font-semibold text-slate-900">
                Factory visits, inspection photos, production updates, and export handoff coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

