import { Link } from 'react-router-dom'
import { useImageLoader } from '@/lib/useImageLoader'

export default function BrandStory() {
  const ref = useImageLoader([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4x5] overflow-hidden bg-sand">
            <img
              alt="Velmora atelier — hand-finishing gold jewelry"
              data-strk-img-id="brand-story-img-3c8e1b"
              data-strk-img="[brand-story-text] [brand-story-eyebrow] gold jewelry craftsmanship atelier"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p id="brand-story-eyebrow" className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
              Quiet luxury, made to live in.
            </h2>
            <div
              id="brand-story-text"
              className="mt-6 space-y-4 text-stone leading-relaxed text-[15px]"
            >
              <p>
                Velmora was founded on a simple belief: fine jewelry should not require a vault. Each
                piece is hand-finished in 18K gold plating over sterling silver, designed to be worn
                daily and treasured for years.
              </p>
              <p>
                We work directly with our atelier — no middlemen, no markups — so the quality you feel
                is the value you pay for. Demi-fine, by design.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 border border-ink text-ink px-8 py-3 text-xs uppercase tracking-[0.25em] font-medium hover:bg-ink hover:text-ivory transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
