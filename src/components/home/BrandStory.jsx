import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-sans font-medium">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 leading-snug">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-fg">
              Born from a love of understated luxury, Velmora creates demi-fine jewelry that bridges the gap between costume and fine. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over hypoallergenic metals, and finished by hand.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-fg">
              We believe beautiful jewelry shouldn't require a lifetime investment — just a lifetime of wear. Our pieces are made to be lived in, layered, and loved.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 border border-gold text-gold px-8 py-3 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-gold hover:text-cream transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
