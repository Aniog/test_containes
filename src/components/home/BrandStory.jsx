import React from "react";
import { Link } from "react-router-dom";
import StrkImage from "@/components/ui/StrkImage";
import Reveal from "@/components/ui/Reveal";

export default function BrandStory() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal className="relative">
          <div className="aspect-[4/3] overflow-hidden bg-sand">
            <StrkImage
              imgId="story-atelier-4d7e2b"
              query="[story-text] [story-heading] jewelry atelier artisan hands crafting gold"
              ratio="4x3"
              width="900"
              alt="The Velmora atelier"
            />
          </div>
          <div className="absolute -bottom-5 -right-4 hidden border border-gold-soft/50 px-6 py-4 md:block bg-ivory">
            <p className="font-serif text-lg italic text-gold-deep">Est. 2019</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Our Atelier</p>
          <h2
            id="story-heading"
            className="mt-3 font-serif text-4xl font-light leading-tight text-ink md:text-5xl"
          >
            Jewelry made slowly,
            <br />
            <span className="italic text-gold-deep">worn daily</span>
          </h2>
          <p id="story-text" className="mt-6 max-w-lg text-[15px] font-light leading-relaxed text-muted">
            Velmora began at a single jeweler's bench, with a belief that fine
            craftsmanship shouldn't demand a fine-jewelry budget. Each piece is
            cast from recycled brass, bathed in 18k gold, and finished by hand —
            in small batches we inspect one by one.
          </p>
          <p className="mt-4 max-w-lg text-[15px] font-light leading-relaxed text-muted">
            The result is demi-fine jewelry that lives with you: hypoallergenic,
            water-mindful, and made to glow softly for years.
          </p>
          <Link to="/about" className="link-underline mt-8 inline-block">
            Our Story
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
