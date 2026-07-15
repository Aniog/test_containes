import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative h-72 overflow-hidden rounded-sm"
          >
            <img
              src={category.image}
              alt={category.label}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl text-white tracking-[0.14em] uppercase">{category.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
