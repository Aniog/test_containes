import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="aspect-[4/5] rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038224558-28ad3fb558a7?w=900&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:pr-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#6E6862] mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide leading-tight mb-6">
              Jewelry Should Feel Like You
            </h2>
            <p className="text-sm md:text-[15px] text-[#6E6862] leading-relaxed mb-6">
              Velmora was born from a simple belief: luxury should be accessible, and
              beauty should feel effortless. Each piece in our collection is designed in
              London and crafted using responsibly sourced materials — 18K gold plating,
              surgical steel posts, and meticulous attention to detail.
            </p>
            <p className="text-sm md:text-[15px] text-[#6E6862] leading-relaxed mb-8">
              We create demi-fine jewelry for the modern woman. Pieces that transition
              from morning coffee to evening occasions without missing a beat.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase font-medium text-[#B8966A] hover:underline"
            >
              Read Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
