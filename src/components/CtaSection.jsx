import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CtaSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc-final"
        data-strk-bg="[cta-desc] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gray-950/80" />

      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-4">
          The Journey Continues
        </p>
        <h2 id="cta-title" className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          The Invisible World Awaits
        </h2>
        <p id="cta-desc" className="text-gray-300 text-xl leading-relaxed mb-10">
          Every drop of water, every grain of soil, every breath of air is alive with microscopic wonders. The more we look, the more we discover.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="inline-block bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg shadow-teal-500/30"
          >
            View Gallery
          </a>
          <a
            href="#organisms"
            className="inline-block bg-transparent border border-gray-500 hover:border-teal-400 text-white hover:text-teal-400 font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
          >
            Explore Organisms
          </a>
        </div>
      </div>
    </section>
  )
}
