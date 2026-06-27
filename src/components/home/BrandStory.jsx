import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="brand-story-image"
              data-strk-img="[Our Story] [Velmora] [fine jewelry] [craftsmanship]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-wide mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-[#78716C] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should be accessible, 
                ethical, and designed for the modern woman who values both beauty and intention.
              </p>
              <p>
                Each piece is thoughtfully crafted in small batches using 18K gold-plated 
                recycled brass and ethically sourced crystals. We partner with artisans who 
                share our commitment to quality and sustainability.
              </p>
              <p>
                From our studio to your jewelry box, every Velmora piece is made to be 
                treasured — for yourself, or someone you love.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-[#B8860B] transition-colors duration-300 group"
            >
              Read Our Story
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
