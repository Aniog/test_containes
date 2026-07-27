import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import StrkImageLoader from "@/components/shared/StrkImageLoader"

const cases = [
  {
    industry: "Consumer Electronics",
    location: "USA",
    title: "Reliable PCB supplier for a US IoT startup",
    challenge:
      "A startup launching a new IoT device needed a low-MOQ manufacturer that could meet CE and RoHS requirements. Previous suppliers had inconsistent quality.",
    actions: [
      "Shortlisted 3 factories in Shenzhen and Dongguan",
      "Verified business licenses and ISO certifications",
      "Arranged samples and compared build quality",
      "Conducted pre-shipment inspection on the first order",
    ],
    result:
      "Delivered 5,000 units on schedule with a 0.8% defect rate. The client placed a follow-up order within three months.",
  },
  {
    industry: "Industrial Hardware",
    location: "Germany",
    title: "Cost reduction for a European tools importer",
    challenge:
      "The client's existing supplier raised prices by 15% and extended lead times, squeezing margins and stock levels.",
    actions: [
      "Researched alternative suppliers in Zhejiang",
      "Audited two factories for capacity and quality systems",
      "Negotiated payment terms and lead times",
      "Set up a quality agreement before production",
    ],
    result:
      "Reduced unit cost by 18% and cut average lead time by 12 days without compromising quality.",
  },
  {
    industry: "Packaging",
    location: "Australia",
    title: "Retail-ready packaging for an Australian brand",
    challenge:
      "Packaging quality was inconsistent across batches, and printed colors did not match the brand guidelines.",
    actions: [
      "Identified a specialized printing factory",
      "Established color-proof approval process",
      "Implemented inline QC during production",
      "Supervised container loading",
    ],
    result:
      "Improved packaging consistency to 99% and reduced customer complaints related to damaged goods.",
  },
  {
    industry: "Furniture & Home",
    location: "UK",
    title: "Private-label outdoor furniture launch",
    challenge:
      "A UK retailer needed a reliable partner to develop a private-label outdoor furniture line with custom finishes and packaging.",
    actions: [
      "Sourced 4 factories in Fujian province",
      "Reviewed material samples and load-test reports",
      "Coordinated packaging design and assembly instructions",
      "Managed two production runs with inspection checkpoints",
    ],
    result:
      "Launched the product line on time, passed third-party safety testing, and reordered for the next season.",
  },
]

export default function CaseStudies() {
  return (
    <StrkImageLoader>
      <div className="bg-white">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                Case Studies
              </h1>
              <p className="mt-4 text-lg text-muted">
                See how we have helped buyers reduce risk, control costs, and launch products from China.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {cases.map((item, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lift">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="accent">{item.industry}</Badge>
                      <Badge variant="secondary">{item.location}</Badge>
                    </div>
                    <CardTitle className="mt-3">{item.title}</CardTitle>
                    <CardDescription>{item.challenge}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">What we did</h4>
                      <ul className="mt-2 space-y-1">
                        {item.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-green-50 p-4">
                      <h4 className="text-sm font-semibold text-green-900">Result</h4>
                      <p className="mt-1 text-sm text-green-800">{item.result}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 rounded-2xl bg-primary p-8 text-center text-white md:p-12">
              <h2 className="text-2xl font-bold md:text-3xl">Ready for a success story of your own?</h2>
              <p className="mt-3 text-white/80">
                Tell us about your product and we will propose a sourcing plan tailored to your market.
              </p>
              <Button className="mt-6" asChild>
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </StrkImageLoader>
  )
}
