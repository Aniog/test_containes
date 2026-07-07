import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { EDITORIAL } from "@/data/products";

export default function BrandStory() {
  return (
    <section className="bg-ivory">
      <div className="max-w-container mx-auto px-5 md:px-10 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-sand order-1 lg:order-1">
            <img
              src={EDITORIAL.story.image}
              alt={EDITORIAL.story.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="order-2 lg:order-2 max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-4">
              Our story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              Quietly designed,
              <br />
              <em className="italic text-champagne-deep">made to last.</em>
            </h2>
            <p className="mt-7 text-base md:text-lg text-ink/80 leading-relaxed">
              Velmora was started at a kitchen table in Lisbon — out of a belief
              that the most-worn jewelry shouldn't be a luxury. Every piece is
              sketched, plated, and finished by hand in small batches, in 18K
              gold over brass, with the weight and finish of fine jewelry at a
              price you can wear every day.
            </p>
            <p className="mt-5 text-base md:text-lg text-ink/80 leading-relaxed">
              No fast-fashion drops. No trends that date themselves. Just the
              pieces you'll reach for, year after year.
            </p>
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 text-[12px] uppercase tracking-editorial text-ink border-b border-ink/40 hover:border-champagne hover:text-champagne pb-1 transition-colors"
            >
              Read our story
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
