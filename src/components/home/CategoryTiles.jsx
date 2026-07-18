import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const tiles = [
  {
    id: "cat-earrings",
    label: "Earrings",
    sub: "Studs, drops, cuffs",
    to: "/shop?category=earrings",
    search: "gold earrings editorial still life on warm linen",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    sub: "Pendants, chains",
    to: "/shop?category=necklaces",
    search: "gold necklace editorial still life on warm linen",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    sub: "Slim to chunky",
    to: "/shop?category=huggies",
    search: "gold huggie hoop earrings editorial still life",
  },
];

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={ref} className="bg-canvas">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            Shop the Edit
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso tracking-tight">
            By Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((t) => (
            <Link
              key={t.id}
              to={t.to}
              className="group relative block aspect-[3/4] overflow-hidden bg-surface"
            >
              <img
                alt={t.label}
                data-strk-img-id={`tile-${t.id}`}
                data-strk-img={`[tile-sub-${t.id}] [tile-label-${t.id}] jewelry category`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover img-fade group-hover:scale-[1.04] duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3
                  id={`tile-label-${t.id}`}
                  className="font-serif text-canvas text-3xl md:text-4xl tracking-tight"
                >
                  {t.label}
                </h3>
                <p
                  id={`tile-sub-${t.id}`}
                  className="text-canvas/80 text-[11px] uppercase tracking-widest2 mt-2"
                >
                  {t.sub}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-canvas text-[11px] uppercase tracking-widest2 border-b border-canvas/70 pb-1 group-hover:border-gold-soft group-hover:text-gold-soft transition-colors">
                  Shop
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
