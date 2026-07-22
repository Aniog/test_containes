import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/ui/Container";

const tiles = [
  {
    id: "cat-earrings",
    title: "Earrings",
    sub: "Drops, cuffs & statement pairs",
    to: "/shop?category=earrings",
    query: "gold filigree drop earrings and ear cuff on dark warm background editorial",
  },
  {
    id: "cat-necklaces",
    title: "Necklaces",
    sub: "Pendants, chains & layering",
    to: "/shop?category=necklaces",
    query: "delicate gold pendant necklace editorial on dark warm background still life",
  },
  {
    id: "cat-huggies",
    title: "Huggies",
    sub: "The everyday essential",
    to: "/shop?category=huggies",
    query: "gold chunky dome huggie hoop earrings editorial on dark warm background still life",
  },
];

const placeholder =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'>
      <defs>
        <radialGradient id='g' cx='40%' cy='40%' r='80%'>
          <stop offset='0%' stop-color='#5C4A3A'/>
          <stop offset='100%' stop-color='#1A1814'/>
        </radialGradient>
        <radialGradient id='gold' cx='50%' cy='45%' r='35%'>
          <stop offset='0%' stop-color='#E8C58A' stop-opacity='0.6'/>
          <stop offset='100%' stop-color='#A8824A' stop-opacity='0'/>
        </radialGradient>
      </defs>
      <rect width='4' height='5' fill='url(%23g)'/>
      <ellipse cx='2' cy='2.2' rx='1.4' ry='1.6' fill='url(%23gold)'/>
    </svg>`
  );

function Tile({ tile }) {
  const titleId = `${tile.id}-title`;
  const subId = `${tile.id}-sub`;
  return (
    <Link
      to={tile.to}
      className="group block relative w-full overflow-hidden bg-espresso/95"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          alt={tile.title}
          data-strk-img-id={`${tile.id}-img`}
          data-strk-img={`[${subId}] [${titleId}] ${tile.query}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src={placeholder}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-espresso/0 to-espresso/65 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/20 transition-colors duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-ivory flex items-end justify-between">
          <div className="flex flex-col gap-1.5">
            <h3 id={titleId} className="font-serif text-3xl md:text-4xl">
              {tile.title}
            </h3>
            <p id={subId} className="text-xs text-ivory/75 font-light tracking-label-tight">
              {tile.sub}
            </p>
          </div>
          <span className="w-10 h-10 rounded-full border border-ivory/40 flex items-center justify-center text-ivory group-hover:bg-ivory group-hover:text-espresso transition-all duration-300">
            <ArrowUpRight size={16} strokeWidth={1.3} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <Container>
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16">
          <span className="eyebrow">Shop by Category</span>
          <h2 className="display-2 text-espresso">Find your ritual</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((t) => (
            <Tile key={t.id} tile={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
