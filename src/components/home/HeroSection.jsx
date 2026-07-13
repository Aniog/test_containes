import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        data-strk-bg-id="hero-bg-ssourcing"
        data-strk-bg="[hero-subtitle] [hero-title] [hero-services]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-2xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-400">
                <Globe className="h-4 w-4" />
                Serving buyers in 30+ countries
              </span>
            </div>
            <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-200 md:text-xl leading-relaxed">
              We help overseas businesses source from China with confidence. Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all through one dedicated team.
            </p>
            <p id="hero-services" className="sr-only">
              Supplier sourcing, factory verification, quality control, production follow-up, shipping coordination
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base">
                <Link to="/contact?quote=true" className="no-underline hover:no-underline">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-400 text-white hover:bg-white/10 hover:text-white px-8 h-12 text-base">
                <Link to="/how-it-works" className="no-underline hover:no-underline">See How It Works</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-400" />
                No hidden fees
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                On-site verification
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-400" />
                English-speaking team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
