import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import JewelImage from "@/components/ui/JewelImage";

const SHAPES = {
  earrings: "drop",
  necklaces: "pendant",
  huggies: "huggie",
  gifts: "set",
};
const BGS = {
  earrings: "glow",
  necklaces: "dusk",
  huggies: "warm",
  gifts: "velvet",
};

const COPY = {
  earrings: {
    title: "The Earring Edit",
    eyebrow: "Collection 01",
    blurb: "From the second-piercing cuff to the heirloom drop, every silhouette chosen to live in your ear and your memory.",
  },
  necklaces: {
    title: "Necklaces",
    eyebrow: "Collection 02",
    blurb: "Pendants and chains finished to sit softly at the collarbone, designed to layer or stand alone.",
  },
  huggies: {
    title: "Huggies",
    eyebrow: "Collection 03",
    blurb: "The everyday hoop, refined. Solid-feeling, hinged for comfort, made to stay in.",
  },
  gifts: {
    title: "Gifts",
    eyebrow: "Collection 04",
    blurb: "Pieces ready to give, in our signature linen-lined boxes. For the moment and the memory.",
  },
};

export default function Collections() {
  const [params, setParams] = useSearchParams();
  const active = params.get("cat") || "earrings";

  const items = useMemo(() => PRODUCTS.filter((p) => p.category === active), [active]);

  return (
    <main className="page-fade pt-24 md:pt-32 bg-cream min-h-screen">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <span className="eyebrow text-champagne-dark">The Collections</span>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.02] max-w-2xl">
            Four edits, one quiet standard.
          </h1>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setParams({ cat: c.slug })}
              className={`px-5 py-2 rounded-full text-xs eyebrow border transition-all ${
                active === c.slug
                  ? "bg-ink text-cream border-ink"
                  : "bg-transparent text-ink border-hairline hover:border-ink"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Featured large card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[440px] overflow-hidden">
            <JewelImage shape={SHAPES[active]} bg={BGS[active]} alt={COPY[active].title} className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-cream">
              <span className="eyebrow text-champagne">{COPY[active].eyebrow}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-2">{COPY[active].title}</h2>
              <p className="text-cream/80 text-sm mt-3 max-w-sm">{COPY[active].blurb}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {items.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="group flex flex-col gap-2"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-cream-warm">
                  <JewelImage
                    shape={SHAPES[active]}
                    bg={BGS[active]}
                    alt={p.alt}
                    className="absolute inset-0 transition-transform duration-700 ease-velvet group-hover:scale-105"
                  />
                </div>
                <h3 className="eyebrow text-[0.65rem] text-ink mt-2">{p.name}</h3>
                <p className="text-xs text-muted">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* All items */}
        <div className="border-t border-hairline pt-10">
          <h3 className="eyebrow text-taupe mb-6">All in {COPY[active].title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {items.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group flex flex-col gap-3">
                <div className="relative aspect-[3/4] overflow-hidden bg-cream-warm">
                  <JewelImage
                    shape={SHAPES[active]}
                    bg={BGS[active]}
                    alt={p.alt}
                    className="absolute inset-0 transition-transform duration-700 ease-velvet group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <h4 className="eyebrow text-[0.7rem] text-ink">{p.name}</h4>
                  <span className="text-sm text-ink">${p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
