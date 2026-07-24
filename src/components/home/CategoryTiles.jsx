import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { categoryTiles } from "@/data/site";
import { StockImage } from "@/components/ui/StockImage";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function CategoryTiles() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      id="cat-section"
      ref={ref}
      className="bg-ivory py-20 md:py-28"
    >
      <Container>
        <div className="mb-10 md:mb-14">
          <p id="cat-section-eyebrow" className="eyebrow">
            Shop by Category
          </p>
          <h2
            id="cat-section-title"
            className="mt-3 font-serif text-3xl md:text-5xl text-ink font-light"
          >
            Find your ritual.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cocoa"
            >
              <StockImage
                id={tile.imgId}
                query={tile.query}
                ratio="3x4"
                width={800}
                alt={tile.label}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-paper flex items-end justify-between">
                <div>
                  <p
                    id={`${tile.id}-label`}
                    className="font-serif text-3xl md:text-4xl font-light"
                  >
                    {tile.label}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-ui text-ivory/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop the edit
                  </p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center border border-paper/40 group-hover:bg-paper group-hover:text-ink transition-colors">
                  <ArrowUpRight size={16} strokeWidth={1.4} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
