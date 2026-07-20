import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const COLLECTIONS = [
  {
    id: "golden-hour",
    name: "Golden Hour",
    blurb: "Pieces that catch the warm light — sculptural huggies, buttery cuffs.",
    imgId: "collection-golden-hour-1b2c",
    query: "[collections-heading] gold jewelry on model warm golden hour light editorial portrait",
  },
  {
    id: "florals",
    name: "Florals",
    blurb: "Botanical forms, hand-set crystals, and our love letter to spring.",
    imgId: "collection-florals-3d4e",
    query: "[collections-heading] floral crystal pendant necklace on model editorial soft light",
  },
  {
    id: "the-heirloom",
    name: "The Heirloom",
    blurb: "The pieces we gift most — gift-boxed, ready to be passed on.",
    imgId: "collection-heirloom-5f6a",
    query: "[collections-heading] gold jewelry gift set in velvet keepsake box heirloom",
  },
  {
    id: "everyday",
    name: "Everyday",
    blurb: "Our daily uniform — refined huggies, fine chains, the staples.",
    imgId: "collection-everyday-7b8c",
    query: "[collections-heading] chunky gold huggie earrings and fine chain on model everyday",
  },
];

export default function Collections() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-ivory-soft">
        <div className="container-velmora text-center">
          <p className="eyebrow mb-4">Curated edits</p>
          <h1
            id="collections-heading"
            className="display-serif text-5xl md:text-6xl lg:text-7xl text-espresso text-balance"
          >
            Collections
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-base text-muted text-pretty">
            Stories told in gold — each collection a different chapter.
          </p>
        </div>
      </section>

      <section className="container-velmora py-12 md:py-16 space-y-10 md:space-y-16">
        {COLLECTIONS.map((c, i) => (
          <article
            key={c.id}
            className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Link
              to={`/shop?category=${i === 1 ? "necklaces" : i === 3 ? "huggies" : "earrings"}`}
              className="group block relative aspect-[4/5] overflow-hidden bg-espresso-soft"
            >
              <img
                alt={c.name}
                data-strk-img-id={c.imgId}
                data-strk-img={c.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
            </Link>
            <div>
              <p className="eyebrow mb-4">Collection {String(i + 1).padStart(2, "0")}</p>
              <h2 className="display-serif text-4xl md:text-5xl text-espresso text-balance">
                {c.name}
              </h2>
              <p className="mt-5 text-base text-muted max-w-md text-pretty">
                {c.blurb}
              </p>
              <Link
                to={`/shop?category=${i === 1 ? "necklaces" : i === 3 ? "huggies" : "earrings"}`}
                className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-espresso hover:text-bronze-deep transition-colors group"
              >
                Shop the Edit
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
