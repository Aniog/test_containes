import { Link } from 'react-router-dom'
import { useImageLoader } from '@/lib/useImageLoader'

export default function About() {
  const ref = useImageLoader([])

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-2d9f4a"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-light mb-4">Est. for the modern wearer</p>
          <h1 id="about-hero-title" className="font-serif text-5xl md:text-7xl text-ivory leading-tight">
            Our Story
          </h1>
          <p id="about-hero-subtitle" className="mt-4 max-w-xl text-ivory/80">
            Demi-fine gold jewelry, crafted to be treasured.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 text-center">The Velmora Ethos</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal text-center leading-tight">
            Fine jewelry should not require a vault.
          </h2>
          <div className="mt-8 space-y-5 text-stone leading-relaxed text-[15px]">
            <p>
              Velmora was founded on a simple belief: the joy of fine jewelry should be everyday, not
              occasional. We design demi-fine pieces in 18K gold plating over sterling silver — the
              warmth and luster of fine gold, at a price that invites daily wear.
            </p>
            <p>
              We work directly with our atelier, skipping the middlemen and markups that define
              traditional jewelry retail. The result is honest pricing for honest craft: every piece
              is hand-finished, hypoallergenic, and made to be lived in.
            </p>
            <p>
              From the studio to your door, each piece arrives in signature Velmora packaging — ready
              to gift, or to keep. Quiet luxury, made to be treasured.
            </p>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block bg-gold text-ink px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-deep hover:text-ivory transition-colors"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
