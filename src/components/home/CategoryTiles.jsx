import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_TILES } from "@/data/products";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function CategoryTiles() {
  const containerRef = useRef(null);
  useImageLoader(containerRef, []);

  return (
    <section ref={containerRef} className="bg-ivory">
      <div className="mx-auto max-w-7.5xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 text-center sm:mb-16">
          <p className="font-sans text-[10px] uppercase tracking-wider-3 text-gold-deep">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-4xl text-espresso sm:text-5xl">
            The Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {CATEGORY_TILES.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative block aspect-[4/5] overflow-hidden bg-bone sm:aspect-[3/4]"
            >
              <img
                alt={cat.label}
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                loading="lazy"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-espresso/10 to-espresso/70 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center sm:p-8">
                <h3 className="font-serif text-3xl text-ivory sm:text-4xl">
                  {cat.label}
                </h3>
                <p className="mt-2 font-sans text-[10px] uppercase tracking-wider-3 text-ivory/80">
                  {cat.sub}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-wider-2 text-ivory transition-all group-hover:gap-3">
                  Shop
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
