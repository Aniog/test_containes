import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-navy-600 overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a3f2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy-600/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-navy-100 leading-relaxed mb-8 max-w-2xl">
            Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — all from one trusted partner in China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {['10+ Years Experience', '500+ Verified Suppliers', '98% Client Satisfaction'].map((point) => (
              <div key={point} className="flex items-center gap-2 text-navy-100 text-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-300" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
