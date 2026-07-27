import { useEffect, useRef } from 'react'
import { ArrowRight, ShieldCheck, Building2, Ship } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative bg-primary overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20">
            China-Based Sourcing Agent
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            China Sourcing Agent for Global Buyers
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            can import from China with less risk and more clarity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button to="/contact" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              to="/how-it-works"
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-primary"
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Building2 className="h-5 w-5 text-action" />
              </span>
              <span className="text-sm font-medium text-white">
                Verified factories
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <ShieldCheck className="h-5 w-5 text-action" />
              </span>
              <span className="text-sm font-medium text-white">
                Independent QC
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Ship className="h-5 w-5 text-action" />
              </span>
              <span className="text-sm font-medium text-white">
                Shipping handled
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
