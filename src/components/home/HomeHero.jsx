import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Eyebrow from '@/components/Eyebrow'

const HomeHero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[88vh] flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-ink"
        data-strk-bg-id="home-hero-bg-9d2k4f"
        data-strk-bg="[hero-subtitle] [hero-title] industrial sheet metal folding machine workshop"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/75 to-ink/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28 pt-32 w-full">
        <div className="max-w-3xl">
          <Eyebrow tone="light" className="mb-8">
            Precision Engineering Since 1978
          </Eyebrow>
          <h1
            id="hero-title"
            className="font-serif font-light text-bone text-5xl md:text-7xl leading-[1.05] mb-8"
          >
            Architects of the
            <br />
            <span className="italic text-brass-soft">folded line.</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-bone/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light"
          >
            Double folding machines and sheet metal folders engineered for the
            craftsmen who treat every bend as a signature.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-brass text-ink px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-bone transition-colors"
            >
              Explore Machines
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-bone/40 text-bone px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-bone hover:text-ink transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-0 right-0 z-10 border-l border-t border-bone/15 bg-ink/40 backdrop-blur-sm">
        {[
          { value: '47', label: 'Years of Craft' },
          { value: '38', label: 'Countries Served' },
          { value: '0.1mm', label: 'Bend Tolerance' },
        ].map((stat) => (
          <div key={stat.label} className="px-8 py-6 border-r border-bone/15 last:border-r-0">
            <div className="font-serif text-3xl text-bone font-light">{stat.value}</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-bone/60 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeHero
