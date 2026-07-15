import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SmartImage from "@/components/ui/SmartImage";
import Reveal from "@/components/ui/Reveal";
import { CATEGORY_TILES } from "@/data/content";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="container-editorial">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <p className="eyebrow text-gold-deep">Shop the Edit</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Shop by <em className="italic font-normal text-mauve">category</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORY_TILES.map((tile, i) => (
            <Reveal key={tile.slug} delay={i * 100}>
              <Link
                to={`/shop?category=${tile.slug}`}
                className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ink"
              >
                <SmartImage
                  alt={tile.label}
                  query={tile.query}
                  ratio="3x4"
                  width={900}
                  imgId={`cat-tile-${tile.slug}`}
                  className="w-full h-full"
                  imgClassName="transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(26,23,20,0.15) 0%, rgba(26,23,20,0.55) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-10 text-center">
                  <h3 className="font-serif text-3xl md:text-4xl text-ivory">
                    {tile.label}
                  </h3>
                  <span
                    className="mt-3 inline-flex items-center gap-2 text-ivory/85
                               text-[11px] uppercase tracking-nav font-medium
                               opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    Shop {tile.label}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
