import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CtaSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc001"
        data-strk-bg="[cta-desc] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050a0e]/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050a0e] via-transparent to-[#050a0e]" />

      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
          Join the Exploration
        </p>
        <h2
          id="cta-title"
          className="text-4xl md:text-6xl font-black text-sky-50 mb-6 leading-tight"
        >
          The Universe Beneath Your Feet
        </h2>
        <p
          id="cta-desc"
          className="text-slate-300 text-xl leading-relaxed mb-10"
        >
          Every drop of water, every grain of soil, every breath of air contains a universe
          of microscopic life. The microcosmos is everywhere — and it's waiting to be discovered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-10 py-4 bg-[#00d4aa] text-[#050a0e] font-bold text-lg rounded-2xl hover:bg-[#00d4aa]/90 transition-all duration-300 shadow-[0_0_40px_rgba(0,212,170,0.5)]"
          >
            View Full Gallery
          </a>
          <a
            href="#about"
            className="px-10 py-4 border border-sky-50/20 text-sky-50 font-semibold text-lg rounded-2xl hover:border-sky-50/50 hover:bg-sky-50/5 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
