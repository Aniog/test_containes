import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { SERVICES } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

const IMG_FOR_SERVICE = {
  "supplier-sourcing": "[svc-sourcing-title] [svc-sourcing-eyebrow]",
  "supplier-verification": "[svc-verification-title] [svc-verification-eyebrow]",
  "quality-inspection": "[svc-inspection-title] [svc-inspection-eyebrow]",
  "production-followup": "[svc-production-title] [svc-production-eyebrow]",
  "shipping-logistics": "[svc-shipping-title] [svc-shipping-eyebrow]",
  "sample-management": "[svc-samples-title] [svc-samples-eyebrow]",
};

export default function ServicesGrid() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section">
      <div className="max-w-container mx-auto container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="What we do"
            title="Five services, one accountable partner"
            description="From the first factory short-list to the delivered container, every step is run by our in-house team in Shanghai."
          />
          <Link to="/services" className="btn-ghost self-start md:self-end">
            All services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const titleId = `svc-${s.slug}-title`;
            const eyebrowId = `svc-${s.slug}-eyebrow`;
            return (
              <Link
                to="/services"
                key={s.slug}
                className="card card-hover overflow-hidden flex flex-col group"
              >
                <div className="aspect-[16/9] overflow-hidden bg-brand-surface">
                  <img
                    alt={s.title}
                    data-strk-img-id={`svc-${s.slug}-img-8a4d2e`}
                    data-strk-img={IMG_FOR_SERVICE[s.slug]}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-brand-surface text-brand-navy">
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span
                      id={eyebrowId}
                      className="text-[11px] font-semibold tracking-[0.16em] uppercase text-brand-slate"
                    >
                      Service
                    </span>
                  </div>
                  <h3
                    id={titleId}
                    className="mt-3 text-lg font-semibold text-brand-ink"
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-slate leading-relaxed flex-1">
                    {s.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-navy group-hover:text-brand-red">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
