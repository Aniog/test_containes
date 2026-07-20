import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categoryTiles } from "@/data/products";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-ivory text-espresso py-20 md:py-28"
      aria-labelledby="cat-title"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p id="cat-eyebrow" className="eyebrow mb-3">
            Discover
          </p>
          <h2
            id="cat-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl"
          >
            Shop by category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id.replace("cat-", "")}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-sand"
            >
              <img
                data-strk-img-id={`cat-${tile.id}`}
                data-strk-img={`[cat-tile-${tile.id}-label] [cat-tile-${tile.id}-desc] ${tile.query}`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                alt={tile.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                <div>
                  <h3
                    id={`cat-tile-${tile.id}-label`}
                    className="font-serif text-3xl md:text-4xl text-ivory"
                  >
                    {tile.label}
                  </h3>
                  <p
                    id={`cat-tile-${tile.id}-desc`}
                    className="text-xs uppercase tracking-[0.22em] text-ivory/75 mt-2"
                  >
                    {tile.description}
                  </p>
                </div>
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ivory text-espresso flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" strokeWidth={1.4} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
