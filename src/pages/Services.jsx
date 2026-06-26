import * as React from "react"
import PageHeader from "@/components/shared/PageHeader"
import SectionTitle from "@/components/shared/SectionTitle"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import CTASection from "@/components/home/CTASection"
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileText } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify manufacturers that match your product specifications, price range, certifications, and capacity needs. You receive a shortlist with factory profiles, MOQs, and sample timelines.",
    details: ["Product & market research", "RFQ management", "Sample coordination", "Factory capability assessment"],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    description: "Avoid scams and under-capacity suppliers with our on-site or remote audits. We check business licenses, production lines, quality systems, and export experience.",
    details: ["Business license verification", "On-site factory audit", "Social compliance checks", "Production capacity review"],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    description: "Our inspectors follow AQL standards to check materials, workmanship, packaging, and functionality before your goods leave the factory.",
    details: ["Pre-production inspection", "During production inspection", "Pre-shipment inspection", "Testing & lab coordination"],
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    description: "We monitor every stage of manufacturing, flag delays early, and push suppliers to keep your order on schedule.",
    details: ["Milestone tracking", "Material readiness checks", "Progress photo reports", "Issue resolution"],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "From consolidation and customs documents to freight booking and delivery, we make sure your cargo reaches its destination smoothly.",
    details: ["Supplier consolidation", "Export documentation", "Freight forwarding", "Customs support"],
  },
  {
    icon: FileText,
    title: "Procurement Consulting",
    description: "Need help with product development, cost engineering, or supplier strategy? We advise on specifications, incoterms, and payment terms.",
    details: ["Cost breakdown analysis", "Incoterms guidance", "Payment term negotiation", "Supplier relationship management"],
  },
]

export default function Services() {
  return (
    <div>
      <PageHeader
        title="Sourcing services that protect your business"
        description="From supplier search to final delivery, we provide the on-the-ground support international buyers need."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Our services"
            title="Everything you need to source from China"
            description="Each service can be used stand-alone or combined into a complete sourcing package."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Card key={idx} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="mt-4 space-y-2">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
