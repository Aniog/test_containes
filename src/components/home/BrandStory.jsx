import React from 'react'
import { ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

export function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1000&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="text-xs uppercase tracking-[0.25em] text-velmora-muted mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Designed for the Women Who Wear It
            </h2>
            <p className="mt-6 text-velmora-muted leading-relaxed text-sm md:text-base">
              Velmora was born from a simple belief: fine jewelry should not be
              reserved for special occasions. Every piece in our collection is
              designed to transition seamlessly from morning coffee to evening
              plans — elevated enough to gift, wearable enough to keep.
            </p>
            <p className="mt-4 text-velmora-muted leading-relaxed text-sm md:text-base">
              We use responsibly sourced materials and 18K gold plating to ensure
              each design retains its warmth and luster, day after day.
            </p>
            <button
              onClick={() => toast('Coming soon', { description: 'Our Story — under development.' })}
              className="inline-flex items-center gap-2 mt-8 text-xs uppercase tracking-[0.2em] font-medium border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              <span>Our Story</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
