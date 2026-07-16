import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="py-16 lg:py-24 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-[0.25em] uppercase font-sans font-medium mb-3">
            Browse by
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-charcoal font-light">
            Category
          </h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="category-tile group block aspect-[4/5] bg-velmora-cream"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="category-label absolute inset-0 z-10 flex items-center justify-center">
                <span className="text-white font-serif text-2xl sm:text-3xl tracking-widest uppercase font-semibold drop-shadow-lg">
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