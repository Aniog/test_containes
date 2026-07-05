import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-cream">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold hidden lg:block" />
        </div>

        {/* Text Side */}
        <div className="space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl">Our Story</h2>
          <div className="w-16 h-0.5 bg-gold" />
          
          <p className="text-lg leading-relaxed text-charcoal-light">
            At Velmora, we believe that jewelry should be as enduring as the moments it marks. 
            Founded on the principle that luxury shouldn't be out of reach, we craft demi-fine pieces 
            that bridge the gap between precious and accessible.
          </p>
          
          <p className="text-lg leading-relaxed text-charcoal-light">
            Each piece is thoughtfully designed and meticulously crafted using 18K gold plating 
            over high-quality brass, ensuring our jewelry is not only beautiful but built to last. 
            We prioritize hypoallergenic materials because we believe everyone deserves to feel 
            beautiful in their skin.
          </p>

          <p className="text-lg leading-relaxed text-charcoal-light font-light italic">
            "Jewelry is not just an accessory—it's a memory, a milestone, a quiet confidence 
            you carry with you."
          </p>

          <Link 
            to="/about"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-gold hover:text-gold-dark transition-colors group"
          >
            Discover Our Journey
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;