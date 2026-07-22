import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-sand)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)]">
              Our Story
            </h2>
            <div className="w-16 h-px bg-[var(--color-gold)] mt-4 mb-6" />
            
            <p className="text-[var(--color-charcoal)]/80 leading-relaxed mb-6">
              Founded with a passion for quiet luxury, Velmora was born from the belief that 
              exceptional jewelry should be accessible to every woman. Each piece in our collection 
              is thoughtfully designed and crafted with the finest materials, ensuring timeless 
              elegance that transcends trends.
            </p>
            <p className="text-[var(--color-charcoal)]/80 leading-relaxed mb-8">
              Our demi-fine jewelry bridges the gap between fine jewelry and fashion pieces, 
              offering you the perfect balance of quality, style, and value. We believe in 
              jewelry that tells a story — yours.
            </p>
            
            <Link 
              to="/about"
              className="inline-block border-b border-[var(--color-charcoal)] pb-1 text-sm tracking-widest uppercase hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}