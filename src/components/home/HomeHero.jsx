import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Artwork from "@/components/ui/Artwork";
import { TRUST_ITEMS } from "@/data/products";

export default function HomeHero() {
  return (
    <section className="relative">
      {/* Full-bleed hero */}
      <div className="relative h-[88vh] min-h-[560px] max-h-[820px] w-full overflow-hidden">
        <Artwork
          variant="hero"
          tone="deep"
          className="absolute inset-0 w-full h-full"
        />
        {/* Subtle warm overlay for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(31,26,23,0.55) 0%, rgba(31,26,23,0.05) 35%, rgba(31,26,23,0.0) 60%, rgba(31,26,23,0.25) 100%)",
          }}
        />

        <div className="relative h-full container-editorial flex flex-col justify-end pb-16 md:pb-24">
          <div className="max-w-xl text-ivory animate-fadeUp">
            <div className="label-eyebrow text-ivory/70 mb-5">
              Velmora · Demi-Fine Jewelry
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Crafted to be
              <br />
              <em className="font-display italic text-gold-light">treasured</em>.
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-ivory/85 leading-relaxed">
              Heirloom-inspired gold jewelry, designed for the everyday. Hypoallergenic, made to last, and priced to keep.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="btn-primary bg-ivory text-ink hover:bg-gold-light"
              >
                Shop the Collection
                <ArrowRight className="ml-3 w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center border border-ivory/60 text-ivory px-7 py-[13px] text-[12px] tracking-[0.32em] uppercase font-medium hover:bg-ivory hover:text-ink transition-colors duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-ivory border-y border-line">
        <div className="container-editorial py-4 overflow-x-auto no-scrollbar">
          <ul className="flex items-center justify-start md:justify-center gap-6 md:gap-12 whitespace-nowrap text-[11px] tracking-[0.32em] uppercase text-charcoal">
            {TRUST_ITEMS.map((item, i) => (
              <li key={item} className="flex items-center gap-6 md:gap-12">
                <span>{item}</span>
                {i < TRUST_ITEMS.length - 1 && (
                  <span aria-hidden className="w-1 h-1 rounded-full bg-gold-light" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
