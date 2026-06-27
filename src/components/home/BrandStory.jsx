import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="bg-velmora-cream">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-title] [brand-story-body] gold jewelry hands artisan making"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora craftsmanship"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-serif text-4xl font-medium leading-tight md:text-5xl"
          >
            Quiet Luxury, Made for Real Life
          </h2>
          <p
            id="brand-story-body"
            className="mt-6 text-base leading-relaxed text-velmora-muted"
          >
            Velmora was born from a simple belief: fine jewelry should feel
            attainable. Each piece is cast in 18k gold-plated brass and finished
            by hand, balancing timeless silhouettes with the kind of durability
            you can wear from morning coffee to midnight toasts.
          </p>
          <p className="mt-4 text-base leading-relaxed text-velmora-muted">
            We design for women who invest in themselves and the people they
            love — because the best gifts are the ones that last.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-velmora-dark transition-colors hover:text-velmora-gold"
          >
            Read our story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
