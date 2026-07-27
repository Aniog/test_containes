import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader.jsx";

const CASES = [
  {
    tag: "Home textiles",
    country: "United States",
    title: "Helping a US importer switch from a trading company to a real mill",
    summary:
      "Cut unit cost by 18% and reduced defect rate from 6% to 1.4% on a 4-container bedding order.",
    metric: "−18% unit cost",
  },
  {
    tag: "Consumer electronics",
    country: "Germany",
    title: "CE-compliance audit and pre-shipment QC for a Bluetooth audio line",
    summary:
      "Found a label and a battery cell issue before shipment, avoided a 40-day customs hold.",
    metric: "0 customs holds",
  },
  {
    tag: "Outdoor goods",
    country: "Australia",
    title: "Small-batch production for a new camping brand",
    summary:
      "Coordinated 3 sample rounds, 2 factory changes, and a 12-pallet pilot order to validate demand.",
    metric: "12 pallets · 3 sample rounds",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="bg-white">
      <div className="container-x py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Case studies"
            title="How buyers use SSourcing China in the real world"
            description="A look at three recent projects — what the buyer needed, what we did, and what changed in the numbers."
          />
          <Link to="/case-studies" className="btn-ghost self-start md:self-end">
            All case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="card card-hover flex flex-col h-full"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-brand-surface px-2.5 py-1 text-xs font-semibold text-brand-primary">
                  {c.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-brand-muted">
                  <MapPin className="h-3.5 w-3.5" /> {c.country}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{c.summary}</p>
              <div className="mt-5 pt-4 border-t border-brand-line flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  Outcome
                </span>
                <span className="text-sm font-semibold text-brand-primary">{c.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
