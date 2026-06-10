import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";

const Products = () => {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      {/* Page hero */}
      <section className="bg-ink text-bone pt-40 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-widest2 text-accent font-medium">
              Our Machines
            </span>
          </div>
          <h1 className="mt-6 font-serif font-light text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
            Folding machinery, <span className="italic text-accentSoft">curated.</span>
          </h1>
          <p className="mt-8 text-silver text-[17px] md:text-lg max-w-2xl leading-relaxed">
            Four core platforms, infinite configurations. Each ARTITECT machine
            is configurable to the millimetre — from sheet width to control
            architecture.
          </p>
        </div>
      </section>

      {/* Products list */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-20 md:space-y-28">
          {products.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={p.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
              >
                <div
                  className={`lg:col-span-7 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] bg-ink overflow-hidden border border-silver">
                    <img
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      data-strk-img-id={`listing-${p.imgId}`}
                      data-strk-img={`[${p.descId}-listing] [${p.titleId}-listing] sheet metal folding machine industrial`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute top-5 left-5 bg-bone/95 text-ink px-3 py-1.5 text-[10px] uppercase tracking-widest2 font-medium">
                      {p.category}
                    </div>
                    <div className="absolute bottom-5 left-5 font-mono text-xs uppercase tracking-widest2 text-bone/90">
                      Series 0{i + 1}
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <p className="font-mono text-xs uppercase tracking-widest2 text-accent">
                    {p.tagline}
                  </p>
                  <h2
                    id={`${p.titleId}-listing`}
                    className="mt-3 font-serif text-3xl md:text-5xl leading-tight tracking-tight text-ink"
                  >
                    {p.name}
                  </h2>
                  <p
                    id={`${p.descId}-listing`}
                    className="mt-5 text-steel text-[16px] leading-relaxed"
                  >
                    {p.summary}
                  </p>

                  <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-silver pt-6">
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest2 text-steel">Working Width</dt>
                      <dd className="mt-1 font-mono text-sm text-ink">{p.capacity}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest2 text-steel">Capacity</dt>
                      <dd className="mt-1 font-mono text-sm text-ink">{p.thickness}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest2 text-steel">Drive</dt>
                      <dd className="mt-1 font-mono text-sm text-ink">{p.power}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] uppercase tracking-widest2 text-steel">Accuracy</dt>
                      <dd className="mt-1 font-mono text-sm text-ink">{p.accuracy}</dd>
                    </div>
                  </dl>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      to={`/products/${p.slug}`}
                      className="inline-flex items-center gap-3 bg-ink text-bone px-7 py-3.5 text-xs uppercase tracking-widest2 hover:bg-graphite transition-colors group"
                    >
                      View specifications
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 border border-ink text-ink px-7 py-3.5 text-xs uppercase tracking-widest2 hover:bg-ink hover:text-bone transition-colors"
                    >
                      Request quote
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Products;
