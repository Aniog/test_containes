import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="section bg-velmora-bg">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-velmora-bg-alt overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=80"
              alt="Velmora atelier - hands crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold-dark mb-2">Since 2018</div>
            <h2 className="mb-6">Our Story</h2>
            <div className="body-text text-velmora-text-muted space-y-4 mb-8">
              <p>
                Velmora was born from a simple belief: that beautiful jewelry should feel personal, 
                not precious. We design demi-fine pieces that become part of your everyday — 
                worn, loved, and passed down.
              </p>
              <p>
                Each piece is crafted with 18K gold plating over sterling silver, 
                set with carefully selected crystals. Hypoallergenic, water-resistant, 
                and made to last.
              </p>
            </div>
            <Link to="/about" className="btn btn-outline-gold">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;