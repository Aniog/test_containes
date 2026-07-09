import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const CATEGORIES_DATA = [
  { name: "Earrings", query: "luxury gold drop earrings on marble background" },
  { name: "Necklaces", query: "gold pendant necklace delicate chain jewelry display" },
  { name: "Huggies", query: "chunky gold huggie earrings close up luxury" },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORIES_DATA.map((cat) => (
          <Link 
            key={cat.name} 
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-square overflow-hidden bg-secondary"
          >
            <img
              data-strk-img-id={`cat-tile-${cat.name}`}
              data-strk-img={cat.query}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
              <div className="relative overflow-hidden px-10 py-4">
                {/* Background blur reveal on hover */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                <span className="relative z-10 text-lg md:text-xl uppercase tracking-[0.3em] font-serif text-white group-hover:text-white transition-colors">
                  {cat.name}
                </span>
              </div>
            </div>
            
            {/* View Collection label reveal from bottom */}
            <div className="absolute bottom-10 left-0 w-full flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] text-white uppercase tracking-[0.3em] font-medium border-b border-white pb-1">
                    Explore
                </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
