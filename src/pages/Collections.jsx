import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { resolveImageUrl } from "@/lib/stockImages";

const COLLECTION_QUERIES = {
  earrings: "gold earrings editorial display warm jewelry collection",
  necklaces: "gold necklace pendant editorial warm collection",
  huggies: "gold huggie hoop earrings editorial warm collection",
};

const COLLECTION_STORY = {
  earrings: "Cuffs, studs, and drops that move with you — designed to layer or to stand alone.",
  necklaces: "Hand-set crystals and fine chains, made to live close to the heart.",
  huggies: "The everyday hoop, reimagined. Polished, sculptural, made to stack.",
};

export default function Collections() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);
  return (
    <div ref={containerRef} className="bg-cream">
      <div className="pt-32 md:pt-40 pb-10 md:pb-16 text-center max-w-3xl mx-auto px-5 md:px-8">
        <p className="eyebrow text-gold-deep mb-3">Curated edits</p>
        <h1 className="display-lg text-ink">Collections</h1>
        <p className="mt-4 text-muted font-sans font-light text-[15px]">
          Three edits, each shaped around a different moment in your day.
        </p>
      </div>
      <div className="max-w-8xl mx-auto px-5 md:px-8 pb-24 space-y-6">
        {CATEGORIES.map((c) => {
          const titleId = `collection-${c.slug}-title`;
          const bodyId = `collection-${c.slug}-body`;
          return (
            <Link
              key={c.slug}
              to={`/shop?category=${c.slug}`}
              className="group block relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-line/70"
            >
              <img
                alt={c.label}
                data-strk-img-id={`collection-${c.slug}`}
                data-strk-img={`[${bodyId}] [${titleId}] [collections-title] ${COLLECTION_QUERIES[c.slug]}`}
                data-strk-img-ratio="21x9"
                data-strk-img-width="1600"
                src={resolveImageUrl(`collection-${c.slug}`)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <h2
                    id={titleId}
                    className="font-serif text-4xl md:text-6xl text-cream leading-none"
                  >
                    {c.label}
                  </h2>
                  <p
                    id={bodyId}
                    className="text-cream/75 text-sm md:text-base font-sans font-light mt-3 max-w-md"
                  >
                    {COLLECTION_STORY[c.slug]}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-cream text-[11px] uppercase tracking-wider-3 font-sans font-medium group-hover:text-gold transition-colors">
                  Shop edit
                  <ArrowUpRight strokeWidth={1.25} className="w-4 h-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <span id="collections-title" className="sr-only">Collections</span>
    </div>
  );
}
