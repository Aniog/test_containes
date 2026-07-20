import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCollection = () => {
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              alt="The Golden Hour Collection"
              className="w-full h-full object-cover"
              data-strk-img-id="featured-collection-img-8f2a9c"
              data-strk-img="[featured-collection-subtitle] [featured-collection-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="max-w-lg">
            <p id="featured-collection-subtitle" className="text-sm font-semibold uppercase tracking-widest text-brand-500 mb-4">
              New Arrival
            </p>
            <h2 id="featured-collection-title" className="heading-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              The Golden Hour Collection
            </h2>
            <p className="text-ink-600 text-lg leading-relaxed mb-8">
              Inspired by the warm glow of sunset, this collection captures the magic of golden light in every piece. Delicate chains, luminous stones, and sculptural forms that feel both timeless and of the moment.
            </p>
            <Link to="/shop" className="btn-primary">
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
