import { Link } from 'react-router-dom';

export default function BrandStorySection() {
  return (
    <section className="section-spacing bg-cream overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px] lg:min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8 xl:pl-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-6 leading-tight">
              Where Craftsmanship Meets Intention
            </h2>
            <div className="divider w-16 bg-gold h-0.5 mb-8" />
            <div className="space-y-5 text-charcoal leading-relaxed">
              <p>
                At Velmora, we believe jewelry should be more than an accessory—it should be a reflection of who you are and the moments you treasure. Each piece in our collection is thoughtfully designed with premium materials and crafted with care.
              </p>
              <p>
                Our demi-fine jewelry bridges the gap between fashion and fine jewelry, offering you the look and feel of luxury at an accessible price. We use 18K gold plating over hypoallergenic bases, so you can wear your pieces with confidence, all day, every day.
              </p>
              <p>
                Every Velmora piece is made to be treasured, becoming a part of your story and the memories you create.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-8 text-sm font-medium text-espresso hover:text-gold transition-colors group"
            >
              <span className="tracking-wider uppercase">Discover Our Journey</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
