import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/site";

const ProductsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Products we source</span>
            <h2
              id="products-section-title"
              className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-ink-900 md:text-[42px]"
            >
              Eight categories we work in most often.
            </h2>
            <p
              id="products-section-subtitle"
              className="mt-3 text-[15.5px] leading-relaxed text-ink-600"
            >
              We focus on categories where China has a real advantage:
              manufacturing depth, material supply, and competitive pricing
              at scale. If your product is not listed, ask us anyway — we
              probably cover it.
            </p>
          </div>
          <Link to="/products" className="btn btn-outline btn-sm">
            See all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((p) => (
            <article
              key={p.id}
              id={`product-${p.id}-card`}
              className="card card-hover p-6"
            >
              <h3
                id={`product-${p.id}-title`}
                className="text-[17.5px] font-semibold text-ink-900"
              >
                {p.title}
              </h3>
              <p
                id={`product-${p.id}-desc`}
                className="mt-2 text-[14.5px] leading-relaxed text-ink-600"
              >
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.examples.map((e) => (
                  <span
                    key={e}
                    className="rounded-full border border-surface-200 bg-surface-50 px-2.5 py-1 text-[12px] font-medium text-ink-700"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
