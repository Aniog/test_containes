import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Search, Building2, ClipboardCheck, Factory, Ship, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    short: "Find the right factory for your product.",
    details: "We research suppliers across industrial clusters, filter by capability and compliance, and present a shortlist with pricing, lead times, and factory profiles.",
    imgId: "services-supplier-sourcing",
  },
  {
    icon: Building2,
    title: "Factory Verification",
    short: "Know who you are working with before you pay.",
    details: "Our on-site audits cover business licenses, production capacity, quality systems, social compliance, and export experience. You receive a written report with photos and risk ratings.",
    imgId: "services-factory-verification",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    short: "Inspect before shipment, not after.",
    details: "We offer pre-production, during-production, pre-shipment, and container-loading inspections based on AQL sampling and your acceptance criteria.",
    imgId: "services-quality-control",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    short: "Keep orders on schedule.",
    details: "We track material readiness, production milestones, and packaging progress. Issues are flagged early so corrective actions can be taken quickly.",
    imgId: "services-production-followup",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    short: "From factory floor to your door.",
    details: "We consolidate shipments, prepare export documents, book freight, and track deliveries. We work with sea, air, and courier options based on your budget and timeline.",
    imgId: "services-shipping",
  },
  {
    icon: FileText,
    title: "Contract & Negotiation Support",
    short: "Agree on clear terms upfront.",
    details: "We help negotiate pricing, payment terms, delivery schedules, and defect liabilities. We also review purchase contracts and Proforma Invoices for clarity.",
    imgId: "services-contract",
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p id="services-page-subtitle" className="text-sm font-semibold uppercase tracking-wide text-accent">Our Services</p>
            <h1 id="services-page-title" className="mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Sourcing Support at Every Stage
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A full range of services to reduce risk, control quality, and simplify procurement from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.imgId}-desc] [${service.imgId}-title] [services-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  <span id={`${service.imgId}-title`} className="sr-only">{service.title}</span>
                  <span id={`${service.imgId}-desc`} className="sr-only">{service.short}</span>
                </div>
                <CardHeader className="pb-2">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-medium text-primary">{service.short}</p>
                  <CardDescription className="text-base leading-relaxed">{service.details}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container-site flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Ready to start your next sourcing project?</h2>
            <p className="mt-2 text-primary-foreground/80">Tell us what you need and we will prepare a free quote.</p>
          </div>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/contact">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
