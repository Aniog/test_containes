import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

const tiles = [
  {
    id: "earrings",
    title: "Earrings",
    tagline: "Studs, drops, cuffs",
    to: "/shop/earrings",
    query: "[cat-earrings-tagline] [cat-earrings-title] editorial still life",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    tagline: "Layered or singular",
    to: "/shop/necklaces",
    query: "[cat-necklaces-tagline] [cat-necklaces-title] editorial still life",
  },
  {
    id: "huggies",
    title: "Huggies",
    tagline: "Everyday gold",
    to: "/shop/huggies",
    query: "[cat-huggies-tagline] [cat-huggies-title] editorial still life",
  },
];

export default function CategoryTiles() {
  const sectionRef = useRef(null);
  useEffect(() => { return ImageHelper.loadImages(strkImgConfig, sectionRef.current); }, []);;

  return (
    <section
      ref={sectionRef}
      className="bg-ivory py-20 md:py-28"
      aria-labelledby="cat-section-title"
    >
      <div className="container-velmora">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">Shop by category</p>
          <h2
            id="cat-section-title"
            className="heading-display text-3xl md:text-4xl mt-3"
          >
            Find your daily ritual.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative block aspect-square overflow-hidden bg-champagne"
              aria-label={`Shop ${tile.title}`}
            >
              <img
                alt={tile.title}
                data-strk-img-id={`cat-${tile.id}-tile`}
                data-strk-img={tile.query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out-soft group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <p
                  id={`cat-${tile.id}-tagline`}
                  className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest2 text-ivory/85"
                >
                  {tile.tagline}
                </p>
                <h3
                  id={`cat-${tile.id}-title`}
                  className="font-serif text-3xl md:text-4xl text-ivory mt-2"
                >
                  {tile.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-ivory/85 translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out-soft">
                  Shop the edit
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
