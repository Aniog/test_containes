import * as React from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import SectionTitle from "@/components/shared/SectionTitle"
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify and shortlist manufacturers that match your product specs, price target, and production capacity.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    description: "On-site audits, license checks, and production-capacity assessments to reduce supplier risk before you pay.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    description: "Pre-shipment inspections, during-production checks, and AQL-based testing to catch defects early.",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    description: "We monitor lead times, material readiness, and milestones so your order stays on schedule.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "Consolidation, customs documentation, and freight forwarding by sea, air, or rail to your door.",
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="What we do"
          title="End-to-end sourcing support from China"
          description="From the first supplier search to final delivery, we manage the details that keep your supply chain reliable."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Card key={idx} className="group hover:shadow-lg transition-shadow border-slate-200">
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
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
