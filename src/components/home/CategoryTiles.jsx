import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    id: "cat-earrings",
    label: "Earrings",
    href: "/shop?category=earrings",
    imgId: "cat-earrings-img-a1b2c3",
    titleId: "cat-earrings-title",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    href: "/shop?category=necklaces",
    imgId: "cat-necklaces-img-d4e5f6",
    titleId: "cat-necklaces-title",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    href: "/shop?category=huggies",
    imgId: "cat-huggies-img-g7h8i9",
    titleId: "cat-huggies-title",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <div className="w-8 h-px bg-ivory/60 mb-4 group-hover:w-12 transition-all duration-300" />
                <h3
                  id={cat.titleId}
                  className="font-cormorant text-2xl md:text-3xl font-light text-ivory uppercase tracking-[0.2em]"
                >
                  {cat.label}
                </h3>
                <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-ivory/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
