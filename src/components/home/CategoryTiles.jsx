import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/primitives";
import { getStrkImageUrl } from "@/hooks/useStrkImages";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const TILES = [
  { id: "earrings", label: "Earrings", note: "Drops, studs & cuffs" },
  { id: "necklaces", label: "Necklaces", note: "Chains & pendants" },
  { id: "huggies", label: "Huggies", note: "The everyday essential" },
];

export default function CategoryTiles() {
  const sectionRef = React.useRef(null);
  React.useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <Eyebrow>Collections</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-4xl">
            Shop by Category
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3 md:gap-8">
          {TILES.map((tile, i) => (
            <Link
              key={tile.id}
              to={`/shop?cat=${tile.id}`}
              className="group relative block overflow-hidden bg-espresso animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                data-strk-img-id={`tile-${tile.id}-6b7c8d`}
                data-strk-img={`[tile-label-${tile.id}] [tile-note-${tile.id}] gold jewelry editorial photography dark warm background`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src={getStrkImageUrl(`tile-${tile.id}-6b7c8d`)}
                alt={tile.label}
                className="aspect-[3/4] w-full object-cover opacity-90 transition-all duration-700 ease-luxe group-hover:scale-105 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

              {/* Label — always visible on mobile, reveals on hover for desktop */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:translate-y-3 md:opacity-90 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <div>
                  <h3
                    id={`tile-label-${tile.id}`}
                    className="font-serif text-2xl font-medium uppercase tracking-[0.18em] text-cream"
                  >
                    {tile.label}
                  </h3>
                  <p
                    id={`tile-note-${tile.id}`}
                    className="mt-1 text-[13px] text-cream/80 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100"
                  >
                    {tile.note}
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/40 text-cream transition-all duration-500 group-hover:border-gold group-hover:bg-gold">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
