import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/catalog";

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold">
            Shop by Category
          </span>
          <h2 className="mt-3 font-serif font-light text-4xl md:text-5xl tracking-tight text-onyx">
            Find Your Edit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-bone"
            >
              <img
                alt={cat.title}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold ${cat.title} jewelry editorial close up warm tone`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-onyx/15 to-transparent transition-opacity duration-500 group-hover:from-onyx/80" />

              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8 text-ivory">
                <h3
                  id={cat.titleId}
                  className="font-serif font-light text-3xl md:text-4xl tracking-tight"
                >
                  {cat.title}
                </h3>
                <p
                  id={cat.descId}
                  className="mt-2 font-sans text-sm text-ivory/85 max-w-xs"
                >
                  {cat.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.28em] text-champagne">
                  Shop {cat.title}
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
