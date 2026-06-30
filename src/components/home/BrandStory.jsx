import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-32 bg-velmora-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden bg-velmora-sand">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            
            {/* Decorative Element */}
            <div className="absolute top-8 left-8 w-20 h-20 border-2 border-white/40" />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-lg mb-6">Our Story</h2>
              <div className="divider-gold w-16 mb-8" />
            </div>

            <div className="space-y-6 font-sans text-velmora-text-secondary leading-relaxed">
              <p>
                Velmora was born from a simple belief: that jewelry should be as enduring as 
                the moments it marks. We create pieces that feel personal, never loud—designed 
                for the woman who appreciates quiet luxury and thoughtful craftsmanship.
              </p>
              
              <p>
                Each piece in our collection is crafted with 18K gold plating over high-quality 
                brass, ensuring our jewelry is not only beautiful but built to last. We prioritize 
                hypoallergenic materials and sustainable practices, because luxury should never 
                come at the cost of your values.
              </p>
              
              <p className="font-serif text-lg italic text-velmora-charcoal">
                "Jewelry is not just an accessory—it's a memory waiting to be made."
              </p>
            </div>

            <Link
              to="/about"
              className="btn-secondary inline-block mt-8"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
