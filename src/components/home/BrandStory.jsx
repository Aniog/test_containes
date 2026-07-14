import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/useStrkImages'

export default function BrandStory() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <img
            data-strk-img-id="story-img-velmora-3f"
            data-strk-img="[story-text] [story-title] gold jewelry craftsmanship studio"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:pl-6">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">
            Our Story
          </p>
          <h2
            id="story-title"
            className="font-serif text-4xl md:text-5xl text-ink leading-tight"
          >
            Quiet luxury, made to last
          </h2>
          <p
            id="story-text"
            className="mt-6 text-base text-cocoa leading-relaxed"
          >
            Velmora began with a simple belief: fine jewelry should be felt, not
            shouted. Each piece is cast in warm 18K gold plate over a
            hypoallergenic base, finished by hand, and made to move with you —
            from morning coffee to the moments worth dressing for.
          </p>
          <p className="mt-4 text-base text-cocoa leading-relaxed">
            We design in small, considered collections so every detail earns its
            place. No noise, no shortcuts — just gold that wears in, not out.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest2 font-medium text-ink border-b border-ink/30 pb-1 hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
