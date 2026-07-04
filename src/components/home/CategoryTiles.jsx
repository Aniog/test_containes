import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import { homeImagery } from "@/data/products.js";

const TILES = [
  { id: "earrings", label: "Earrings", illo: homeImagery.categories.earrings, to: "/shop?cat=earrings" },
  { id: "necklaces", label: "Necklaces", illo: homeImagery.categories.necklaces, to: "/shop?cat=necklaces" },
  { id: "huggies", label: "Huggies", illo: homeImagery.categories.huggies, to: "/shop?cat=huggies" },
];

const CategoryTiles = () => (
  <section className="py-20 sm:py-24 lg:py-28 bg-cream">
    <Container>
      <div className="flex items-end justify-between mb-10 sm:mb-12">
        <div>
          <p className="eyebrow">Shop the edit</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            By category
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {TILES.map((tile) => (
          <Link
            key={tile.id}
            to={tile.to}
            className="group relative block aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm bg-ink"
          >
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              {tile.illo}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex items-end justify-between">
              <div>
                <p className="eyebrow text-champagne">Velmora</p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl text-cream">
                  {tile.label}
                </h3>
              </div>
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-sm border border-cream/30 text-cream transition-all duration-300 group-hover:bg-champagne group-hover:border-champagne group-hover:text-ink">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);

export default CategoryTiles;
