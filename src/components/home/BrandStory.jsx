import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-velmora-gold/30" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-velmora-gold/10" />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-velmora-gold tracking-widest text-sm uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-6">
              Crafted with Intention
            </h2>
            <p className="text-velmora-gray leading-relaxed mb-6">
              At Velmora, we believe jewelry is more than an accessory—it's a memory, a statement, a treasure to be passed down. Each piece in our collection is thoughtfully designed with premium materials and meticulous attention to detail.
            </p>
            <p className="text-velmora-gray leading-relaxed mb-8">
              Founded on the principles of quiet luxury, we create jewelry that speaks to the modern woman who values elegance without excess. Our demi-fine pieces bridge the gap between everyday wearability and timeless sophistication.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-velmora-charcoal pb-1 text-velmora-charcoal tracking-wide hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}