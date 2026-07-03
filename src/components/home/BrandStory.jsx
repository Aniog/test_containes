import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F8F5F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-[#B8860B] rounded-lg hidden lg:block" />
          </div>

          {/* Text Side */}
          <div className="lg:pl-16">
            <h2 className="font-serif-display text-4xl md:text-5xl mb-6">
              Crafted with<br />
              <em className="italic" style={{ color: '#B8860B' }}>Intention</em>
            </h2>
            
            <div className="space-y-4 leading-relaxed mb-8" style={{ color: '#6B6560' }}>
              <p>
                At Velmora, we believe jewelry should be as unique as the person wearing it. 
                Each piece in our collection is thoughtfully designed and meticulously crafted 
                using demi-fine materials that bridge the gap between costume and fine jewelry.
              </p>
              <p>
                Our 18K gold-plated pieces are made to last, featuring hypoallergenic materials 
                and timeless designs that transition seamlessly from day to night, from casual to 
                celebration.
              </p>
            </div>

            <Link
              to="/about"
              className="btn-premium-outline inline-block"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
