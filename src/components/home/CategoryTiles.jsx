import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-600 font-sans font-medium">
            Find Your Piece
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-warm-900 font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden bg-warm-200"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-warm-950/30 group-hover:bg-warm-950/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-100 font-light tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}