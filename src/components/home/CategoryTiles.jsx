import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "../../data/products";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-ivory-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-obsidian font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3]"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-all duration-400" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p
                  id={cat.titleId}
                  className="font-serif text-2xl lg:text-3xl text-ivory tracking-widest uppercase font-light"
                >
                  {cat.label}
                </p>
                <div className="w-8 h-px bg-gold mt-3 transition-all duration-300 group-hover:w-16" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
