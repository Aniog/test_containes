import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-velmora-border overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-medium text-velmora-gold tracking-[0.2em] uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-6">
              Crafted with Intention, Designed to Cherish
            </h2>
            <p className="text-velmora-warm-gray leading-relaxed mb-6">
              At Velmora, we believe jewelry should be more than an accessory—it should be a cherished part of your story. Each piece is thoughtfully designed in our studio, blending timeless elegance with modern sensibility.
            </p>
            <p className="text-velmora-warm-gray leading-relaxed mb-8">
              We source the finest materials and work with skilled artisans to create demi-fine jewelry that feels luxurious without the overwhelming price tag. The result? Pieces you'll reach for again and again.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-velmora-gold text-velmora-charcoal pb-1 hover:text-velmora-gold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;