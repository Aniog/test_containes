import { Link } from 'react-router-dom'
import { resolveStrkImageUrl } from '@/lib/strk-image'

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${resolveStrkImageUrl('about-hero-velmora-7g2d')})` }}
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative h-full flex items-center justify-center text-center px-5">
          <div className="text-cream max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-4">
              Our Story
            </p>
            <h1 id="about-hero-text" className="font-serif text-5xl md:text-6xl leading-tight">
              Quiet luxury, honestly made.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed text-ink">
            Velmora was founded on a simple belief — that beautifully made gold
            jewelry should be part of every day, not reserved for rare occasions.
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            We design in small, considered collections and work directly with our
            ateliers, cutting out the middlemen. The result is demi-fine
            craftsmanship — 18K gold plating, hypoallergenic materials, hand-set
            crystals — at an honest, accessible price.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Every piece is made to be lived in: through work, weekends, and all
            the moments in between.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-10 bg-gold text-cream text-[11px] uppercase tracking-[0.25em] px-10 py-4 hover:bg-gold-deep transition-colors"
          >
            Explore the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
