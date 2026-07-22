import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:py-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold mb-4">
              Our Story
            </p>
            <h2 className="section-heading mb-8">
              Where Elegance<br />Meets Craft
            </h2>
            <div className="space-y-6 text-charcoal-light leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to feel adorned. Our journey began with 
                a simple vision: to create jewelry that balances timeless sophistication with 
                accessible luxury.
              </p>
              <p>
                Each piece is thoughtfully designed in our studio and crafted by skilled artisans 
                using premium materials — 18K gold plating, hypoallergenic metals, and carefully 
                selected crystals that catch light beautifully.
              </p>
              <p>
                We don't just make jewelry. We create heirlooms for the modern era — pieces you'll 
                reach for again and again, whether you're dressing up or embracing effortless everyday elegance.
              </p>
            </div>
            <div className="mt-10">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-3 text-sm font-medium text-charcoal hover:text-gold transition-colors group"
              >
                Discover Our Story
                <span className="w-12 h-px bg-current transform origin-left transition-transform duration-300 group-hover:scale-x-150" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
