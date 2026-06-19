import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS } from "@/data/products";
import { sceneDataUri } from "@/lib/placeholders";

const COLLECTION_IMAGES = {
  "the-everyday-edit": sceneDataUri({
    scene: "earStack",
    palette: "amber",
    width: 1200,
    height: 1500,
    id: "coll-everyday",
  }),
  "evening-restraint": sceneDataUri({
    scene: "neck",
    palette: "umber",
    width: 1200,
    height: 1500,
    id: "coll-evening",
  }),
  "the-gift-edit": sceneDataUri({
    scene: "modelEar",
    palette: "taupe",
    width: 1200,
    height: 1500,
    id: "coll-gift",
  }),
};

export default function Collections() {
  return (
    <>
      <section className="bg-bone pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container-velmora text-center">
          <p className="eyebrow mb-4">Curated Edits</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-ink">
            The
            <span className="italic"> Collections.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink-soft max-w-xl mx-auto">
            Three edits, handpicked for the way you actually wear jewelry.
          </p>
        </div>
      </section>

      <section className="bg-bone pb-24 md:pb-32">
        <div className="container-velmora space-y-20 md:space-y-28">
          {COLLECTIONS.map((c, idx) => (
            <article
              key={c.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
                idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7">
                <Link
                  to={`/shop?collection=${c.id}`}
                  className="group block relative aspect-[4/5] overflow-hidden bg-cream"
                >
                  <img
                    src={COLLECTION_IMAGES[c.id]}
                    alt={c.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-soft-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                </Link>
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow mb-4">Collection 0{idx + 1}</p>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink">
                  {c.label}
                </h2>
                <p className="mt-6 text-base text-ink-soft leading-relaxed max-w-md">
                  {c.blurb}
                </p>
                <Link
                  to={`/shop?collection=${c.id}`}
                  className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-product text-ink font-medium border-b border-ink pb-1 hover:text-ink-soft hover:border-ink-soft transition-colors"
                >
                  Shop the Edit
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}