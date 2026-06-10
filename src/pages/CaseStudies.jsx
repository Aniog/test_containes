import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck,
  Package,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import PageHeader from "../components/site/PageHeader";
import CtaBanner from "../components/site/CtaBanner";

const cases = [
  {
    id: "smart-home-germany",
    title: "Smart home startup launches new product line in Europe",
    industry: "Consumer Electronics · Germany",
    challenge:
      "A Berlin-based startup needed an ODM partner for a new smart plug line, with CE/FCC compliance and a 10-week launch window — too short for the original supplier's lead time.",
    solution:
      "We sourced two factories in Shenzhen, ran on-site audits, negotiated tooling and aligned the BOM. Once approved, we ran DUPRO and pre-shipment inspections and consolidated weekly air shipments into a single inbound flow.",
    results: [
      { icon: Clock, label: "Lead time cut from 70 to 42 days" },
      { icon: TrendingUp, label: "Unit cost reduced 18% vs. original quote" },
      { icon: ShieldCheck, label: "Zero compliance reworks at customs" },
    ],
    imgId: "case-smart-home-2c1f44",
  },
  {
    id: "kitchenware-usa",
    title: "Kitchenware brand recovers launch after a failed factory audit",
    industry: "Home & Kitchen · USA",
    challenge:
      "A US kitchenware brand had paid a 30% deposit to a supplier that turned out to misrepresent its production capacity. Lead time and quality were both at risk.",
    solution:
      "We ran a fresh on-site audit, switched to a verified factory in Yongkang, recovered tooling and re-ran samples within three weeks. We then implemented a strict DUPRO + PSI inspection plan with documented pass/fail criteria.",
    results: [
      { icon: ShieldCheck, label: "Defect rate dropped from 4.1% to 0.6%" },
      { icon: Clock, label: "Recovered launch — only 9 days late" },
      { icon: TrendingUp, label: "Repeat orders moved fully to new supplier" },
    ],
    imgId: "case-kitchenware-7a3b91",
  },
  {
    id: "outdoor-australia",
    title: "Outdoor importer consolidates 14 SKUs and cuts shipping cost",
    industry: "Outdoor & Sports · Australia",
    challenge:
      "An outdoor goods importer was juggling 5 suppliers across Zhejiang and Guangdong, with frequent partial shipments, inconsistent labels and rising freight cost.",
    solution:
      "We centralized inbound at our Yiwu warehouse, standardized labels and polybags, ran a unified pre-shipment QC and consolidated 14 SKUs into 2 sea containers with combined customs documents.",
    results: [
      { icon: Package, label: "5 suppliers consolidated into 2 containers" },
      { icon: TrendingUp, label: "Shipping cost down 22% vs. previous quarter" },
      { icon: Clock, label: "Inbound delays reduced from weekly to none" },
    ],
    imgId: "case-outdoor-9d2e58",
  },
  {
    id: "beauty-uk",
    title: "Beauty brand sources custom packaging and OEM tools",
    industry: "Beauty & Personal Care · United Kingdom",
    challenge:
      "A UK beauty brand needed coordinated sourcing of OEM beauty tools and custom retail packaging, with strict color and material approvals across multiple SKUs.",
    solution:
      "We split the project across two specialized suppliers and managed proof rounds, Pantone matching and material samples in parallel. A combined PSI was run before consolidation and shipping.",
    results: [
      { icon: ShieldCheck, label: "All Pantone proofs approved on first run" },
      { icon: Clock, label: "Shipped 6 days ahead of retail launch" },
      { icon: TrendingUp, label: "Packaging cost reduced 15% vs. original supplier" },
    ],
    imgId: "case-beauty-4f1c83",
  },
  {
    id: "industrial-canada",
    title: "Industrial buyer replaces a non-compliant supplier mid-project",
    industry: "Industrial Hardware · Canada",
    challenge:
      "A Canadian industrial buyer discovered tolerance and material issues after a third-party batch test. The original supplier denied the problem.",
    solution:
      "We sourced and audited two replacement factories in Ningbo, ran first-article inspections against the buyer's drawings and built a recurring DUPRO plan. The original supplier was phased out.",
    results: [
      { icon: ShieldCheck, label: "First-article approval at 100% spec" },
      { icon: TrendingUp, label: "PPM defect rate reduced from 3,200 to 600" },
      { icon: Package, label: "Switched 3 SKU families to verified suppliers" },
    ],
    imgId: "case-industrial-1b8f27",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Case studies"
        title="Real projects, real numbers, real lessons"
        description="A few recent projects that illustrate how we work. Some details are anonymized at the buyer's request, but the timelines and metrics are real."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={c.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                <div
                  className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}
                >
                  <div className="rounded-xl overflow-hidden border border-line bg-surface-100">
                    <img
                      alt={c.title}
                      className="w-full h-auto block"
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[case-${c.id}-challenge] [case-${c.id}-title]`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-500">
                    {c.industry}
                  </p>
                  <h2
                    id={`case-${c.id}-title`}
                    className="mt-3 text-2xl md:text-3xl font-semibold text-brand-800 tracking-tight"
                  >
                    {c.title}
                  </h2>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                        Challenge
                      </h3>
                      <p
                        id={`case-${c.id}-challenge`}
                        className="mt-2 text-sm text-ink-700 leading-relaxed"
                      >
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                        What we did
                      </h3>
                      <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                      Results
                    </h3>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {c.results.map((r) => {
                        const Icon = r.icon;
                        return (
                          <li
                            key={r.label}
                            className="rounded-md border border-line bg-white p-3 flex items-start gap-2 text-sm text-ink-700"
                          >
                            <Icon className="w-4 h-4 mt-0.5 text-accent-600 shrink-0" />
                            <span>{r.label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-surface-50 py-12 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-ink-700">
            Want a reference call with a similar buyer? We can arrange one once
            we agree on a project scope.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-3 transition w-fit"
          >
            Talk to us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
