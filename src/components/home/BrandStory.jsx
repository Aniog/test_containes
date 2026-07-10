import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-champagne-200 rounded-full -z-10 opacity-50" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-champagne-600 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-6 leading-tight">
              Where Elegance<br />
              <span className="italic font-light">Meets Artistry</span>
            </h2>
            <div className="space-y-4 text-charcoal-600">
              <p className="font-sans text-base leading-relaxed">
                At Velmora, we believe jewelry should be more than an accessory—it should be a 
                reflection of your story, your style, and your spirit.
              </p>
              <p className="font-sans text-base leading-relaxed">
                Each piece in our collection is thoughtfully designed in our studio and crafted 
                with care using ethically sourced materials. Our demi-fine jewelry bridges the 
                gap between fashion and fine jewelry, offering quality and beauty at an accessible price.
              </p>
              <p className="font-sans text-base leading-relaxed">
                We source only the finest 18K gold plating and hypoallergenic materials, ensuring 
                every piece can be treasured for years to come.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-semibold uppercase tracking-wide text-charcoal-900 hover:text-champagne-600 transition-colors group"
            >
              Discover Our Story
              <span className="transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
