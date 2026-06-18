import React from "react";
import { Link } from "react-router-dom";
export default function BrandStory() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] bg-ivory overflow-hidden order-1 md:order-none">
          <img
          data-strk-img-id="brand-story-image-7c2a"
          data-strk-img="[brand-story-desc] [brand-story-title] artisan hands crafting gold jewelry warm studio"
          data-strk-img-ratio="4x3"
          data-strk-img-width={1000}
          alt="A Velmora artisan finishing a gold piece"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        </div>

        <div className="max-w-md md:max-w-lg">
          <p className="text-[11px] uppercase tracking-wider2 text-gold mb-4">Our Story</p>
          <h2
            id="brand-story-title"
            className="font-serif text-4xl md:text-5xl leading-tight text-ink"
          >
            Quietly considered, made&nbsp;by hand.
          </h2>
          <p
            id="brand-story-desc"
            className="mt-6 text-base text-espresso leading-relaxed"
          >
            Velmora began as a search for the kind of jewelry that gets better with wear —
            pieces honest enough to layer with anything, refined enough to mean something.
            Each design is shaped by hand in our studio, finished in 18K gold,
            and built to last well beyond a season.
          </p>
          <p className="mt-4 text-base text-espresso/80 leading-relaxed">
            We make small batches. We choose materials carefully. And we believe the
            best objects are the ones you reach for without thinking.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 text-[11px] uppercase tracking-editorial border-b border-ink pb-1 hover:text-gold hover:border-gold transition"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
