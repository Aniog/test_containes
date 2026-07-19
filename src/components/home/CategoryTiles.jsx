import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const TILES = [
  {
    id: "cat-earrings",
    title: "Earrings",
    blurb: "studs · drops · cuffs",
    to: "/shop?category=earrings",
    imgId: "cat-earrings-1",
  },
  {
    id: "cat-necklaces",
    title: "Necklaces",
    blurb: "chains · pendants",
    to: "/shop?category=necklaces",
    imgId: "cat-necklaces-1",
  },
  {
    id: "cat-huggies",
    title: "Huggies",
    blurb: "the everyday classic",
    to: "/shop?category=huggies",
    imgId: "cat-huggies-1",
  },
];

export default function CategoryTiles() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="container-7xl py-20 md:py-32"
      aria-label="Shop by category"
    >
      <div className="text-center mb-12 md:mb-16">
        <p className="eyebrow text-muted">◆ Categories</p>
        <h2
          id="section-categories-title"
          className="display-1 text-ink mt-3 text-4xl md:text-5xl"
        >
          Shop by Edit
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {TILES.map((tile) => (
          <Link
            key={tile.id}
            to={tile.to}
            id={`tile-${tile.id}`}
            className="group relative block overflow-hidden bg-stone aspect-[3/4] md:aspect-[4/5]"
          >
            <img
              alt={tile.title}
              data-strk-img-id={tile.imgId}
              data-strk-img={`[tile-${tile.id}-title] [tile-${tile.id}-blurb] [section-categories-title]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/55 transition-opacity duration-500 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-7 text-ivory text-center">
              <h3
                id={`tile-${tile.id}-title`}
                className="display-1 text-3xl md:text-4xl text-ivory"
              >
                {tile.title}
              </h3>
              <p
                id={`tile-${tile.id}-blurb`}
                className="text-[10px] md:text-[11px] uppercase tracking-eyebrow text-ivory/80 mt-2"
              >
                {tile.blurb}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-eyebrow text-ivory opacity-0 translate-y-2 transition-all duration-500 ease-out-soft group-hover:opacity-100 group-hover:translate-y-0">
                Shop now
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
