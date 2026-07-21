import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="section-padding bg-[#FAF8F5]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-[#F5F0EB]">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Velmora jewelry"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://placehold.co/600x750/C9A96E/FAF8F5?text=Our+Story'; }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A96E]/30 hidden md:block" />
          </div>

          <div className="max-w-md">
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Our Story
            </h2>
            <div className="w-12 h-px bg-[#C9A96E] mb-6" />

            <p className="text-[#8A8580] leading-relaxed mb-4">
              Velmora was born from a simple belief: luxury should not be reserved for special occasions. Every woman deserves to feel adorned, every day.
            </p>
            <p className="text-[#8A8580] leading-relaxed mb-8">
              We craft demi-fine jewelry using 18K gold plating and hypoallergenic materials, bridging the gap between precious and accessible. Each piece is designed in our studio and crafted to be treasured for years to come.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#C9A96E] uppercase tracking-[0.15em] text-sm font-medium hover:gap-3 transition-all"
            >
              Discover Our Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
