import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Phone } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-white pt-20"
    >
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="hero-bg-artitect-machinery-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle] industrial machinery factory"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#c69c3f]">
            Precision Engineering Since 1998
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl"
          >
            ARTITECT <span className="text-[#c69c3f]">MACHINERY</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg leading-relaxed text-[#6b7280] sm:text-xl"
          >
            World-class double folding machines, sheet metal folders, and metal
            folding solutions engineered for accuracy, durability, and effortless
            operation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-md bg-[#c69c3f] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#b08a35]"
            >
              Explore Machines <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-[#1a1a1a] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
            >
              <Phone className="h-4 w-4" /> Request a Quote
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#e5e7eb] pt-8">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '60+', label: 'Countries Served' },
              { value: '10k+', label: 'Machines Installed' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-[#1a1a1a] sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-[#6b7280] sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
