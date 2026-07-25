import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/Reveal";

const COLLECTIONS = [
  {
    id: "the-everyday-gild",
    title: "The Everyday Gild",
    subtitle: "Huggies, cuffs, and chains made for daily devotion",
    count: "12 pieces",
    to: "/shop?category=Huggies",
  },
  {
    id: "heirloom-garden",
    title: "Heirloom Garden",
    subtitle: "Floral crystals and filigree, blooming in warm gold",
    count: "8 pieces",
    to: "/shop?category=Necklaces",
  },
  {
    id: "the-gift-edit",
    title: "The Gift Edit",
    subtitle: "Boxed sets and keepsakes for the ones you love",
    count: "5 pieces",
    to: "/shop?category=Sets",
  },
  {
    id: "after-dark",
    title: "After Dark",
    subtitle: "Statement drops and sculptural gold for evenings",
    count: "9 pieces",
    to: "/shop?category=Earrings",
  },
];

export default function Collections() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      <header className="border-b border-sand bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Curated Worlds
          </p>
          <h1 className="mt-3 font-serif text-4xl font-medium text-ink md:text-6xl">
            The <em className="italic">Collections</em>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-espresso">
            Small-batch capsules, each with its own mood — released slowly,
            made to last far beyond the season.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {COLLECTIONS.map((collection, i) => (
            <Reveal key={collection.id} delay={i * 90}>
              <Link
                to={collection.to}
                className="group relative block overflow-hidden bg-ink"
              >
                <div className="relative aspect-[4/3] md:aspect-[16/10]">
                  <img
                    data-strk-img-id={`collection-${collection.id}-2f8c6d`}
                    data-strk-img={`[collection-${collection.id}-subtitle] [collection-${collection.id}-title] gold jewelry editorial campaign photography`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={collection.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-70"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">
                      {collection.count}
                    </p>
                    <h2
                      id={`collection-${collection.id}-title`}
                      className="mt-2 font-serif text-3xl font-medium text-cream md:text-4xl"
                    >
                      {collection.title}
                    </h2>
                    <p
                      id={`collection-${collection.id}-subtitle`}
                      className="mt-2 max-w-sm text-sm text-cream/75"
                    >
                      {collection.subtitle}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.2em] text-gold-soft transition-colors group-hover:text-gold">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
