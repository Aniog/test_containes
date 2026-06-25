import PageHeader from "@/components/sections/PageHeader";
import CaseStudiesPreview, { CASE_STUDIES } from "@/components/sections/CaseStudiesPreview";
import CTABanner from "@/components/sections/CTABanner";

// Extra cases for the dedicated page
const EXTRA_CASES = [
  {
    id: "outdoor-gear-au",
    titleId: "case-outdoor-gear-au-title",
    descId: "case-outdoor-gear-au-desc",
    industry: "Outdoor & Sports",
    region: "Australian retailer",
    title: "Switching to a vertically integrated outdoor gear factory",
    summary:
      "An Australian outdoor retailer was juggling 6 suppliers across 3 cities. We consolidated production at a vertically integrated factory, with one combined shipment per month.",
    metrics: [
      { k: "−45%", v: "logistics cost" },
      { k: "−6 days", v: "lead time" },
      { k: "1", v: "supplier instead of 6" },
    ],
    quote:
      "What used to be 6 emails and 6 invoices is now one. The numbers just work better.",
    quoteRole: "Buying Manager, Australian retailer",
  },
  {
    id: "furniture-hospitality-us",
    titleId: "case-furniture-hospitality-us-title",
    descId: "case-furniture-hospitality-us-desc",
    industry: "Furniture",
    region: "US hospitality group",
    title: "Custom hospitality furniture for a 220-room hotel project",
    summary:
      "A US hospitality group needed contract-grade case goods and seating, on a 14-week build schedule, with strict fire-retardancy compliance. We managed factory selection, sampling and three rounds of QC.",
    metrics: [
      { k: "14 wks", v: "ex-works delivery" },
      { k: "100%", v: "fire-rating pass" },
      { k: "12%", v: "below benchmark cost" },
    ],
    quote:
      "Sourcing contract furniture from China usually feels risky. This one didn't.",
    quoteRole: "Procurement Director, US hospitality group",
  },
  {
    id: "beauty-private-label-eu",
    titleId: "case-beauty-private-label-eu-title",
    descId: "case-beauty-private-label-eu-desc",
    industry: "Beauty & Personal Care",
    region: "EU private-label brand",
    title: "Custom packaging and applicators for a clean beauty launch",
    summary:
      "A clean-beauty brand needed FSC-certified packaging and bamboo applicators, with a soft EU launch in 16 weeks. We coordinated 3 vendors and one consolidated shipment to Rotterdam.",
    metrics: [
      { k: "3", v: "vendors consolidated" },
      { k: "FSC", v: "fully certified" },
      { k: "+22%", v: "launch margin" },
    ],
    quote:
      "Their consolidation saved us a Customs nightmare. We arrived on shelves on time.",
    quoteRole: "Founder, EU clean beauty brand",
  },
];

export default function CaseStudies() {
  const allCases = [...CASE_STUDIES, ...EXTRA_CASES];

  return (
    <div>
      <PageHeader
        eyebrow="Case Studies"
        title="Sourcing projects we're proud of"
        description="Representative B2B sourcing projects from the last two years. Names omitted to respect NDAs — happy to share references on request."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Case Studies" }]}
      />

      <CaseStudiesPreview items={allCases} withCTA={false} />

      <CTABanner
        title="Want a similar outcome for your product?"
        description="Send us your specs. We'll tell you what's realistic — and what to watch out for."
      />
    </div>
  );
}
