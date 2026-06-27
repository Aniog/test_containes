import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=800&fit=crop"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Story</h1>
          <p className="text-sm md:text-base text-white/80 max-w-md mx-auto">
            Where elegance meets everyday
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-velmora-600 leading-relaxed mb-6 text-lg">
              Velmora was founded with a simple yet powerful vision: to create jewelry that women can wear every day without compromise. 
              We believe that beautiful pieces shouldn't be locked away in jewelry boxes, reserved only for special occasions.
            </p>
            <p className="text-velmora-600 leading-relaxed mb-6">
              Our demi-fine collection bridges the gap between costume jewelry and luxury fine jewelry. Each piece is crafted with 
              18K gold plating over recycled brass, ensuring both the look and feel of luxury at an accessible price point.
            </p>
            <p className="text-velmora-600 leading-relaxed mb-6">
              We work with skilled artisans who share our commitment to quality and ethical practices. Every piece is designed in-house, 
              quality-checked, and presented in our signature packaging — because the experience should feel special from the moment you open the box.
            </p>

            <div className="hairline my-12" />

            <h2 className="text-2xl md:text-3xl font-serif text-center mb-8">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-3 text-gold-500">Quality</h3>
                <p className="text-velmora-600 text-sm leading-relaxed">
                  Premium materials and meticulous craftsmanship in every piece.
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-3 text-gold-500">Sustainability</h3>
                <p className="text-velmora-600 text-sm leading-relaxed">
                  Recycled materials and ethical production practices.
                </p>
              </div>
              <div>
                <h3 className="text-sm tracking-widest uppercase mb-3 text-gold-500">Accessibility</h3>
                <p className="text-velmora-600 text-sm leading-relaxed">
                  Luxury-quality jewelry at prices that make sense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Explore the Collection</h2>
          <p className="text-velmora-600 mb-8">
            Discover pieces designed to be worn, loved, and treasured.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
