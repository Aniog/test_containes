import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import strkImgConfig from '../../strk-img-config.json'

const HeroSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, sectionRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(sectionRef.current)
    }
  }, [])

  return (
  <section ref={sectionRef} className="overflow-hidden bg-slate-950 text-white">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
      <div>
        <p id="hero-eyebrow" className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30">
          China-based sourcing agent for overseas buyers
        </p>
        <h1 id="hero-title" className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          China Sourcing Agent for Global Buyers
        </h1>
        <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          SSourcing China helps international buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
        </p>
        <p id="hero-image-context" className="hidden">
          Factory quality control inspector reviewing manufactured products on a production line for export buyers
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15">
            View sourcing services
          </Link>
        </div>
        <div className="mt-10 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
          {['Supplier screening', 'Factory checks', 'QC and shipping'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 -top-6 hidden rounded-2xl bg-white p-4 text-slate-950 shadow-xl lg:block">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-emerald-600" />
            <div>
              <p id="hero-visual-title" className="text-sm font-bold text-slate-950">Factory QC inspection</p>
              <p id="hero-visual-subtitle" className="text-xs text-slate-500">Product checks before shipment</p>
            </div>
          </div>
        </div>
        <img
          alt="Quality inspector reviewing products inside a China factory"
          className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
          data-strk-img-id="hero-factory-qc-inspection-b74e29"
          data-strk-img="[hero-visual-subtitle] [hero-visual-title] [hero-image-context]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_1800/unsplashcom/photo-1589793463308-658ed42e5dfe"
        />
      </div>
    </div>
  </section>
  )
}

export default HeroSection
