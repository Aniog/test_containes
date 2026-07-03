import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wider text-velmora-text mb-6">
              Our Story
            </h2>
            <div className="w-16 h-[1px] bg-velmora-gold mb-8" />

            <p className="font-sans text-base leading-relaxed text-velmora-text-secondary mb-6">
              At Velmora, we believe that jewelry should be as unique as the woman who wears it.
              Our pieces are crafted with intention, using only the finest materials to create
              timeless designs that transition seamlessly from day to night.
            </p>

            <p className="font-sans text-base leading-relaxed text-velmora-text-secondary mb-8">
              Each piece in our collection is thoughtfully designed to celebrate the modern woman
              who appreciates quiet luxury and understated elegance. We're committed to creating
              jewelry that becomes a cherished part of your story.
            </p>

            <Link
              to="/about"
              className="inline-block border-b border-velmora-gold text-velmora-gold hover:text-velmora-gold-hover hover:border-velmora-gold-hover tracking-wider text-sm uppercase pb-1 transition-colors duration-300"
            >
              Discover Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
