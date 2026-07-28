import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/Card"
import { ArrowRight } from "lucide-react"

const cases = [
  {
    client: "US Retail Chain",
    industry: "Home & Kitchen",
    result: "Sourced 12 product lines, reduced unit cost by 18%, zero defects on first shipment.",
  },
  {
    client: "European E-commerce Brand",
    industry: "Electronics Accessories",
    result: "Identified 3 verified factories, passed CE/FCC certifications, shipped 50K units on time.",
  },
  {
    client: "Australian Distributor",
    industry: "Hardware & Tools",
    result: "Factory audit revealed compliance gaps. We found an alternative and saved 6 weeks.",
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Case Studies
          </span>
          <h2 id="cases-title" className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
            Real Results for Real Buyers
          </h2>
          <p id="cases-desc" className="mt-4 text-text-secondary leading-relaxed">
            See how we have helped businesses like yours source smarter from China.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {c.industry}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{c.client}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{c.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
