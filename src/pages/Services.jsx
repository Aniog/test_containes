import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Link } from "react-router-dom"
import {
  Search,
  Factory,
  ClipboardCheck,
  PackageCheck,
  Ship,
  FileCheck,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and shortlist qualified manufacturers matched to your product specifications, MOQ, and budget. Our network spans hundreds of verified factories across major industrial zones in China.",
    features: [
      "Targeted factory search by region and capability",
      "Initial supplier capability assessment",
      "Competitive quotation comparison",
      "Sample coordination and evaluation",
    ],
  },
  {
    icon: Factory,
    title: "Factory Verification",
    desc: "On-site audits to verify factory licenses, production capacity, equipment, and working conditions. We give you a clear picture before you place an order.",
    features: [
      "Business license and export permit verification",
      "Production line and equipment inspection",
      "Social compliance and working conditions review",
      "Detailed audit report with photos and scores",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment inspections, during-production checks, and container loading supervision to ensure your goods meet specifications before they leave China.",
    features: [
      "Pre-shipment inspection (PSI)",
      "During-production inspection (DUPRO)",
      "Container loading supervision",
      "Defect classification and photo reports",
    ],
  },
  {
    icon: PackageCheck,
    title: "Production Follow-Up",
    desc: "We monitor timelines, material arrivals, and workmanship to keep your order on track and catch issues early.",
    features: [
      "Weekly production status updates",
      "Material arrival confirmation",
      "Workmanship spot checks",
      "Timeline deviation alerts",
    ],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    desc: "Logistics support from factory gate to your warehouse: customs, documentation, and freight booking. We handle the complexity so you do not have to.",
    features: [
      "Freight forwarding and booking",
      "Export documentation preparation",
      "Customs clearance support",
      "Delivery tracking and updates",
    ],
  },
  {
    icon: FileCheck,
    title: "Contract & Negotiation",
    desc: "Price negotiation, contract review, and payment term structuring to protect your interests and reduce risk.",
    features: [
      "Factory price benchmarking and negotiation",
      "Contract term review (payment, delivery, penalties)",
      "Payment security guidance",
      "Dispute mediation support",
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f0f4f8] via-white to-[#f6f8fb] py-16 md:py-24">
        <div className="container-main text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-text-primary">
            End-to-End Sourcing Services
          </h1>
          <p className="mt-5 text-lg text-text-secondary leading-relaxed">
            From the first supplier search to final delivery, we manage every step of your China sourcing process with transparency and accountability.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-text-primary">{s.title}</h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-alt">
        <div className="container-main text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-text-primary">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-text-secondary">
            Tell us about your project and we will recommend the right package.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
