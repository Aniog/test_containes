import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Our Story</h2>
            <div className="space-y-4 text-stone leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise.
              </p>
              <p>
                We craft demi-fine pieces that bridge the gap between luxury and accessibility — using premium materials like 18K gold plating and genuine gemstones, all priced thoughtfully between $30 and $120.
              </p>
              <p>
                Each piece in our collection is designed in our studio and crafted with care by skilled artisans. We believe in jewelry that becomes a treasured part of your story — whether it's a gift for someone you love or a treat for yourself.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-charcoal font-medium border-b border-charcoal pb-1 hover:text-champagne hover:border-champagne transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}