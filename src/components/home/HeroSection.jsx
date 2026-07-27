import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Globe, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-ssourcing-9a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />

      <div className="container-main relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm">
            <Globe className="h-4 w-4" />
            Trusted by buyers in 30+ countries
          </div>

          <h1
            id="hero-title"
            className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg leading-relaxed text-slate-200 md:text-xl"
          >
            We find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can focus on growing your business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary gap-2">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/how-it-works" className="btn-outline border-white/30 text-white hover:bg-white hover:text-primary">
              See How It Works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Factory Verified
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Quality Inspected
            </span>
            <span className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-emerald-400" />
              Shipping Managed
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
