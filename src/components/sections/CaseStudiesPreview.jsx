import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "./SectionHeader";

export const CASE_STUDIES = [
  {
    id: "kitchenware-brand-eu",
    titleId: "case-kitchenware-brand-eu-title",
    descId: "case-kitchenware-brand-eu-desc",
    industry: "Home & Kitchen",
    region: "European DTC brand",
    title: "Replacing 3 unreliable suppliers with one verified factory",
    summary:
      "A European cookware brand had defect rates above 6% and frequent shipment delays. We audited 12 factories, shortlisted 4, and consolidated production with one verified supplier.",
    metrics: [
      { k: "−72%", v: "defect rate" },
      { k: "−18 days", v: "lead time" },
      { k: "+9%", v: "gross margin" },
    ],
    quote:
      "We finally feel in control of our supply chain. The weekly QC updates alone are worth it.",
    quoteRole: "Head of Operations, EU cookware brand",
  },
  {
    id: "electronics-startup-us",
    titleId: "case-electronics-startup-us-title",
    descId: "case-electronics-startup-us-desc",
    industry: "Consumer Electronics",
    region: "US Amazon seller",
    title: "Launching a new Bluetooth speaker on Amazon US",
    summary:
      "A first-time hardware founder needed FCC-ready components and Amazon FBA-prep. We sourced PCB and enclosure suppliers, ran two rounds of samples, and shipped DDP to FBA.",
    metrics: [
      { k: "11 weeks", v: "concept to FBA" },
      { k: "0.3%", v: "return rate" },
      { k: "4.6★", v: "Amazon rating" },
    ],
    quote:
      "Without their inspections we would have shipped 5,000 units of the first sample — which had a buzzing speaker. They caught it.",
    quoteRole: "Founder, US electronics startup",
  },
  {
    id: "apparel-private-label",
    titleId: "case-apparel-private-label-title",
    descId: "case-apparel-private-label-desc",
    industry: "Apparel & Textiles",
    region: "UK private-label brand",
    title: "Scaling a streetwear brand from 500 to 8,000 units per drop",
    summary:
      "A UK streetwear label was outgrowing its previous supplier. We brought in a knitwear factory with vertical dyeing capacity, established a golden-sample library, and set up monthly QC.",
    metrics: [
      { k: "16×", v: "order volume" },
      { k: "−21%", v: "FOB cost" },
      { k: "100%", v: "on-time drops" },
    ],
    quote:
      "Their QC reports are the cleanest documentation I've ever received from a sourcing partner.",
    quoteRole: "Co-founder, UK streetwear brand",
  },
];

export default function CaseStudiesPreview({ items = CASE_STUDIES, withCTA = true }) {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real buyers, real outcomes"
          description="A few representative projects from the last 24 months. Names omitted out of respect for client NDAs."
        />

        <div className="mt-12 grid gap-6 md:gap-8 lg:grid-cols-3">
          {items.map((c) => (
            <article
              key={c.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-surface border border-line shadow-sm"
            >
              <div className="aspect-[16/9] bg-bg overflow-hidden">
                <img
                  alt={c.title}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`case-${c.id}-img`}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider">
                  <span className="rounded-md bg-brand/5 text-brand px-2 py-1">{c.industry}</span>
                  <span className="text-muted">{c.region}</span>
                </div>
                <h3
                  id={c.titleId}
                  className="mt-4 text-lg font-semibold text-ink leading-snug"
                >
                  {c.title}
                </h3>
                <p
                  id={c.descId}
                  className="mt-2 text-sm leading-relaxed text-muted"
                >
                  {c.summary}
                </p>

                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
                  {c.metrics.map((m) => (
                    <div key={m.v}>
                      <dt className="text-base font-semibold text-brand">{m.k}</dt>
                      <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-muted">
                        {m.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <figure className="mt-5 rounded-xl bg-bg p-4">
                  <Quote className="h-4 w-4 text-accent" />
                  <blockquote className="mt-2 text-sm leading-relaxed text-ink">
                    “{c.quote}”
                  </blockquote>
                  <figcaption className="mt-2 text-[11px] uppercase tracking-wider text-muted">
                    {c.quoteRole}
                  </figcaption>
                </figure>
              </div>
            </article>
          ))}
        </div>

        {withCTA && (
          <div className="mt-12 flex justify-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-brand border border-line px-6 py-3 text-sm font-semibold hover:border-brand hover:text-brand-700 transition"
            >
              See all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
