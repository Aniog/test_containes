import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, MapPin } from "lucide-react";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import strkImgConfig from "@/strk-img-config.json";

const CASES = [
  {
    industry: "Consumer Electronics",
    region: "United States",
    image: "case-electronics-1f0a2c",
    titleId: "case-electronics-title",
    descId: "case-electronics-desc",
    title: "Bluetooth speaker for a US e-commerce brand",
    summary:
      "Replaced a previous supplier that missed two shipping windows. We sourced 3 factories, audited the top one, and ran two inspection rounds before the first 20-foot container left Yantian.",
    metrics: [
      { value: "18 days", label: "Sample to bulk quote" },
      { value: "1.2%", label: "Defect rate at pre-shipment" },
    ],
  },
  {
    industry: "Apparel & Bags",
    region: "Germany",
    image: "case-apparel-7b91de",
    titleId: "case-apparel-title",
    descId: "case-apparel-desc",
    title: "Custom cotton tote bags for a European retailer",
    summary:
      "Coordinated 4 fabric mills, 2 printing houses, and one bag factory. Consolidated 3 SKUs into a single 40-foot container shipped CIF Hamburg with full customs paperwork.",
    metrics: [
      { value: "4,800 units", label: "Across 3 SKUs" },
      { value: "32 days", label: "Order to on-board vessel" },
    ],
  },
  {
    industry: "Industrial Tools",
    region: "Australia",
    image: "case-tools-3c4e9f",
    titleId: "case-tools-title",
    descId: "case-tools-desc",
    title: "Hand tools for an Australian wholesaler",
    summary:
      "A 5-year sourcing partnership. We manage 6 factories, consolidate orders monthly, and run 100% pre-shipment inspections on torque-critical items.",
    metrics: [
      { value: "6 factories", label: "Actively managed" },
      { value: "100%", label: "Inspection coverage" },
    ],
  },
];

export default function CaseStudies() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <Section ref={ref} tone="default" id="case-studies">
      <div className="grid items-end gap-8 md:flex md:justify-between">
        <SectionHeader
          eyebrow="Case studies"
          title="How real buyers use SSourcing China"
          lead="Three short examples across electronics, soft goods, and industrial tools. Full case write-ups are available on the case studies page."
        />
        <Button to="/case-studies" variant="secondary" size="md" className="hidden md:inline-flex">
          All case studies
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CASES.map((c) => (
          <article
            key={c.title}
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-primary-100">
              <img
                alt={c.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                data-strk-img-id={c.image}
                data-strk-img={`[${c.descId}] [${c.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted">
                <span className="rounded-full bg-primary-100 px-2.5 py-1 font-semibold text-primary">
                  {c.industry}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {c.region}
                </span>
              </div>
              <h3
                id={c.titleId}
                className="mt-3 text-lg font-semibold leading-snug text-primary"
              >
                {c.title}
              </h3>
              <p
                id={c.descId}
                className="mt-2 text-sm leading-relaxed text-muted"
              >
                {c.summary}
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="text-base font-bold text-primary">
                      {m.value}
                    </dt>
                    <dd className="mt-0.5 text-xs text-muted">{m.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 md:hidden">
        <Button to="/case-studies" variant="secondary" size="md">
          All case studies
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
