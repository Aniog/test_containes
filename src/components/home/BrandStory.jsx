import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
              alt="Velmora jewelry craftmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-400/30" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
              Our Story
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mt-4 mb-6 leading-tight">
              Jewelry that tells your story
            </h2>
            
            <div className="space-y-4 text-charcoal-600 font-sans text-base leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to wear jewelry that makes her feel 
                extraordinary. Our pieces are thoughtfully designed to blend timeless elegance 
                with modern sensibility.
              </p>
              <p>
                Each piece in our collection is crafted with 18K gold plating over 
                hypoallergenic sterling silver, ensuring both beauty and comfort. We source 
                only the finest materials, because we know that quality is felt, not just seen.
              </p>
              <p>
                Founded by women, for women — Velmora is about celebrating life's moments, 
                big and small, and the jewelry that accompanies you through them all.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-sans text-sm font-medium tracking-wider 
                         text-charcoal-900 hover:text-gold-600 transition-colors group"
            >
              <span className="border-b border-charcoal-300 group-hover:border-gold-600 pb-1">
                Learn More About Us
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
