import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CATEGORIES } from "@/data/products";
import { StrkImage } from "@/components/ui/StrkImage";

export function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-velmora">
        <div className="mb-10 text-center">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-velmora-muted">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl tracking-wide md:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {CATEGORIES.map((category) => {
            const labelId = `category-label-${category.id}`;
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden bg-velmora-fog md:aspect-[3/4]"
              >
                <StrkImage
                  id={category.imageId}
                  query={`[${labelId}] gold jewelry editorial`}
                  ratio="3x4"
                  width={700}
                  alt={category.label}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-fg/20 transition-colors duration-300 group-hover:bg-velmora-fg/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={labelId}
                    className="font-serif text-2xl tracking-widest text-white md:text-3xl"
                  >
                    {category.label}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
