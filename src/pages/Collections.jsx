import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export default function Collections() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-page mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-primary font-light">
            Our Collections
          </h1>
          <p className="text-sm text-secondary mt-3 max-w-md mx-auto font-sans">
            Explore our thoughtfully curated collections, each designed to
            celebrate a different facet of personal style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] bg-surface-secondary overflow-hidden rounded-sm"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-2xl text-primary">
                  {cat.name}
                </h3>
                <span className="text-xs text-accent font-sans mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop Now &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}