import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    blurb: "Drops, studs, cuffs.",
    query: "model wearing gold drop earrings editorial portrait warm soft light",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    blurb: "Layered and singular.",
    query: "close-up of layered gold necklaces on woman editorial portrait warm soft light",
  },
  {
    id: "huggies",
    label: "Huggies",
    blurb: "The everyday staple.",
    query: "woman wearing chunky gold huggie hoop earrings editorial portrait warm soft light",
  },
];

function Tile({ tile, idx }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={`/shop?collection=${tile.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative block aspect-[3/4] overflow-hidden bg-bone"
    >
      <img
        alt={tile.label}
        data-strk-img-id={`tile-${tile.id}-${idx}`}
        data-strk-img={`[${tile.label}] [category-tile-title] ${tile.query}`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        loading="lazy"
        className={[
          "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-editorial",
          hover ? "scale-105" : "scale-100",
        ].join(" ")}
      />
      <div
        aria-hidden="true"
        className={[
          "absolute inset-0 transition-colors duration-500 ease-editorial",
          hover ? "bg-espresso/30" : "bg-espresso/45",
        ].join(" ")}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-cream">
        <p
          id={`category-tile-${tile.id}-eyebrow`}
          className="font-sans text-[10px] tracking-[0.32em] uppercase text-cream/75"
        >
          {tile.blurb}
        </p>
        <h3
          id={`category-tile-${tile.id}-title`}
          className="mt-3 font-serif text-4xl font-light tracking-wide md:text-5xl"
        >
          {tile.label}
        </h3>
        <span
          className={[
            "mt-5 inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.32em] uppercase transition-all duration-500 ease-editorial",
            hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          Shop Now
          <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
        </span>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-screen-2xl px-6 md:px-10 lg:px-16">
        <div className="text-center">
          <p id="category-tile-eyebrow" className="eyebrow">Shop By</p>
          <h2
            id="category-tile-title"
            className="display-lg mt-4 text-ink"
          >
            Category
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {TILES.map((t, i) => (
            <Tile key={t.id} tile={t} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
