import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, MapPin, Quote, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/shared/InquiryForm";
import Seo from "@/components/ui/Seo";
import strkImgConfig from "@/strk-img-config.json";

const CASES = [
  {
    industry: "Consumer Electronics",
    region: "United States",
    image: "case-us-electronics-2a1f",
    title: "Bluetooth speaker for a US e-commerce brand",
    summary:
      "A fast-growing US e-commerce brand came to us after their previous supplier missed two shipping windows in a row. We sourced 3 candidate factories, audited the strongest one, and ran two rounds of in-line inspections before the first 20-foot container left Yantian.",
    challenge:
      "The previous supplier had a habit of switching components late in production. The buyer needed locked specifications and a defensible pre-shipment inspection.",
    approach:
      "We wrote a detailed specification, signed a golden-sample agreement with the factory, and built a 3-stage inspection plan: pre-production, in-line at 30% completion, and pre-shipment.",
    outcome:
      "First container shipped on time, second and third reorders placed within 90 days. Defect rate at pre-shipment inspection was 1.2% — well below the agreed 3% threshold.",
    metrics: [
      { icon: Clock, value: "18 days", label: "Sample to bulk quote" },
      { icon: ShieldCheck, value: "1.2%", label: "Defect rate at pre-shipment" },
      { icon: TrendingUp, value: "3", label: "Reorders in the first 6 months" },
    ],
    quote: {
      text: "We finally have a supplier that picks up the phone and a team in China that flags issues before they become a problem.",
      author: "Operations Director, US e-commerce brand",
    },
  },
  {
    industry: "Apparel & Bags",
    region: "Germany",
    image: "case-de-apparel-7b9e",
    title: "Custom cotton tote bags for a European retailer",
    summary:
      "A German retailer needed three SKUs of custom-printed tote bags consolidated into a single CIF shipment. We coordinated four fabric mills, two printing houses, and one bag factory — and shipped one container to Hamburg with a single set of customs documents.",
    challenge:
      "The retailer had been hit with separate shipments, inconsistent color across batches, and customs paperwork that was repeatedly rejected at Hamburg.",
    approach:
      "We selected one printer as the master for color approval, locked Pantone references against physical samples, and built a single master carton schedule. Export documents were prepared and reviewed twice before booking.",
    outcome:
      "The single 40-foot container arrived in Hamburg on time with a clean customs clearance. The retailer has placed three reorders and moved two additional SKUs to our sourcing.",
    metrics: [
      { icon: TrendingUp, value: "4,800 units", label: "Across 3 SKUs" },
      { icon: Clock, value: "32 days", label: "Order to on-board vessel" },
      { icon: ShieldCheck, value: "0", label: "Customs rejections" },
    ],
    quote: {
      text: "One consolidated shipment, one set of documents, and the colors match the samples. That is what we needed from day one.",
      author: "Sourcing Manager, German retailer",
    },
  },
  {
    industry: "Industrial Tools",
    region: "Australia",
    image: "case-au-tools-3c4f",
    title: "Hand tools for an Australian wholesaler",
    summary:
      "A 5-year sourcing partnership. We currently manage six factories for this wholesaler, consolidate orders monthly, and run 100% pre-shipment inspection on torque-critical items.",
    challenge:
      "The wholesaler had recurring quality issues with hex keys and adjustable wrenches, and their previous agent only sampled one in every ten containers.",
    approach:
      "We agreed on a per-SKU inspection plan with stricter AQL for torque-critical items, and we batch orders across all six factories into a single monthly container to keep freight costs down.",
    outcome:
      "Warranty claims on torque-critical items have dropped by 80% over the partnership. The wholesaler has expanded from hand tools into lighting and PPE under the same arrangement.",
    metrics: [
      { icon: TrendingUp, value: "6 factories", label: "Actively managed" },
      { icon: ShieldCheck, value: "100%", label: "Inspection coverage" },
      { icon: Clock, value: "5 years", label: "Partnership length" },
    ],
    quote: {
      text: "We treat them as an extension of our procurement team. The reporting is honest, even when it is bad news.",
      author: "Procurement Lead, Australian wholesaler",
    },
  },
  {
    industry: "Beauty & Personal Care",
    region: "United Kingdom",
    image: "case-uk-beauty-9d2e",
    title: "Skincare packaging for a UK indie brand",
    summary:
      "A UK indie skincare brand needed airless bottles, droppers, and tubes in small MOQs with full EU compliance documentation. We sourced from three specialized packaging suppliers, consolidated them into a single shipment, and supported their first retail listing.",
    challenge:
      "Standard MOQs for airless packaging are well above the brand's first order quantities, and EU regulations require specific documentation for cosmetic primary packaging.",
    approach:
      "We combined production from three factories into one consolidated pallet, secured lower-than-standard MOQs through a small batch agreement, and compiled the EU compliance file for each component.",
    outcome:
      "The brand launched in 14 UK retailers within the first six months. The same packaging line has been re-ordered four times with growing quantities.",
    metrics: [
      { icon: TrendingUp, value: "5 SKUs", label: "Packaging line" },
      { icon: ShieldCheck, value: "EU compliant", label: "Documentation provided" },
      { icon: Clock, value: "4", label: "Reorders placed" },
    ],
    quote: {
      text: "We could not have hit our retail launch dates without the consolidated packaging. The documentation was clean from day one.",
      author: "Founder, UK skincare brand",
    },
  },
  {
    industry: "Toys & Kids",
    region: "Canada",
    image: "case-ca-toys-5b1c",
    title: "Educational toys for a Canadian distributor",
    summary:
      "A Canadian distributor needed a refreshed educational toy line with EN71, ASTM, and CPSIA compliance. We sourced a new factory, supported mold adjustments, and ran lab testing before mass production.",
    challenge:
      "Compliance with both EU and North American toy standards is non-trivial. The previous factory had failed ASTM on a previous order, which the buyer learned about at the destination port.",
    approach:
      "We selected a factory with an in-house lab and existing EN71 / ASTM experience, ran pre-production sample testing at a third-party lab, and built the compliance file into our standard production checklist.",
    outcome:
      "First production run passed lab testing on the first attempt. The distributor has expanded the program to two additional product lines.",
    metrics: [
      { icon: ShieldCheck, value: "3 standards", label: "EN71 / ASTM / CPSIA" },
      { icon: Clock, value: "45 days", label: "Sample to first shipment" },
      { icon: TrendingUp, value: "3", label: "Active product lines" },
    ],
    quote: {
      text: "The compliance was a real differentiator. We stopped finding out about problems at the destination port.",
      author: "Product Lead, Canadian distributor",
    },
  },
  {
    industry: "Sports & Outdoor",
    region: "Netherlands",
    image: "case-nl-sports-8e3d",
    title: "Camping gear for a Dutch outdoor brand",
    summary:
      "A Dutch outdoor brand needed to qualify a new factory for sleeping bags and camp mats. We ran a sourcing project, audited two candidates, and managed first production with a multi-stage QC plan.",
    challenge:
      "Sleeping bag fill weight and stitching integrity are difficult to verify from a desk in Amsterdam, and the previous agent had not been inspecting fill at all.",
    approach:
      "We wrote a detailed QC checklist including fill weight checks, seam tape inspection, and water resistance testing. Inspections were run at 30% and 100% completion.",
    outcome:
      "The brand's return rate on the first container was 40% lower than the previous supplier. A 12-month contract for two SKUs is now in place.",
    metrics: [
      { icon: TrendingUp, value: "2 SKUs", label: "Sleeping bag and mat" },
      { icon: ShieldCheck, value: "−40%", label: "Returns vs. previous supplier" },
      { icon: Clock, value: "12 months", label: "Ongoing contract" },
    ],
    quote: {
      text: "Real inspection of fill weight and seams, not just a checkbox at the end. It shows up in the returns data.",
      author: "Sourcing Manager, Dutch outdoor brand",
    },
  },
];

