import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PRODUCT_CATEGORIES } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProductsStrip() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section">
      <div className="max-w-container mx-auto container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Products we source"
            title="Eight product categories we work in every week"
            description="We are not generalists. Each category has a dedicated category lead and a short-list of pre-vetted factories we know how to manage."
          />
          <Link to="/products" className="btn-ghost self-start md:self-end">
            Browse all categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCT_CATEGORIES.map((p) => (
            <div
              key={p.slug}
              className="card card-hover overflow-hidden flex flex-col group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-brand-surface">
                <img
                  alt={p.title}
                  data-strk-img-id={`prod-${p.slug}-img-6e1c0b`}
                  data-strk-img={`[prod-${p.slug}-desc] [prod-${p.slug}-title] [products-section-eyebrow]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3
                  id={`prod-${p.slug}-title`}
                  className="text-base font-semibold text-brand-ink"
                >
                  {p.title}
                </h3>
                <p
                  id={`prod-${p.slug}-desc`}
                  className="mt-1.5 text-sm text-brand-slate leading-relaxed flex-1"
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* hidden reference for image queries */}
        <span
          id="products-section-eyebrow"
          className="sr-only"
        >
          Products we source
        </span>
      </div>
    </section>
  );
}
