// Brand Story Section Component
import React from 'react';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  return (
    <section className="py-20 bg-velmora-cream">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-velmora-beige">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-velmora-gold hidden md:block" />
          </div>

          {/* Right: Text Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Crafted with<br />
              <span className="italic">Intention</span>
            </h2>
            <div className="divider-hairline w-16 my-6" />
            <p className="text-velmora-text-secondary mb-6 leading-relaxed">
              At Velmora, we believe jewelry should be as unique as the moments it marks.
              Each piece in our collection is thoughtfully designed and meticulously crafted,
              using only the finest 18K gold plating and hypoallergenic materials.
            </p>
            <p className="text-velmora-text-secondary mb-8 leading-relaxed">
              From our studio to your jewelry box, every detail is considered. We create
              demi-fine pieces that bridge the gap between precious and accessible — jewelry
              that feels special enough for life's grandest occasions, yet effortless enough
              for everyday wear.
            </p>
            <Link
              to="/about"
              className="btn-premium btn-premium-outline"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
