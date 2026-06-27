import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="mb-12 text-center">
          <p className="text-[11px] tracking-[0.35em] uppercase text-gold mb-4">
            Shop by Category
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.05] tracking-tight">
            Find your forever piece.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-bone"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-name-${cat.id}] [cat-desc-${cat.id}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="1000"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.04]"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent transition-opacity duration-500 group-hover:from-ink/75" />
              <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-end text-cream">
                <p
                  id={`cat-desc-${cat.id}`}
                  className="text-xs md:text-sm text-cream/80 mb-2 opacity-90"
                >
                  {cat.description}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <h3
                    id={`cat-name-${cat.id}`}
                    className="font-serif text-3xl md:text-4xl tracking-wide"
                  >
                    {cat.name}
                  </h3>
                  <span className="w-10 h-10 rounded-full bg-cream/15 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:text-cream">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
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
