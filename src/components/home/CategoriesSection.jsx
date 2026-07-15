import { useRef } from "react";
import { Link } from "react-router-dom";
import { StrkBackground } from "@/components/ui/StrkImage";
import { useImageLoader } from "@/hooks/useImageLoader";

const categories = [
  { id: "earrings", label: "Earrings", query: "gold earrings editorial" },
  { id: "necklaces", label: "Necklaces", query: "gold necklace pendant editorial" },
  { id: "huggies", label: "Huggies", query: "gold huggie earrings editorial" },
];

export function CategoriesSection() {
  const ref = useRef(null);
  useImageLoader(ref, []);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
          Shop by Category
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-wide md:text-4xl">
          Find Your Finish
        </h2>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {categories.map((category, idx) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <StrkBackground
              id={`category-bg-${idx}`}
              query={`[category-title-${idx}] ${category.query}`}
              ratio="3x4"
              width={600}
              className="absolute inset-0 h-full w-full bg-velmora-sand transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-ink/20 transition-opacity duration-300 group-hover:bg-velmora-ink/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3
                id={`category-title-${idx}`}
                className="font-serif text-2xl tracking-[0.15em] text-white uppercase md:text-3xl"
              >
                {category.label}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
