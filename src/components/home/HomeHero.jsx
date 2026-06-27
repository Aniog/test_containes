import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

export function HomeHero() {
  const eyebrowRef = useReveal();
  const titleRef = useReveal({ threshold: 0.05 });
  const subRef = useReveal({ threshold: 0.05 });
  const ctaRef = useReveal({ threshold: 0.05 });
  return (
    <section className="relative w-full bg-cocoa text-bone overflow-hidden">
      {/* Background image — full bleed on desktop, tall on mobile */}
      <div className="relative w-full h-[88vh] min-h-[560px] md:h-[92vh] md:min-h-[720px]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="A model wearing layered gold jewelry, lit by warm afternoon light"
          data-strk-bg-id="hero-bg-warm-jewelry-portrait"
          data-strk-bg="[hero-headline] warm gold jewelry on model editorial portrait closeup"
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="1800"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark warm gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-cocoa/55 via-cocoa/30 to-cocoa/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoa/45 via-transparent to-transparent hidden md:block" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-16 md:pb-24">
          <p
            ref={eyebrowRef}
            className="reveal text-[11px] uppercase tracking-eyebrow font-medium text-gold-light"
          >
            New · The Heritage Edit
          </p>
          <h1
            ref={titleRef}
            id="hero-headline"
            className="reveal reveal-delay-1 mt-5 font-serif text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] text-bone max-w-3xl"
          >
            Crafted to be<br />Treasured.
          </h1>
          <p
            ref={subRef}
            className="reveal reveal-delay-2 mt-6 text-sm md:text-base text-bone-muted max-w-md leading-relaxed"
          >
            Demi-fine jewelry in 18K gold plate, hand-finished and made to be
            worn — and kept — forever.
          </p>
          <div
            ref={ctaRef}
            className="reveal reveal-delay-3 mt-9 flex items-center gap-4"
          >
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Shop the Collection
              </Button>
            </Link>
            <Link
              to="/about"
              className="text-xs uppercase tracking-button font-medium text-bone hover:text-gold-light transition-colors duration-300 underline underline-offset-4 decoration-1"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 right-6 md:right-10 z-10 hidden md:flex flex-col items-end gap-2 text-bone-muted">
          <span className="text-[10px] uppercase tracking-eyebrow font-medium">
            Scroll
          </span>
          <span className="block w-px h-10 bg-bone-muted" />
        </div>
      </div>
    </section>
  );
}
