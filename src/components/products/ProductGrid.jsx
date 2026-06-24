import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/products";

export default function ProductGrid() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24 md:space-y-32">
        {PRODUCTS.map((p, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <article
              key={p.slug}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <div className="aspect-[4/3] bg-mist overflow-hidden">
                  <img
                    alt={p.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`prod-img-${p.imgId}`}
                    data-strk-img={`[prod-${p.slug}-desc] [prod-${p.slug}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-4">
                  {p.tagline}
                </p>
                <h2
                  id={`prod-${p.slug}-title`}
                  className="font-serif text-3xl md:text-4xl font-light text-ink leading-tight"
                >
                  {p.name}
                </h2>
                <p
                  id={`prod-${p.slug}-desc`}
                  className="mt-5 text-base text-steel leading-relaxed"
                >
                  {p.description}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-y-4 gap-x-6 border-t border-mist pt-6">
                  {p.specs.map((s) => (
                    <div key={s.label}>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-steel">
                        {s.label}
                      </dt>
                      <dd className="mt-1 text-sm text-ink font-medium">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-ink text-bone px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition-colors"
                  >
                    Request specifications
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-ink/20 text-ink px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-bone transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    Book a video demo
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
