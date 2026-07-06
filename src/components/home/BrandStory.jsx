import { Link } from "react-router-dom";
import { useImageLoader } from "@/hooks/useImageLoader";

export function BrandStory() {
  const containerRef = useImageLoader();

  return (
    <section
      id="story"
      ref={containerRef}
      className="bg-cream py-14 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-linen md:aspect-square">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-body] gold jewelry hands artisan"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="md:py-8">
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-gold">
              Our Story
            </p>
            <h2
              id="story-title"
              className="font-serif text-3xl leading-[1.1] md:text-4xl lg:text-5xl"
            >
              Quiet Luxury, Made for Everyday
            </h2>
            <p
              id="story-body"
              className="mt-6 leading-relaxed text-warm-gray"
            >
              Velmora was born from a simple belief: beautiful jewelry should
              feel effortless. We design demi-fine pieces in 18k gold plate,
              balancing editorial elegance with wearability. Every curve,
              clasp, and finish is considered so you can treasure them for
              years.
            </p>
            <p className="mt-4 leading-relaxed text-warm-gray">
              No fast-fashion noise. No markups that don't make sense. Just
              refined, lasting pieces you'll reach for again and again.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block border-b border-espresso pb-1 text-xs uppercase tracking-widest transition-colors hover:border-gold hover:text-gold"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
