import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-8">
          <div>
            <h2 
              className="font-serif text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Our Story
            </h2>
            <div className="w-16 h-px bg-gold mb-8" />
          </div>

          <p className="text-lg leading-relaxed text-charcoal/80">
            At Velmora, we believe that fine jewelry should be accessible without compromising on quality. 
            Each piece in our collection is thoughtfully designed and crafted with precision, using 
            18K gold plating and hypoallergenic materials that are meant to last.
          </p>

          <p className="text-lg leading-relaxed text-charcoal/80">
            From delicate everyday pieces to statement jewelry for special occasions, our demi-fine 
            collection bridges the gap between costume and fine jewelry. We're committed to 
            sustainable practices and ethical sourcing, ensuring that every piece you wear tells 
            a story of craftsmanship and care.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center space-x-2 text-sm uppercase tracking-wider text-charcoal hover:text-gold transition-colors group"
          >
            <span>Discover Our Journey</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
