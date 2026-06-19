import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: 'var(--color-ivory)' }}>
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="py-8 md:py-0">
            <span
              className="text-xs tracking-widest uppercase mb-4 block"
              style={{ color: 'var(--color-taupe)' }}
            >
              Our Story
            </span>
            <h2
              className="font-serif text-3xl md:text-4xl mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
            >
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-walnut)' }}>
              <p>
                Velmora was born from a simple belief: every woman deserves to wear jewelry that makes her feel extraordinary, every day.
              </p>
              <p>
                We craft demi-fine pieces in 18K gold plate that bridge the gap between fashion jewelry and fine jewelry — accessible luxury with exceptional quality.
              </p>
              <p>
                Each piece is designed in our studio and crafted with care, because we believe the details matter.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-wider transition-all hover:gap-3"
              style={{ color: 'var(--color-espresso)' }}
            >
              Discover Our Story
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}