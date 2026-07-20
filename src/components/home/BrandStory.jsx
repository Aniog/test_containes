import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-20 lg:py-0 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="aspect-[4/5] lg:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop"
              alt="Jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pl-20 lg:pr-12">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal mb-6">
              Designed for the Modern Woman
            </h2>
            <p className="font-sans text-sm text-velmora-warmGray leading-relaxed mb-4">
              Velmora was born from a simple belief: fine jewelry should not require a fine-art budget. Every piece in our collection is thoughtfully designed using 18K gold plating, hypoallergenic materials, and meticulous attention to detail.
            </p>
            <p className="font-sans text-sm text-velmora-warmGray leading-relaxed mb-8">
              We create jewelry for the moments that matter — whether you are treating yourself or surprising someone you love. Each design balances timeless elegance with contemporary edge, so you never have to choose between classic and cool.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors group"
            >
              Our Story
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
