import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="bg-velmora-cream section-padding py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="relative aspect-[4/5] bg-velmora-sand overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-9f8e7d"
            data-strk-img="[brand-story-title] [brand-story-body]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:py-8">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-4">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-charcoal leading-tight mb-6"
          >
            Designed for the<br />Modern Woman
          </h2>
          <p
            id="brand-story-body"
            className="font-sans text-sm md:text-base text-velmora-gray leading-relaxed mb-8"
          >
            Velmora was born from a simple belief: fine jewelry should not be reserved for special occasions alone. 
            We create demi-fine pieces that bridge the gap between costume and fine jewelry — using 18K gold plating, 
            surgical-grade materials, and thoughtful design to deliver lasting quality at an accessible price point. 
            Every piece is crafted to be worn daily, layered freely, and treasured for years.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wider uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors group"
          >
            Our Story
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}