import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4x5] overflow-hidden bg-cream"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/45 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3
                  id={cat.titleId}
                  className="font-serif text-ivory text-3xl md:text-4xl uppercase tracking-widest3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-ivory/0 group-hover:text-ivory/85 text-sm mt-2 max-w-[200px] transition-all duration-500"
                >
                  {cat.desc}
                </p>
                <span className="mt-4 text-[11px] uppercase tracking-widest2 text-ivory/0 group-hover:text-gold transition-colors duration-500">
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
