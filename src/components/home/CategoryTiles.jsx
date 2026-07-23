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
    <section ref={containerRef} className="bg-parchment py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] bg-linen block"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hidden text for image context */}
              <span id={cat.titleId} className="sr-only">{cat.label} gold jewelry</span>
              <span id={cat.descId} className="sr-only">
                {cat.id === "earrings" && "gold earrings drop stud hoop worn on woman ear close up"}
                {cat.id === "necklaces" && "gold necklace pendant chain worn on woman neck editorial"}
                {cat.id === "huggies" && "gold huggie hoop earrings worn on ear close up jewelry"}
              </span>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-velvet/30 group-hover:bg-velvet/50 transition-colors duration-400" />

              {/* Label — always visible, lifts on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <span className="font-serif text-2xl md:text-3xl font-light text-ivory tracking-wide">
                  {cat.label}
                </span>
                <span className="font-sans text-xs tracking-widest uppercase text-champagne/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
