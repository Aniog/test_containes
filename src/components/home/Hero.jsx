import React from "react";
import { Link } from "react-router-dom";
import { homeImagery } from "@/data/products.js";
import Button from "@/components/ui/Button.jsx";
import Container from "@/components/ui/Container.jsx";

const Hero = () => (
  <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-cream">
    {/* Background illustration (full-bleed) */}
    <div className="absolute inset-0">
      {homeImagery.hero}
    </div>

    {/* Bottom gradient for text legibility */}
    <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/60 pointer-events-none" />

    {/* Content */}
    <Container className="relative h-full min-h-[100svh] flex flex-col justify-end pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-2xl">
        <p className="eyebrow text-champagne">Velmora Fine Jewelry</p>
        <h1 className="mt-4 font-serif text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-cream">
          Crafted to be
          <br />
          <span className="italic font-light text-champagne">treasured.</span>
        </h1>
        <p className="mt-6 font-sans text-[1rem] sm:text-[1.05rem] text-cream/80 max-w-md leading-relaxed">
          Demi-fine gold jewelry, hand-finished in small batches.
          Made to be worn every day, and passed on.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button
            as={Link}
            to="/shop"
            variant="gold"
            size="lg"
          >
            Shop the Collection
          </Button>
          <Button
            as={Link}
            to="/about"
            variant="outlineLight"
            size="lg"
          >
            Our Story
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;
