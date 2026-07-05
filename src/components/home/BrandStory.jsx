import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-gold/30" />
          </div>

          {/* Content */}
          <div className="md:pl-8">
            <span className="text-gold text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 mb-6">
              Crafted with Intention
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              At Velmora, we believe jewelry should be more than an accessory—it should be a 
              cherished part of your story. Each piece is thoughtfully designed and crafted 
              with premium materials, ensuring timeless beauty that lasts.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Our commitment to quality means using only the finest 18K gold plating and 
              hypoallergenic materials, so you can wear your pieces with confidence, every day.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors group"
            >
              Learn More About Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;