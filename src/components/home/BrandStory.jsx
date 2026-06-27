import * as React from "react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function BrandStory() {
  const textRef = useReveal();
  const imageRef = useReveal();
  return (
    <section className="bg-ivory py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div ref={imageRef} className="reveal md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden bg-cream">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="A jeweler's hands setting a crystal into a gold piece in a sunlit studio"
              data-strk-img-id="brand-story-studio"
              data-strk-img="[brand-story-quote] hands of a jeweler setting a crystal in a gold piece sunlit studio editorial"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div ref={textRef} className="reveal md:col-span-6">
          <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
            Our Story
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Made slowly.<br />Worn daily.
          </h2>
          <p
            id="brand-story-quote"
            className="mt-7 text-base md:text-lg text-ink-muted leading-relaxed max-w-lg"
          >
            Velmora was started at a kitchen table in Lisbon — a small idea
            that the jewelry we wear every day should be made with the same
            care as the pieces we save for later. Every Velmora piece is
            hand-finished in 18K gold plate, set by a person, and inspected
            before it ships.
          </p>
          <p className="mt-5 text-base text-ink-muted leading-relaxed max-w-lg">
            We design for the layering moment, the breakfast table, the
            airplane, the wedding. Pieces that age with you, and get better
            for it.
          </p>
          <Link
            to="/about"
            className={cn(
              "mt-9 inline-block text-xs uppercase tracking-button font-medium text-ink",
              "underline underline-offset-[6px] decoration-1",
              "hover:text-gold-deep transition-colors duration-300"
            )}
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
