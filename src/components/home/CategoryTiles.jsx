import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  return (
    <section className="section-padding py-16 md:py-24 bg-velmora-cream">
      <div className="mb-10 md:mb-14 text-center">
        <p className="text-xs tracking-widester uppercase text-velmora-muted mb-2">Explore</p>
        <h2 className="font-heading text-3xl md:text-4xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?cat=${cat.id}`}
            className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velmora-sand"
          >
            <img
              src={`https://placehold.co/800x1000/2D2D2D/BFA06B?text=${encodeURIComponent(cat.name)}`}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-ink/20 transition-opacity duration-300 group-hover:bg-velmora-ink/35" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-white text-2xl md:text-3xl tracking-widester uppercase opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
