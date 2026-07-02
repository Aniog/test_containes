import { Link } from "react-router-dom";
import { CATEGORIES } from "@/data/products";

export function Categories() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl font-light sm:text-4xl">
            Find Your Fine Finish
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-parchment"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 transition-colors group-hover:bg-charcoal/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="translate-y-4 text-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-serif text-2xl font-light uppercase tracking-[0.14em] text-white sm:text-3xl">
                    {category.name}
                  </h3>
                  <span className="mt-2 inline-block text-xs font-medium uppercase tracking-[0.16em] text-white/90 underline-offset-4 hover:underline">
                    Shop Now
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center sm:hidden">
                <h3 className="font-serif text-xl font-light uppercase tracking-[0.14em] text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
