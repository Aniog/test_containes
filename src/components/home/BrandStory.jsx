import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="bg-ivory-light">
      <div className="mx-auto max-w-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto order-2 lg:order-1 bg-cocoa overflow-hidden">
            <img
              alt="Hands of a jewelry maker shaping a gold ring"
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-headline] [brand-story-sub] jewelry maker hands shaping gold ring atelier"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 flex items-center px-6 md:px-12 lg:px-20 py-16 md:py-24">
            <div className="max-w-md">
              <p className="editorial-eyebrow mb-5">The Velmora Atelier</p>
              <h2 id="brand-story-headline" className="serif-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-cocoa">
                Quiet luxury, <em className="italic font-light">made by hand</em>.
              </h2>
              <p id="brand-story-sub" className="mt-6 text-base text-cocoa-soft leading-relaxed">
                Born in a small Los Angeles studio in 2021, Velmora is a celebration of the everyday heirloom. Each piece is hand-finished in 18K gold plate over brass, designed to layer, to gift, and to wear — for a very long time.
              </p>
              <p className="mt-4 text-base text-cocoa-soft leading-relaxed">
                We believe luxury should feel quiet, not loud. That the most-loved piece in your jewelry box should be the one you forget you're wearing.
              </p>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-cocoa hover:text-claret transition-colors duration-300"
              >
                Our Story
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
