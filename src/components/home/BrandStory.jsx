import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold-200 rounded-lg" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-taupe text-sm tracking-[0.2em] uppercase mb-4 font-body">
              Our Story
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight mb-6">
              Jewelry that tells
              <br />
              <span className="italic">your story</span>
            </h2>
            
            <div className="space-y-4 text-charcoal/70 leading-relaxed font-body">
              <p>
                At Velmora, we believe every woman deserves to feel extraordinary. Our journey began with a simple vision: to create accessible luxury that doesn't compromise on quality or conscience.
              </p>
              <p>
                Each piece is thoughtfully designed and crafted with care, using premium materials like 18K gold plating and hypoallergenic metals. We believe in jewelry that moves with you—from morning meetings to evening celebrations.
              </p>
              <p>
                More than adornment, Velmora pieces are meant to be treasured, passed down, and worn with joy for years to come.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-espresso group"
            >
              <span className="text-sm font-body font-medium border-b border-espresso pb-0.5">
                Discover Our Journey
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
