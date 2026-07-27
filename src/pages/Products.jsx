import { useEffect, useRef, useState } from "react";
import { ArrowRight, Package, Factory, CheckCircle2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import PageHero from "@/components/layout/PageHero";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/sections/InquiryForm";
import { PRODUCT_CATEGORIES } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [active]);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products we source"
        title="Eight product categories we work with every week"
        description="Below are the categories we source most often. If your product is not listed, ask us anyway — chances are we have a vetted supplier for it."
        breadcrumb={[{ label: "Products" }]}
      />

      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="rounded-lg border border-ink-200 bg-white overflow-hidden">
              <div className="px-5 py-3 border-b border-ink-200 text-xs font-semibold uppercase tracking-wider text-ink-500">
                Categories
              </div>
              <ul className="divide-y divide-ink-100">
                {PRODUCT_CATEGORIES.map((cat, i) => (
                  <li key={cat.name}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={cn(
                        "w-full text-left px-5 py-3 text-sm font-medium flex items-center justify-between",
                        active === i
                          ? "bg-brand-50 text-brand-700"
                          : "text-ink-800 hover:bg-ink-50"
                      )}
                    >
                      <span>{cat.name}</span>
                      <ArrowRight
                        className={cn(
                          "h-4 w-4",
                          active === i ? "text-brand-600" : "text-ink-300"
                        )}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-lg border border-ink-200 bg-white overflow-hidden">
              <div className="relative h-64 md:h-80 bg-ink-100">
                <img
                  alt={PRODUCT_CATEGORIES[active].name}
                  data-strk-img-id={`product-detail-img-${active}-5a9d3e`}
                  data-strk-img={`[product-detail-${active}-name] [product-detail-${active}-items]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2
                  id={`product-detail-${active}-name`}
                  className="text-2xl font-bold text-ink-900"
                >
                  {PRODUCT_CATEGORIES[active].name}
                </h2>
                <p
                  id={`product-detail-${active}-items`}
                  className="mt-3 text-ink-600"
                >
                  We regularly source products like these from verified
                  factories. Tell us which items you need and we will prepare a
                  shortlist.
                </p>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-ink-700">
                  {PRODUCT_CATEGORIES[active].items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 text-[15px]"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand-600" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button as="link" to="/contact" icon={ArrowRight}>
                    Request quotes for {PRODUCT_CATEGORIES[active].name}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="ink">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2
              id="products-help-title"
              className="text-2xl md:text-3xl font-bold text-white leading-tight balance"
            >
              Don't see your product?
            </h2>
            <p id="products-help-sub" className="mt-3 text-ink-300">
              We work across many more categories — automotive parts,
              furniture, lighting, promotional items, and more. Send a short
              brief and we will confirm within one business day whether we can
              help.
            </p>
            <ul className="mt-5 space-y-2 text-ink-200 text-sm">
              <li className="flex items-center gap-2">
                <Package className="h-4 w-4 text-brand-300" />
                Standard catalog items
              </li>
              <li className="flex items-center gap-2">
                <Factory className="h-4 w-4 text-brand-300" />
                Custom OEM / ODM projects
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-300" />
                Compliance testing coordination
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <InquiryForm compact />
          </div>
        </div>
      </Section>
    </div>
  );
}
