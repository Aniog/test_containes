import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-sand/30">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&q=80"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Where Craft Meets
              <br />
              <span className="italic font-light">Intention</span>
            </h2>

            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                Founded in 2019, Velmora was born from a simple belief: every woman 
                deserves to wear jewelry that makes her feel extraordinary, without 
                compromising on quality or conscience.
              </p>
              <p>
                Each piece in our collection is thoughtfully designed and crafted 
                with care, using ethically sourced materials and 18K gold plating 
                that stands the test of time. We believe in jewelry that becomes 
                a cherished part of your story—passed down, not thrown away.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-xs font-semibold tracking-[0.2em] uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors group"
            >
              Discover Our Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
