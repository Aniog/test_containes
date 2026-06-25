import React from 'react';
import { Link } from 'react-router-dom';

export default function StorySplit() {
  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[720px]">
          <img
            alt="Velmora atelier"
            data-strk-img-id="story-img-7m2k"
            data-strk-img={`[story-title] [story-lede] jewelry artisan workshop hands gold close up warm light editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="1100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
          <p className="text-[11px] uppercase tracking-[0.4em] text-champagne">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-5 font-serif text-4xl font-light leading-[1.1] text-cream md:text-5xl lg:text-6xl"
          >
            Quietly made.<br />
            <em className="italic text-champagne">Endlessly worn.</em>
          </h2>
          <p
            id="story-lede"
            className="mt-7 max-w-md text-base leading-relaxed text-cream/75 md:text-lg"
          >
            Velmora was founded in 2021 around a small atelier, a few patient
            hands, and a belief that fine-feeling jewelry should not cost a
            month's rent. We work in 18K gold-plated brass, set with hand-cut
            crystal and freshwater pearl, and we make in small batches so
            nothing ever feels mass-produced.
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
            Every piece is hypoallergenic, water-safe, and tested for daily
            wear. We hope you forget you're wearing it. And then, in some
            light, remember.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex w-fit items-center gap-3 border border-cream/40 px-9 py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition-colors hover:bg-cream hover:text-ink"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
