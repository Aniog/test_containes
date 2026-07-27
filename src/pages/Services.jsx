import useDocumentTitle from "@/hooks/useDocumentTitle"
import PageHeader from "@/components/PageHeader"
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import CTASection from "@/components/sections/CTASection"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    summary: "Find the right manufacturer for your product and budget.",
    details: [
      "Requirement analysis and product feasibility review",
      "Shortlist of 3–5 pre-qualified suppliers",
      "Initial quote collection and comparison",
      "Supplier capability and export experience check",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    summary: "Confirm a supplier is legitimate before you send money.",
    details: [
      "Business license and registration verification",
      "On-site factory audit with photos and video",
      "Production line, equipment, and capacity review",
      "Social compliance and quality-system checks",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    summary: "Catch defects before goods leave the factory.",
    details: [
      "Pre-production sample review and approval",
      "During-production (DUPRO) inspections",
      "Pre-shipment inspection (PSI) with AQL sampling",
      "Container loading supervision (CLS)",
    ],
  },
  {
    icon: Factory,
    title: "Production Follow-Up",
    summary: "Keep your order on track from deposit to dispatch.",
    details: [
      "Milestone-based production timeline",
      "Regular status reports with photos",
      "Sample approval and material confirmation",
      "Issue escalation and corrective action support",
    ],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    summary: "Move goods from factory floor to your door.",
    details: [
      "Freight forwarder selection and booking",
      "Export documentation and customs prep",
      "Cargo consolidation for multiple suppliers",
      "Tracking updates and delivery confirmation",
    ],
  },
  {
    icon: FileCheck,
    title: "Order Administration",
    summary: "Reduce paperwork errors and payment risks.",
    details: [
      "Proforma invoice and purchase contract review",
      "Payment term negotiation and T/T guidance",
      "Export license, CO, and certificate support",
      "Order file organization for easy reference",
    ],
  },
]

export default function Services() {
  useDocumentTitle("Services | SSourcing China")

  return (
    <>
      <PageHeader
        badge="Services"
        title="Sourcing services built for B2B buyers"
        description="Everything you need to buy from China with less risk, better quality, and clearer communication."
      />

      <section className="section bg-slate-50">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-accent">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {detail}
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
    </>
  )
}
