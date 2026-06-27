import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div
            className="aspect-[4/5] overflow-hidden animate-fade-in-up"
          >
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2
              className="font-serif text-3xl md:text-4xl mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Our Story
            </h2>
            <div
              className="space-y-4 text-sm md:text-base leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We create pieces that bridge the gap between fine jewelry and fashion accessories.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed with premium materials—18K gold plating, genuine crystals, and ethically sourced gemstones. Our demi-fine jewelry is crafted to be worn every day, becoming part of your personal narrative.
              </p>
              <p>
                We believe in quiet luxury. Pieces that speak softly but say volumes. Jewelry that doesn't shout for attention but draws it naturally—with elegance, not excess.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 text-sm tracking-wider border-b pb-1 hover:opacity-70 transition-opacity"
              style={{
                color: 'var(--color-text-primary)',
                borderColor: 'var(--color-text-primary)'
              }}
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}