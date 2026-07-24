import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-sand overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              data-strk-bg-id="brand-story-img"
              data-strk-bg="[brand-story-title] [brand-story-text]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-10">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal leading-tight"
            >
              Jewelry with Intention
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-velmora-warmgray mt-6 leading-relaxed"
            >
              Velmora was born from a simple belief: that fine jewelry should not be reserved for special occasions alone. Every piece in our collection is designed in small batches, using 18K gold plating and hypoallergenic materials that stand the test of daily wear.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-warmgray mt-4 leading-relaxed">
              We work closely with artisans who share our commitment to quality and sustainability. From sketch to finished piece, each design is refined until it feels effortless — jewelry you reach for every morning without thinking twice.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs uppercase tracking-widest text-velmora-ink hover:text-velmora-gold transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}