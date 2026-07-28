import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import {
  ArrowRight,
  MapPin,
  Package,
  TrendingDown,
  ShieldCheck,
  Clock,
} from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

const studies = [
  {
    tag: "Consumer electronics",
    country: "United States",
    title:
      "Helping a US D2C brand move from a trading company to a direct factory",
    challenge:
      "The brand had been buying through a Hong Kong trading company for two years. They suspected they were paying 20–25% more than necessary and had no direct relationship with the actual factory.",
    approach: [
      "Reviewed their current bills of materials to find the real factory",
      "Visited the Shenzhen factory on their behalf and confirmed capability",
      "Negotiated direct terms with the factory, removing the trading company",
    ],
    result: [
      { icon: TrendingDown, label: "Unit cost", value: "−18%" },
      { icon: Clock, label: "Lead time", value: "−3 weeks" },
      { icon: ShieldCheck, label: "QC reports", value: "Every PO" },
    ],
    imageId: "cs-electronics-d824a1",
    imageQuery:
      "[cs-electronics-title] [cs-eyebrow] [cs-title]",
  },
  {
    tag: "Home & kitchen",
    country: "Germany",
    title:
      "Quality program for a European retailer expanding its private label",
    challenge:
      "The retailer's first two private-label shipments had a defect rate above their threshold. Their existing supplier in China was dismissive of the issue, and the team had no on-the-ground support.",
    approach: [
      "Audited two alternative factories with relevant certifications",
      "Designed a three-stage inspection protocol with AQL pass/fail rules",
      "Set up a defect-rate dashboard reported monthly to the buying team",
    ],
    result: [
      { icon: TrendingDown, label: "Defect rate", value: "0.6%" },
      { icon: ShieldCheck, label: "Audits", value: "2 verified" },
      { icon: Clock, label: "On-time ship", value: "98%" },
    ],
    imageId: "cs-home-2b09c3",
    imageQuery:
      "[cs-home-title] [cs-eyebrow] [cs-title]",
  },
  {
    tag: "Industrial parts",
    country: "Australia",
    title:
      "CNC parts consolidation for an Australian equipment manufacturer",
    challenge:
      "The buyer was managing four small CNC workshops in China. Each had its own tooling, its own lead time, and its own invoicing — a tax and logistics headache.",
    approach: [
      "Audited the four workshops and one additional candidate",
      "Consolidated production with the workshop that had the best CMM",
      "Standardized PO and QC documentation across the program",
    ],
    result: [
      { icon: TrendingDown, label: "Suppliers", value: "4 → 1" },
      { icon: ShieldCheck, label: "Tolerances", value: "ISO 2768" },
      { icon: Clock, label: "Admin time", value: "−40%" },
    ],
    imageId: "cs-industrial-9c01a7",
    imageQuery:
      "[cs-industrial-title] [cs-eyebrow] [cs-title]",
  },
  {
    tag: "Beauty & personal care",
    country: "United Kingdom",
    title:
      "Skincare OEM for a UK brand entering Boots and Sephora UK",
    challenge:
      "The brand had a formulation but no factory. They needed a GMP-aware OEM partner who could handle small initial runs and scale later, with proper EU compliance documentation.",
    approach: [
      "Sourced 3 GMP-certified OEM factories and arranged formulation transfers",
      "Coordinated stability testing and PIF documentation for the EU market",
      "Managed the pilot run plus three production runs in year one",
    ],
    result: [
      { icon: TrendingDown, label: "First run", value: "1,500 units" },
      { icon: ShieldCheck, label: "Compliance", value: "EU CPNP" },
      { icon: Clock, label: "Launched in", value: "5 months" },
    ],
    imageId: "cs-beauty-3a2b80",
    imageQuery:
      "[cs-beauty-title] [cs-eyebrow] [cs-title]",
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="bg-brand-900 text-white py-20 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            id="cs-eyebrow"
            className="text-xs font-semibold tracking-[0.18em] uppercase text-accent-500"
          >
            Case studies
          </p>
          <h1
            id="cs-title"
            className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl"
          >
            Real buyer projects, told in concrete numbers.
          </h1>
          <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-3xl">
            Each case below is a project we ran in the last 18 months. Names
            and brands are kept confidential where requested, but the numbers
            are real.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {studies.map((s, idx) => (
            <article
              key={s.title}
              className="bg-white border border-ink-200 rounded-2xl overflow-hidden shadow-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div
                  className={`lg:col-span-5 ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-ink-100">
                    <img
                      alt={s.title}
                      data-strk-img-id={s.imageId}
                      data-strk-img={s.imageQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 p-6 md:p-10 ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-100 text-brand-800 font-medium">
                      <Package className="w-3 h-3" />
                      {s.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-ink-500">
                      <MapPin className="w-3 h-3" />
                      {s.country}
                    </span>
                  </div>
                  <h2
                    id={`cs-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30)}-title`}
                    className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-ink-900 leading-snug"
                  >
                    {s.title}
                  </h2>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                      Challenge
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-ink-700 leading-relaxed">
                      {s.challenge}
                    </p>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                      What we did
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm text-ink-700">
                      {s.approach.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-600 flex-shrink-0" />
                          <span className="leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {s.result.map((r) => {
                      const Icon = r.icon;
                      return (
                        <div
                          key={r.label}
                          className="bg-canvas border border-ink-200 rounded-md p-3"
                        >
                          <Icon className="w-4 h-4 text-brand-800" />
                          <div className="mt-2 text-base font-bold text-ink-900">
                            {r.value}
                          </div>
                          <div className="text-xs text-ink-500">{r.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink-900">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-base md:text-lg text-ink-700 max-w-2xl mx-auto">
              Send a brief and we'll show you what a realistic plan looks like
              — including honest numbers on what we can and can't move.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold px-6 py-3 rounded-md transition shadow-sm"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
