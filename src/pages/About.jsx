import { useStrkImages } from '@/lib/useStrkImages'
import { Link } from 'react-router-dom'

export default function About() {
  const ref = useStrkImages([])
  return (
    <div ref={ref} className="bg-ivory pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] bg-ink overflow-hidden">
        <div
          data-strk-bg-id="about-bg-1b"
          data-strk-bg="[about-hero-sub] [about-hero-title] gold jewelry studio craftsmanship warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-14">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-5xl md:text-7xl text-ivory leading-tight"
          >
            Quiet luxury, made to last
          </h1>
          <p
            id="about-hero-sub"
            className="mt-4 text-ivory/80 max-w-xl"
          >
            Demi-fine gold jewelry, designed in studio and made for the everyday.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28 space-y-6 text-cocoa leading-relaxed">
        <p className="font-serif text-2xl md:text-3xl text-ink italic">
          Velmora began with a simple belief: fine jewelry should be felt, not
          shouted.
        </p>
        <p>
          Each piece is cast in warm 18K gold plate over a hypoallergenic base,
          finished by hand, and made to move with you — from morning coffee to
          the moments worth dressing for. We design in small, considered
          collections so every detail earns its place.
        </p>
        <p>
          No noise, no shortcuts — just gold that wears in, not out. We believe
          jewelry should be lived in: slept in, showered in (well, almost), and
          passed on. That is why we obsess over the weight, the clasp, the
          curve, and the finish.
        </p>
        <p>
          Based in studio, made for the world. Free worldwide shipping, 30-day
          returns, and a lifetime of care notes — because treasured pieces
          deserve treasured service.
        </p>
        <div className="pt-6">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-9 py-4 text-xs font-medium uppercase tracking-widest2 bg-ink text-ivory hover:bg-espresso transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
