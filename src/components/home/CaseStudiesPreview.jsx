import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, MapPin, Package } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import strkImgConfig from "@/strk-img-config.json";

const studies = [
  {
    tag: "Consumer electronics",
    country: "United States",
    title: "Helping a US D2C brand move from a trading company to a direct factory",
    summary:
      "Replaced two intermediaries with one audited factory in Shenzhen. Same product, lower unit cost, and a 3-week shorter lead time on the second PO.",
    metric: "−18% unit cost",
    imgId: "case-electronics-c8217a",
    imgQuery: "[case-electronics-title] [home-cases-eyebrow] [home-cases-title]",
  },
  {
    tag: "Home & kitchen",
    country: "Germany",
    title: "Quality program for a European retailer expanding its private label",
    summary:
      "Set up a three-stage inspection protocol and a defect-rate dashboard. Brought the per-shipment defect rate below the retailer's threshold within two orders.",
    metric: "0.6% defect rate",
    imgId: "case-home-5b08de",
    imgQuery: "[case-home-title] [home-cases-eyebrow] [home-cases-title]",
  },
  {
    tag: "Industrial parts",
    country: "Australia",
    title: "CNC parts consolidation for an Australian equipment manufacturer",
    summary:
      "Consolidated four small workshops into one qualified supplier with an on-site CMM. Same tolerances, fewer POs to manage, simpler invoicing.",
    metric: "4 → 1 supplier",
    imgId: "case-industrial-2f49a3",
    imgQuery: "[case-industrial-title] [home-cases-eyebrow] [home-cases-title]",
  },
];

export default function CaseStudiesPreview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title={<span id="home-cases-title">Recent buyer projects</span>}
          description="A few examples of how we work with importers, retailers, and brand owners. Numbers and names are shared with the buyer's permission."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studies.map((s) => (
            <article
              key={s.title}
              className="bg-card border border-ink-200 rounded-lg overflow-hidden shadow-card hover:shadow-cardHover transition flex flex-col"
            >
              <div className="aspect-[16/10] bg-ink-100 overflow-hidden">
                <img
                  alt={s.title}
                  data-strk-img-id={s.imgId}
                  data-strk-img={s.imgQuery}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-100 text-brand-800 font-medium">
                    <Package className="w-3 h-3" />
                    {s.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-ink-500">
                    <MapPin className="w-3 h-3" />
                    {s.country}
                  </span>
                </div>
                <h3
                  id={`case-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30)}-title`}
                  className="mt-3 text-lg font-semibold text-ink-900 leading-snug"
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                  {s.summary}
                </p>
                <div className="mt-4 pt-4 border-t border-ink-200 flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent-600">
                    {s.metric}
                  </span>
                  <Link
                    to="/case-studies"
                    className="text-sm font-semibold text-brand-800 hover:text-brand-700 inline-flex items-center gap-1"
                  >
                    Read more
                    <ArrowRight className="w-3.5 h-3.5" />
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
