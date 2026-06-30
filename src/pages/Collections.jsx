import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useStrkImages } from "@/lib/imageLoader.js";
import { CATEGORIES } from "@/data/products.js";

const COLLECTIONS = [
  {
    id: "the-heirloom-edit",
    name: "The Heirloom Edit",
    eyebrow: "New · 5 pieces",
    description:
      "Our most-loved silhouettes, restocked in small batches. Designed to be layered, gifted, and worn for years to come.",
    query: "gold jewelry set on warm dark background editorial heirloom collection",
    cta: { label: "Shop the edit", to: "/shop?cat=sets" },
  },
  {
    id: "everyday-gold",
    name: "Everyday Gold",
    eyebrow: "Bestsellers",
    description:
      "The pieces our community reaches for most — refined, warm, and made for the everyday.",
    query: "everyday gold jewelry flat lay on cream linen editorial warm light",
    cta: { label: "Shop everyday", to: "/shop?cat=earrings" },
  },
  {
    id: "the-gift-edit",
    name: "The Gift Edit",
    eyebrow: "Gifts under $80",
    description:
      "Ready to give, ready to keep. Each piece arrives in our signature gift box, finished with a handwritten card.",
    query: "gold jewelry gift box on warm dark background with ribbon editorial",
    cta: { label: "Shop gifts", to: "/shop" },
  },
];

function CollectionCard({ c, i, isReversed = false }) {
  return (
    <section className="container-wide py-12 md:py-16">
      <div
        className={[
          "grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center",
          isReversed ? "md:[direction:rtl]" : "",
        ].join(" ")}
      >
        <div
          className={[
            "md:col-span-7",
            isReversed ? "md:[direction:ltr]" : "",
          ].join(" ")}
        >
          <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-surface-warm">
            <img
              alt={c.name}
              data-strk-img-id={`collection-${c.id}-img`}
              data-strk-img={`${c.query} [collection-${c.id}-title] [collection-${c.id}-eyebrow]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              loading="lazy"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <div
          className={[
            "md:col-span-5 flex flex-col items-start gap-5",
            isReversed ? "md:[direction:ltr]" : "",
          ].join(" ")}
        >
          <span
            id={`collection-${c.id}-eyebrow`}
            className="eyebrow"
          >
            {c.eyebrow}
          </span>
          <h2
            id={`collection-${c.id}-title`}
            className="font-serif text-3xl md:text-5xl text-ink font-light leading-[1.08]"
          >
            {c.name}
          </h2>
          <p className="font-sans text-base md:text-[17px] text-ink-muted leading-relaxed max-w-md">
            {c.description}
          </p>
          <Link
            to={c.cta.to}
            className="link-underline inline-flex items-center gap-2 mt-2 font-sans text-sm text-ink hover:text-gold transition-colors"
          >
            {c.cta.label}
            <ArrowRight strokeWidth={1.5} className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Collections() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <div ref={ref} className="bg-cream">
      <section className="bg-surface-warm border-b border-line">
        <div className="container-wide py-16 md:py-24 flex flex-col items-center text-center gap-4">
          <span className="eyebrow">Collections</span>
          <h1 className="font-serif font-light text-4xl md:text-6xl text-ink leading-[1.05] max-w-2xl">
            Stories, told in gold.
          </h1>
          <p className="font-sans text-base md:text-[17px] text-ink-muted max-w-xl leading-relaxed">
            Three small, considered edits — each one a way to begin or
            continue your Velmora collection.
          </p>
        </div>
      </section>

      {COLLECTIONS.map((c, i) => (
        <div key={c.id} className={i % 2 === 1 ? "bg-cream" : "bg-cream"}>
          <CollectionCard c={c} i={i} isReversed={i % 2 === 1} />
        </div>
      ))}

      <section className="container-wide py-16 md:py-20 border-t border-line">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={`/shop?cat=${c.id}`}
              className="group block text-center py-6 border border-line hover:border-ink transition-colors"
            >
              <span className="font-serif text-2xl text-ink font-light group-hover:text-gold transition-colors">
                {c.label}
              </span>
              <span className="block mt-2 font-sans text-[11px] tracking-[0.24em] uppercase text-ink-muted">
                Shop
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
