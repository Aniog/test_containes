import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function BrandStory() {
  const containerRef = useStrkImages()

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-sand order-1">
            <img
              alt="Velmora atelier"
              data-strk-img-id="story-img-4d8e1b"
              data-strk-img="[story-subtitle] [story-title] jewelry maker atelier hands gold craft"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src={PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:pl-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight"
            >
              Quietly Made, Loudly Treasured
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-stone leading-relaxed text-base md:text-lg"
            >
              Velmora began in a small studio with a single belief: that fine
              craftsmanship shouldn't be reserved for the few. Every piece is
              hand-finished in 18K gold plating over a hypoallergenic core,
              designed to be worn daily and passed on for years.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              We work in small batches, choose materials that last, and price
              honestly — so you can collect pieces that feel like yours.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-[11px] uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors border-b border-charcoal hover:border-gold pb-1"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
