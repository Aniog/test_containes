import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { StoryArt } from "@/components/jewelry-illustrations/JewelryArt";

const BrandStory = () => {
  return (
    <section className="container-velmora py-20 md:py-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16 items-center">
        <div className="md:col-span-6 order-2 md:order-1">
          <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
            <StoryArt className="h-full w-full" />
          </div>
        </div>
        <div className="md:col-span-6 order-1 md:order-2">
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
            Made slowly. <em className="not-italic text-accent">Worn</em> for years.
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            Velmora began at a kitchen table in 2019 with a single 18K gold plated
            hoop and a belief that everyday jewelry could feel as considered as a
            family heirloom. Today we work with small ateliers in Jaipur and
            Arezzo to craft each piece in small batches — by hand, from recycled
            metals, in weights that feel real in your hand.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
            We don't chase trends. We make the pieces we want to wear — and we
            hope you'll want to wear them for a long, long time.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest2 text-ink underline underline-offset-4 hover:text-accent"
          >
            Read our story
            <ArrowRight size={12} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
