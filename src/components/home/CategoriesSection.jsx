import { useRef } from "react";
import { Link } from "react-router-dom";
import useStrkImages from "@/hooks/useStrkImages.js";

const categories = [
  { id: "earrings", label: "Earrings", query: "gold earrings on model" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace close up" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings" },
];

export default function CategoriesSection() {
  const sectionRef = useRef(null);
  useStrkImages(sectionRef);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-super-wide uppercase text-ink-muted mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Find Your Shine</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ink"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-label-${cat.id}] [category-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width={700}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/15 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-label-${cat.id}`}
                  className="font-serif text-3xl md:text-4xl text-cream tracking-widest uppercase border-b-2 border-transparent group-hover:border-gold pb-1 transition-all duration-300"
                >
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <h2 id="category-title" className="sr-only">Velmora jewelry categories</h2>
      </div>
    </section>
  );
}
