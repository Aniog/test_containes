import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="section-padding bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-4">
              Our Story
            </p>
            <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Where Craft<br />Meets Care
            </h2>
            <div className="hairline w-12 mb-6" />
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over recycled brass, and finished with the kind of care usually reserved for fine jewelry.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              We work directly with artisan workshops, cutting out the middlemen so you get exceptional quality at an honest price. Every piece is hypoallergenic, nickel-free, and made to be worn every day.
            </p>
            <Link to="/" className="btn-outline inline-flex">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
