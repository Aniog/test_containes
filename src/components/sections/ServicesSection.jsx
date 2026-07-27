import { Link } from "react-router-dom"
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import SectionHeader from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "We identify and shortlist manufacturers that match your product specs, budget, and volume requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    description:
      "On-site audits, license checks, and capability assessments to confirm a supplier is real and reliable.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "Pre-shipment, during-production, and container-loading inspections to catch issues before they ship.",
  },
  {
    icon: Factory,
    title: "Production Follow-Up",
    description:
      "Weekly updates, sample approvals, and timeline tracking so your order stays on schedule.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description:
      "We manage documentation, consolidate cargo, and coordinate freight forwarders for smooth delivery.",
  },
  {
    icon: FileCheck,
    title: "Order Administration",
    description:
      "Proforma invoices, purchase contracts, payment terms, and export paperwork handled end to end.",
  },
]

export default function ServicesSection() {
  return (
    <section className="section bg-slate-50">
      <div className="container-main">
        <SectionHeader
          badge="Our Services"
          title="End-to-end sourcing support"
          description="From first supplier search to final delivery, we manage the details that reduce risk and save you time."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group transition hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-accent">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
