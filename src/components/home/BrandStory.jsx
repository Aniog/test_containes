import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="bg-velmora-paper">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.25em] text-velmora-accent">
              Our Story
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-velmora-base md:text-4xl lg:text-5xl">
              Quiet Luxury, Made for Everyday
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-velmora-text-secondary md:text-base">
              Velmora was born from a simple belief: fine jewelry should feel attainable, wearable, and endlessly personal. We design demi-fine pieces in small batches, using 18k gold plating and responsibly sourced materials.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-velmora-text-secondary md:text-base">
              Every curve, clasp, and finish is considered — so you can wear yours from morning coffee to midnight celebrations without a second thought.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-velmora-base transition-colors hover:text-velmora-accent"
            >
              Read Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
