import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HomeHero = () => {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative bg-neutral-950 text-neutral-50 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        data-strk-bg-id="hero-bg-9c4e2a"
        data-strk-bg="[hero-subtitle] [hero-title] industrial sheet metal folding machine factory"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/40" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-500 mb-8">
            Sheet Metal Folding, Engineered
          </p>
          <h1
            id="hero-title"
            className="font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight text-neutral-50"
          >
            Precision folders for the world&rsquo;s most demanding fabricators.
          </h1>
          <p
            id="hero-subtitle"
            className="mt-8 max-w-xl text-lg text-neutral-300 leading-relaxed"
          >
            Artitect Machinery designs and builds double folders, sheet metal folders, and heavy-duty
            metal folding machines &mdash; tuned for repeatability, longevity, and the operators who
            depend on them.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 text-neutral-950 px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-amber-400 transition"
            >
              Explore machines
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-50 px-8 py-4 text-sm uppercase tracking-[0.2em] hover:border-neutral-50 transition"
            >
              Request a quote
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl border-t border-neutral-800 pt-10">
          {[
            { value: '38+', label: 'Years engineering folders' },
            { value: '47', label: 'Countries served' },
            { value: '4 mm', label: 'Mild steel capacity' },
            { value: '0.05', label: 'mm Repeatability' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl md:text-5xl font-light text-neutral-50">{stat.value}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeHero
