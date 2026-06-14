import React, { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowUpRight, Layers, ChevronRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/site";

const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-3 text-xs font-medium tracking-eyebrow uppercase text-brand-brass">
    <span className="block w-8 h-px bg-brand-brass" />
    {children}
  </p>
);

const Products = () => {
  const containerRef = useRef(null);
  const [active, setActive] = useState(PRODUCTS[0].id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="products"
      ref={containerRef}
      className="bg-brand-mist"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Eyebrow>The product lineup</Eyebrow>
            <h2 className="mt-5 font-display font-semibold text-brand-ink text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
              Seven machine classes. One standard of build.
            </h2>
          </div>
          <p className="text-brand-muted text-base lg:text-lg max-w-md">
            From a 1.4-metre bench folder to a 6.2-metre double-beam cell,
            every ARTITECT machine is engineered to the same drawing
            standard — and supported for the long term.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 -mx-6 lg:mx-0 overflow-x-auto">
          <div
            role="tablist"
            aria-label="Products"
            className="flex lg:flex-wrap gap-2 px-6 lg:px-0 min-w-max lg:min-w-0"
          >
            {PRODUCTS.map((p) => {
              const isActive = active === p.id;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(p.id)}
                  className={[
                    "whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium border transition-colors",
                    isActive
                      ? "bg-brand-ink text-white border-brand-ink"
                      : "bg-white text-brand-ink border-brand-line hover:border-brand-ink",
                  ].join(" ")}
                >
                  {p.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active product spotlight */}
        {PRODUCTS.filter((p) => p.id === active).map((p) => (
          <article
            key={p.id}
            className="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 bg-white border border-brand-line rounded-3xl overflow-hidden shadow-card"
          >
            <div className="lg:col-span-7 relative bg-brand-mist aspect-[4/3] lg:aspect-auto lg:min-h-[520px]">
              <img
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover"
                data-strk-img-id={p.imgId}
                data-strk-img={`[${p.descId}] [${p.titleId}] [products-tagline] [products-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-[11px] tracking-eyebrow uppercase text-brand-ink">
                <Layers className="w-3.5 h-3.5 text-brand-brass" />
                ARTITECT Series
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col">
              <p className="text-xs tracking-eyebrow uppercase text-brand-muted">
                {p.short}
              </p>
              <h3
                id={p.titleId}
                className="mt-3 font-display font-semibold text-brand-ink text-3xl lg:text-4xl leading-tight"
              >
                {p.name}
              </h3>
              <p
                id={p.descId}
                className="mt-4 text-brand-muted text-base leading-relaxed"
              >
                {p.description}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brand-line pt-8">
                {p.specs.map((s) => (
                  <div key={s.label}>
                    <dt className="text-[11px] tracking-eyebrow uppercase text-brand-muted">
                      {s.label}
                    </dt>
                    <dd className="mt-1 font-display text-base text-brand-ink">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-brand-ink text-white hover:bg-brand-steel rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
                >
                  Request datasheet <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-brand-ink hover:text-brand-brass transition-colors text-sm font-medium"
                >
                  Book a bench test <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* Headline / supporting text for image query */}
        <p
          id="products-title"
          className="sr-only"
        >
          ARTITECT product lineup
        </p>
        <p
          id="products-tagline"
          className="sr-only"
        >
          Industrial sheet metal folding machinery
        </p>

        {/* Compact grid below */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.filter((p) => p.id !== active)
            .slice(0, 3)
            .map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className="text-left bg-white border border-brand-line rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-0.5 transition-all group"
              >
                <div className="relative aspect-[4/3] bg-brand-mist">
                  <img
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={`${p.imgId}-thumb`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display font-semibold text-brand-ink">
                    {p.name}
                  </h4>
                  <p className="mt-1 text-sm text-brand-muted line-clamp-2">
                    {p.short}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-brand-ink group-hover:text-brand-brass transition-colors">
                    View <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
