import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[620px] w-full">
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-brand-warm-black"
      />
      <div className="absolute inset-0 bg-brand-warm-black/40" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="max-w-2xl">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-brand-ivory/80">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl font-medium leading-[1.05] text-brand-ivory md:text-6xl lg:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-brand-ivory/85 md:text-lg"
          >
            Elegant pieces for everyday luxury. Designed for women who move
            through the world with quiet confidence.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
