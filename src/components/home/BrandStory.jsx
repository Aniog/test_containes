import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-velmora-gold -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-sans font-medium tracking-ultra-wide text-velmora-gold mb-4 block">
              OUR STORY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal leading-tight mb-6">
              Where Craft Meets Intention
            </h2>
            <div className="space-y-4 text-velmora-text-secondary font-sans text-base leading-relaxed">
              <p>
                Every Velmora piece begins with a sketch and ends with a memory waiting to be made. 
                We believe jewelry should feel personal, not just precious.
              </p>
              <p>
                Founded in 2019, we set out to create demi-fine jewelry that bridges the gap 
                between fashion and fine jewelry — pieces that are beautiful enough to treasure 
                forever, yet accessible enough to wear every day.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over hypoallergenic materials, 
                designed in our studio and made to become part of your story.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-sm font-sans font-medium text-velmora-charcoal hover:text-velmora-gold transition-colors group"
            >
              <span className="border-b border-velmora-charcoal/30 pb-0.5 group-hover:border-velmora-gold transition-colors">
                Discover Our Journey
              </span>
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
