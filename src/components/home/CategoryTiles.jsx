import { Link } from "react-router-dom";
import { categories } from "../../data/products";

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[#1C1917] font-medium">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-[#B8943C] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[#E5DED5]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-white font-medium">
                  {cat.name}
                </h3>
                <p className="text-white/60 text-sm mt-1">{cat.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}