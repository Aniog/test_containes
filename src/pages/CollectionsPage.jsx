import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import Eyebrow from "../components/ui/Eyebrow.jsx";

const COLLECTIONS = [
  {
    slug: "everyday-gold",
    title: "Everyday Gold",
    subtitle: "Quietly worn, layer by layer",
    imgId: "collection-everyday-7a2b",
    query: "Velmora everyday gold jewelry editorial",
    productCount: 12,
  },
  {
    slug: "the-gift-edit",
    title: "The Gift Edit",
    subtitle: "Wrapped, ready, remembered",
    imgId: "collection-gift-4c8d",
    query: "Velmora gift box jewelry set",
    productCount: 8,
  },
  {
    slug: "modern-heirlooms",
    title: "Modern Heirlooms",
    subtitle: "Considered, sculptural, kept",
    imgId: "collection-heirloom-9e3f",
    query: "Velmora modern heirloom statement jewelry",
    productCount: 6,
  },
  {
    slug: "stack-the-ear",
    title: "Stack the Ear",
    subtitle: "Three pieces, infinite combinations",
    imgId: "collection-stack-2b1a",
    query: "Velmora ear stack gold huggies editorial",
    productCount: 10,
  },
];

export default function CollectionsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section className="bg-ink-950 pt-28 md:pt-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Eyebrow tone="gold">Collections</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-serif text-[44px] font-light leading-[1.05] text-ink-100 md:text-[80px]">
            Four edits. <span className="italic text-gold-300">One language.</span>
          </h1>
          <p className="mt-6 max-w-xl font-sans text-[14px] leading-relaxed text-ink-300">
            A small, deliberate set of edits — built around how women actually
            wear their jewelry: stacked, gifted, lived in.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="bg-ink-950 pb-24 pt-16 md:pb-32">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {COLLECTIONS.map((c) => (
              <Link
                key={c.slug}
                to={`/shop`}
                id={`collection-${c.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-ink-900 md:aspect-[5/4]"
              >
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[collection-${c.slug}-title] [collection-${c.slug}-subtitle] [collections-page-title]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/10 via-ink-950/30 to-ink-950/95"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
                  <span
                    id={`collection-${c.slug}-subtitle`}
                    className="font-sans text-[10px] uppercase tracking-widest2 text-gold-300"
                  >
                    {c.subtitle}
                  </span>
                  <h2
                    id={`collection-${c.slug}-title`}
                    className="mt-3 font-serif text-[40px] font-light leading-[1] text-ink-100 md:text-[56px]"
                  >
                    {c.title}
                  </h2>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-sans text-[11px] uppercase tracking-widest2 text-ink-300">
                      {c.productCount} pieces
                    </span>
                    <span className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest2 text-ink-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Discover
                      <ArrowUpRight size={12} strokeWidth={1.8} className="text-gold-300" />
                    </span>
                  </div>
                </div>
                <span id="collections-page-title" className="hidden">
                  Velmora jewelry collections
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
