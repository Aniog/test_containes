import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-velmora-7g8h9i"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry studio craft warm editorial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-12">
          <p className="text-xs uppercase tracking-widest2 text-cream/80 mb-3">Our Story</p>
          <h1 id="about-hero-title" className="font-serif text-cream text-5xl md:text-6xl leading-[1.05]">
            Made to be lived in
          </h1>
          <p id="about-hero-sub" className="mt-4 text-cream/80 max-w-md">
            Demi-fine gold jewelry, designed in studio and crafted for the everyday.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Fine jewelry should be worn, not locked away
          </h2>
          <p className="mt-6 text-stone leading-relaxed">
            Velmora was founded on a simple belief: that the warmth of gold belongs
            to the everyday. We design each piece in our studio and finish it in 18K
            gold plating — hypoallergenic, nickel-free, and made to last. No
            heirloom-only pieces here. Only jewelry made to be lived in.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            We work in small batches with materials chosen for their warmth and
            longevity, so every piece feels considered from the first wear to the
            hundredth.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 px-10 py-4 bg-ink text-cream text-xs uppercase tracking-widest2 hover:bg-champagne-deep transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { title: '18K Gold Plated', body: 'A warm, lasting finish over a durable brass core.' },
            { title: 'Hypoallergenic', body: 'Nickel-free and lead-free, kind to sensitive skin.' },
            { title: 'Made in Small Batches', body: 'Considered production, never mass-made.' },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-stone text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
