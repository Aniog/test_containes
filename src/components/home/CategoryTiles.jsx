import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Find Your Finish
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-charcoal"
            >
              <div
                data-strk-bg-id={`category-bg-${category.id}`}
                data-strk-bg={`[category-title-${category.id}] ${category.query}`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width={800}
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${category.id}`}
                  className="font-serif text-3xl md:text-4xl text-cream tracking-wide"
                >
                  {category.label}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="inline-block text-xs tracking-widest uppercase text-cream border-b border-cream pb-1">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
