import { PageContainer } from "@/components/shared/PageContainer"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileCheck,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Supplier Discovery",
    summary: "Find the right factory, not just any factory.",
    details: [
      "Product-specific supplier search across our verified network and public databases.",
      "Initial capability review: MOQ, lead time, certifications, and export experience.",
      "Shortlist of 2–5 qualified suppliers with pros, cons, and recommendations.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    summary: "Confirm the supplier exists and can deliver.",
    details: [
      "On-site or remote audit of business license, ownership, and production lines.",
      "Capacity check against your forecast and order size.",
      "Social compliance and quality-system screening where required.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    summary: "Catch issues before goods leave China.",
    details: [
      "Pre-shipment inspection against AQL standards and your specifications.",
      "During-production inspections to spot defects early.",
      "Container-loading supervision to verify quantity and packing.",
    ],
  },
  {
    icon: Factory,
    title: "Production Monitoring",
    summary: "Keep orders on schedule and transparent.",
    details: [
      "Milestone tracking from material arrival to final packing.",
      "Regular written updates and photos from the factory floor.",
      "Issue escalation and corrective action when deadlines slip.",
    ],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    summary: "Move goods from factory to your warehouse.",
    details: [
      "Freight forwarding by sea, air, rail, or courier based on your needs.",
      "Export documentation, customs prep, and Incoterms guidance.",
      "Delivery tracking and arrival coordination.",
    ],
  },
  {
    icon: FileCheck,
    title: "Compliance & Documentation",
    summary: "Meet your market's import requirements.",
    details: [
      "Certification support: CE, FCC, RoHS, REACH, and others.",
      "Labeling, packaging, and testing coordination.",
      "Document review to reduce customs delays and rejections.",
    ],
  },
]

export default function Services() {
  return (
    <PageContainer>
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionLabel>Services</SectionLabel>
          <h1 className="text-4xl font-bold sm:text-5xl">
            End-to-End Sourcing Support
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            From supplier search to delivery, we provide the services you need to
            buy from China with confidence.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="flex flex-col">
                <CardContent className="flex-1 p-6">
                  <s.icon className="h-10 w-10 text-primary" />
                  <h2 className="mt-4 text-xl font-semibold">{s.title}</h2>
                  <p className="mt-2 font-medium text-slate-700">{s.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-2 text-sm text-slate-600">
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-primary-light p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Not sure which service fits your project?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Tell us what you are sourcing and we will recommend the right mix
              of support.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link to="/contact">Get a Free Sourcing Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}
