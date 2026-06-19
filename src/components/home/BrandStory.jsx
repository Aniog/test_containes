import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-ivory)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
              alt="Crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: 'var(--color-warm-black)' }}>
              Our Story
            </h2>
            <div className="hairline max-w-20 mb-8" style={{ background: 'var(--color-gold)' }} />
            
            <p className="font-sans text-base leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>
              Founded with a vision to make fine jewelry accessible, Velmora represents the perfect balance between luxury and everyday elegance. Each piece is thoughtfully designed in our studio and crafted with care using only the finest materials.
            </p>
            
            <p className="font-sans text-base leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
              We believe jewelry should be more than an accessory—it should be a treasured part of your story. That's why we pour heart and soul into every creation, ensuring each piece brings joy for years to come.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-wide group"
              style={{ color: 'var(--color-warm-black)' }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}