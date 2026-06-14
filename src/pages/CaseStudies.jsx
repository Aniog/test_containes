import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useStrkImages } from "@/components/layout/useStrkImages";
import SectionHeader from "@/components/sections/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import { CASE_STUDIES } from "@/data/content";

const FULL_CASES = {
  "us-kitchenware-importer": {
    problem:
      "The importer's existing supplier was a Yiwu-based trading company. Defect rates on stainless steel cookware were 7.2%, and shipments missed three out of four retail windows. They had no visibility into which factory was actually producing the line.",
    approach: [
      "Reviewed their defect log and identified three recurring issues: weld finish, handle rivets, and packaging denting.",
      "Re-qualified two audited factories in Zhejiang with export experience to US retailers.",
      "Built a tailored inspection checklist covering the three known pain points.",
      "Added a DUPRO (during-production) check at 30% completion, in addition to the pre-shipment inspection.",
    ],
    result:
      "Defect rate dropped from 7.2% to 1.4% over three shipments. On-time delivery rate reached 98%. Unit cost reduced by 6% on the back of a more competitive quotation from the new factory.",
  },
  "eu-beauty-brand": {
    problem:
      "A new EU skincare brand needed a GMP-certified contract manufacturer for a 12-SKU launch. Their existing contact was a personal WeChat relationship with no formal audit trail, and they needed CPNP-ready documentation for the EU market.",
    approach: [
      "Identified 11 GMP-certified contract manufacturers within 4 days.",
      "Visited and audited the top 3, producing audit reports with photos and capability scores.",
      "Consolidated samples for 12 SKUs into a single shipment, reducing sample freight cost by 38%.",
      "Reviewed and structured the OEM agreement, including IP, payment terms, and quality clauses.",
    ],
    result:
      "Shortlist delivered in 9 days. The brand selected one of the three audited factories and placed their first PO within 30 days of project start.",
  },
  "au-pet-brand": {
    problem:
      "An Australian pet brand was paying inflated LCL rates via a freight forwarder who was bundling services. Their order frequency was inconsistent and they were missing key sailings.",
    approach: [
      "Audited their previous 6 months of freight invoices and identified a 19–24% overcharge versus direct market rates.",
      "Aligned their PO calendar with weekly Yiwu–Melbourne sailings to consolidate volume.",
      "Negotiated a fixed-rate contract with a NVOCC partner.",
      "Took over booking, export documents, and customs clearance coordination.",
    ],
    result:
      "LCL freight cost reduced by 22% across four consecutive shipments, while transit time held flat. The brand now receives a single weekly status update covering production and shipping.",
  },
};

export default function CaseStudies() {
  const ref = useStrkImages();
  return (
    <div ref={ref} className="bg-white">
      <section className="bg-navy text-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Case studies</p>
            <h1 id="case-studies-title" className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
              Real outcomes from importers we work with
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              A few examples of how the work actually unfolds. Names and certain commercial details are anonymised where clients asked for it.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-x py-16 md:py-20">
          <div className="space-y-10">
            {CASE_STUDIES.map((cs) => {
              const detail = FULL_CASES[cs.slug];
              return (
                <article key={cs.slug} className="card overflow-hidden">
                  <div className="grid lg:grid-cols-12">
                    <div className="lg:col-span-4 bg-navy/5">
                      <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full">
                        <img
                          alt={`${cs.industry} sourcing case study`}
                          data-strk-img-id={`case-detail-img-${cs.slug}`}
                          data-strk-img={`[case-detail-title-${cs.slug}] [case-studies-title]`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="700"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-8 p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-full bg-brand/10 text-brand font-semibold px-2.5 py-1">
                          {cs.industry}
                        </span>
                        <span className="text-ink-soft">{cs.region}</span>
                      </div>
                      <h2 id={`case-detail-title-${cs.slug}`} className="mt-3 text-2xl md:text-3xl font-bold text-ink">
                        {cs.headline}
                      </h2>
                      <dl className="mt-5 grid grid-cols-3 gap-4 border-y border-border py-4">
                        {cs.outcomes.map((o) => (
                          <div key={o.label}>
                            <dt className="text-[11px] text-ink-soft uppercase tracking-wider">{o.label}</dt>
                            <dd className="text-xl md:text-2xl font-bold text-navy">{o.value}</dd>
                          </div>
                        ))}
                      </dl>
                      {detail && (
                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-brand">The problem</p>
                            <p className="mt-2 text-sm leading-6 text-ink-soft">{detail.problem}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Our approach</p>
                            <ul className="mt-2 space-y-2 text-sm leading-6 text-ink-soft">
                              {detail.approach.map((a) => (
                                <li key={a} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-success shrink-0" />
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      {detail && (
                        <div className="mt-6 p-4 rounded-md bg-navy/5 border border-navy/10">
                          <p className="text-xs font-semibold uppercase tracking-wider text-navy">Outcome</p>
                          <p className="mt-1.5 text-sm leading-6 text-ink">{detail.result}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-24">
          <SectionHeader
            eyebrow="Your case study could be next"
            title="Want results like these? Start with a brief."
            subtitle="Tell us what you are sourcing, where it needs to go, and what is on your timeline. We come back with a shortlist and a plan."
          />
          <div className="mt-10 grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <ul className="space-y-3 text-sm text-ink">
                {[
                  "Reply within 24 hours, Mon–Fri",
                  "Shortlist in 3–5 working days",
                  "No charge until you pick a factory",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-success shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-ghost mt-6">
                Or read our FAQ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
