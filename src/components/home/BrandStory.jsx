import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";

export default function BrandStory() {
  return (
    <section className="bg-ivory-soft">
      <div className="container-page py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <StockImage
                id="brand-story-image"
                query="artisan hands crafting gold jewelry on wooden workbench warm"
                ratio="4x5"
                width={900}
                alt="Crafted in our atelier"
                className="w-full"
              />
              <span className="absolute -bottom-4 -right-4 hidden md:block bg-ink text-ivory px-5 py-3 font-serif text-lg">
                Est. 2019
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <p className="eyebrow text-taupe mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.05] text-ink text-balance"
            >
              Jewelry that listens
              <br />
              <span className="italic">to the wearer.</span>
            </h2>
            <div className="mt-6 space-y-4 text-ink/80 max-w-reading leading-relaxed">
              <p>
                Velmora began at a small bench in Florence, with a single
                question: why does the most-worn jewelry in a woman's box rarely
                come from a name she trusts?
              </p>
              <p>
                We work with family-run ateliers in Italy and Thailand to make
                demi-fine pieces the way the old houses do — thick 18K gold
                plate over a solid brass core, hand-set crystals, hand-finished
                edges. Sold directly, so the price reflects the craft, not the
                markup.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-eyebrow uppercase text-ink hover:text-gold transition-colors group"
            >
              Read Our Story
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
