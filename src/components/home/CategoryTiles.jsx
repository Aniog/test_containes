import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    id: "earrings",
    label: "Earrings",
    subtitle: "Studs, drops & cuffs",
    href: "/shop?category=earrings",
    imgId: "cat-earrings-img-a1b2c3",
    titleId: "cat-earrings-title",
    subtitleId: "cat-earrings-subtitle",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    subtitle: "Pendants & chains",
    href: "/shop?category=necklaces",
    imgId: "cat-necklaces-img-d4e5f6",
    titleId: "cat-necklaces-title",
    subtitleId: "cat-necklaces-subtitle",
  },
  {
    id: "huggies",
    label: "Huggies",
    subtitle: "Dome & hoop huggies",
    href: "/shop?category=huggies",
    imgId: "cat-huggies-img-g7h8i9",
    titleId: "cat-huggies-title",
    subtitleId: "cat-huggies-subtitle",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso font-light">
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
              {/* Image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.subtitleId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6 text-center">
                <h3 id={cat.titleId} className="font-serif text-3xl text-ivory font-light tracking-wide mb-1">
                  {cat.label}
                </h3>
                <p id={cat.subtitleId} className="font-sans text-xs text-ivory/70 uppercase tracking-widest mb-4">
                  {cat.subtitle}
                </p>
                <span className="font-sans text-[10px] uppercase tracking-widest text-gold border-b border-gold pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
