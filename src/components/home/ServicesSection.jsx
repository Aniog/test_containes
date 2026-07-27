import { Link } from "react-router-dom"
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileCheck,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/Card"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"

const services = [
  {
    icon: Search,
    title: "Supplier Discovery",
    desc: "We identify and shortlist manufacturers that match your product, price, and capacity requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits, license checks, and production-capacity verification before you place an order.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment, during-production, and container-loading inspections based on your quality standards.",
  },
  {
    icon: Factory,
    title: "Production Monitoring",
    desc: "Regular updates, milestone tracking, and issue escalation to keep your order on schedule.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    desc: "Freight forwarding, customs documentation, and delivery coordination to your door or warehouse.",
  },
  {
    icon: FileCheck,
    title: "Compliance Support",
    desc: "Help with certifications, labeling, testing, and export paperwork needed for your market.",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionLabel>What We Do</SectionLabel>
          <h2 id="services-title" className="text-3xl font-bold sm:text-4xl">
            End-to-End Sourcing Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            From the first supplier search to final delivery, we manage the
            details so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <service.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-slate-600">{service.desc}</p>
              </CardContent>
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
