import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedCollection = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <img
              data-strk-img-id="featured-collection-img-8f2a9c"
              data-strk-img="[featured-collection-title] [featured-collection-subtitle] gold jewelry elegant"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              alt="Featured collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p id="featured-collection-subtitle" className="text-sm tracking-widest text-brand-muted uppercase mb-4">
              New Arrivals
            </p>
            <h2 id="featured-collection-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-foreground mb-6 leading-tight">
              The Golden Hour Collection
            </h2>
            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              Inspired by the warm glow of sunset, this collection captures the essence of golden hour in every piece. 
              Delicate chains, sculptural hoops, and pendant necklaces designed to be layered and loved.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center gap-3 text-brand-accent hover:text-brand-accent/80 transition-colors group"
            >
              <span className="text-sm tracking-widest uppercase font-medium">Explore the Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
