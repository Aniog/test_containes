import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-surface-warm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200&q=80" 
            alt="Artisan hands crafting delicate gold jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.15em] text-text-muted mb-3">SINCE 2019</p>
          <h2 className="serif text-4xl tracking-tight mb-6">Our Story</h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-text-muted">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be worn every day, 
              not saved for special occasions.
            </p>
            <p>
              We design demi-fine pieces that honor the quiet luxury of everyday moments. 
              Each piece is crafted with intention, using 18K gold plating over hypoallergenic brass, 
              and finished by hand in small batches.
            </p>
          </div>
          <Link 
            to="/about" 
            className="inline-block mt-8 text-sm tracking-widest border-b border-current pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            READ MORE ABOUT US
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;