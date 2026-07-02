import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden bg-ink-soft">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-image"
              data-strk-bg="[brand-story-title] gold jewelry hands crafting artisan editorial"
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="900"
            />
          </div>

          <div className="max-w-xl">
            <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink font-medium mb-6"
            >
              Quiet Luxury, Made for Real Life
            </h2>
            <p className="font-sans text-base text-stone leading-relaxed mb-5">
              Velmora was born from a simple belief: fine jewelry should feel effortless. We design
              demi-fine pieces in small batches, using responsibly sourced materials and 18K gold
              plating that keeps its warmth wear after wear.
            </p>
            <p className="font-sans text-base text-stone leading-relaxed mb-8">
              Each piece is made to move with you — from morning coffee to evening celebrations —
              without ever asking you to choose between quality and accessibility.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-ink hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
