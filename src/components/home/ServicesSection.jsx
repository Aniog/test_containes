import { useNavigate } from "react-router-dom"
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import SectionHeader from "@/components/shared/SectionHeader"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify manufacturers that match your product specs, capacity needs, and compliance requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Supplier Verification",
    description: "On-site audits, license checks, and background research to confirm a factory is real and capable.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    description: "Pre-shipment inspections, in-process checks, and AQL sampling to reduce defects before cargo leaves China.",
  },
  {
    icon: Factory,
    title: "Production Monitoring",
    description: "Regular follow-ups, timeline tracking, and milestone reporting so delays are caught early.",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "We coordinate freight, customs docs, and handover to your forwarder or 3PL.",
  },
  {
    icon: FileText,
    title: "Contract & Pricing Support",
    description: "Clear quotations, payment-term guidance, and contract review to protect your interests.",
  },
]

export default function ServicesSection() {
  const navigate = useNavigate()

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Services"
          title="End-to-end sourcing support from China"
          description="From first supplier search to final shipment, we act as your on-the-ground team in China."
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button onClick={() => navigate("/services")}>View All Services</Button>
        </div>
      </div>
    </section>
  )
}
