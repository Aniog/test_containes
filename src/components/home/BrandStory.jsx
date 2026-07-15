import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/3] bg-[var(--velmora-bg-dark)] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1000&q=80" 
            alt="Velmora atelier - hands crafting fine jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-lg">
          <p className="text-xs tracking-[0.15em] text-muted uppercase mb-3">Since 2018</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Story</h2>
          <div className="body-text text-[var(--velmora-text-muted)] space-y-4 mb-8">
            <p>
              Velmora was born from a simple belief: that beautiful jewelry should be accessible, 
              not just for special occasions, but for every day.
            </p>
            <p>
              We design demi-fine pieces that honor the quiet luxury of well-made things — 
              crafted with care, meant to be worn, and destined to become part of your story.
            </p>
          </div>
          <Link 
            to="/about" 
            className="velmora-btn velmora-btn-gold-outline inline-block"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
