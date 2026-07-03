import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-d4e5f6"
              data-strk-img="[brand-story-text] [brand-story-heading] Velmora jewelry craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl tracking-[0.05em] text-charcoal"
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="text-warm-gray leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: luxury shouldn't be exclusive. We craft demi-fine jewelry with the same care and attention as the finest houses — 18K gold plating, ethically sourced materials, and designs that transcend seasons.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">
              Every piece is designed in our studio and crafted by artisans who share our passion for detail. The result? Jewelry that feels precious, looks timeless, and fits effortlessly into your life.
            </p>
            <Link
              to="/about"
              className="inline-block border border-gold text-gold text-xs tracking-[0.2em] uppercase font-medium px-8 py-3 hover:bg-gold hover:text-white transition-colors duration-200"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
