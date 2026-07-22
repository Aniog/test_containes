import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function BrandStory() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={(node) => {
        ref.current = node;
      }}
      className="bg-brand-cream"
    >
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
        <div
          className={cn(
            "relative aspect-square bg-brand-warm-black md:aspect-auto",
            isVisible && "animate-fadeUp"
          )}
        >
          <div
            data-strk-bg-id="brand-story-bg"
            data-strk-bg="[story-title] [story-body] jewelry maker hands gold"
            data-strk-bg-ratio="1x1"
            data-strk-bg-width="900"
            className="absolute inset-0"
          />
        </div>
        <div
          className={cn(
            "flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 lg:py-24",
            isVisible && "animate-fadeUp"
          )}
          style={{ animationDelay: isVisible ? "0.2s" : "0s" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-brand-rose-dark">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-[1.1] text-brand-charcoal md:text-5xl"
          >
            Quiet Luxury, Worn Daily
          </h2>
          <p
            id="story-body"
            className="mt-6 text-base leading-relaxed text-brand-charcoal/80"
          >
            Velmora was founded on a simple belief: fine jewelry should feel
            personal, not precious. Each piece is designed in-house and finished
            in 18k gold plating, balancing refined craftsmanship with an
            accessible price point so you can build a collection that moves with
            you — from morning coffee to evening plans.
          </p>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-brand-charcoal hover:text-brand-rose-dark"
          >
            Read Our Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
