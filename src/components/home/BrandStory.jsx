import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-velmora-gold rounded-full opacity-30" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-velmora-gold text-sm tracking-ultrawide uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mt-3 mb-6">
              Where Quiet Luxury<br />
              <span className="italic">Meets Craftsmanship</span>
            </h2>
            <div className="space-y-4 text-velmora-taupe leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry shouldn't 
                require a compromise. We craft demi-fine pieces that deliver the warmth 
                and richness of solid gold, at a price that feels right.
              </p>
              <p>
                Each piece is thoughtfully designed in our studio and crafted with 
                intention — using premium materials like 18K gold plate and 
                hypoallergenic metals. We believe jewelry should be worn, cherished, 
                and lived in, not saved for special occasions.
              </p>
              <p>
                Our name, Velmora, is inspired by the warmth of velvet and the beauty 
                of牡丹 — the peony, a symbol of elegance and prosperity.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-velmora-charcoal font-medium hover:text-velmora-gold transition-colors group"
            >
              <span className="product-name text-xs">Discover Our Story</span>
              <span className="w-8 h-px bg-current transform transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
