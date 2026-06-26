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
    <section ref={containerRef} className="relative bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <span
            id="hero-eyebrow"
            className="text-xs uppercase tracking-[0.28em] text-amber-700 font-medium"
          >
            Sheet Metal Folding · Since 1986
          </span>
          <h1
            id="hero-title"
            className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 leading-[1.05] tracking-tight"
          >
            Folding precision,
            <br />
            <span className="italic text-amber-800">engineered</span> for fabricators.
          </h1>
          <p
            id="hero-subtitle"
            className="mt-8 text-base md:text-lg text-stone-600 leading-relaxed max-w-xl"
          >
            ARTITECT designs and builds double folding machines and sheet metal
            folders trusted by workshops across the world. Refined controls,
            uncompromising mechanics, and a finish you can feel.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-amber-800 transition-colors"
            >
              Explore machines
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-stone-900 text-stone-900 px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-stone-900 hover:text-stone-50 transition-colors"
            >
              Speak with engineer
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-stone-200 pt-8">
            <div>
              <div className="font-serif text-3xl text-stone-900">38</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-stone-500">
                Years of craft
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-stone-900">62</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-stone-500">
                Countries served
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl text-stone-900">±0.05</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-stone-500">
                mm tolerance
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-stone-200 bg-stone-100">
            <img
              alt="Precision sheet metal folding machine in operation"
              className="w-full h-full object-cover"
              data-strk-img-id="home-hero-machine-9c2af1"
              data-strk-img="[hero-subtitle] [hero-title] industrial sheet metal folding machine"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -left-8 w-44 bg-stone-900 text-stone-50 p-6">
            <div className="text-[10px] uppercase tracking-[0.28em] text-amber-500">
              Model A-7
            </div>
            <div className="mt-3 font-serif text-2xl leading-tight">
              Double Folder
            </div>
            <div className="mt-3 text-xs text-stone-400">
              Up to 4&nbsp;m working length
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
