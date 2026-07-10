import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";
import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section
      id="home-hero-section"
      className="relative w-full bg-ink-950 text-textondark overflow-hidden"
    >
      <div className="relative h-[88vh] min-h-[640px] max-h-[900px] w-full">
        {/* Background image */}
        <div className="absolute inset-0">
          <StrkImage
            imgId="home-hero-bg-9d3a7c"
            query="[home-hero-subtitle] [home-hero-title] warm-lit closeup of model wearing 18K gold plated earrings and necklace on dark background editorial jewelry photography"
            ratio="3x4"
            width={1600}
            alt="Model wearing Velmora demi-fine gold jewelry"
            bg
            className="absolute inset-0 w-full h-full"
          />
          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/30 to-ink-950/80" />
        </div>

        <div className="relative h-full mx-auto max-w-content px-6 md:px-10 lg:px-16 flex flex-col justify-end pb-16 md:pb-24">
          <div className="max-w-2xl">
            <span id="home-hero-eyebrow" className="label-cap text-champagne-300">
              Demi-Fine · Hand-Finished
            </span>
            <h1
              id="home-hero-title"
              className="mt-5 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] font-light text-textondark"
            >
              Crafted to be
              <br className="hidden sm:block" /> Treasured.
            </h1>
            <p
              id="home-hero-subtitle"
              className="mt-6 text-base md:text-lg text-textondark/85 max-w-xl leading-relaxed"
            >
              Heirloom-inspired demi-fine jewelry, finished in 18K gold and made to
              be worn — quietly, daily, for years to come.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button variant="accent" size="lg" as={Link} to="/shop">
                Shop the Collection
              </Button>
              <Link
                to="/shop?category=sets"
                className="inline-flex items-center gap-2 text-textondark label-cap hover:text-champagne-300 editorial-transition"
              >
                Discover Gifts
                <ArrowRight size={14} strokeWidth={1.4} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
