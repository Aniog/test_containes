import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, EDITORIAL } from "@/data/products";

const tiles = [
  {
    id: "earrings",
    label: "Earrings",
    image: EDITORIAL.categoryEarrings.image,
    alt: EDITORIAL.categoryEarrings.alt,
  },
  {
    id: "necklaces",
    label: "Necklaces",
    image: EDITORIAL.categoryNecklaces.image,
    alt: EDITORIAL.categoryNecklaces.alt,
  },
  {
    id: "huggies",
    label: "Huggies",
    image: EDITORIAL.categoryHuggies.image,
    alt: EDITORIAL.categoryHuggies.alt,
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-3">
            Find your ritual
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            Shop by category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop/${tile.id}`}
              className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-sand"
            >
              <img
                src={tile.image}
                alt={tile.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,14,12,0.05) 0%, rgba(15,14,12,0.55) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9 text-ivory">
                <h3 className="font-serif text-3xl md:text-4xl">{tile.label}</h3>
                <div className="mt-2 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-editorial opacity-90 group-hover:opacity-100">
                  Shop now
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
