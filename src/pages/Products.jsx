import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCT_CATEGORIES } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";
import InquiryForm from "@/components/ui/InquiryForm";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Products() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Products we source"
        title="Eight product categories we work in every week"
        description="Each category has a dedicated category lead and a short-list of pre-vetted factories. If your product is not listed, get in touch — we are adding categories every quarter."
      />

      <section className="section">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCT_CATEGORIES.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="card card-hover overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-brand-surface">
                  <img
                    alt={p.title}
                    data-strk-img-id={`prod-detail-${p.slug}-img-1b8f44`}
                    data-strk-img={`[prod-detail-${p.slug}-title] [prod-detail-${p.slug}-desc] [products-eyebrow]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2
                    id={`prod-detail-${p.slug}-title`}
                    className="text-lg font-semibold text-brand-ink"
                  >
                    {p.title}
                  </h2>
                  <p
                    id={`prod-detail-${p.slug}-desc`}
                    className="mt-2 text-sm text-brand-slate leading-relaxed flex-1"
                  >
                    {p.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-brand-ink">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-success shrink-0" />
                      <span>Short-list of 3–5 pre-vetted factories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-success shrink-0" />
                      <span>AQL-aligned PSI before goods ship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-success shrink-0" />
                      <span>Consolidated shipping available</span>
                    </li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <span id="products-eyebrow" className="sr-only">Products we source</span>
        </div>
      </section>

      <section className="section section-muted">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow">Don't see your category?</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-brand-ink tracking-tight">
                Tell us what you are sourcing
              </h2>
              <p className="mt-4 text-brand-slate leading-relaxed">
                We regularly take on new categories. Send a brief and we will
                tell you honestly whether we are the right fit.
              </p>
              <Link to="/contact" className="btn-secondary mt-6">
                Talk to a category lead <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
