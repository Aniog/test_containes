import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";
import { PRODUCT_CATEGORIES } from "@/data/site";

export default function ProductsGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow={<span id="products-eyebrow">Products we source</span>}
            title={<span id="products-title">Across 8+ product categories</span>}
            description="We work with verified factories across the categories below and many more. Each supplier is re-verified on a rolling 12-month cycle."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white transition-colors hover:border-accent-300 hover:shadow-md"
            >
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-ink-100"
                data-strk-bg-id={`prod-${cat.id}-bg`}
                data-strk-bg={`[prod-${cat.id}-title] [prod-${cat.id}-items] [products-eyebrow] [products-title]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-900">
                  {cat.items.length} sub-categories
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3
                  id={`prod-${cat.id}-title`}
                  className="text-base font-semibold text-brand-900"
                >
                  {cat.title}
                </h3>
                <p
                  id={`prod-${cat.id}-items`}
                  className="mt-2 text-sm text-ink-600"
                >
                  {cat.items.join(" · ")}
                </p>
                <div className="mt-4 flex items-center text-sm font-semibold text-accent-700">
                  <span className="sr-only" id={`prod-${cat.id}-items`}></span>
                  <Link
                    to="/contact"
                    state={{ industry: cat.title }}
                    className="inline-flex items-center gap-1 hover:text-accent-800"
                  >
                    Request a quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}