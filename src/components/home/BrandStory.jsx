import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] md:aspect-auto md:h-[520px] overflow-hidden bg-velmora-bg-alt">
          <img 
            src="https://images.unsplash.com/photo-1506630448388-4e48f5cd3468?w=1200&q=85" 
            alt="Velmora atelier - hands crafting fine jewelry"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Since 2018</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-2 mb-6">Our Story</h2>
          
          <div className="space-y-4 text-[15px] leading-relaxed text-velmora-text-muted">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should feel personal, 
              not precious. We design demi-fine pieces that become part of your daily ritual — 
              worn, loved, and passed down.
            </p>
            <p>
              Each piece is thoughtfully crafted in small batches using 18K gold plating over 
              hypoallergenic brass. We believe in quality over quantity, intention over trend.
            </p>
          </div>

          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm tracking-[0.08em] uppercase border-b border-velmora-gold pb-0.5 hover:text-velmora-gold-dark hover:border-velmora-gold-dark"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
