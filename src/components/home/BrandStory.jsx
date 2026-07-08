import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-velmora-gold/30 hidden md:block" />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-xs uppercase tracking-widest text-velmora-taupe">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mt-4 mb-6">
              Crafted with Intention
            </h2>
            <div className="space-y-4 text-velmora-charcoal/70 font-sans">
              <p>
                At Velmora, we believe jewelry should be more than an accessory — it should be a cherished part of your story. Founded with a passion for quiet luxury, we create pieces that balance timeless elegance with modern sensibility.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed using premium materials, including 18K gold plating and ethically sourced crystals. We believe in jewelry that feels luxurious without being loud — pieces that complement your natural beauty rather than compete with it.
              </p>
              <p>
                Our commitment to quality means every item is crafted to last, becoming a treasured part of your collection for years to come.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm uppercase tracking-widest text-velmora-gold border-b border-velmora-gold/30 pb-1 hover:border-velmora-gold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}