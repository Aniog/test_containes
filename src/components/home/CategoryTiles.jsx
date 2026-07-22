import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const tiles = [
  {
    id: "earrings",
    label: "Earrings",
    query: "elegant gold drop earrings product still life warm neutral background",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    query: "delicate gold pendant necklace product still life warm neutral background",
  },
  {
    id: "huggies",
    label: "Huggies",
    query: "chunky gold huggie hoop earrings product still life warm neutral background",
  },
];

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <div className="mb-10 text-center md:mb-14">
        <p className="text-xs font-semibold uppercase tracking-luxe text-gold">
          Shop by Category
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-5xl">
          Find Your <span className="italic">Signature</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3 md:gap-8">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={`/shop?category=${tile.id}`}
            className="group relative block overflow-hidden bg-cream"
          >
            <img
              alt={tile.label}
              data-strk-img-id={`tile-${tile.id}`}
              data-strk-img={tile.query}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src={SVG_PLACEHOLDER}
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
              <span className="font-serif text-2xl font-medium uppercase tracking-wide2 text-ivory">
                {tile.label}
              </span>
              <span className="flex h-10 w-10 items-center justify-center border border-ivory/40 text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100">
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
