import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-001"
              data-strk-bg="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            >
              Jewelry That Feels Like Home
            </h2>
            <p
              id="brand-story-desc"
              className="text-taupe leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions. 
              Every piece in our collection is designed to be lived in — from your morning coffee run to your evening gala.
              We work with master artisans who understand that true luxury lies in the details: the weight of a huggie, 
              the curve of an ear cuff, the way a necklace catches the light.
            </p>
            <p className="text-taupe leading-relaxed mb-8">
              Our 18K gold-plated collections are crafted to last, using hypoallergenic materials that are gentle on even the most sensitive skin. 
              Because the best jewelry is the kind you never want to take off.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium hover:text-accent transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
