import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-spacing bg-warm-cream">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora jewelry crafting process"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:py-12">
            <p className="font-sans text-sm uppercase tracking-extra-wide text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Where Timeless Design Meets Modern Craftsmanship
            </h2>
            <p className="text-taupe font-light leading-relaxed mb-6">
              Founded in 2019, Velmora was born from a simple belief: every woman deserves 
              to wear beautiful, high-quality jewelry without the luxury price tag. We source 
              the finest materials and work with skilled artisans to create pieces that feel 
              premium and look effortlessly elegant.
            </p>
            <p className="text-taupe font-light leading-relaxed mb-8">
              Each piece in our collection is designed to be versatile enough for everyday wear 
              yet special enough to mark life's meaningful moments. Because the best jewelry 
              isn't just worn—it's treasured.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-extra-wide text-charcoal hover:text-gold transition-colors group"
            >
              Discover Our Journey
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
