import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function QuoteSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-32 md:py-40 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="quote-bg-7g8h9i"
        data-strk-bg="[quote-text] microscopic biology abstract"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-deep/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <div className="text-cyan-glow text-6xl font-display leading-none mb-6 opacity-40">"</div>
        <blockquote
          id="quote-text"
          className="font-display text-2xl md:text-4xl font-bold text-white leading-relaxed mb-8 italic"
        >
          The universe is not only stranger than we suppose, but stranger than we can suppose.
        </blockquote>
        <p className="font-body text-slate-400 text-base">
          — J.B.S. Haldane, <em>Possible Worlds</em>, 1927
        </p>

        {/* Divider */}
        <div className="mt-16 pt-16 border-t border-cyan-glow/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '8.7M', label: 'Species on Earth' },
            { value: '1μm', label: 'Average bacterium size' },
            { value: '400+', label: 'Years of microscopy' },
            { value: '∞', label: 'Wonders yet to discover' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-cyan-glow">{stat.value}</p>
              <p className="font-body text-slate-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
