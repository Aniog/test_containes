import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-surface-warm overflow-hidden">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-text]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-muted mb-4">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight"
            >
              Jewelry with Intention
            </h2>
            <div id="story-text" className="mt-6 space-y-4">
              <p className="font-sans text-sm md:text-base text-muted leading-relaxed">
                Velmora was born from a belief that fine jewelry should feel accessible without sacrificing craftsmanship. Each piece is designed in small batches, using 18K gold plating and hypoallergenic materials that honor both your skin and your style.
              </p>
              <p className="font-sans text-sm md:text-base text-muted leading-relaxed">
                We create for the woman who buys herself flowers — and the perfect pair of earrings to match. For the gift-giver who believes presentation is part of the present. For anyone who understands that the smallest details often speak the loudest.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 font-sans text-xs uppercase tracking-[0.12em] text-foreground hover:text-accent transition-colors group"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
