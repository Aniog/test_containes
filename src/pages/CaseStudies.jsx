import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "../components/shared/PageHeader";
import CTASection from "../components/shared/CTASection";
import { Quote } from "lucide-react";

const cases = [
  {
    id: "outdoor-furniture-eu",
    category: "Outdoor Furniture",
    region: "European retailer",
    headline: "Replaced an unreliable factory and stabilised a 6-container annual program",
    challenge: "Two seasons of late shipments, inconsistent welding quality and packaging damage led to 18% returns and missed retail launch windows.",
    approach: "We audited three candidate factories, selected one with stronger metal QC, redesigned export packaging and put AQL inspections on every container.",
    outcome: "Shipments now leave on schedule with stable QC pass rates. The buyer expanded the program by two SKUs the following season.",
    metrics: [
      { label: "Order volume", value: "6 x 40HQ / year" },
      { label: "On-time shipment", value: "92% → 100%" },
      { label: "QC pass rate", value: "Stable above 98%" },
    ],
    imgId: "case-page-outdoor-furniture-3a91dc",
  },
  {
    id: "kitchen-appliance-us",
    category: "Kitchen Appliance",
    region: "Amazon brand, USA",
    headline: "Launched a private-label air fryer with full compliance documents",
    challenge: "A new Amazon brand needed a factory able to deliver an ETL-certified appliance with custom packaging, on a tight launch budget.",
    approach: "We shortlisted three OEMs with prior US export experience, managed the ETL test process, validated packaging artwork and prepared FBA-ready cartons.",
    outcome: "First PO shipped in 9 weeks. The product launched on time and the brand placed a 2x reorder within 90 days.",
    metrics: [
      { label: "Time to first PO", value: "9 weeks" },
      { label: "Cost vs. trading co.", value: "−17%" },
      { label: "Defect rate", value: "Under 0.6%" },
    ],
    imgId: "case-page-kitchen-appliance-2cb13a",
  },
  {
    id: "apparel-australia",
    category: "Apparel",
    region: "DTC brand, Australia",
    headline: "Consolidated three suppliers into one factory with stronger QC",
    challenge: "A growing knitwear DTC brand was juggling three suppliers with different quality levels and lead times, hurting reorder speed.",
    approach: "We unified production with a single mid-sized factory in Zhejiang, set up per-style sample approval and added in-line QC for sewing and labeling.",
    outcome: "Reorder lead time dropped from 60 to 35 days, and customer returns due to defects decreased by 41% over two seasons.",
    metrics: [
      { label: "Suppliers managed", value: "3 → 1" },
      { label: "Reorder lead time", value: "60 → 35 days" },
      { label: "Defect returns", value: "−41%" },
    ],
    imgId: "case-page-apparel-au-44dde0",
  },
  {
    id: "toys-uk",
    category: "Toys & Baby",
    region: "Specialty retailer, UK",
    headline: "Brought a wooden toy line to market with EN71 compliance",
    challenge: "A specialty retailer wanted a UK-compliant wooden toy line but had been quoted high MOQs by certified factories.",
    approach: "We negotiated lower MOQs in exchange for a 12-month commitment, managed EN71 testing and oversaw paint and finish QC.",
    outcome: "Six SKUs launched in time for the Q4 retail season with full EN71 documentation and zero compliance issues at customs.",
    metrics: [
      { label: "SKUs launched", value: "6" },
      { label: "MOQ reduction", value: "−45%" },
      { label: "Compliance issues", value: "0" },
    ],
    imgId: "case-page-toys-uk-12acb9",
  },
];

const testimonials = [
  {
    quote: "Working with SSourcing China felt like having an in-house procurement team in Asia. The inspection reports alone saved us from two bad shipments.",
    name: "Procurement Manager",
    role: "Home goods retailer, Germany",
  },
  {
    quote: "Clear communication, realistic timelines and no hidden margins. They told us when a supplier could not deliver, instead of taking the order anyway.",
    name: "Founder",
    role: "Amazon private-label brand, USA",
  },
];

const CaseStudiesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Case Studies"
        title="Real sourcing engagements with measurable outcomes"
        description="Buyer names are confidential, but the numbers and methods are real. Ask us for the full version of any case study on a call."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-12 md:space-y-16">
            {cases.map((c, idx) => (
              <article
                key={c.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  idx % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
                }`}
              >
                <div className="rounded-xl overflow-hidden border border-[#D9E2EC] aspect-[4/3] bg-[#EEF2F7]">
                  <img
                    alt={c.headline}
                    className="w-full h-full object-cover"
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[case-page-${c.id}-headline] [case-page-${c.id}-category]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      id={`case-page-${c.id}-category`}
                      className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#1F4E79]/10 text-[#1F4E79] font-semibold"
                    >
                      {c.category}
                    </span>
                    <span className="text-[#64748B]">{c.region}</span>
                  </div>
                  <h2
                    id={`case-page-${c.id}-headline`}
                    className="mt-3 text-2xl md:text-3xl font-bold text-[#0B2545] tracking-tight"
                  >
                    {c.headline}
                  </h2>

                  <dl className="mt-5 space-y-3 text-sm text-[#475569]">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-[#1F4E79]">Challenge</dt>
                      <dd className="mt-1 leading-relaxed">{c.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-[#1F4E79]">Approach</dt>
                      <dd className="mt-1 leading-relaxed">{c.approach}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-[#1F4E79]">Outcome</dt>
                      <dd className="mt-1 leading-relaxed">{c.outcome}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-[#D9E2EC]">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-[11px] text-[#64748B] uppercase tracking-wide">{m.label}</p>
                        <p className="mt-1 text-base font-semibold text-[#0B2545]">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1F4E79] mb-3">
              In Their Words
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] tracking-tight">
              What buyers say after working with us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name + t.role} className="rounded-xl bg-white border border-[#D9E2EC] p-6 md:p-8">
                <Quote className="w-6 h-6 text-[#1F4E79]/40" />
                <p className="mt-3 text-[#0B2545] text-base md:text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-[#0B2545]">{t.name}</p>
                <p className="text-sm text-[#64748B]">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Could your project be the next case study?"
        description="We work with brands, retailers, distributors and Amazon sellers from a wide range of countries. Tell us about your sourcing need."
      />
    </div>
  );
};

export default CaseStudiesPage;
