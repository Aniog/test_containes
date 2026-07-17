import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section
      aria-labelledby="story-title"
      className="py-20 md:py-28 bg-ivory-soft"
    >
      <div className="container-wide grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-espresso order-2 md:order-1">
          <img
            alt="The Velmora atelier — hand-finishing a piece of jewelry"
            data-strk-img-id="brand-story-img-4d5e6f"
            data-strk-img="[story-tagline] [story-title]"
            data-strk-img-ratio="5x6"
            data-strk-img-width="900"
            className="absolute inset-0 w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 6'/%3E"
          />
        </div>

        <div className="order-1 md:order-2 max-w-lg">
          <p id="story-tagline" className="kicker mb-4">Our Story</p>
          <h2
            id="story-title"
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-ink text-balance"
          >
            Designed slowly.
            <br />
            <span className="italic">Worn for years.</span>
          </h2>
          <div className="mt-6 space-y-4 text-ink-muted leading-relaxed text-pretty">
            <p>
              Velmora began with a simple belief: fine jewelry shouldn't live
              behind a glass case. It should live on you — through the everyday,
              the milestones, and the quiet moments in between.
            </p>
            <p>
              Every piece is hand-finished in small batches from 18K gold-plated
              brass and hypoallergenic materials. We work slowly, with intention,
              so what arrives at your door is meant to last — both in craft and
              in style.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="#"
              className="link-underline inline-flex items-center gap-2"
            >
              Read our story
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
