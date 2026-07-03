import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import Eyebrow from "../ui/Eyebrow.jsx";

const TILES = [
  {
    slug: "earrings",
    title: "Earrings",
    imgId: "tile-earrings-3a1b",
    query: "Velmora earrings editorial",
    subtitle: "From huggies to heirlooms",
  },
  {
    slug: "necklaces",
    title: "Necklaces",
    imgId: "tile-necklaces-7c2d",
    query: "Velmora necklaces editorial",
    subtitle: "Layered, never loud",
  },
  {
    slug: "huggies",
    title: "Huggies",
    imgId: "tile-huggies-9e4f",
    query: "Velmora gold huggies editorial",
    subtitle: "Everyday, in 18K",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-ink-950 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow tone="gold">Shop by category</Eyebrow>
            <h2 className="mt-4 font-serif text-[36px] font-light leading-[1.05] text-ink-100 md:text-[48px]">
              Start with the silhouette.
            </h2>
          </div>
        </div>
        <div
          ref={containerRef}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
        >
          {TILES.map((t, idx) => (
            <Link
              key={t.slug}
              to={`/shop?category=${t.slug}`}
              id={`cat-tile-${t.slug}-${idx}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-ink-900"
            >
              <img
                data-strk-img-id={t.imgId}
                data-strk-img={`[cat-tile-${t.slug}-${idx}-title] [cat-tile-${t.slug}-${idx}-subtitle] [cat-tile-section-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={t.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/10 to-ink-950/85"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
                <span
                  id={`cat-tile-${t.slug}-${idx}-subtitle`}
                  className="font-sans text-[10px] uppercase tracking-widest2 text-gold-300"
                >
                  {t.subtitle}
                </span>
                <h3
                  id={`cat-tile-${t.slug}-${idx}-title`}
                  className="mt-3 font-serif text-[36px] font-light leading-[1] text-ink-100 md:text-[44px]"
                >
                  {t.title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest2 text-ink-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Shop {t.title.toLowerCase()}
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.8}
                    className="text-gold-300"
                  />
                </span>
              </div>
              <span id="cat-tile-section-title" className="hidden">
                Velmora demi-fine jewelry shop by category
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
