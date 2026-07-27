import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Badge } from "@/components/ui/Badge"
import { StockImage } from "@/components/shared/StockImage"

const cases = [
  {
    id: "us-retailer",
    client: "US Outdoor Retailer",
    industry: "Sporting Goods",
    title: "Cutting lead time by 30% for a seasonal product line",
    desc: "We sourced alternative factories, verified production capacity, and monitored output to prevent stock-outs.",
  },
  {
    id: "eu-brand",
    client: "EU Home Brand",
    industry: "Home & Furniture",
    title: "Reducing defect rates through on-site QC",
    desc: "Introduced inline inspections and a corrective action plan that cut returns by more than half.",
  },
  {
    id: "startup",
    client: "UK Electronics Startup",
    industry: "Electronics",
    title: "From prototype to first mass order",
    desc: "Identified a PCBA partner, managed tooling, and coordinated the first 5,000-unit shipment.",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionLabel>Case Studies</SectionLabel>
            <h2 id="cases-title" className="text-3xl font-bold sm:text-4xl">
              Results for Real Buyers
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Read all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => {
            const titleId = `case-${c.id}-title`
            const descId = `case-${c.id}-desc`
            return (
              <Card key={c.id} className="overflow-hidden">
                <StockImage
                  imgId={`case-thumb-${c.id}-d4e5f6`}
                  query={`[${descId}] [${titleId}] [cases-title]`}
                  ratio="16x9"
                  width="600"
                  alt={c.title}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{c.industry}</Badge>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {c.client}
                  </p>
                  <h3 id={titleId} className="mt-2 text-lg font-semibold">
                    {c.title}
                  </h3>
                  <p id={descId} className="mt-2 text-sm text-slate-600">
                    {c.desc}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
