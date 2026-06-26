import * as React from "react"
import { useImageLoader } from "@/hooks/useImageLoader"
import PageHeader from "@/components/shared/PageHeader"
import SectionTitle from "@/components/shared/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CTASection from "@/components/home/CTASection"

const cases = [
  {
    category: "Electronics",
    title: "Reducing defect rates for a US audio brand",
    description: "A US consumer audio brand was experiencing high defect rates and delayed shipments from its previous supplier. We identified a new contract manufacturer with stronger QC processes, implemented DUPRO inspections, and established clear acceptance criteria. Over six months, pre-shipment defect rates dropped from 8% to under 1.5%, and on-time delivery improved to 95%.",
    result: "Defect rate reduced to 1.5%",
    location: "United States",
  },
  {
    category: "Packaging",
    title: "Cutting packaging costs for a European retailer",
    description: "A mid-sized European retailer needed to reduce packaging spend without affecting shelf appeal. We consolidated three packaging suppliers into one capable factory, renegotiated MOQs, and optimized box sizing. The result was a 22% cost reduction and simplified logistics.",
    result: "22% packaging cost savings",
    location: "Germany",
  },
  {
    category: "Industrial",
    title: "Faster lead times for an Australian importer",
    description: "An Australian importer of industrial components struggled with 75-day lead times and poor communication. We conducted factory audits, selected a more responsive supplier, and introduced weekly production follow-ups. Average lead time fell to 48 days, with clearer reporting throughout.",
    result: "Lead time reduced by 36%",
    location: "Australia",
  },
  {
    category: "Home & Garden",
    title: "Launching a new outdoor furniture line",
    description: "A UK e-commerce brand wanted to launch a private-label outdoor furniture collection. We sourced factories, coordinated samples, managed powder-coat and fabric approvals, and performed pre-shipment inspections. The first container shipped on schedule and passed third-party inspection.",
    result: "On-schedule launch",
    location: "United Kingdom",
  },
  {
    category: "Health & Beauty",
    title: "Compliant packaging for a skincare startup",
    description: "A North American skincare startup needed packaging that met labeling and material compliance requirements. We identified a certified supplier, verified testing reports, and managed sample iterations. The packaging passed compliance review on the first submission.",
    result: "First-pass compliance",
    location: "Canada",
  },
]

export default function CaseStudies() {
  const containerRef = useImageLoader()

  return (
    <div ref={containerRef}>
      <PageHeader
        title="Case studies"
        description="Real sourcing projects and measurable outcomes for international buyers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Results"
            title="How we help buyers win in China sourcing"
          />
          <div className="mt-12 grid gap-8">
            {cases.map((item, idx) => (
              <Card key={idx} className="overflow-hidden border-slate-200">
                <div className="grid lg:grid-cols-3">
                  <div className="relative h-56 lg:h-auto bg-slate-100">
                    <img
                      data-strk-img-id={`case-detail-${idx}-g8h9i0`}
                      data-strk-img={`[case-title-${idx}] [case-desc-${idx}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-xs text-slate-500">{item.location}</span>
                    </div>
                    <h3 id={`case-title-${idx}`} className="mt-3 text-xl font-semibold text-slate-900 md:text-2xl">{item.title}</h3>
                    <p id={`case-desc-${idx}`} className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
                    <div className="mt-5 inline-flex items-center rounded-md bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                      Result: {item.result}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
