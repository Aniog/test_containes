import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-0 bg-velmora-cream">
      <div className="max-w-7xl mx-auto md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px] bg-velmora-sand overflow-hidden strk-placeholder">
            <div
              data-strk-bg-id="brand-story-image"
              data-strk-bg="[brand-story-title] [brand-story-body]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="900"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E")`,
              }}
            />
          </div>

          <div className="flex items-center bg-velmora-cream px-6 py-16 md:px-16 md:py-20">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-4">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-4xl md:text-5xl text-velmora-ink mb-6"
              >
                Designed for Modern Heirlooms
              </h2>
              <p
                id="brand-story-body"
                className="text-velmora-taupe leading-relaxed mb-6"
              >
                Velmora was born from a simple belief: fine jewelry should feel
                personal, attainable, and made to last. We work with skilled
                artisans to create demi-fine pieces in 18k gold plating —
                designed for everyday wear and the moments worth remembering.
              </p>
              <p className="text-velmora-taupe leading-relaxed mb-8">
                Every curve, clasp, and finish is considered so you can wear your
                treasure without worry.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-velmora-ink hover:text-velmora-gold transition-colors border-b border-velmora-ink hover:border-velmora-gold pb-1"
              >
                Read Our Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
