import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&auto=format&fit=crop"
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
              About Velmora
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
              Jewelry Crafted for
              <br />
              <span className="font-medium italic">Life&apos;s Every Moment</span>
            </h2>
            <div className="my-6 h-[1px] w-12 bg-primary/50" />
            <p className="font-sans text-sm leading-relaxed text-foreground/60">
              Velmora was born from a belief that fine jewelry shouldn&apos;t be
              reserved for special occasions. Our demi-fine pieces are crafted
              with 18K gold plating over hypoallergenic brass — designed to be
              worn, layered, and loved every single day.
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-foreground/60">
              Every piece is hand-finished by skilled artisans and arrives in
              packaging made from recycled materials. Because what you wear
              should honor both you and the world around you.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-foreground/20 pb-0.5 font-sans text-xs font-medium uppercase tracking-[0.1em] text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Our Story
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}