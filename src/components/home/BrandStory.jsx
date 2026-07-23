import { Link } from 'react-router-dom'
import { resolveStrkImageUrl } from '@/lib/strk-image'

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            alt="Velmora atelier"
            src={resolveStrkImageUrl('story-img-velmora-3f7c')}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Jewelry made to be lived in.
          </h2>
          <p id="story-text" className="mt-6 text-cream/75 leading-relaxed">
            Velmora began with a simple belief: that fine-quality gold jewelry
            should not be reserved for special occasions. Each piece is
            hand-finished in 18K gold plating, hypoallergenic and made to be worn
            from morning to night — through work, weekends, and everything in
            between.
          </p>
          <p className="mt-4 text-cream/75 leading-relaxed">
            We design in small, considered collections, cutting out the middlemen
            so you get demi-fine craftsmanship at an honest price.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 border border-cream/40 text-cream text-[11px] uppercase tracking-[0.25em] px-10 py-4 hover:bg-cream hover:text-ink transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
