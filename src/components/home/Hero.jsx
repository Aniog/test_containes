import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { HeroFigureArt } from "@/components/illustrations/JewelryArt";
import { heroPhoto } from "@/data/products";

const Hero = () => {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] bg-mocha overflow-hidden">
      {/* Background composition: editorial figure + warm gradient */}
      <div className="absolute inset-0">
        {heroPhoto ? (
          <img
            src={heroPhoto}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
            onError={(e) => {
              // Fallback to SVG illustration if image fails
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}
        <div className="absolute inset-0">
          <HeroFigureArt />
        </div>
        {/* warm gradient scrim for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(27,23,20,0.55) 0%, rgba(27,23,20,0.15) 35%, rgba(27,23,20,0.55) 80%, rgba(27,23,20,0.85) 100%)",
          }}
        />
        {/* soft warm light at top right */}
        <div
          className="absolute -top-40 -right-40 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(184,137,62,0.45) 0%, rgba(184,137,62,0) 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full mx-auto max-w-[1440px] px-6 md:px-10 flex flex-col">
        {/* Top: small editorial eyebrow */}
        <div className="pt-28 md:pt-36">
          <p className="text-ivory/80 text-[10px] uppercase tracking-eyebrow">
            Velmora · The Atelier Edit
          </p>
        </div>

        {/* Center-left: headline + CTA */}
        <div className="mt-auto mb-24 md:mb-32 max-w-2xl">
          <h1 className="font-serif text-ivory text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight">
            Crafted to be <br className="hidden sm:block" />
            <em className="not-italic text-rosegold">treasured</em>.
          </h1>
          <p className="mt-6 text-ivory/75 text-base md:text-lg max-w-md leading-relaxed">
            Demi-fine 18K gold-plated jewelry, designed in the studio and made to be worn — not stored.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              as={Link}
              to="/shop"
              variant="accent"
              size="lg"
              className="group"
            >
              Shop the Collection
              <ChevronRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              as={Link}
              to="/about"
              variant="ghost"
              size="lg"
              className="text-ivory hover:text-ivory/80 border-b border-ivory/40 hover:border-ivory rounded-none px-0"
            >
              Our Story
            </Button>
          </div>
        </div>

        {/* Bottom right: scroll cue */}
        <div className="absolute bottom-8 right-6 md:right-10 hidden md:flex flex-col items-end gap-2 text-ivory/60 text-[10px] uppercase tracking-eyebrow">
          <span>Scroll</span>
          <span className="w-px h-10 bg-ivory/30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
