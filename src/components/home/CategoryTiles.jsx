import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

const P = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
const imgCls = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105";

// Static per-category images — literal data-strk-img-id required by the strk-img plugin
function CategoryImage({ catId, label }) {
  if (catId === "earrings")
    return <img data-strk-img-id="cat-earrings-p7q8r9" data-strk-img="Earrings gold demi-fine jewelry collection" data-strk-img-ratio="3x4" data-strk-img-width="600" src={P} alt={label} className={imgCls} />;
  if (catId === "necklaces")
    return <img data-strk-img-id="cat-necklaces-s1t2u3" data-strk-img="Necklaces gold demi-fine jewelry collection" data-strk-img-ratio="3x4" data-strk-img-width="600" src={P} alt={label} className={imgCls} />;
  if (catId === "huggies")
    return <img data-strk-img-id="cat-huggies-v4w5x6" data-strk-img="Huggies gold huggie earrings jewelry collection" data-strk-img-ratio="3x4" data-strk-img-width="600" src={P} alt={label} className={imgCls} />;
  return null;
}

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-[11px] tracking-widest3 uppercase text-gold mb-2">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] md:aspect-[3/4] overflow-hidden block"
            >
              {/* Category image */}
              <CategoryImage catId={cat.id} label={cat.label} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <p
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl font-light text-cream tracking-wide mb-2"
                >
                  {cat.label}
                </p>
                <span className="font-sans text-[10px] tracking-widest uppercase text-cream/70 border-b border-cream/50 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
