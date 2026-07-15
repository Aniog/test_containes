import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--velmora-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent)] mb-4">
              Our Story
            </p>
            <h2 className="velmora-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--velmora-text)] mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="w-12 h-px bg-[var(--velmora-accent)] mb-6" />
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a luxury budget. We design demi-fine pieces in 18K gold plating that look and feel like heirlooms — without the heirloom price tag.
            </p>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              Every piece is crafted with hypoallergenic materials, designed for everyday wear, and backed by our 30-day return promise. Because the jewelry you love should love you back.
            </p>
            <Link to="/shop" className="velmora-btn-outline">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
