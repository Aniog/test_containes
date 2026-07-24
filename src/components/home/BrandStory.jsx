import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-warm-white)' }}>
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 border"
              style={{ borderColor: 'var(--color-gold)' }}
            />
          </div>

          {/* Content */}
          <div className="py-8">
            <p
              className="text-sm tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--color-gold)' }}
            >
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Jewelry that tells<br />
              <em>your story</em>
            </h2>
            <div className="space-y-4 mb-8">
              <p style={{ color: 'var(--color-walnut)' }}>
                At Velmora, we believe every woman deserves to wear jewelry that makes her feel extraordinary. 
                Our pieces are designed with intention, crafted with care, and priced to be accessible.
              </p>
              <p style={{ color: 'var(--color-walnut)' }}>
                Each design begins as a sketch, refined through countless iterations until it captures 
                the perfect balance of elegance and everyday wearability. We source only the finest 
                18K gold plating over hypoallergenic metals.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-gold-dark)]"
              style={{ color: 'var(--color-espresso)' }}
            >
              Discover Our Journey
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
