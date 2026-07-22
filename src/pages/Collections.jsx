import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { usePageFx } from "@/hooks/usePageFx";
import { StrkImage } from "@/components/ui/StrkMedia";

const COLLECTIONS = [
  {
    id: "the-everyday-edit",
    title: "The Everyday Edit",
    blurb: "Huggies and cuffs made to be worn on repeat.",
    query: "minimal gold everyday jewelry, huggies and cuffs, warm editorial",
    category: "Huggies",
  },
  {
    id: "the-garden-collection",
    title: "The Garden Collection",
    blurb: "Floral crystals and soft color, caught in gold.",
    query: "floral crystal gold jewelry collection, elegant, warm light",
    category: "Necklaces",
  },
  {
    id: "the-heirloom-series",
    title: "The Heirloom Series",
    blurb: "Gift-boxed sets for life's meaningful moments.",
    query: "luxury gold jewelry gift set collection, elegant box, warm",
    category: "Sets",
  },
  {
    id: "the-statement-drops",
    title: "The Statement Drops",
    blurb: "Filigree and drops that move with quiet drama.",
    query: "gold statement drop earrings, filigree, elegant warm editorial",
    category: "Earrings",
  },
];

export default function Collections() {
  const ref = usePageFx([]);

  return (
    <div ref={ref} className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 md:pt-32 lg:px-12">
      <div className="border-b border-line pb-8 text-center">
        <span className="font-sans text-xs font-semibold uppercase tracking-overline text-gold">
          Curated for You
        </span>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          The Collections
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-inkSoft">
          Four edits, one point of view — quiet luxury, honestly priced.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {COLLECTIONS.map((c, i) => {
          const titleId = `col-${c.id}-title`;
          const blurbId = `col-${c.id}-blurb`;
          return (
            <Link
              key={c.id}
              to={`/shop?category=${c.category}`}
              className="group reveal relative block overflow-hidden rounded-sm"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <StrkImage
                  imgId={`col-${c.id}`}
                  query={`[${blurbId}] [${titleId}] ${c.query}`}
                  ratio="4x3"
                  width={900}
                  alt={c.title}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h2
                    id={titleId}
                    className="font-display text-2xl font-semibold text-cream md:text-3xl"
                  >
                    {c.title}
                  </h2>
                  <p id={blurbId} className="mt-1.5 text-sm text-cream/85">
                    {c.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-luxe text-goldSoft transition-transform duration-300 group-hover:translate-x-1">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
