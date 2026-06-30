import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES_HOME } from "@/data/ugc.js";
import { useStrkImages } from "@/lib/imageLoader.js";

export default function CategoryTiles() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col items-start gap-3 mb-10 md:mb-14">
          <span className="eyebrow">Shop by category</span>
          <h2 className="font-serif font-light text-3xl md:text-5xl text-ink leading-[1.1] max-w-xl">
            Three ways to begin.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES_HOME.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?cat=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-surface-warm block"
            >
              <img
                alt={cat.label}
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                loading="lazy"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-overlay/50" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <p className="eyebrow text-cream/70 mb-2">Shop</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-cream font-light">
                    {cat.label}
                  </h3>
                </div>
                <span className="inline-flex items-center justify-center w-10 h-10 border border-cream/60 text-cream opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
