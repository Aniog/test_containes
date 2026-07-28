import { Link } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { ArrowRight, TrendingDown, Clock, ShieldCheck, Users } from "lucide-react"

const cases = [
  {
    client: "US Retail Chain",
    industry: "Home & Kitchen",
    location: "United States",
    challenge: "Needed to diversify supply chain away from a single supplier while maintaining quality and reducing unit costs.",
    solution: "We identified 4 alternative factories, conducted on-site audits, and managed sample approvals. The selected factory passed all quality benchmarks.",
    result: "Sourced 12 product lines, reduced unit cost by 18%, zero defects on first shipment.",
    icon: TrendingDown,
    metric: "18% cost reduction",
  },
  {
    client: "European E-commerce Brand",
    industry: "Electronics Accessories",
    location: "Germany",
    challenge: "Required CE and FCC certified suppliers for a new product launch with a tight 90-day deadline.",
    solution: "We shortlisted 3 factories with existing CE/FCC certifications, coordinated sample testing, and managed production follow-up with weekly reports.",
    result: "Identified 3 verified factories, passed CE/FCC certifications, shipped 50K units on time.",
    icon: ShieldCheck,
    metric: "50K units on time",
  },
  {
    client: "Australian Distributor",
    industry: "Hardware & Tools",
    location: "Australia",
    challenge: "Initial factory audit revealed serious compliance gaps that would have delayed the project by months.",
    solution: "We terminated the engagement with the original factory, sourced an alternative within 5 days, and fast-tracked sample and production approvals.",
    result: "Factory audit revealed compliance gaps. Found an alternative and saved 6 weeks.",
    icon: Clock,
    metric: "6 weeks saved",
  },
  {
    client: "UK Startup",
    industry: "Packaging & Printing",
    location: "United Kingdom",
    challenge: "First-time importer with no experience in China sourcing, needed branded packaging for a product launch.",
    solution: "We guided the client through supplier selection, artwork approval, material specifications, and quality checks — step by step.",
    result: "Successfully launched with 10K branded boxes, on budget and on schedule.",
    icon: Users,
    metric: "First-time importer success",
  },
]

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#f0f4f8] via-white to-[#f6f8fb] py-16 md:py-24">
        <div className="container-main text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Case Studies
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-text-primary">
            Real Results for Real Buyers
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            See how we have helped businesses across industries source smarter, faster, and safer from China.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl">
          <div className="space-y-10">
            {cases.map((c, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <c.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {c.industry}
                        </span>
                        <span className="text-xs text-text-muted">{c.location}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold text-text-primary">{c.client}</h3>

                      <div className="mt-5 grid gap-4 md:grid-cols-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Challenge</p>
                          <p className="mt-1 text-sm text-text-secondary leading-relaxed">{c.challenge}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Solution</p>
                          <p className="mt-1 text-sm text-text-secondary leading-relaxed">{c.solution}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Result</p>
                          <p className="mt-1 text-sm text-text-secondary leading-relaxed">{c.result}</p>
                        </div>
                      </div>

                      <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                        <c.icon className="h-4 w-4" />
                        {c.metric}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-main text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-text-primary">Want Similar Results?</h2>
          <p className="mt-4 text-text-secondary">
            Tell us about your project and we will show you how we can help.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
