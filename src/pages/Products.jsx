import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/catalog";

const categories = [
  "All",
  "Double Folding Machine",
  "Double Folder",
  "Sheet Metal Folder",
  "Metal Folder Machine",
  "Metal Folding Machine",
];

export default function Products() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState("All");

  const visible = useMemo(() => {
    if (filter === "All") return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [filter]);

  return (
    <div ref={containerRef}>
      {/* HEADER */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
          <p className="eyebrow text-amber-700 mb-5">The Artitect range</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-neutral-900 leading-[1.05] max-w-4xl">
            Every machine,
            <br />
            <span className="italic text-neutral-700">a precision instrument.</span>
          </h1>
          <p className="mt-8 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            From compact studio folders to fully automated CNC folding systems,
            each Artitect machine is engineered for fabricators who refuse to
            compromise on quality, repeatability, or longevity.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="border-b border-neutral-200 bg-stone-50 sticky top-20 z-30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 overflow-x-auto">
          <div className="flex items-center gap-2 md:gap-3 min-w-max">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] border transition-colors ${
                  filter === c
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-transparent text-neutral-600 border-neutral-300 hover:border-neutral-900 hover:text-neutral-900"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS LIST */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20 md:space-y-28">
          {visible.map((p, i) => (
            <article
              key={p.id}
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-last" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-200 border border-neutral-200">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div>
                <p className="eyebrow text-amber-700 mb-4">{p.category}</p>
                <h2
                  id={p.titleId}
                  className="font-display text-3xl md:text-5xl font-light text-neutral-900 leading-tight"
                >
                  {p.name}
                </h2>
                <p className="mt-3 text-lg text-neutral-700 italic font-light">
                  {p.tagline}
                </p>
                <p
                  id={p.descId}
                  className="mt-6 text-base text-neutral-600 leading-relaxed"
                >
                  {p.description}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-y-5 gap-x-6 border-t border-neutral-200 pt-6">
                  {p.specs.map((s) => (
                    <div key={s.label}>
                      <dt className="eyebrow text-neutral-500">{s.label}</dt>
                      <dd className="mt-1.5 text-base text-neutral-900 font-medium">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  to="/contact"
                  className="mt-10 inline-flex items-center gap-3 border border-neutral-900 text-neutral-900 px-7 py-3.5 text-xs uppercase tracking-[0.25em] hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  Request specifications
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </article>
          ))}

          {visible.length === 0 && (
            <p className="text-center text-neutral-600 py-20">
              No machines match this category yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
