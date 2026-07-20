import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
            <p className="text-velmora-warm-gray leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We craft pieces that bridge the gap between fine jewelry and fashion accessories—premium quality at accessible prices.
            </p>
            <p className="text-velmora-warm-gray leading-relaxed mb-8">
              Each piece in our collection is designed with intention, using only the finest materials—18K gold plating, genuine crystals, and ethically sourced gemstones. Our jewelry is made to be worn, loved, and treasured for years to come.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-velmora-charcoal pb-1 text-sm uppercase tracking-widest hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}