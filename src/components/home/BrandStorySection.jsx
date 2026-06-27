import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden fade-in">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Right: Text Content */}
          <div className="space-y-8 slide-in-right">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                Every Piece Tells<br />
                <em className="text-velmora-gold">a Story</em>
              </h2>
              <div className="w-16 h-px bg-velmora-gold"></div>
            </div>
            
            <div className="space-y-4 text-velmora-text-light leading-relaxed">
              <p>
                At Velmora, we believe jewelry should be as unique as the moments it marks. 
                Our pieces are crafted with intention, using 18K gold plating and 
                hypoallergenic materials that feel beautiful against your skin.
              </p>
              <p>
                From delicate huggies perfect for everyday wear to statement necklaces 
                that transform an evening look, each design embodies quiet luxury — 
                the kind that doesn't shout, but whispers elegance.
              </p>
              <p>
                Whether you're treating yourself or celebrating someone special, 
                Velmora pieces are designed to be treasured for years to come.
              </p>
            </div>
            
            <a
              href="/about"
              className="group inline-flex items-center space-x-2 text-sm uppercase tracking-wider font-medium hover:text-velmora-gold transition-colors"
            >
              <span>Discover Our Story</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
