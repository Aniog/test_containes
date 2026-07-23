import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative aspect-square bg-velmora-light-gray overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-velmora-charcoal leading-relaxed">
              <p>
                At Velmora, we believe that jewelry should be as unique as the moments it marks. 
                Founded with a passion for accessible luxury, we create demi-fine pieces that bridge 
                the gap between precious and playful.
              </p>
              <p>
                Each design is thoughtfully crafted using 18K gold plating and hypoallergenic materials, 
                ensuring that our jewelry not only looks beautiful but feels comfortable for everyday wear.
              </p>
              <p>
                From delicate huggies to statement necklaces, every Velmora piece is designed to be 
                treasured — whether you're treating yourself or celebrating someone special.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 border-b-2 border-velmora-gold text-velmora-gold 
                       uppercase tracking-wider text-sm pb-1 hover:border-velmora-black hover:text-velmora-black 
                       transition-colors"
            >
              Discover Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
