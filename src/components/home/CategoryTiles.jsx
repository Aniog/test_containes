import { Link } from "react-router-dom";
import { CATEGORY_TILES } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-bone">
      <div className="container-velmora">
        <div className="mb-12 md:mb-16 text-center">
          <p className="eyebrow mb-4">Shop by Category</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink max-w-2xl mx-auto">
            Find your
            <span className="italic"> daily signature.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-square overflow-hidden bg-ink"
            >
              <img
                src={tile.image}
                alt={tile.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-soft-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/75" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                <div className="text-bone">
                  <p className="text-[10px] uppercase tracking-eyebrow text-bone/80 mb-2">
                    Discover
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl font-light">
                    {tile.label}
                  </h3>
                </div>
                <span className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full border border-bone/70 text-bone translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-soft-out">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}