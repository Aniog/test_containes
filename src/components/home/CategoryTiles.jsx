import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    query: "gold drop earrings editorial flat lay on linen",
    to: "/shop?category=earrings",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    query: "gold pendant necklace on bare skin closeup warm",
    to: "/shop?category=necklaces",
  },
  {
    id: "huggies",
    label: "Huggies",
    query: "gold huggie hoop earrings pair on warm stone",
    to: "/shop?category=huggies",
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-ivory">
      <div className="container-page py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow text-taupe mb-3">Shop by Form</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink">
            Three quiet signatures
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((t) => (
            <Link
              key={t.id}
              to={t.to}
              className="group relative block overflow-hidden"
            >
              <StockImage
                id={`category-${t.id}`}
                query={t.query}
                ratio="4x5"
                width={900}
                alt={t.label}
                className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/65" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between text-ivory">
                <div>
                  <p className="eyebrow text-ivory/80 mb-2">Explore</p>
                  <h3 className="font-serif text-3xl md:text-4xl">
                    {t.label}
                  </h3>
                </div>
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-ivory/40 text-ivory transition-all duration-300 group-hover:bg-ivory group-hover:text-ink group-hover:translate-x-0.5">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </div>
              <div className="absolute inset-0 border border-ivory/0 transition-colors duration-500 group-hover:border-ivory/10 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
