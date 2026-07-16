import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold-400 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-4">
              Our Story
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-900 leading-tight mb-6">
              Jewelry That Tells
              <br />
              <span className="italic">Your Story</span>
            </h2>

            <div className="w-12 h-px bg-gold-400 mb-6" />

            <p className="font-sans text-base text-charcoal-600 leading-relaxed mb-4">
              At Velmora, we believe that jewelry is more than just an accessory—it's a reflection
              of who you are. Each piece in our collection is thoughtfully designed to celebrate
              the modern woman: confident, elegant, and unapologetically herself.
            </p>

            <p className="font-sans text-base text-charcoal-600 leading-relaxed mb-8">
              Our demi-fine jewelry is crafted from premium 18K gold-plated materials, offering
              the perfect balance of luxury and accessibility. Every piece is hypoallergenic,
              tarnish-resistant, and designed to be treasured for years to come.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-ultra-wide uppercase text-gold-600 hover:text-gold-700 transition-colors group"
            >
              Discover Our Craft
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
