import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";

const CASES = [
  {
    id: "kitchenware-us",
    industry: "Home &amp; Kitchen",
    region: "United States",
    title: "Sourcing private-label cookware for a US retail brand",
    challenge:
      "The buyer was working with a Hong Kong trading company and saw quality drift across two production runs. They needed a verified factory and tighter QC.",
    approach:
      "We shortlisted three cookware factories in Guangdong, ran an on-site audit, ran new samples against the buyer's golden sample, and put a pre-shipment AQL inspection into the contract.",
    outcome:
      "Unit cost reduced by 14%, defect rate dropped to 0.6%, and the buyer placed three repeat orders within nine months.",
    metrics: [
      { k: "Unit cost", v: "−14%" },
      { k: "Defect rate", v: "0.6%" },
      { k: "Repeat orders", v: "3 in 9 mo" },
    ],
  },
  {
    id: "electronics-de",
    industry: "Consumer Electronics",
    region: "Germany",
    title: "OEM Bluetooth speakers with full CE compliance",
    challenge:
      "An EU brand needed an OEM partner with proven CE / RoHS compliance and the ability to handle custom packaging and artwork.",
    approach:
      "We sourced two Shenzhen factories with EU-compliant track record, managed three sample rounds, coordinated certification testing, and consolidated artwork production.",
    outcome:
      "First batch cleared EU customs without delays. The buyer scaled to two 40HQ containers per quarter.",
    metrics: [
      { k: "Lead time", v: "55 days" },
      { k: "Containers", v: "2 × 40HQ / qtr" },
      { k: "Returns", v: "<0.5%" },
    ],
  },
  {
    id: "promotional-au",
    industry: "Promotional Gifts",
    region: "Australia",
    title: "10,000-unit promotional drinkware in 30 days",
    challenge:
      "A marketing agency needed branded drinkware for an event launch in 30 days — half the normal lead time.",
    approach:
      "We split production across two pre-vetted factories, ran in-line QC at day 12, consolidated finished goods, and switched part of the order to air freight to meet the deadline.",
    outcome:
      "Full quantity delivered on time, AQL pass on inspection, and the agency now uses us as their default China partner.",
    metrics: [
      { k: "Units", v: "10,000" },
      { k: "Lead time", v: "30 days" },
      { k: "AQL", v: "Pass" },
    ],
  },
  {
    id: "furniture-uk",
    industry: "Furniture &amp; Decor",
    region: "United Kingdom",
    title: "Flat-pack furniture range with optimized container loading",
    challenge:
      "A UK e-commerce brand was paying too much per unit landed because of inefficient packaging and partial container loads.",
    approach:
      "We re-engineered packaging with the factory, ran loading tests, consolidated four SKUs per container, and switched to DDP shipping for predictable landed cost.",
    outcome:
      "Landed cost per unit dropped 11% and damage-in-transit dropped to under 1%.",
    metrics: [
      { k: "Landed cost", v: "−11%" },
      { k: "Damage rate", v: "<1%" },
      { k: "SKUs / container", v: "4" },
    ],
  },
  {
    id: "apparel-mx",
    industry: "Apparel &amp; Textiles",
    region: "Mexico",
    title: "Workwear program for a Mexican distributor",
    challenge:
      "The distributor needed consistent quality across a 12-SKU workwear catalogue with private-label tags and packaging.",
    approach:
      "We selected one apparel factory in Zhejiang capable of handling all 12 SKUs, defined size-spec tolerances, and ran in-line and final inspections each run.",
    outcome:
      "Three production cycles completed with consistent sizing and zero major customer complaints.",
    metrics: [
      { k: "SKUs", v: "12" },
      { k: "Cycles", v: "3" },
      { k: "Major claims", v: "0" },
    ],
  },
  {
    id: "industrial-ae",
    industry: "Industrial Hardware",
    region: "United Arab Emirates",
    title: "Replacing an unreliable supplier for a hardware distributor",
    challenge:
      "A UAE distributor had a long-running supplier that had become slow and inconsistent on delivery.",
    approach:
      "We benchmarked five new factories on price, capacity, and certifications, ran a parallel pilot order, and migrated the full SKU list once the pilot passed AQL.",
    outcome:
      "Delivery reliability improved from 72% to 98% on-time, with comparable pricing.",
    metrics: [
      { k: "On-time", v: "98%" },
      { k: "Suppliers tested", v: "5" },
      { k: "Migration", v: "Full SKU list" },
    ],
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case Studies"
        title="Selected sourcing projects"
        description="Real examples of how we've helped overseas buyers source and import from China — across categories, volumes, and geographies."
      />

      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {CASES.map((c) => (
              <article
                key={c.id}
                className="bg-white rounded-xl overflow-hidden border border-border-soft shadow-sm flex flex-col"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    alt={c.title}
                    data-strk-img-id={`case-${c.id}-img-72bc1d`}
                    data-strk-img={`[case-${c.id}-title] [case-${c.id}-industry] china manufacturing factory`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span
                      id={`case-${c.id}-industry`}
                      className="font-semibold text-accent uppercase tracking-wider"
                      dangerouslySetInnerHTML={{ __html: c.industry }}
                    />
                    <span aria-hidden>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {c.region}
                    </span>
                  </div>
                  <h2
                    id={`case-${c.id}-title`}
                    className="mt-3 text-xl md:text-2xl font-semibold text-brand leading-snug"
                  >
                    {c.title}
                  </h2>

                  <div className="mt-5 space-y-4 text-sm md:text-base text-slate-700">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-semibold">Challenge</p>
                      <p className="mt-1 text-slate-600 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-semibold">Approach</p>
                      <p className="mt-1 text-slate-600 leading-relaxed">{c.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted font-semibold">Outcome</p>
                      <p className="mt-1 text-slate-600 leading-relaxed">{c.outcome}</p>
                    </div>
                  </div>

                  <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-border-soft pt-4">
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
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default CaseStudies;
