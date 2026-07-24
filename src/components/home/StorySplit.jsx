import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { StoryArt } from "@/components/decor/JewelryArt";

export default function StorySplit() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
          {/* Image */}
          <div className="md:col-span-7 reveal">
            <div className="aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-ink">
              <StoryArt />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-5 py-12 md:py-24 md:pl-8">
            <p className="text-[10px] font-medium tracking-wide-4 uppercase text-gold reveal">
              Our Story
            </p>
            <h2
              id="story-title"
              className="mt-4 font-serif font-light text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-ink reveal"
            >
              Slow gold, made <em className="italic text-gold">to keep.</em>
            </h2>
            <p
              id="story-subtitle"
              className="mt-6 text-[15px] font-light leading-relaxed text-cocoa max-w-md reveal"
            >
              Velmora began at a kitchen table in Lisbon, with a brass finding, a borrowed polishing cloth, and a question: why does gold have to be reserved for "special"? We plate every piece by hand in small batches — never mass, never loud — so the things you wear every day can be the things you hand down.
            </p>
            <div className="mt-10 reveal">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide-3 font-medium text-ink hover:text-gold transition-colors group"
              >
                Read Our Story
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
