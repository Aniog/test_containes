import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/Card"
import { Search, Factory, ClipboardCheck, PackageCheck, Ship, FileCheck } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist qualified manufacturers matched to your product specifications, MOQ, and budget.",
  },
  {
    icon: Factory,
    title: "Factory Verification",
    desc: "On-site audits to verify factory licenses, production capacity, equipment, and working conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment inspections, during-production checks, and container loading supervision.",
  },
  {
    icon: PackageCheck,
    title: "Production Follow-Up",
    desc: "We monitor timelines, material arrivals, and workmanship to keep your order on track.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    desc: "Logistics support from factory gate to your warehouse: customs, documentation, and freight booking.",
  },
  {
    icon: FileCheck,
    title: "Contract & Negotiation",
    desc: "Price negotiation, contract review, and payment term structuring to protect your interests.",
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 id="services-title" className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
            End-to-End Sourcing Support
          </h2>
          <p id="services-desc" className="mt-4 text-text-secondary leading-relaxed">
            From the first supplier search to the final delivery, we manage every step of your China sourcing process.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View all services
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
