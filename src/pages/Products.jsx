import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/site/PageHeader";
import StrkImage from "@/components/site/StrkImage";
import InquiryForm from "@/components/forms/InquiryForm";
import ContactStrip from "@/components/site/ContactStrip";
import { productCategories } from "@/data/site";

const Products = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Products we source"
        title="Eight categories we know from the inside."
        subtitle="We focus on categories where China has real manufacturing depth. If your product isn't listed, ask us — we probably cover it and will tell you straight if we don't."
        primaryCtaLabel="Get a Free Sourcing Quote"
        primaryCtaTo="/contact"
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {productCategories.map((p, idx) => (
              <article
                key={p.id}
                id={`product-${p.id}`}
                className="card grid grid-cols-1 overflow-hidden md:grid-cols-5"
              >
                <div className="md:col-span-2">
                  <div className="h-full">
                    <StrkImage
                      imgId={`product-${p.id}-img`}
                      query={`[product-${p.id}-desc] [product-${p.id}-title]`}
                      ratio="3x2"
                      width={600}
                      alt={p.title}
                      imgClassName="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 md:col-span-3">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
                    Category · {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3
                    id={`product-${p.id}-title`}
                    className="mt-2 text-[22px] font-semibold leading-snug text-ink-900"
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-50">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="eyebrow">What we check</span>
              <h2
                id="products-checklist-title"
                className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[36px]"
              >
                The same product, checked the same way, every time.
              </h2>
              <p
                id="products-checklist-subtitle"
                className="mt-4 text-[15.5px] leading-relaxed text-ink-600"
              >
                For every category, we run the same baseline of checks. The
                exact list is tailored to your product and your destination
                market's regulations.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Material & compliance documentation",
                  "Factory production line walkthrough",
                  "In-line inspection at cut / assembly / packing",
                  "Pre-shipment AQL inspection (1.0 / 2.5 / 4.0)",
                  "Carton & inner-pack drop / vibration tests",
                  "Lab tests: REACH, RoHS, CPSIA, FDA, CE, FCC",
                  "Carton marking & shipping marks review",
                  "Pre-loading container condition check",
                ].map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 rounded-md border border-surface-200 bg-white p-3.5 text-[14.5px] text-ink-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="eyebrow">Don't see your category?</span>
              <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[36px]">
                If you can describe it, we can probably source it.
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-600">
                We regularly handle lighting, pet products, stationery, auto
                accessories, hardware tools and OEM/ODM builds. If we don't
                have a fit, we'll point you to a partner that does.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="btn btn-primary">
                  Send your brief
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-7">
              <InquiryForm idPrefix="products" />
            </div>
          </div>
        </div>
      </section>

      <ContactStrip
        title="Send a spec sheet, a reference product, or a sketch."
        subtitle="We will tell you within one business day whether we are a good fit, what the realistic price range looks like, and which factories we have in mind."
      />
    </div>
  );
};

export default Products;
