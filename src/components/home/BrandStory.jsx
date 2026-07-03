import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-velmora-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal">
              Our Story
            </h2>
            <div className="mt-8 space-y-6 text-velmora-taupe leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We create pieces that bridge the gap between fine jewelry and fashion accessories—premium quality at accessible prices.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed in our studio, crafted with care using ethically sourced materials. Our signature 18K gold plating ensures lasting beauty that becomes more precious with time.
              </p>
              <p>
                We believe in jewelry that tells your story. Whether it's a gift for someone you love or a treat for yourself, Velmora pieces are meant to be treasured for a lifetime.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm tracking-wider uppercase border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}