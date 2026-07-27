import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    industry: "Consumer Electronics",
    title: "Reducing Defect Rates for a US Audio Brand",
    challenge: "High defect rates and inconsistent build quality across multiple production runs.",
    approach: "Sourced a better-matched assembly partner, introduced inline inspections, and implemented AQL-based final random inspection.",
    result: "Defect rate dropped from 8% to under 1.2% within two production cycles.",
  },
  {
    industry: "Industrial Hardware",
    title: "Cutting Lead Times for a European Distributor",
    challenge: "Unpredictable lead times and poor communication with the incumbent supplier.",
    approach: "Qualified two compatible factories, consolidated orders, and introduced milestone-based production tracking.",
    result: "Average lead time reduced by 22 days with fewer stock-out events.",
  },
  {
    industry: "Home Goods",
    title: "Launching a Private-Label Kitchen Line",
    challenge: "New brand needed a complete supply chain built from scratch in under 90 days.",
    approach: "Managed supplier shortlist, sample approvals, packaging design, inspections, and first shipment coordination.",
    result: "First order delivered on time with zero critical quality issues.",
  },
  {
    industry: "Packaging",
    title: "Improving Packaging Consistency for a Cosmetics Brand",
    challenge: "Color and print quality varied between packaging batches, hurting brand presentation.",
    approach: "Implemented pre-production sign-offs, master samples, and stricter incoming material checks.",
    result: "Batch-to-batch color variance reduced significantly and customer complaints fell.",
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Case Studies</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Results for Global Buyers
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Real sourcing projects where we helped clients reduce risk, improve quality, and save time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Card key={study.title} className="flex flex-col">
                <CardHeader>
                  <Badge variant="secondary">{study.industry}</Badge>
                  <CardTitle className="mt-3 text-2xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary">Challenge</h4>
                    <CardDescription className="text-base">{study.challenge}</CardDescription>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary">Approach</h4>
                    <CardDescription className="text-base">{study.approach}</CardDescription>
                  </div>
                  <div className="mt-auto rounded-md bg-accent/10 p-4">
                    <h4 className="text-sm font-semibold text-accent">Result</h4>
                    <p className="mt-1 text-sm font-medium text-primary">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-site flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Want results like these?</h2>
            <p className="mt-2 text-primary-foreground/80">Let us review your project and propose a sourcing plan.</p>
          </div>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/contact">
              Request a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
