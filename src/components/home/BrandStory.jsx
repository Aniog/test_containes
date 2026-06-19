import React from "react";
import { Link } from "react-router-dom";
import JewelryImage from "@/components/ui/JewelryImage";

export default function BrandStory() {
  return (
    <section className="bg-cream">
      <div className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <JewelryImage id="story" className="w-full h-full" />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-6">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 font-serif font-light text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02] text-balance">
              Jewelry, made to be
              <em className="not-italic italic"> lived in.</em>
            </h2>
            <div className="mt-8 space-y-5 font-sans text-base text-mushroom-dark leading-relaxed max-w-lg">
              <p>
                Velmora began with a single question — why does demi-fine jewelry
                have to look like fine jewelry, or cost like it? We make pieces
                that feel personal, weighty, and considered, without the four-figure
                price tag.
              </p>
              <p>
                Every design is sketched in our New York studio, then hand-finished
                by a small atelier partner we have known for years. We use thick
                18K gold plating over a recycled brass core, set crystals one at a
                time, and pack each piece in a keepsake box.
              </p>
            </div>
            <Link to="/about" className="mt-10 inline-block btn-outline-light">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
