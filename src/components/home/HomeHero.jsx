import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-slate-900"
        data-strk-bg-id="hero-bg-artitect"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 id="hero-title" className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Precision Engineering for Sheet Metal Excellence
        </h1>
        <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto font-light">
          ARTITECT MACHINERY: Advanced folding solutions for the modern industrial architectural landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors inline-block"
          >
            Explore Machinery
          </Link>
          <Link
            to="/contact"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-md text-lg font-medium transition-colors inline-block"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  )
}
