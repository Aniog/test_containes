import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categoryTiles } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="eyebrow mb-4">Find your piece</div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1] text-balance">
            Shop by category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-hairline/40"
            >
              <img
                src={tile.image}
                alt={tile.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-elegant group-hover:scale-105"
                style={{ filter: "sepia(0.18) saturate(1.1) brightness(0.92) contrast(1.02)" }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,26,20,0.0) 30%, rgba(31,26,20,0.55) 100%)",
                }}
              />
              {/* hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(31,26,20,0.18)" }}
              />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="text-cream">
                  <div className="text-[10px] uppercase tracking-widest2 text-cream/75 mb-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                    {tile.sub}
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-serif text-3xl md:text-4xl text-cream leading-tight">
                      {tile.label}
                    </h3>
                    <div className="w-10 h-10 rounded-full border border-cream/40 text-cream flex items-center justify-center md:group-hover:bg-cream md:group-hover:text-ink transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                    </div>
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
