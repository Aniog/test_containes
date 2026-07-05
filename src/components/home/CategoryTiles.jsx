import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="max-w-page mx-auto px-4 md:px-8">
        <div className="mb-10">
          <span className="text-xs tracking-widest uppercase text-accent font-sans">
            Categories
          </span>
          <h2 className="section-heading mt-2">Shop by Style</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] md:aspect-[3/4] bg-surface-secondary overflow-hidden rounded-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                  <span className="font-serif text-2xl text-primary">
                    {cat.name}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </div>
              </div>
              {/* Always visible label on mobile */}
              <div className="absolute bottom-4 left-4 md:hidden">
                <span className="font-serif text-lg text-primary">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}