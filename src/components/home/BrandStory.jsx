import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="section-padding bg-cream">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="artisan gold jewelry workshop hands crafting jewelry warm lighting editorial"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0 bg-stone-200"
            />
            {/* Decorative frame */}
            <div className="absolute inset-4 border border-white/20 rounded pointer-events-none" />
          </div>

          {/* Text content */}
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-muted font-sans mb-4">
              Our Story
            </p>
            <h2 className="heading-serif text-3xl md:text-5xl text-charcoal mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-stone-600 leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves jewelry that feels luxurious 
              without the luxury price tag. We create demi-fine pieces in 18K gold plating over 
              sterling silver — designed to be worn every day and treasured for years.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Each piece in our collection is thoughtfully designed, rigorously tested for quality, 
              and crafted with care. We work directly with skilled artisans to bring you accessible 
              luxury that doesn't compromise on craftsmanship or ethics.
            </p>
            <Link
              to="/shop"
              className="btn-secondary inline-block"
            >
              Discover the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
