import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    id: "cat-earrings",
    label: "Earrings",
    href: "/shop?category=earrings",
    imgId: "cat-tile-earrings-a1b2c3",
    titleId: "cat-title-earrings",
    descId: "cat-desc-earrings",
    desc: "Gold drop earrings and ear cuffs",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    href: "/shop?category=necklaces",
    imgId: "cat-tile-necklaces-d4e5f6",
    titleId: "cat-title-necklaces",
    descId: "cat-desc-necklaces",
    desc: "Delicate gold chain necklaces and pendants",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    href: "/shop?category=huggies",
    imgId: "cat-tile-huggies-g7h8i9",
    titleId: "cat-title-huggies",
    descId: "cat-desc-huggies",
    desc: "Gold huggie hoop earrings close to the ear",
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-2">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-espresso font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <p className="font-cormorant text-2xl md:text-3xl uppercase tracking-widest text-cream font-light">
                  {cat.label}
                </p>
                <div className="mt-3 overflow-hidden h-px w-0 group-hover:w-12 bg-gold transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
