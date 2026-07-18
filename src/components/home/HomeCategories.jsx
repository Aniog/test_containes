import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CATEGORIES } from "@/data/products";

export default function HomeCategories() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 bg-background border-t border-hairline"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Shop By</p>
          <h2 id="home-cat-title" className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory">
            Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?cat=${cat.id}`}
              className="group relative block aspect-[3/4] overflow-hidden bg-surface"
            >
              <img
                alt={cat.label}
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={cat.imageQuery}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3
                  id={cat.textId}
                  className="font-serif text-4xl lg:text-5xl text-ivory italic"
                >
                  {cat.label}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-button text-ivory opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Shop now
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
