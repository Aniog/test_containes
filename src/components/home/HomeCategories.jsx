import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const TILES = [
  {
    id: "tile-earrings-1",
    fallback: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=900&q=90&fit=max&fm=jpg",
    label: "Earrings",
    href: "/shop?category=earrings",
  },
  {
    id: "tile-necklaces-1",
    fallback: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=90&fit=max&fm=jpg",
    label: "Necklaces",
    href: "/shop?category=necklaces",
  },
  {
    id: "tile-huggies-1",
    fallback: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=90&fit=max&fm=jpg",
    label: "Huggies",
    href: "/shop?category=huggies",
  },
];

export function HomeCategories() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 md:py-28 bg-bone">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
            Shop the Edit
          </p>
          <h2 className="font-serif text-ink text-3xl md:text-5xl font-light leading-tight">
            By Category
          </h2>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TILES.map((t) => (
            <Link
              key={t.id}
              to={t.href}
              className="group relative block aspect-[3/4] overflow-hidden bg-ivory"
            >
              <img
                data-strk-img-id={t.id}
                src={t.fallback}
                alt={t.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0 transition-opacity duration-500 group-hover:from-ink/70" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <h3 className="font-serif text-bone text-3xl md:text-4xl font-light">
                    {t.label}
                  </h3>
                  <span className="mt-2 inline-block text-bone/85 text-[10px] uppercase tracking-wider2 border-b border-bone/40 pb-0.5 transition-all duration-300 group-hover:border-bone">
                    Shop now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
