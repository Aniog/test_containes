import * as React from "react"
import { Link } from "react-router-dom"
import SectionTitle from "@/components/shared/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const cases = [
  {
    category: "Electronics",
    title: "Reducing defect rates for a US audio brand",
    description: "We sourced a new contract manufacturer, implemented DUPRO inspections, and cut pre-shipment defect rates from 8% to under 1.5%.",
    result: "Defect rate cut to 1.5%",
  },
  {
    category: "Packaging",
    title: "Cutting packaging costs for a European retailer",
    description: "By consolidating suppliers and renegotiating MOQs, we reduced packaging spend by 22% without sacrificing quality.",
    result: "22% cost reduction",
  },
  {
    category: "Industrial",
    title: "Faster lead times for an Australian importer",
    description: "A structured supplier audit and production follow-up process shortened average lead times from 75 to 48 days.",
    result: "Lead time -36%",
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page">
        <SectionTitle
          eyebrow="Case studies"
          title="Real results for real sourcing projects"
          description="See how we help buyers reduce risk, cut costs, and deliver on schedule."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, idx) => (
            <Card key={idx} className="overflow-hidden border-slate-200 hover:shadow-lg transition-shadow">
              <div className="h-44 bg-slate-200 relative">
                <img
                  data-strk-img-id={`case-thumb-${idx}-d7e8f9`}
                  data-strk-img={`[case-title-${idx}] [case-desc-${idx}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">{item.category}</Badge>
                <h3 id={`case-title-${idx}`} className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p id={`case-desc-${idx}`} className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                <div className="mt-4 inline-flex items-center rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {item.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
            Read all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
