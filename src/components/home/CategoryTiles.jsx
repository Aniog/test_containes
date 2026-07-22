import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const TILES = [
  {
    id: "earrings",
    name: "Earrings",
    blurb: "From huggies to heirlooms",
    img: "gold drop earrings editorial warm still life",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    blurb: "For the moments worth marking",
    img: "gold crystal necklace editorial warm still life",
  },
  {
    id: "huggies",
    name: "Huggies",
    blurb: "The everyday signature",
    img: "chunky gold huggie hoop earrings editorial still life warm",
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="container-shell">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="eyebrow">Shop By Category</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-ink">
            The Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((t) => (
            <Link
              key={t.id}
              to={`/shop?category=${t.id}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-cocoa"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out-soft group-hover:scale-105"
                data-strk-bg-id={`cat-${t.id}`}
                data-strk-bg={t.img}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="900"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/0 to-espresso/0" />

              <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                <h3 className="font-display text-3xl md:text-4xl text-bone">
                  {t.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-bone-soft text-sm">{t.blurb}</p>
                  <span className="w-9 h-9 border border-bone/40 text-bone flex items-center justify-center group-hover:border-champagne group-hover:text-champagne transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.25} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
