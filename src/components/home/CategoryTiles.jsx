import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { IMG_PLACEHOLDER } from "@/lib/placeholder";

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-champagne mb-3">
            Shop by Category
          </p>
          <h2
            id="cat-section-title"
            className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.1]"
          >
            Pieces, for every moment.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-sand block"
            >
              <img
                alt={cat.label}
                data-strk-img-id={`velmora-cat-tile-${cat.id}-h4p2`}
                data-strk-img={`[cat-${cat.id}-blurb] [cat-${cat.id}-label] [cat-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={IMG_PLACEHOLDER}
                className="w-full h-full object-cover bg-sand group-hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent group-hover:from-ink/75 transition-all duration-500 pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3
                      id={`cat-${cat.id}-label`}
                      className="font-serif text-ivory text-3xl md:text-4xl tracking-tight"
                    >
                      {cat.label}
                    </h3>
                    <p
                      id={`cat-${cat.id}-blurb`}
                      className="mt-2 text-ivory/85 text-sm max-w-[16rem] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                    >
                      {cat.blurb}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-ivory/95 flex items-center justify-center flex-shrink-0 group-hover:bg-champagne transition-colors duration-300">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="text-ink group-hover:text-ivory transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
