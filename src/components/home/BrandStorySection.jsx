import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStorySection() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] bg-stone-100 overflow-hidden">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] gold jewelry making artisan hands warm light"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:py-8">
            <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6"
            >
              Designed with Intention
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Velmora was born from a simple belief: that fine jewelry should
                feel attainable, not exclusive. Every piece in our collection is
                designed in-house and crafted with the same attention to detail
                you would expect from heritage ateliers — at a price that invites
                you to wear them daily.
              </p>
              <p>
                We use 18K gold plating on premium base metals, ensuring a warm,
                lasting finish that resists tarnishing. Our designs honor
                timeless silhouettes while embracing modern minimalism, so you
                never have to choose between classic and contemporary.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm tracking-widest uppercase text-velmora-dark hover:text-velmora-gold transition-colors"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
