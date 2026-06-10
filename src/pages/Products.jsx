import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/lib/products";

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-bone pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p
            id="products-eyebrow"
            className="text-xs uppercase tracking-[0.3em] text-accent mb-5"
          >
            The Collection
          </p>
          <h1
            id="products-title"
            className="font-serif text-5xl md:text-7xl text-ink leading-[1.05] max-w-4xl"
          >
            Machines for the modern fabricator.
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-steel leading-relaxed">
            From compact sheet metal folders for studios to wide-format double
            folding machines for production floors, every Artitect machine is
            built around the same disciplined engineering philosophy.
          </p>
        </div>
      </section>

      {/* Products list — alternating layout */}
      <section className="bg-paper">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="space-y-24 md:space-y-32">
            {PRODUCTS.map((product, idx) => (
              <article
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-7 ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-bone border border-mist">
                    <img
                      alt={product.name}
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}] [products-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-accent">
                    {product.category}
                  </p>
                  <h2
                    id={product.titleId}
                    className="mt-4 font-serif text-4xl md:text-5xl text-ink leading-tight"
                  >
                    {product.name}
                  </h2>
                  <p className="mt-4 font-serif italic text-xl text-steel">
                    {product.tagline}
                  </p>
                  <p
                    id={product.descId}
                    className="mt-6 text-base text-steel leading-relaxed"
                  >
                    {product.description}
                  </p>

                  <dl className="mt-8 border-t border-mist divide-y divide-mist">
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <dt className="text-xs uppercase tracking-[0.2em] text-steel">
                        Capacity
                      </dt>
                      <dd className="col-span-2 text-sm text-ink">
                        {product.capacity}
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <dt className="text-xs uppercase tracking-[0.2em] text-steel">
                        Bend
                      </dt>
                      <dd className="col-span-2 text-sm text-ink">
                        {product.bend}
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <dt className="text-xs uppercase tracking-[0.2em] text-steel">
                        Drive
                      </dt>
                      <dd className="col-span-2 text-sm text-ink">
                        {product.drive}
                      </dd>
                    </div>
                  </dl>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-3 border border-ink text-ink px-7 py-3 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition"
                  >
                    Request specifications
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Custom configurations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink max-w-3xl mx-auto leading-tight">
            Don't see exactly what you need? We build to specification.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition"
          >
            Talk to our engineers
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
