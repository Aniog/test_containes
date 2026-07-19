import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { categories } from "@/data/products";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="mx-auto max-w-editorial px-5 py-20 md:px-10 md:py-28 lg:px-14"
      aria-labelledby="cat-title"
    >
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow eyebrow-gold">Shop By Category</p>
          <h2
            id="cat-title"
            className="mt-3 font-serif text-3xl text-ink-300 md:text-4xl"
          >
            Find your forever piece
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.label}`}
            className="group relative aspect-[3/4] overflow-hidden bg-cream-200 md:aspect-[4/5]"
            aria-label={`Shop ${cat.label}`}
          >
            <img
              alt={`${cat.label} collection`}
              loading="lazy"
              data-strk-img-id={cat.imgId}
              data-strk-img={`[cat-title] [cat-label-${cat.id}] gold jewelry editorial`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-300/45 transition-opacity duration-500 group-hover:to-ink-300/65" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
              <div>
                <p
                  id={`cat-label-${cat.id}`}
                  className="font-serif text-3xl text-cream-100 md:text-4xl"
                >
                  {cat.label}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-cream-100/80 transition-opacity duration-300 group-hover:opacity-100 md:opacity-0">
                  Shop the edit
                </p>
              </div>
              <span
                aria-hidden
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-cream-100/60 text-cream-100 transition-all duration-500 group-hover:bg-cream-100 group-hover:text-ink-300 md:flex"
              >
                ↗
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
