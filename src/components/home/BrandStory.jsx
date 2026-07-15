import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section id="about" className="py-16 md:py-24 section-padding">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img
              data-strk-img-id="brand-story-main"
              data-strk-img="gold jewelry artisan hands crafting closeup warm editorial lighting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry artisan craft"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-3 font-sans">
              Our Story
            </p>
            <h2 className="text-heading-1 text-charcoal-800 mb-6">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="space-y-4 text-body-lg text-charcoal-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that feels as 
                special as the moments she wears it for. We create demi-fine pieces that bridge 
                the gap between costume jewelry and fine jewelry — premium quality at accessible prices.
              </p>
              <p>
                Each piece in our collection is crafted from 18K gold-plated stainless steel, 
                designed to be hypoallergenic and tarnish-resistant. We work directly with 
                artisan workshops to bring you thoughtful designs without the traditional retail markup.
              </p>
              <p>
                From a quiet morning coffee to a candlelit dinner, Velmora pieces are made 
                to be worn, loved, and treasured for years to come.
              </p>
            </div>
            <Link
              to="/shop"
              className="btn-outline mt-8 self-start no-underline"
            >
              Discover the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
