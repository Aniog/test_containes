import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section bg-[var(--velmora-bg-alt)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 items-center">
          {/* Image */}
          <div className="mb-8 md:mb-0">
            <div className="aspect-[4/3] bg-[var(--velmora-deep)] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=80" 
                alt="Velmora atelier - hands crafting fine jewelry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold-dark)]">Since 2018</span>
            <h2 className="heading-serif text-4xl mt-2 mb-6">Our Story</h2>
            
            <div className="space-y-4 text-[var(--velmora-text-muted)] text-[15px] leading-relaxed">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should be worn every day, not saved for special occasions.
              </p>
              <p>
                We design demi-fine pieces in 18K gold plating that feel as precious as solid gold, but accessible enough to become part of your daily ritual.
              </p>
              <p>
                Each piece is thoughtfully crafted to layer, to last, and to be passed down.
              </p>
            </div>

            <Link 
              to="/about" 
              className="inline-block mt-8 text-sm tracking-[0.08em] uppercase border-b border-[var(--velmora-text)] pb-0.5 hover:text-[var(--velmora-gold-dark)] hover:border-[var(--velmora-gold-dark)]"
            >
              Read More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
