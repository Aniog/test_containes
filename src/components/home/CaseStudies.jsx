import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const cases = [
  {
    industry: "Consumer Electronics",
    title: "Reliable PCB supplier for a US IoT startup",
    challenge: "Client needed a low-MOQ manufacturer with CE and RoHS compliance.",
    result: "Verified 3 factories, selected 1, and delivered 5,000 units on schedule with 0.8% defect rate.",
  },
  {
    industry: "Industrial Hardware",
    title: "Cost reduction for a European tools importer",
    challenge: "Existing supplier raised prices and extended lead times.",
    result: "Sourced an alternative factory, reduced unit cost by 18%, and cut lead time by 12 days.",
  },
  {
    industry: "Packaging",
    title: "Retail-ready packaging for an Australian brand",
    challenge: "Packaging quality was inconsistent and colors did not match brand guidelines.",
    result: "Implemented inline QC checks and color-proof approvals, improving consistency to 99%.",
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-background py-16 md:py-24" id="case-studies">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cases-title" className="section-title">Buyer Success Stories</h2>
          <p id="cases-subtitle" className="section-subtitle">
            Real outcomes from projects we have managed across electronics, hardware, packaging, and more.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((item, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lift">
              <CardHeader>
                <Badge variant="accent">{item.industry}</Badge>
                <CardTitle className="mt-3">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-semibold text-foreground">Challenge:</span>{" "}
                    <span className="text-muted">{item.challenge}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Result:</span>{" "}
                    <span className="text-muted">{item.result}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
