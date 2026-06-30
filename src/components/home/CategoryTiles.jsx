import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

const TILES = [
  {
    id: "earrings",
    title: "Earrings",
    href: "/shop?cat=earrings",
    imgId: "tile-earrings",
    titleId: "tile-title-earrings",
    descId: "tile-desc-earrings",
  },
  {
    id: "necklaces",
    title: "Necklaces",
    href: "/shop?cat=necklaces",
    imgId: "tile-necklaces",
    titleId: "tile-title-necklaces",
    descId: "tile-desc-necklaces",
  },
  {
    id: "huggies",
    title: "Huggies",
    href: "/shop?cat=huggies",
    imgId: "tile-huggies",
    titleId: "tile-title-huggies",
    descId: "tile-desc-huggies",
  },
];

function Tile({ tile, idx }) {
  return (
    <Reveal delay={idx * 100}>
      <Link
        to={tile.href}
        className="group block relative aspect-[3/4] overflow-hidden bg-ivory-200"
      >
        <img
          alt={tile.title}
          data-strk-img-id={tile.imgId}
          data-strk-img={`[${tile.descId}] [${tile.titleId}] [categories-eyebrow] [categories-heading]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="900"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-elegant group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/60 via-espresso-900/10 to-transparent transition-opacity duration-500 group-hover:from-espresso-900/75" aria-hidden="true" />

        {/* Label that reveals on hover (desktop) and is always visible on mobile */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-10 px-6 text-center text-ivory-50">
          <div className="transition-all duration-500 ease-elegant sm:translate-y-3 sm:opacity-70 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            <h3
              id={tile.titleId}
              className="font-serif text-3xl md:text-4xl tracking-tight"
            >
              {tile.title}
            </h3>
            <p
              id={tile.descId}
              className="mt-2 text-[11px] uppercase tracking-[0.28em] text-ivory-50/85 inline-flex items-center gap-1.5"
            >
              Shop now
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function CategoryTiles() {
  const sectionRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-ivory-100"
      aria-labelledby="categories-heading"
    >
      <div className="container-x py-20 md:py-28">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p id="categories-eyebrow" className="eyebrow">By category</p>
          <h2
            id="categories-heading"
            className="h-display mt-3 text-display-md text-espresso-900"
          >
            Begin somewhere small
          </h2>
          <p className="mt-4 text-espresso-500 text-[15px] leading-relaxed">
            Three forms — earrings, necklaces, huggies — designed to layer,
            to gift, to be worn on the most ordinary days.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
          {TILES.map((tile, i) => (
            <Tile key={tile.id} tile={tile} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
