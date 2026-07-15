import React from 'react';
import { ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-background">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=900&q=80"
              alt="Velmora brand story"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Story</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink">Designed for real rituals</h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-secondary">
              Velmora was born from the belief that fine jewelry should feel effortless. We work with small ateliers to create demi-fine pieces in 18K gold plating, finished with care and worn with confidence.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
              Every design is made to transition from morning meetings to evening gatherings—quietly luxurious, never loud.
            </p>
            <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-[#9a7209] transition-colors">
              Read our story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
