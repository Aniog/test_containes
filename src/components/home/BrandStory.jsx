import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="bg-warmwhite">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto bg-sand/20 overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-tagline] [brand-story-heading] gold jewelry craftmanship"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex items-center px-8 lg:px-16 py-16 lg:py-24">
          <div className="max-w-md">
            <p
              id="brand-story-tagline"
              className="text-xs uppercase tracking-[0.25em] text-gold-dark mb-4"
            >
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl lg:text-4xl text-charcoal mb-6 leading-snug"
            >
              Jewelry that stays with you — through every chapter
            </h2>
            <p className="text-stone leading-relaxed mb-8">
              Velmora was born from the belief that fine jewelry shouldn't be reserved for special occasions. 
              Each piece is designed in our atelier, crafted from 18K gold-plated brass with an obsessive 
              attention to detail — because the everyday deserves to be adorned.
            </p>
            <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-gold-dark hover:text-gold transition-colors font-medium border-b border-gold/30 hover:border-gold pb-1">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
