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
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc004"
        data-strk-bg="[cta-sub] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050d1a]/85" />

      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-[#00d4c8] mb-4">Join the Exploration</p>
        <h2 id="cta-title" className="text-4xl md:text-6xl font-black text-slate-50 mb-6 leading-tight">
          The Invisible World Awaits
        </h2>
        <p id="cta-sub" className="text-slate-300 text-lg leading-relaxed mb-10">
          Every drop of water, every grain of soil, every breath of air teems with microscopic life. The MicroCosmos is not a distant frontier — it is all around you, right now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-10 py-4 bg-[#00d4c8] text-[#050d1a] font-bold rounded-full text-base hover:bg-[#00b4d8] transition-colors duration-300"
          >
            Start Exploring
          </a>
          <a
            href="#gallery"
            className="px-10 py-4 border border-slate-500 text-slate-300 font-semibold rounded-full text-base hover:border-[#00d4c8] hover:text-[#00d4c8] transition-colors duration-300"
          >
            Browse Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
