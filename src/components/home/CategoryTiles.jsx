import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/Reveal";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    note: "Drops, studs & filigree",
    query: "elegant gold drop earrings product photography on warm neutral background, soft editorial light",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    note: "Chains & pendants",
    query: "delicate gold necklace with crystal pendant product photography on warm neutral background, editorial",
  },
  {
    id: "huggies",
    label: "Huggies",
    note: "Everyday domes",
    query: "chunky gold huggie hoop earrings product photography macro on warm neutral background, editorial",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
    >
      <Reveal className="mb-12 text-center md:mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">
          Explore
        </p>
        <h2 className="mt-4 font-serif text-4xl font-medium text-espresso md:text-5xl">
          Shop by Category
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {TILES.map((tile, i) => (
          <Reveal key={tile.id} delay={i * 100}>
            <Link
              to={`/shop?category=${tile.label}`}
              className="group relative block overflow-hidden bg-sand aspect-[3/4]"
              aria-label={`Shop ${tile.label}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                data-strk-bg-id={`cat-${tile.id}-bg`}
                data-strk-bg={tile.query}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="700"
              />
              <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/35" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 p-8 text-center transition-all duration-500 md:translate-y-3 md:opacity-90 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <span className="bg-ivory px-8 py-3.5 font-serif text-xl uppercase tracking-[0.22em] text-espresso transition-colors duration-300 group-hover:bg-espresso group-hover:text-ivory">
                  {tile.label}
                </span>
                <span className="mt-1 text-[11px] tracking-[0.25em] uppercase text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {tile.note}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
