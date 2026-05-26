import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CtaSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="cta-bg-mc060"
        data-strk-bg="[cta-title] [cta-desc] microscopic world colorful bioluminescent"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[#050d1a]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a]/60 to-[#050d1a]/60" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#00e5c8] mb-4 block">
          The Journey Continues
        </span>
        <h2 id="cta-title" className="text-4xl md:text-5xl font-bold text-sky-50 mb-6 leading-tight">
          The Invisible World Awaits Your Curiosity
        </h2>
        <p id="cta-desc" className="text-slate-300 text-lg leading-relaxed mb-10">
          Every drop of water, every breath of air, every grain of soil is a universe unto itself. The more we look, the more we discover that life is far stranger and more beautiful than we ever imagined.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="inline-block bg-[#00e5c8] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-cyan-300 transition-colors"
          >
            Explore More
          </a>
          <a
            href="#gallery-title"
            className="inline-block border border-[#00e5c8] text-[#00e5c8] font-bold px-8 py-4 rounded-full hover:bg-[#00e5c8]/10 transition-colors"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
