import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CtaSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-z9y8x7"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050a0e]/80" />
      <div className="relative z-20 max-w-3xl mx-auto px-4 text-center">
        <span className="text-xs font-medium tracking-widest uppercase text-[#00d4c8] mb-4 block">
          Join the Exploration
        </span>
        <h2
          id="cta-title"
          className="text-3xl md:text-5xl font-extrabold text-[#f0f8ff] mb-6 leading-tight"
        >
          The Microscopic World Awaits Your Curiosity
        </h2>
        <p
          id="cta-subtitle"
          className="text-[#c8d8e8] text-lg mb-10 leading-relaxed"
        >
          Dive deeper into the science of the small. Every discovery begins with a single look through the lens.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-3.5 rounded-full bg-[#00d4c8] text-[#050a0e] font-semibold hover:bg-[#00bfb5] transition-colors shadow-[0_0_30px_rgba(0,212,200,0.4)]"
          >
            View Full Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full border border-[#f0f8ff]/30 text-[#f0f8ff] font-semibold hover:bg-[#f0f8ff]/10 transition-colors"
          >
            Learn the Science
          </a>
        </div>
      </div>
    </section>
  )
}
