import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  return (
    <section className="border-y border-hairline bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-24 lg:py-28">
        <div className="reveal relative">
          <div className="overflow-hidden">
            <img
              data-strk-img-id="brand-story-atelier-f2c481"
              data-strk-img="[brand-story-text] [brand-story-title] jewelry artisan atelier bench, hands polishing gold jewelry with tools, warm window light, craft and quiet luxury"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="The Velmora atelier in Lisbon"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-3 hidden bg-ivory px-6 py-5 shadow-[0_20px_50px_-24px_rgba(30,21,13,0.35)] md:block">
            <p className="font-serif text-3xl font-light text-bronze">Est. 2019</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-taupe">Lisbon Atelier</p>
          </div>
        </div>

        <div>
          <p className="reveal text-[11px] uppercase tracking-[0.35em] text-bronze">Our Story</p>
          <h2
            id="brand-story-title"
            className="reveal mt-4 font-serif text-3xl font-light leading-tight text-ink md:text-5xl"
          >
            Jewelry made to be
            <em className="text-bronze"> lived in</em>
          </h2>
          <div id="brand-story-text" className="reveal mt-6 space-y-4 text-sm leading-relaxed text-taupe md:text-base">
            <p>
              Velmora began at a small workbench in Lisbon, with a simple frustration: jewelry was
              either precious and precious-priced, or beautiful for a season and gone. We believed
              there was a third way.
            </p>
            <p>
              Our demi-fine pieces are plated in a generous layer of 18K gold over recycled
              sterling silver — hypoallergenic, tarnish-resistant, and made to move through real
              life with you. Showers, sunsets, school runs, celebrations.
            </p>
          </div>
          <Link
            to="/about"
            className="reveal group mt-8 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:border-bronze hover:text-bronze"
          >
            Read Our Story
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
