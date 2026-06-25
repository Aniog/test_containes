import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { products } from "@/data/products";

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page header */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 bp-grid-dark opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
            The Machine Range
          </p>
          <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tight leading-[1.05] max-w-4xl">
            Folders, engineered with intent.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-paper/75 leading-relaxed">
            Four machines. One philosophy. Every ARTITECT folder is built
            around the same principle: a clean bend, repeated without
            compromise.
          </p>
        </div>
      </section>

      {/* Product list */}
      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24 md:space-y-32">
          {products.map((product, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={product.id}
                className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
              >
                <div
                  className={`relative ${reverse ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="absolute -top-5 -left-5 w-20 h-20 border border-brass hidden md:block" />
                  <div className="relative aspect-[4/3] bg-mist overflow-hidden rounded-sm">
                    <img
                      alt={product.name}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}] sheet metal folding machine industrial`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1000"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={reverse ? "lg:order-1" : "lg:order-2"}>
                  <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
                    Model {product.id.toUpperCase()}
                  </p>
                  <h2
                    id={product.titleId}
                    className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-ink leading-tight"
                  >
                    {product.name}
                  </h2>
                  <p
                    id={product.descId}
                    className="mt-6 text-graphite leading-relaxed"
                  >
                    {product.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-ink">
                        <Check className="w-4 h-4 text-brass mt-1 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 grid grid-cols-2 gap-px bg-mist border border-mist">
                    {product.bullets.map((b) => (
                      <div key={b.label} className="bg-paper p-5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-graphite">
                          {b.label}
                        </p>
                        <p className="font-display text-xl text-ink mt-1">
                          {b.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-10 inline-flex items-center gap-2 bg-ink text-paper hover:bg-steel rounded-sm px-7 py-3.5 text-sm tracking-wide font-medium transition-colors"
                  >
                    Request specifications
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Custom solutions */}
      <section className="bg-paper py-24 md:py-28 border-t border-mist">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
            Bespoke configurations
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-tight text-ink">
            Your sheet doesn't fit a catalogue?
          </h2>
          <p className="mt-6 text-graphite leading-relaxed max-w-2xl mx-auto">
            Tell us about your geometry, material and volume — we routinely
            engineer custom bending lengths, tooling stacks, and automation
            integrations.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 border border-ink text-ink hover:bg-ink hover:text-paper rounded-sm px-8 py-4 text-sm tracking-wide font-medium transition-colors"
          >
            Start a custom enquiry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
