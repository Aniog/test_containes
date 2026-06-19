import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Jewelry craftmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-500/30 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="font-sans text-xs tracking-widest uppercase text-gold-600 mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-800 leading-tight mb-6">
              Jewelry that tells your story
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to feel extraordinary. 
                Our journey began with a simple vision: to create demi-fine jewelry 
                that bridges the gap between fashion and fine jewelry.
              </p>
              <p>
                Each piece is thoughtfully designed in our studio and crafted with 
                precision using premium materials — 18K gold plating, hypoallergenic 
                metals, and ethically sourced stones. We believe luxury should be 
                accessible, timeless, and worn with joy.
              </p>
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 group"
            >
              <span className="font-sans text-sm tracking-wider text-charcoal-800 border-b border-charcoal-800 pb-1 group-hover:text-gold-600 group-hover:border-gold-600 transition-colors">
                Discover Our Story
              </span>
              <svg
                className="w-4 h-4 text-charcoal-800 group-hover:text-gold-600 group-hover:translate-x-1 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
