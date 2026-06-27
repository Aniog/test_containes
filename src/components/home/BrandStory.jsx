import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_STORY } from '@/data/products';

export default function BrandStory() {
  return (
    <section id="brand-story" className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Image — left */}
          <div className="md:col-span-6 lg:col-span-7 order-1 md:order-1">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-sand">
              <img
                alt="Velmora atelier — jewelry made by hand"
                data-strk-img-id="brand-story-image"
                data-strk-img="[brand-story-title] [brand-story-body] [brand-story-eyebrow]"
                data-strk-img-ratio="5x6"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text — right */}
          <div className="md:col-span-6 lg:col-span-5 order-2 md:order-2">
            <p
              id="brand-story-eyebrow"
              className="eyebrow mb-5"
            >
              {BRAND_STORY.eyebrow}
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.08]"
            >
              {BRAND_STORY.title}
            </h2>
            <p
              id="brand-story-body"
              className="mt-7 text-base md:text-lg text-charcoal leading-relaxed max-w-md"
            >
              {BRAND_STORY.body}
            </p>
            <Link
              to={BRAND_STORY.cta.href}
              className="btn-ghost mt-10"
            >
              {BRAND_STORY.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}