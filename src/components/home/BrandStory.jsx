import { Link } from 'react-router-dom'
import { useStrkImages } from '@/lib/strk-image'

export default function BrandStory() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
            <div
              className="absolute inset-0"
              data-strk-bg-id="story-bg-velmora-2b8e1d"
              data-strk-bg="[story-text] [story-title] artisan crafting gold jewelry hands workshop warm"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Story</p>
            <h2
              id="story-title"
              className="font-serif text-4xl md:text-5xl text-cream leading-tight"
            >
              Quiet luxury, made to last
            </h2>
            <p
              id="story-text"
              className="text-cream/70 mt-6 leading-relaxed"
            >
              Velmora was founded on a simple belief: that beautiful, lasting jewelry
              shouldn’t demand a luxury markup. We design every piece in-house and
              partner directly with skilled artisans, cutting out the middlemen so
              we can offer genuine 18K gold plating at an honest price.
            </p>
            <p className="text-cream/70 mt-4 leading-relaxed">
              Each piece is hand-finished, hypoallergenic, and made to be worn — not
              saved for special occasions. This is demi-fine jewelry, crafted to be
              treasured.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-cream/40 text-cream px-8 py-3.5 text-xs uppercase tracking-[0.25em] font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
