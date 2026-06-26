import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export const caseStudies = [
  {
    id: "eu-kitchen-brand",
    industry: "Home & Kitchen",
    region: "Buyer in Germany",
    title: "Scaling a kitchenware brand to 4 new SKUs in 5 months",
    summary:
      "Sourced four new stainless-steel kitchen tools, validated three factories in Guangdong, and shipped two FCL containers with zero major defects.",
    metrics: [
      { label: "New SKUs launched", value: "4" },
      { label: "Defect rate at PSI", value: "<0.5%" },
      { label: "Lead time", value: "55 days" },
    ],
    keywords: "stainless steel kitchen tools factory China production line",
  },
  {
    id: "us-electronics-startup",
    industry: "Consumer Electronics",
    region: "Buyer in the US",
    title: "From prototype to 5,000-unit production for an IoT device",
    summary:
      "Identified a PCB assembly partner in Shenzhen, managed certification samples, and ran a DUPRO and PSI inspection cycle before air shipment.",
    metrics: [
      { label: "Units shipped", value: "5,000" },
      { label: "Suppliers screened", value: "11" },
      { label: "Certifications", value: "FCC, CE" },
    ],
    keywords: "PCB assembly electronics factory Shenzhen production",
  },
  {
    id: "au-furniture-importer",
    industry: "Furniture",
    region: "Buyer in Australia",
    title: "Consolidated multi-supplier container of hospitality furniture",
    summary:
      "Coordinated three furniture factories in Foshan, ran on-site inspections, and consolidated a 40HQ container with door delivery to Sydney.",
    metrics: [
      { label: "Suppliers consolidated", value: "3" },
      { label: "Container", value: "40HQ" },
      { label: "On-time delivery", value: "Yes" },
    ],
    keywords: "hospitality furniture factory Foshan container loading",
  },
  {
    id: "uk-apparel-brand",
    industry: "Apparel",
    region: "Buyer in the UK",
    title: "Knitwear capsule collection with a new manufacturer",
    summary:
      "Audited three knitwear factories in Zhejiang, managed fabric and size-spec samples, and ran inline plus final inspections at 1.5 AQL.",
    metrics: [
      { label: "Styles produced", value: "8" },
      { label: "Sample rounds", value: "2" },
      { label: "AQL level", value: "1.5" },
    ],
    keywords: "knitwear apparel factory China production sewing line",
  },
  {
    id: "ca-outdoor-brand",
    industry: "Sports & Outdoors",
    region: "Buyer in Canada",
    title: "Outdoor accessories with EN-standard testing",
    summary:
      "Sourced two outdoor accessory categories, coordinated third-party EN testing, and managed staged shipments via sea and express.",
    metrics: [
      { label: "Categories", value: "2" },
      { label: "Lab tests", value: "EN 13537" },
      { label: "Shipments", value: "Sea + Express" },
    ],
    keywords: "outdoor camping gear warehouse pallets ready to export China",
  },
  {
    id: "mx-promo-agency",
    industry: "Promotional",
    region: "Buyer in Mexico",
    title: "Branded merchandise across 12 SKUs for a launch campaign",
    summary:
      "Consolidated 12 promotional SKUs from multiple suppliers in Yiwu, handled custom branding, packaging and a single air shipment.",
    metrics: [
      { label: "SKUs", value: "12" },
      { label: "Suppliers", value: "6" },
      { label: "Mode", value: "Air freight" },
    ],
    keywords: "promotional gifts custom branded merchandise warehouse Yiwu",
  },
];

export default function CaseStudies({ limit, withCta = true }) {
  const containerRef = useRef(null);
  const items = typeof limit === "number" ? caseStudies.slice(0, limit) : caseStudies;

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              Case studies
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink md:text-4xl">
              Real sourcing projects we have delivered
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              A selection of recent projects across consumer goods, electronics
              and industrial categories. Names are anonymized at clients'
              request.
            </p>
          </div>
          {withCta && (
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:underline"
            >
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((c) => (
            <article
              key={c.id}
              className="overflow-hidden rounded-2xl border border-brand-line bg-white transition-shadow hover:shadow-md"
            >
              <img
                alt={c.title}
                className="aspect-[3/2] w-full object-cover"
                data-strk-img-id={`case-${c.id}-img`}
                data-strk-img={`[case-${c.id}-summary] [case-${c.id}-title] ${c.keywords}`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-muted">
                  <span className="rounded-full bg-brand-accent-soft px-2.5 py-1 text-brand-accent">
                    {c.industry}
                  </span>
                  <span>{c.region}</span>
                </div>
                <h3
                  id={`case-${c.id}-title`}
                  className="mt-3 text-lg font-semibold text-brand-ink"
                >
                  {c.title}
                </h3>
                <p
                  id={`case-${c.id}-summary`}
                  className="mt-2 text-sm leading-relaxed text-brand-muted"
                >
                  {c.summary}
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-brand-line pt-4">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[10px] uppercase tracking-wider text-brand-muted">
                        {m.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-brand-ink">
                        {m.value}
                      </dd>
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
}
