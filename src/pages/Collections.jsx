import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { cn } from "@/lib/utils";

const COLLECTION_TILES = {
  earrings: {
    id: "tile-earrings-1",
    fallback: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=900&q=90&fit=max&fm=jpg",
    blurb: "From quiet pearls to statement drops — earring silhouettes for every hour.",
  },
  necklaces: {
    id: "tile-necklaces-1",
    fallback: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=90&fit=max&fm=jpg",
    blurb: "Layered, considered, made to be lived in. Our necklace edit.",
  },
  huggies: {
    id: "tile-huggies-1",
    fallback: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900&q=90&fit=max&fm=jpg",
    blurb: "The everyday huggie — chunky, twisted, polished, and always in.",
  },
};

const GIFT_IDS = ["royal-heirloom-set", "majestic-flora-nectar", "amber-lace-earrings"];

export default function Collections() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div className="bg-bone min-h-screen pt-24 md:pt-28 pb-20">
      <div className="px-6 md:px-10 lg:px-16 max-w-[1440px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
            The Velmora Edit
          </p>
          <h1 className="font-serif text-ink text-4xl md:text-6xl font-light leading-tight">
            Collections
          </h1>
          <p className="mt-4 text-muted text-sm md:text-base max-w-md mx-auto">
            Three edits, one quiet point of view. Hand-finished, made to be worn.
          </p>
        </div>

        <SectionDivider withOrnament />

        {/* Category collections */}
        <div ref={ref} className="space-y-20 md:space-y-28 mt-12">
          {CATEGORIES.map((cat, i) => {
            const tile = COLLECTION_TILES[cat.id];
            const list = PRODUCTS.filter((p) => p.category === cat.id).slice(0, 4);
            const isEven = i % 2 === 0;
            return (
              <section key={cat.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <Link
                  to={`/shop?category=${cat.id}`}
                  className={cn(
                    "group relative block aspect-[4/5] overflow-hidden bg-ivory",
                    !isEven && "md:order-2"
                  )}
                >
                  <img
                    data-strk-img-id={tile.id}
                    src={tile.fallback}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/10 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6 md:p-10">
                    <div>
                      <h2 className="font-serif text-bone text-3xl md:text-5xl font-light">
                        {cat.label}
                      </h2>
                      <p className="mt-3 text-bone/85 text-sm max-w-xs leading-relaxed">
                        {tile.blurb}
                      </p>
                      <span className="mt-4 inline-block text-bone/90 text-[10px] uppercase tracking-wider2 border-b border-bone/50 pb-0.5 group-hover:border-bone">
                        Shop the edit →
                      </span>
                    </div>
                  </div>
                </Link>
                <div className={cn("grid grid-cols-2 gap-4 md:gap-5", !isEven && "md:order-1")}>
                  {list.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Gift set feature */}
        <section className="mt-24 md:mt-32">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[10px] uppercase tracking-wider3 text-gold-deep mb-3">
              Giving
            </p>
            <h2 className="font-serif text-ink text-3xl md:text-5xl font-light leading-tight">
              Made for gifting
            </h2>
            <p className="mt-4 text-muted text-sm md:text-base max-w-md mx-auto">
              Each piece arrives gift-boxed in our signature cream and gold — ready to give.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {GIFT_IDS.map((id) => {
              const p = PRODUCTS.find((x) => x.id === id);
              if (!p) return null;
              return <ProductCard key={p.id} product={p} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}


