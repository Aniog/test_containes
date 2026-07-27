import { useEffect } from "react"
import SectionHeader from "@/components/shared/SectionHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, FileText, BarChart3, Wallet } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    description: "We identify manufacturers that match your product specs, capacity needs, certifications, and export experience. You receive a shortlist with quotations, lead times, and factory profiles.",
  },
  {
    icon: ShieldCheck,
    title: "Supplier Verification",
    description: "Our team visits or audits factories, checks business licenses, production lines, quality systems, and references. You get a written report with photos and risk assessment.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control & Inspections",
    description: "We perform pre-production, in-process, pre-shipment, and container-loading inspections using AQL sampling. Defects are caught before goods leave the factory.",
  },
  {
    icon: Factory,
    title: "Production Monitoring",
    description: "From sample approval to final packing, we track milestones, capacity, and material arrivals. Delays are flagged early with recommended actions.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics Coordination",
    description: "We coordinate with freight forwarders, arrange consolidation, prepare export documents, and support customs clearance until goods reach your warehouse.",
  },
  {
    icon: FileText,
    title: "Contract & Pricing Support",
    description: "We help review supplier quotations, payment terms, and contracts to reduce hidden costs and protect your deposit and intellectual property.",
  },
  {
    icon: BarChart3,
    title: "Supplier Performance Tracking",
    description: "For ongoing orders, we track on-time delivery, quality scores, and communication responsiveness so you can make data-driven sourcing decisions.",
  },
  {
    icon: Wallet,
    title: "Payment & Order Administration",
    description: "We support milestone-based payment schedules and order documentation to reduce payment risk and keep records organized.",
  },
]

export default function Services() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Sourcing Services | SSourcing China"
  }, [])

  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Sourcing Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Practical, on-the-ground support for every stage of your China supply chain.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What we can do for you"
            description="Choose one service or combine several. We adapt to the size and complexity of your project."
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
            <Button size="lg" onClick={() => navigate("/contact")}>
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
