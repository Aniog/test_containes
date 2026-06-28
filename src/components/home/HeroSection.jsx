import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-primary overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-a3f2d1"
        data-strk-bg="[hero-headline] china factory manufacturing"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-white/90 text-sm font-medium">
              Trusted by 500+ businesses worldwide
            </span>
          </div>
          <h1
            id="hero-headline"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            We help international businesses find reliable Chinese suppliers,
            verify factories, inspect product quality, and coordinate
            shipping -- all from a single trusted partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-accent-hover transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md text-base font-semibold hover:bg-white/20 transition-colors"
            >
              See How It Works
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {[
              'No upfront fees',
              'Verified suppliers only',
              'Full supply chain support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
