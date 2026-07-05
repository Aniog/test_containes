import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-6">
              Our Story
            </h2>
            <div className="hairline mb-6" style={{ maxWidth: '60px' }} />
            <p className="text-velmora-taupe leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
            </p>
            <p className="text-velmora-taupe leading-relaxed mb-8">
              Founded in 2020, we craft each piece with intention—designing jewelry that transitions seamlessly from morning coffee to evening cocktails. Our demi-fine collections feature 18K gold plating, genuine gemstones, and meticulous craftsmanship that stands the test of time.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-velmora-charcoal pb-1 text-sm uppercase tracking-widest hover:text-velmora-gold hover:border-velmora-gold transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}