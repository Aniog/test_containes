import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import useImageLoader from "@/lib/useImageLoader";

const tiles = [
  {
    id: "earrings",
    label: "Earrings",
    subtitle: "Cuffs, drops, and studs",
    to: "/shop?category=earrings",
    imgId: "cat-earrings-3a91",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    subtitle: "Layered, simple, heirloom",
    to: "/shop?category=necklaces",
    imgId: "cat-necklaces-b722",
  },
  {
    id: "huggies",
    label: "Huggies",
    subtitle: "The everyday hoop",
    to: "/shop?category=huggies",
    imgId: "cat-huggies-f4d8",
  },
];

function Tile({ tile }) {
  return (
    <Link
      to={tile.to}
      className="group relative block overflow-hidden bg-espresso-300 aspect-[3/4] md:aspect-[4/5]"
    >
      <StockImage
        imgId={tile.imgId}
        query={`[cat-${tile.id}-label] [home-categories-title] gold jewelry`}
        refTitle={`cat-${tile.id}-label`}
        refSection="home-categories-title"
        ratio="3x4"
        width="900"
        alt={tile.label}
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-espresso-300/25 group-hover:bg-espresso-300/40 transition-colors duration-500" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-cream-50">
        <h3
          id={`cat-${tile.id}-label`}
          className="font-serif text-3xl md:text-4xl tracking-tight"
        >
          {tile.label}
        </h3>
        <p className="mt-1 text-[11px] uppercase tracking-widest2 text-cream-100/85">
          {tile.subtitle}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-gold-200">
          Shop Now
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  const ref = useRef(null);
  useImageLoader(ref);

  return (
    <section ref={ref} className="bg-cream-100 py-20 md:py-28">
      <div className="container-wide">
        <div className="max-w-xl mb-10 md:mb-14">
          <p className="eyebrow">Shop By Category</p>
          <h2
            id="home-categories-title"
            className="mt-3 font-serif text-4xl md:text-5xl text-espresso-300 leading-[1.05] tracking-tight"
          >
            Find your everyday piece.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {tiles.map((t) => (
            <Tile key={t.id} tile={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
