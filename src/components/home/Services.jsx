import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify and shortlist manufacturers that match your product specs, quality standards, and target price.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    description: "On-site audits and background checks to confirm licenses, capacity, certifications, and export experience.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Pre-shipment, during-production, and container-loading inspections to catch issues before goods leave China.",
  },
  {
    icon: Factory,
    title: "Production Follow-Up",
    description: "Regular status updates, sample approvals, and milestone tracking to keep your order on schedule.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "We consolidate documents, coordinate freight forwarders, and help clear customs smoothly.",
  },
]

export default function Services() {
  return (
    <section className="bg-background py-16 md:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="services-title" className="section-title">Full-Service China Sourcing</h2>
          <p id="services-subtitle" className="section-subtitle">
            From first supplier search to final delivery, we manage the details that protect your order.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group transition-shadow hover:shadow-lift">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
