import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/site/SectionHeader";

export const CASE_STUDIES = [
  {
    id: "kitchenware-us",
    industry: "Home &amp; Kitchen",
    region: "United States",
    title: "Sourcing private-label cookware for a US retail brand",
    summary:
      "We replaced an unverified trading company with a vetted factory in Guangdong, cut unit cost by 14%, and delivered consistent AQL pass rates across three production runs.",
    metrics: [
      { k: "Unit cost", v: "−14%" },
      { k: "On-time", v: "100%" },
      { k: "Defect rate", v: "0.6%" },
    ],
  },
  {
    id: "electronics-de",
    industry: "Consumer Electronics",
    region: "Germany",
    title: "OEM Bluetooth speakers with full CE compliance",
    summary:
      "We managed three rounds of sampling, certification testing, and packaging artwork. Final shipment cleared EU customs without delays.",
    metrics: [
      { k: "Lead time", v: "55 days" },
      { k: "Containers", v: "2 × 40HQ" },
      { k: "Returns", v: "<0.5%" },
    ],
  },
  {
    id: "promotional-au",
    industry: "Promotional Gifts",
    region: "Australia",
    title: "10,000-unit promotional drinkware in 30 days",
    summary:
      "Tight deadline for an event campaign. We split production across two factories, ran in-line QC, and air-shipped to meet the launch date.",
    metrics: [
      { k: "Units", v: "10,000" },
      { k: "Lead time", v: "30 days" },
      { k: "AQL", v: "Pass" },
    ],
  },
];

const HomeCaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real projects, real results"
          description="Selected examples of how we've helped overseas buyers source and import from China — across categories, volumes, and timelines."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((c) => (
            <article
              key={c.id}
              className="rounded-xl overflow-hidden border border-border-soft bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                <img
                  alt={c.title}
                  data-strk-img-id={`home-case-${c.id}-img-d4f8a2`}
                  data-strk-img={`[home-case-${c.id}-title] [home-case-${c.id}-industry] china manufacturing`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span
                    id={`home-case-${c.id}-industry`}
                    className="font-semibold text-accent uppercase tracking-wider"
                    dangerouslySetInnerHTML={{ __html: c.industry }}
                  />
                  <span aria-hidden>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {c.region}
                  </span>
                </div>
                <h3
                  id={`home-case-${c.id}-title`}
                  className="mt-3 text-lg font-semibold text-brand leading-snug"
                >
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {c.summary}
                </p>

                <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-border-soft pt-4">
                  {c.metrics.map((m) => (
                    <div key={m.k}>
                      <dt className="text-[11px] uppercase tracking-wider text-muted">{m.k}</dt>
                      <dd className="text-sm font-bold text-brand">{m.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-accent font-semibold hover:text-accent-600"
          >
            See more case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCaseStudies;
