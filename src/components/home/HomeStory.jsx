import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Artwork from "@/components/ui/Artwork";

export default function HomeStory() {
  return (
    <section className="container-editorial py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-6 order-2 md:order-1 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-bone">
          <Artwork
            variant="story"
            tone="warm"
            className="absolute inset-0 w-full h-full"
          />
          {/* decorative frame */}
          <div className="absolute inset-4 border border-ivory/40 pointer-events-none" />
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <div className="label-eyebrow text-mute mb-5">Our Story</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
            Designed in-house.
            <br />
            <em className="italic">Made to be worn.</em>
          </h2>
          <p className="mt-6 text-charcoal leading-relaxed text-base md:text-lg max-w-lg">
            Velmora began with a single cuff — a piece made for a friend, worn every day, and never taken off. Today, every piece we make is designed to feel that way. Heirloom-inspired demi-fine jewelry, made with care, priced without pretense.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-[0.32em] uppercase text-ink hover:text-gold-dark transition-colors"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="h-px w-12 bg-line" />
            <span className="text-[11px] tracking-[0.32em] uppercase text-mute">
              Est. 2021
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
