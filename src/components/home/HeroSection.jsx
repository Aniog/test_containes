import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle, Truck } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Trusted by 500+ Buyers Worldwide
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-text-primary leading-[1.12] mb-6">
              China Sourcing Agent<br />
              <span className="text-primary-accent">for Global Buyers</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              We help overseas companies find reliable suppliers, verify factories, inspect product quality, follow production, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-white text-base font-semibold hover:bg-secondary-hover transition-colors shadow-md"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border-2 border-primary text-primary text-base font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                How It Works
              </Link>
            </div>
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Shield className="w-4 h-4 text-success" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Quality Inspection</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Truck className="w-4 h-4 text-success" />
                <span>Shipping Coordination</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-img-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-bg-alt flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">500+ Projects</p>
                  <p className="text-xs text-text-muted">Completed Successfully</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p id="hero-title" className="sr-only">China Sourcing Agent for Global Buyers</p>
      <p id="hero-subtitle" className="sr-only">Find reliable suppliers and verify factories in China</p>
    </section>
  )
}
