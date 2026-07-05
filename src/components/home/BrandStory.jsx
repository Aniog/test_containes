import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function BrandStory() {
  const containerRef = useStrkImages()

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-charcoal">
            <div
              data-strk-bg-id="velmora-story-image"
              data-strk-bg="[story-subtitle] [story-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="900"
              className="absolute inset-0 bg-charcoal"
            />
          </div>

          <div className="lg:pl-8">
            <p
              id="story-subtitle"
              className="text-xs font-sans uppercase tracking-ui text-gold mb-4"
            >
              Our Atelier
            </p>
            <h2
              id="story-title"
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-espresso leading-tight"
            >
              Jewelry made for the moments that matter.
            </h2>
            <div className="mt-6 space-y-4 text-sm md:text-base font-light text-taupe leading-relaxed">
              <p>
                Velmora was born from a simple belief: fine-quality jewelry
                should feel accessible. We design demi-fine pieces using
                responsibly sourced 18k gold plating, sterling silver posts,
                and hand-set crystals.
              </p>
              <p>
                Each collection is inspired by soft light, natural forms, and
                the quiet confidence of women who wear our pieces every day.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs font-sans uppercase tracking-ui text-espresso border-b border-espresso pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
