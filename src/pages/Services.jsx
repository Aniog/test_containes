import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import StrkImageLoader from "@/components/shared/StrkImageLoader"
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  FileText,
  Scale,
} from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "We identify manufacturers that match your specifications, minimum order quantity, and budget. Our research includes online verification, trade-show networks, and factory databases.",
    deliverables: ["Supplier shortlist", "MOQ and pricing comparison", "Factory capability summary"],
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    description:
      "We verify business licenses, export experience, production capacity, and certifications. For higher-risk orders, we conduct on-site audits with photos and reports.",
    deliverables: ["Business license check", "Factory audit report", "Certification validation"],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description:
      "Our inspectors check materials, workmanship, measurements, packaging, and labeling against your approved samples and specifications.",
    deliverables: ["Pre-shipment inspection", "During-production check", "Container loading supervision"],
  },
  {
    icon: Factory,
    title: "Production Follow-Up",
    description:
      "We track your order through each production milestone, follow up on delays, and coordinate sample approvals so your timeline stays on track.",
    deliverables: ["Weekly status reports", "Milestone tracking", "Sample approval coordination"],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description:
      "We consolidate export documents, coordinate with freight forwarders, and help ensure smooth customs clearance and delivery.",
    deliverables: ["Document review", "Forwarder coordination", "Delivery tracking support"],
  },
  {
    icon: FileText,
    title: "Contract & Payment Support",
    description:
      "We help draft purchase contracts, review payment terms, and manage escrow-style milestones to reduce payment risk.",
    deliverables: ["Contract template review", "Payment milestone advice", "Dispute support"],
  },
]

export default function ServicesPage() {
  return (
    <StrkImageLoader>
      <div className="bg-white">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                Sourcing Services
              </h1>
              <p className="mt-4 text-lg text-muted">
                End-to-end support for overseas buyers sourcing from China. Use one service or the full package.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lift">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <Scale className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 rounded-2xl bg-primary p-8 text-center text-white md:p-12">
              <h2 className="text-2xl font-bold md:text-3xl">Not sure which service you need?</h2>
              <p className="mt-3 text-white/80">
                Tell us about your project and we will recommend a service package that fits your goals.
              </p>
              <Button className="mt-6" asChild>
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </StrkImageLoader>
  )
}
