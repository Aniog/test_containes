import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Reveal from "@/components/ui/Reveal";

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const TILES = [
  {
    id: "earrings",
    label: "Earrings",
    desc: "Statement drops and delicate studs in warm 18K gold",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    desc: "Layering chains and crystal pendants for every neckline",
  },
  {
    id: "huggies",
    label: "Huggies",
    desc: "The everyday hug — polished domes you never take off",
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            Curated for You
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-noir md:text-5xl">
            Shop by Category
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
          {TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 100}>
              <Link
                to={`/shop?category=${tile.id}`}
                className="group relative block overflow-hidden bg-noir"
              >
                <div className="aspect-[4/3] md:aspect-[3/4]">
                  <img
                    data-strk-img-id={`cat-${tile.id}`}
                    data-strk-img={`[cat-desc-${tile.id}] [cat-label-${tile.id}] elegant editorial photography on dark neutral background`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src={PLACEHOLDER_SRC}
                    alt={tile.label}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-95 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-noir/75 via-noir/10 to-transparent" />
                <span id={`cat-desc-${tile.id}`} className="sr-only" aria-hidden="true">
                  {tile.desc}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <h3
                      id={`cat-label-${tile.id}`}
                      className="font-serif text-2xl font-medium uppercase tracking-[0.18em] text-ivory md:text-3xl"
                    >
                      {tile.label}
                    </h3>
                    <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-sand opacity-0 transition-all duration-500 group-hover:opacity-100">
                      {tile.desc}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ivory/40 text-ivory transition-all duration-500 group-hover:border-gold group-hover:bg-gold">
                    <ArrowUpRight size={16} strokeWidth={1.5} />
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
