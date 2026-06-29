import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const categoryItems = [
  {
    id: "earrings",
    label: "Earrings",
    query: "gold drop earrings jewelry dark background elegant",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    query: "gold crystal necklace jewelry elegant warm",
  },
  {
    id: "huggies",
    label: "Huggies",
    query: "gold huggie hoop earrings jewelry minimal",
  },
];

export default function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1400px] mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-velmora-gold text-xs tracking-[0.3em] uppercase mb-3">
          Explore
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-cream font-light">
          Shop by Category
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {categoryItems.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <img
              data-strk-img-id={`category-${cat.id}`}
              data-strk-img={`[category-label-${cat.id}] gold jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
              <div>
                <h3
                  id={`category-label-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-velmora-cream tracking-[0.08em]"
                >
                  {cat.label}
                </h3>
              </div>
              <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold border-b border-velmora-gold pb-0.5 group-hover:border-velmora-gold-light group-hover:text-velmora-gold-light transition-colors">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
