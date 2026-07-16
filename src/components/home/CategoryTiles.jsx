import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categories = [
  {
    id: "earrings",
    label: "Earrings",
    description: "From delicate studs to statement drops",
    href: "/shop?category=earrings",
    imgId: "cat-earrings-bg-a1b2c3",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    description: "Pendants, chains, and layering pieces",
    href: "/shop?category=necklaces",
    imgId: "cat-necklaces-bg-d4e5f6",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
  },
  {
    id: "huggies",
    label: "Huggies",
    description: "The perfect everyday earring",
    href: "/shop?category=huggies",
    imgId: "cat-huggies-bg-g7h8i9",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Browse by Category
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            Shop by Style
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-ivory-dark"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-bg-ratio="2x3"
                data-strk-bg-width="800"
                style={{ backgroundSize: "cover", backgroundPosition: "center" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/20 transition-colors duration-500" />

              {/* Label — hidden by default, revealed on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-6">
                <div className="text-center transform transition-all duration-400 group-hover:-translate-y-2">
                  <span id={cat.titleId} className="block font-cormorant text-3xl font-light text-ivory tracking-wide">
                    {cat.label}
                  </span>
                  <span
                    id={cat.descId}
                    className="block font-inter text-xs text-ivory/70 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  >
                    {cat.description}
                  </span>
                  <div className="mt-4 w-8 h-px bg-gold mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
