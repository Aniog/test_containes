import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function BrandStory() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream">
            <img
              data-strk-img-id="story-img-velmora-7a8b9c"
              data-strk-img="[story-text] [story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="text-xs uppercase tracking-[0.16em] text-gold mb-3">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.1]"
            >
              Designed for the Modern Romantic
            </h2>
            <p
              id="story-text"
              className="mt-5 text-stone leading-relaxed max-w-md"
            >
              Velmora was born from a love of quiet detail — the glow of gold
              against skin, the way a single piece can make an ordinary day feel
              special. Every design is thoughtfully crafted in small batches
              using responsibly sourced, 18k gold-plated metals and
              hypoallergenic finishes.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.14em] font-semibold text-espresso hover:text-gold transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
