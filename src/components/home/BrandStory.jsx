import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-ivory)]">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Jewelry artisan at work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-4xl md:text-5xl tracking-wide">Our Story</h2>
            <div className="hairline my-6" />
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise. We craft demi-fine pieces that bridge the gap between everyday elegance and timeless luxury.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              Each piece is thoughtfully designed in our studio, using only the finest materials—18K gold plating, genuine crystals, and ethically sourced gemstones. Our commitment to quality means jewelry that withstands the test of time, becoming treasured heirlooms passed down through generations.
            </p>
            <Link to="/about" className="btn-outline text-sm">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
