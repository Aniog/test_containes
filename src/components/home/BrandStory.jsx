import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream-200/40">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-e8f2a1"
              data-strk-img="[brand-story-heading] [brand-story-text] gold jewelry artisan workshop"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan jewelry workshop"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-6">
            <p className="text-xs tracking-[0.2em] uppercase text-gold-500 font-medium mb-4">
              Our Story
            </p>
            <h2 id="brand-story-heading" className="heading-serif text-3xl md:text-4xl text-warm-900 mb-6 leading-tight">
              Jewelry That Feels Like You
            </h2>
            <p id="brand-story-text" className="text-sm md:text-base text-warm-800/70 leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury should be accessible, not exclusive. We create demi-fine jewelry in 18K gold that bridges the gap between costume and fine jewelry — pieces that look and feel elevated, without the four-figure price tag.
            </p>
            <p className="text-sm md:text-base text-warm-800/70 leading-relaxed mb-8">
              Every piece is designed in our studio, crafted with care, and made to be worn every single day. Because the best jewelry isn't the kind that sits in a box — it's the kind that becomes part of you.
            </p>
            <Link to="/about" className="btn-outline-gold inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
