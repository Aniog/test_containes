import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { Eyebrow } from "@/components/shared/SectionHeading";

const ALL = "all";

const Products = () => {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState(ALL);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Re-trigger image loading when filter changes (for newly visible items)
  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filter]);

  const filtered = useMemo(() => {
    if (filter === ALL) return PRODUCTS;
    return PRODUCTS.filter((p) => p.categoryKey === filter);
  }, [filter]);

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-ink text-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-16 md:pt-28 md:pb-20">
          <Eyebrow light>Our Machines</Eyebrow>
          <h1 className="mt-5 font-serif font-medium tracking-tight text-4xl md:text-5xl lg:text-6xl text-bone max-w-3xl">
            Folding machines, refined for craft and production alike.
          </h1>
          <p className="mt-6 text-mist max-w-2xl leading-relaxed text-base md:text-lg">
            Browse the complete Artitect range — double folders, sheet metal
            folders and CNC metal folding machines. Every model shares the same
            engineering DNA: precision, durability and a calm operator
            experience.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-bone border-b border-mist sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-steel mr-2">
            Filter:
          </span>
          <button
            type="button"
            onClick={() => setFilter(ALL)}
            className={
              "px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors border " +
              (filter === ALL
                ? "bg-ink text-bone border-ink"
                : "bg-transparent text-steel border-mist hover:border-ink hover:text-ink")
            }
          >
            All Machines
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setFilter(cat.key)}
              className={
                "px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors border " +
                (filter === cat.key
                  ? "bg-ink text-bone border-ink"
                  : "bg-transparent text-steel border-mist hover:border-ink hover:text-ink")
              }
            >
              {cat.short}
            </button>
          ))}
        </div>
      </section>

      {/* Product list */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 space-y-16 md:space-y-24">
          {filtered.map((product, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={product.id}
                id={product.slug}
                className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center scroll-mt-32"
              >
                <div
                  className={
                    "lg:col-span-7 " + (reverse ? "lg:order-2" : "")
                  }
                >
                  <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-mist border border-mist">
                    <img
                      alt={product.name}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={"lg:col-span-5 " + (reverse ? "lg:order-1" : "")}>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-deep">
                    {product.category}
                  </p>
                  <h2
                    id={product.titleId}
                    className="mt-3 font-serif font-medium tracking-tight text-3xl md:text-4xl text-ink"
                  >
                    {product.name}
                  </h2>
                  <p
                    id={product.descId}
                    className="mt-4 text-base leading-relaxed text-steel"
                  >
                    {product.description}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {product.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-3 text-sm text-ink"
                      >
                        <span
                          aria-hidden
                          className="inline-block w-4 h-px bg-gold mt-2.5 shrink-0"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-mist pt-6">
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-steel">
                        Bed length
                      </dt>
                      <dd className="mt-1.5 font-serif text-lg text-ink">
                        {product.capacityLength}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-steel">
                        Max thickness
                      </dt>
                      <dd className="mt-1.5 font-serif text-lg text-ink">
                        {product.capacityThickness}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-steel">
                        Accuracy
                      </dt>
                      <dd className="mt-1.5 font-serif text-lg text-ink">
                        {product.accuracy}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.25em] text-steel">
                        Drive
                      </dt>
                      <dd className="mt-1.5 font-serif text-lg text-ink">
                        {product.drive}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-3 bg-ink text-bone px-6 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors"
                    >
                      Request a Quote
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-center text-steel py-16">
              No machines match this filter.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
