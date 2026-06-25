import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const cases = [
  {
    id: "outdoor-furniture-eu",
    category: "Outdoor Furniture",
    region: "European retailer",
    headline: "Replaced an unreliable factory and stabilised a 6-container annual program",
    summary:
      "After two seasons of late shipments and inconsistent quality, we audited three new factories, re-tooled packaging and now run AQL inspections on every container.",
    metrics: [
      { label: "Order volume", value: "6 x 40HQ / year" },
      { label: "On-time shipment", value: "92% → 100%" },
      { label: "QC pass rate", value: "Stable above 98%" },
    ],
    imgId: "case-home-outdoor-furniture-2c8c1f",
  },
  {
    id: "kitchen-appliance-us",
    category: "Kitchen Appliance",
    region: "Amazon brand, USA",
    headline: "Launched a private-label air fryer with full compliance documents",
    summary:
      "We sourced an OEM factory with prior US export experience, managed ETL certification, and prepared FBA-ready cartons with the brand's labeling.",
    metrics: [
      { label: "Time to first PO", value: "9 weeks" },
      { label: "Cost vs. trading co.", value: "−17%" },
      { label: "Defect rate (post-launch)", value: "Under 0.6%" },
    ],
    imgId: "case-home-kitchen-appliance-9f3aa2",
  },
  {
    id: "apparel-australia",
    category: "Apparel",
    region: "DTC brand, Australia",
    headline: "Consolidated three suppliers into one factory with stronger QC",
    summary:
      "We unified knitwear production with a single mid-sized factory in Zhejiang, set up sample approval gates and inspection protocols per style.",
    metrics: [
      { label: "Suppliers managed", value: "3 → 1" },
      { label: "Reorder lead time", value: "60 → 35 days" },
      { label: "Returns due to defects", value: "Down by 41%" },
    ],
    imgId: "case-home-apparel-au-7b22a5",
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-[#EEF2F7]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p
              id="case-home-eyebrow"
              className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79] mb-3"
            >
              Case Studies
            </p>
            <h2
              id="case-home-title"
              className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight"
            >
              Examples of what we deliver for global buyers
            </h2>
            <p className="mt-4 text-[#475569] text-base md:text-lg">
              Real engagements from recent years. Buyer names are kept
              confidential by request, but we are happy to walk you through
              the details on a call.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F4E79] hover:text-[#C8102E] self-start md:self-auto"
          >
            See all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article
              key={c.id}
              className="flex flex-col rounded-xl overflow-hidden bg-white border border-[#D9E2EC] hover:shadow-md transition-shadow"
            >
              <div className="aspect-[3/2] bg-[#EEF2F7]">
                <img
                  alt={c.headline}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[case-home-${c.id}-summary] [case-home-${c.id}-headline] [case-home-${c.id}-category]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs">
                  <span
                    id={`case-home-${c.id}-category`}
                    className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#1F4E79]/10 text-[#1F4E79] font-semibold"
                  >
                    {c.category}
                  </span>
                  <span className="text-[#64748B]">{c.region}</span>
                </div>
                <h3
                  id={`case-home-${c.id}-headline`}
                  className="mt-3 text-lg font-semibold text-[#0B2545] leading-snug"
                >
                  {c.headline}
                </h3>
                <p
                  id={`case-home-${c.id}-summary`}
                  className="mt-2 text-sm text-[#475569] leading-relaxed"
                >
                  {c.summary}
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-3 pt-4 border-t border-[#D9E2EC]">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] text-[#64748B] uppercase tracking-wide">{m.label}</dt>
                      <dd className="mt-1 text-sm font-semibold text-[#0B2545]">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
