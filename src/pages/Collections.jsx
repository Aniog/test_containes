import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Artwork from "@/components/ui/Artwork";
import { CATEGORIES } from "@/data/products";
import { cn } from "@/lib/utils";

export default function Collections() {
  return (
    <article className="bg-ivory">
      <section className="container-editorial pt-28 md:pt-32 pb-10 text-center max-w-2xl mx-auto">
        <div className="label-eyebrow text-mute mb-3">Collections</div>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.02] text-ink">
          The Velmora edit.
        </h1>
        <p className="mt-5 text-mute text-sm">
          Three chapters of demi-fine — each piece designed to be worn on repeat.
        </p>
      </section>

      <section className="container-editorial pb-20 md:pb-28">
        <div className="space-y-6 md:space-y-8">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative block aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-bone img-zoom"
            >
              <Artwork
                variant="category"
                category={cat.slug}
                tone="deep"
                className="absolute inset-0 w-full h-full"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(90deg, rgba(31,26,23,0.55) 0%, rgba(31,26,23,0.05) 60%, rgba(31,26,23,0) 100%)"
                      : "linear-gradient(270deg, rgba(31,26,23,0.55) 0%, rgba(31,26,23,0.05) 60%, rgba(31,26,23,0) 100%)",
                }}
              />
              <div
                className={cn(
                  "absolute inset-0 flex flex-col justify-center p-8 md:p-16 text-ivory",
                  i % 2 === 0 ? "items-start" : "items-end text-right"
                )}
              >
                <div className="label-eyebrow text-ivory/70 mb-3">
                  Collection {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
                  {cat.name}
                </h2>
                <p className="mt-3 max-w-sm text-ivory/80 text-sm md:text-base">
                  {cat.blurb}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase text-ivory">
                  Shop Collection
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
