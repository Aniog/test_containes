import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

export default function Hero() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit gold jewelry worn on model editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-2xl fade-up">
          <p
            id="hero-eyebrow"
            className="text-xs uppercase tracking-widest2 text-champagne mb-5"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-cream text-5xl md:text-7xl leading-[1.05] tracking-tight"
          >
            Crafted to be
            <br />
            <span className="italic text-champagne">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-stone max-w-md leading-relaxed"
          >
            Warm-lit, hand-finished gold pieces designed for everyday luxury —
            and the moments worth keeping.
          </p>
          <div className="mt-9">
            <Link
              to="/shop"
              className="inline-block bg-champagne text-ink text-xs uppercase tracking-widest2 px-10 py-4 hover:bg-champagne-dark transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
