import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-9a8b"
          data-strk-bg="[about-title] [about-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-velmora-bg/70 via-velmora-bg/50 to-velmora-bg" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-sans mb-4">About Us</p>
          <h1 id="about-title" className="font-serif text-4xl md:text-6xl font-light text-velmora-cream tracking-wide">
            Our Story
          </h1>
          <p id="about-subtitle" className="mt-4 text-velmora-cream/70 max-w-lg mx-auto">
            Born from a love of accessible luxury
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 md:py-24 bg-velmora-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-light text-velmora-cream tracking-wide mb-8">
            Jewelry Should Be for Everyone
          </h2>
          <div className="space-y-5 text-sm md:text-base text-velmora-muted leading-relaxed">
            <p>
              Velmora was founded with a simple belief: every woman deserves to wear beautiful, high-quality jewelry without the luxury price tag. We saw a gap in the market — fine jewelry was too expensive, and fast-fashion jewelry tarnished after a few wears.
            </p>
            <p>
              Our solution was demi-fine: jewelry that bridges the gap between costume and fine. Using 18K gold plating over sterling silver, we create pieces that look and feel luxurious, resist tarnishing, and are gentle on sensitive skin — all at a price point that allows you to build a collection.
            </p>
            <p>
              Every Velmora piece is designed in our studio with meticulous attention to detail. We work with skilled artisans who share our commitment to quality, and we source materials responsibly because beautiful jewelry should come from beautiful practices.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-velmora-surface border-y border-velmora-border/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { title: 'Crafted with Care', desc: 'Every piece is designed in-house and hand-finished by skilled artisans using premium 18K gold-plated sterling silver.' },
              { title: 'Made to Last', desc: 'Our jewelry is water-resistant, tarnish-resistant, and hypoallergenic — designed for everyday wear, not just special occasions.' },
              { title: 'Consciously Made', desc: 'We use recycled metals where possible, plastic-free packaging, and partner with ethical suppliers around the world.' },
            ].map((val) => (
              <div key={val.title} className="text-center">
                <h3 className="font-serif text-xl tracking-wider text-velmora-cream mb-3">{val.title}</h3>
                <p className="text-sm text-velmora-muted leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
