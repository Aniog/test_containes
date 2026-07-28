import { Search, Building2, ClipboardCheck, LineChart, Ship } from "lucide-react"
import SectionHeader from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"

const services = [
  {
    icon: Search,
    title: "Supplier Discovery",
    description: "We identify and shortlist manufacturers that match your product specs, MOQ, certification, and budget requirements.",
  },
  {
    icon: Building2,
    title: "Factory Verification",
    description: "On-site audits verify licenses, production capacity, equipment, quality systems, and social compliance before you commit.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Pre-shipment, during-production, and container-loading inspections reduce defects and protect your payments.",
  },
  {
    icon: LineChart,
    title: "Production Monitoring",
    description: "Weekly reports, milestone tracking, and problem escalation keep your orders on schedule and on spec.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "We consolidate documents, book freight, and coordinate customs so your goods arrive smoothly at destination.",
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <SectionHeader
          label="What We Do"
          title="End-to-end sourcing services"
          description="From the first supplier search to final delivery, we act as your local team on the ground in China."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">{service.title}</h3>
              <p className="mt-2 flex-1 text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
