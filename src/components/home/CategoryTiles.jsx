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
    descId: "cat-earrings-desc",
    desc: "Gold drop earrings, studs, ear cuffs",
  },
  {
    id: "cat-necklaces",
    label: "Necklaces",
    href: "/shop?category=necklaces",
    imgId: "cat-necklaces-img-d4e5f6",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    desc: "Delicate gold chain necklaces and pendants",
  },
  {
    id: "cat-huggies",
    label: "Huggies",
    href: "/shop?category=huggies",
    imgId: "cat-huggies-img-g7h8i9",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    desc: "Gold huggie hoop earrings close to the ear",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-dark">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center">
                <p
                  id={cat.titleId}
                  className="font-cormorant text-3xl md:text-4xl font-light text-white tracking-wide"
                >
                  {cat.label}
                </p>
                <p
                  id={cat.descId}
                  className="font-inter text-xs uppercase tracking-widest text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.desc}
                </p>
                <div className="mt-4 w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
