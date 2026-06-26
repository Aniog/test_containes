import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";
import CTA from "@/components/shared/CTA";
import { PRODUCT_CATEGORIES } from "@/data/site";

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section className="border-b border-ink-200 bg-ink-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Products we source"
            title={<span id="products-section-title">Categories we cover today, and the ones we are adding</span>}
            description="Each category page is supported by a vetted supplier network. Categories are not exhaustive — if yours is not listed, ask us and we will tell you honestly whether we can help."
          />
        </div>
      </section>

      <section ref={containerRef} className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white transition-colors hover:border-accent-300 hover:shadow-md"
              >
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-ink-100"
                  data-strk-bg-id={`products-${cat.id}-bg`}
                  data-strk-bg={`[products-${cat.id}-title] [products-${cat.id}-items] [products-section-title]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    id={`products-${cat.id}-title`}
                    className="text-lg font-semibold text-brand-900"
                  >
                    {cat.title}
                  </h3>
                  <p
                    id={`products-${cat.id}-items`}
                    className="mt-2 text-sm text-ink-600"
                  >
                    {cat.items.join(" · ")}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-200 pt-4">
                    <span className="text-xs uppercase tracking-wider text-ink-500">
                      Sourcing & QC
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
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

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Don't see your category?"
            title="Tell us anyway — we will tell you honestly"
            description="Some categories are outside our vetted network today. When that is the case, we will tell you directly and suggest an alternative — for example, a specialist sourcing partner in another country or a more reliable path through a trading company."
          />
          <div className="mt-8 rounded-2xl border border-ink-200 bg-white p-6 text-sm text-ink-700 sm:p-8">
            <p>
              Categories we are actively growing include medical devices (Class I),
              children's products, food-contact goods, and electrical products
              requiring CE/UL certification. Lead times and documentation
              requirements vary — we will confirm specifics during scoping.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Tell us what you want to source"
        description="Share the product, target quantity, and any quality or compliance requirements. We'll respond with a sourcing plan and indicative cost."
        primary={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
        secondary={{ to: "/how-it-works", label: "See how it works" }}
      />
    </>
  );
}