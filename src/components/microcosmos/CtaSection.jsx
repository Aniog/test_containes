import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CtaSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc001"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050d12]/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050d12] via-transparent to-[#050d12]" />

      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
          Begin Your Journey
        </p>
        <h2
          id="cta-title"
          className="text-3xl md:text-5xl font-black text-[#f0faf8] mb-6 leading-tight"
        >
          The Smallest Things Hold the Greatest Secrets
        </h2>
        <p
          id="cta-subtitle"
          className="text-[#94b8b0] text-lg leading-relaxed mb-10"
        >
          Dive deeper into the microscopic universe. Every image is a doorway to a world that has existed long before us — and will endure long after.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-10 py-4 rounded-full bg-[#00d4aa] text-[#050d12] font-bold text-sm tracking-wide hover:bg-[#7df9e8] transition-all duration-300 shadow-[0_0_40px_rgba(0,212,170,0.5)]"
          >
            View Full Gallery
          </a>
          <a
            href="#specimens"
            className="px-10 py-4 rounded-full border border-[#00d4aa]/40 text-[#00d4aa] font-semibold text-sm tracking-wide hover:border-[#00d4aa] hover:bg-[#00d4aa]/10 transition-all duration-300"
          >
            Explore Specimens
          </a>
        </div>
      </div>
    </section>
  )
}
