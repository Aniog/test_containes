import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function QuoteSection() {
  const containerRef = useRef(null)
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="quote-bg-mc040"
        data-strk-bg="[quote-text] [quote-section-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-0 bg-slate-950/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="text-cyan-400 text-6xl font-serif mb-6 leading-none">"</div>
        <p id="quote-text" className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8 italic">
          In every drop of water there is a world of life, a universe of microscopic creatures that have been here long before us and will remain long after.
        </p>
        <p id="quote-section-title" className="text-slate-400 text-sm uppercase tracking-widest">
          — The Wonder of Microscopic Life
        </p>
      </div>
    </section>
  )
}