export default function CaseStudies() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <>
      <Seo
        title="Case Studies | China Sourcing Success Stories | SSourcing China"
        description="Real examples of how SSourcing China helps overseas buyers source from China, verify factories, run QC, and ship — across electronics, apparel, tools, beauty, toys, and outdoor."
      />

      <PageHero
        eyebrow="Case studies"
        title="How real buyers use SSourcing China"
        description="Six case studies across consumer electronics, apparel, industrial tools, beauty, toys, and outdoor. Each one follows a brief, an approach, and a measurable outcome."
        imageId="cases-hero-img-4a2b7c"
        backgroundId="cases-hero-bg-9c1d3e"
      />

      <Section ref={ref} tone="surface">
        <SectionHeader
          eyebrow="Selected work"
          title="Engagements across six industries and five countries"
          lead="Each case below is a real buyer we have worked with. Names of buyers are kept confidential, but the numbers, the challenges, and the approach are real."
        />
        <div className="mt-12 space-y-12">
          {CASES.map((c, i) => (
            <CaseRow key={c.title} c={c} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="primaryDark">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Your case next
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Could you be our next case study?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Send us your product brief. A senior sourcing specialist will
              reply within one business day with a sourcing plan, indicative
              pricing, and the next concrete step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact#inquiry-form" variant="accent" size="md">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/services" variant="outlineLight" size="md">
                See services
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm variant="dark" />
          </div>
        </div>
      </Section>
    </>
  );
}

function CaseRow({ c, index }) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-surface shadow-card">
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-primary-100 lg:aspect-auto">
          <img
            alt={c.title}
            className="h-full w-full object-cover"
            data-strk-img-id={c.image}
            data-strk-img={`[case-${index}-summary] [case-${index}-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
          />
        </div>
        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted">
            <span className="rounded-full bg-primary-100 px-2.5 py-1 font-semibold text-primary">
              {c.industry}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" /> {c.region}
            </span>
          </div>
          <h3
            id={`case-${index}-title`}
            className="mt-3 text-2xl font-bold tracking-tight text-primary"
          >
            {c.title}
          </h3>
          <p
            id={`case-${index}-summary`}
            className="mt-3 text-base leading-relaxed text-ink"
          >
            {c.summary}
          </p>

          <div className="mt-6 space-y-4">
            <Point label="Challenge" body={c.challenge} />
            <Point label="Approach" body={c.approach} />
            <Point label="Outcome" body={c.outcome} />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-5">
            {c.metrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-center gap-1.5 text-base font-bold text-primary">
                  <m.icon className="h-4 w-4 text-accent" />
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-muted">{m.label}</div>
              </div>
            ))}
          </div>

          <figure className="mt-6 rounded-md border border-line bg-bg p-5">
            <Quote className="h-5 w-5 text-accent" />
            <blockquote className="mt-2 text-sm leading-relaxed text-ink">
              {c.quote.text}
            </blockquote>
            <figcaption className="mt-2 text-xs text-muted">
              — {c.quote.author}
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}

function Point({ label, body }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">
        {label}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
