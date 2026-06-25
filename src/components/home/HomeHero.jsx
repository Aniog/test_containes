import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-[88vh] flex items-end overflow-hidden bg-graphite-950 text-bone-50"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        data-strk-bg-id="hero-bg-machinery-1c4f8a"
        data-strk-bg="[hero-subtitle] [hero-title] sheet metal folding machine industrial workshop"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-graphite-950 via-graphite-950/80 to-graphite-950/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 w-full">
        <p className="eyebrow eyebrow-light">ARTITECT Machinery · Est. 1996</p>

        <h1
          id="hero-title"
          className="mt-6 font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl text-bone-50"
        >
          The art of folding,<br />
          engineered to precision.
        </h1>

        <p
          id="hero-subtitle"
          className="mt-8 max-w-xl text-base md:text-lg text-steel-300 leading-relaxed"
        >
          Double folding machines, sheet metal folders, and bespoke metal folder
          machines for fabricators who measure success in tenths of a millimeter.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-brass-500 hover:bg-brass-600 text-graphite-950 px-7 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
          >
            Explore the Range
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-bone-50/50 hover:bg-bone-50 hover:text-graphite-900 text-bone-50 px-7 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
          >
            Talk to an Engineer
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
          {[
            { value: '29', label: 'Years of craft' },
            { value: '42', label: 'Countries served' },
            { value: '±0.05', label: 'mm repeatability' },
            { value: '24/7', label: 'Service support' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-3xl md:text-4xl text-brass-300">
                {stat.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-steel-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
