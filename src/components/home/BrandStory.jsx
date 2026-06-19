import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import StockImage from "@/components/ui/StockImage";

export default function BrandStory() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="mx-auto max-w-page px-5 md:px-10 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-cream-200">
            <StockImage
              imgId="brand-story-image"
              query="[brand-story-text] atelier founder hands holding gold jewelry soft light editorial"
              ratio="4x5"
              width="900"
              alt="Inside the Velmora atelier"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-5 left-5 vm-eyebrow text-cream bg-ink/70 px-3 py-1.5">
              The Atelier
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="md:pl-6 max-w-xl">
            <p className="vm-eyebrow text-ink-muted">Our Story</p>
            <h2
              id="brand-story-text"
              className="vm-display text-ink mt-4 text-4xl md:text-6xl leading-[1.05]"
            >
              Jewelry, made to be{" "}
              <span className="italic font-light">worn for a lifetime</span>.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed text-base md:text-[17px]">
              Velmora began at a kitchen table in 2019, where our founder hand-set her first crystal cuff and sent it to a friend who refused to take it off. Six years later, every piece is still finished in small batches — never mass, never rushed.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed text-sm md:text-base">
              We use recycled brass, sterling silver, and 18K gold plating thick enough to outlast trends. Each order is hand-checked, hand-packed, and accompanied by a polishing cloth in our cream box — designed to be kept.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <Stat value="6 yrs"   label="Independent"  />
              <Stat value="52"      label="Countries shipped" />
              <Stat value="1.2µm+"  label="Gold plating" />
            </div>

            <div className="mt-10">
              <Link to="/about" className="vm-link">
                Read our story
                <ArrowUpRight className="inline-block w-3.5 h-3.5 ml-1.5 -mt-0.5" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="vm-serif text-3xl md:text-4xl text-ink leading-none">{value}</p>
      <p className="vm-eyebrow text-ink-muted mt-3">{label}</p>
    </div>
  );
}
