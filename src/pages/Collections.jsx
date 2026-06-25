import { Link } from "react-router-dom";
import { useRef } from "react";
import StockImage from "@/components/ui/StockImage";
import { useStrkImages } from "@/lib/useStrkImages";

const COLLECTIONS = [
  {
    id: "daily-rituals",
    name: "Daily Rituals",
    blurb:
      "Pieces that move with you from morning coffee to evening plans. Quiet, weightless, gold.",
    imageQuery: "minimal gold jewelry on linen flatlay",
  },
  {
    id: "evening-glow",
    name: "Evening Glow",
    blurb:
      "Catches candlelight. Heirloom-inspired silhouettes set with hand-cut crystals.",
    imageQuery: "crystal gold drop earrings on dark moody background",
  },
  {
    id: "the-heirloom-set",
    name: "The Heirloom Set",
    blurb:
      "Gift-boxed pairs made to be passed down. Bridal showers, milestone birthdays.",
    imageQuery: "gold jewelry gift box on cream linen",
  },
  {
    id: "summer-cuffs",
    name: "Summer Cuffs",
    blurb:
      "Ear cuffs and stacks for sun-warmed shoulders and linen afternoons.",
    imageQuery: "stack of gold ear cuffs on neutral background",
  },
];

export default function Collections() {
  const containerRef = useRef(null);
  useStrkImages(containerRef, []);

  return (
    <section ref={containerRef} className="bg-bone">
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-10 md:pt-24">
        <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal">
          Curated By Story
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-espresso">
          Collections
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal">
          Four edits designed to be worn, layered, and gifted. Each piece is
          crafted in 18K gold-plated brass with hypoallergenic posts.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        {COLLECTIONS.map((c) => (
          <Link
            key={c.id}
            to={`/shop?collection=${c.id}`}
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone/40">
              <StockImage
                imageId={`collection-${c.id}`}
                query={`[collection-${c.id}-blurb] [collection-${c.id}-name]`}
                ratio="4x5"
                width={1000}
                alt={c.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-bone">
                <p
                  id={`collection-${c.id}-name`}
                  className="font-serif text-2xl md:text-3xl"
                >
                  {c.name}
                </p>
                <p
                  id={`collection-${c.id}-blurb`}
                  className="mt-2 text-sm opacity-90 max-w-md"
                >
                  {c.blurb}
                </p>
                <span className="mt-4 inline-block text-[11px] tracking-[0.22em] uppercase border-b border-bone/60 pb-1">
                  Shop the edit
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}