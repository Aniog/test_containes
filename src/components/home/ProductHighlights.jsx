import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCTS } from "@/data/products";

export default function ProductHighlights() {
  const ref = useRef(null);
  const featured = PRODUCTS.slice(0, 3);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-5">
              The Range
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight">
              Three product families.{" "}
              <span className="italic text-brass">One philosophy.</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="text-xs uppercase tracking-[0.2em] text-ink border-b border-brass pb-1 hover:text-brass-dark transition-colors self-start md:self-auto"
          >
            See all machines →
          </Link>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {featured.map((p) => (
            <article
              key={p.slug}
              id={`hl-${p.slug}`}
              className="group flex flex-col"
            >
              <div className="aspect-[4/5] bg-mist overflow-hidden">
                <img
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`hl-img-${p.imgId}`}
                  data-strk-img={`[hl-${p.slug}-desc] [hl-${p.slug}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brass">
                    {p.tagline}
                  </p>
                  <h3
                    id={`hl-${p.slug}-title`}
                    className="mt-2 font-serif text-2xl text-ink"
                  >
                    {p.name}
                  </h3>
                </div>
                <Link
                  to="/products"
                  className="text-ink hover:text-brass transition-colors shrink-0"
                  aria-label={`Learn more about ${p.name}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <p
                id={`hl-${p.slug}-desc`}
                className="mt-3 text-sm text-steel leading-relaxed"
              >
                {p.short}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
