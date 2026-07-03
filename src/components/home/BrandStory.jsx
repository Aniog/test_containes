import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="overflow-hidden aspect-[4/3]">
            <img
              data-strk-img-id="brand-story-img-f1e2"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-wide text-brand-text-dark font-light"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-brand-accent mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-sm md:text-base text-brand-muted font-light leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful, well-crafted jewelry should be accessible. Every piece in our collection is designed in-house, crafted with 18K gold plating, and made to be worn — not saved for special occasions.
            </p>
            <p className="text-sm md:text-base text-brand-muted font-light leading-relaxed mb-8">
              We work with artisan workshops that share our commitment to quality and ethical practices, ensuring each piece meets the standard we'd set for ourselves.
            </p>
            <Link
              to="/about"
              className="border border-brand-accent text-brand-accent uppercase tracking-[0.15em] text-xs font-medium px-8 py-3 hover:bg-brand-accent hover:text-white transition-colors inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
