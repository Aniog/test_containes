import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { TRUST_POINTS } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

export default function TrustPoints() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section">
      <div className="max-w-container mx-auto container-px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why overseas buyers choose us"
              title="A sourcing partner, not a trading company"
              description="Six things we do deliberately, because they are the difference between a clean shipment and a costly mistake."
            />
            <div className="mt-6 rounded-lg overflow-hidden border border-brand-border">
              <img
                alt="Shanghai office and warehouse"
                data-strk-img-id="trust-office-img-2a91be"
                data-strk-img="[trust-eyebrow] [trust-title] [trust-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-brand-slate">
              Our office and 1,800 m² consolidation warehouse in the Hongqiao
              trade area, Shanghai.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TRUST_POINTS.map((t) => (
                <div
                  key={t.title}
                  className="card p-5"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-brand-surface text-brand-navy">
                    <Icon name={t.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-brand-ink">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* hidden references for image query */}
        <span id="trust-eyebrow" className="sr-only">Why overseas buyers choose us</span>
        <span id="trust-title" className="sr-only">A sourcing partner, not a trading company</span>
        <span id="trust-desc" className="sr-only">Office, warehouse, audit, AQL inspections, transparent costs, NDAs.</span>
      </div>
    </section>
  );
}
