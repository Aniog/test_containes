import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const catData = [
  { id: "earrings", name: "Earrings", desc: "From delicate studs to statement drops" },
  { id: "necklaces", name: "Necklaces", desc: "Chains, pendants, and layered looks" },
  { id: "huggies", name: "Huggies", desc: "Everyday gold for your lobes" },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-velmora-gold">Browse by</span>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-text mt-2 font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {catData.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-velmora-border/30"
            >
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 id={`cat-name-${cat.id}`} className="font-serif text-2xl md:text-3xl text-velmora-text-light uppercase tracking-widest mb-2">
                    {cat.name}
                  </h3>
                  <p id={`cat-desc-${cat.id}`} className="text-xs text-velmora-text-light/70 uppercase tracking-wider">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}