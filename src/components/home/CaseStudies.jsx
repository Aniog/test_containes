import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const cases = [
  {
    industry: "Consumer Electronics",
    title: "Reducing Defect Rates for a US Audio Brand",
    result: "Defect rate dropped from 8% to under 1.2% within two production cycles.",
    desc: "We identified a new assembly partner, implemented inline inspections, and introduced a final random inspection protocol.",
  },
  {
    industry: "Industrial Hardware",
    title: "Cutting Lead Times for a European Distributor",
    result: "Average lead time reduced by 22 days through better supplier alignment.",
    desc: "Our team consolidated orders across two compatible factories and introduced milestone-based production tracking.",
  },
  {
    industry: "Home Goods",
    title: "Launching a Private-Label Kitchen Line",
    result: "First order delivered on time with zero critical quality issues.",
    desc: "From supplier shortlist to packaging design review, we managed the full sourcing cycle for a new brand launch.",
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Case Studies</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
              Results for Real Buyers
            </h2>
            <p className="mt-4 text-muted-foreground">
              See how we have helped brands and distributors source more reliably from China.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit gap-2">
            <Link to="/case-studies">
              Read All Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">{item.industry}</p>
                <CardTitle className="mt-2 text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-medium text-primary">{item.result}</p>
                <CardDescription className="text-base">{item.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
