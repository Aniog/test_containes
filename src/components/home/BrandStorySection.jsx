import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-velmora-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Left */}
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden bg-velmora-cream">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">
              Our<br />
              <span className="font-normal">Story</span>
            </h2>
            
            <div className="space-y-6 text-velmora-dark-gray leading-relaxed">
              <p>
                At Velmora, we believe jewelry should be treasured — not just worn. 
                Each piece is crafted with intention, using 18K gold plating and 
                hypoallergenic materials that feel as beautiful as they look.
              </p>
              <p>
                Our demi-fine collection bridges the gap between precious and accessible, 
                offering quiet luxury for women who appreciate the finer things without 
                the pretense.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-3 mt-10 group"
            >
              <span className="font-serif text-lg border-b-2 border-velmora-gold pb-1 
                             hover:text-velmora-gold transition-colors">
                Discover Our Journey
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
