import { useEffect, useRef } from "react"
import { Search, Building2, ClipboardCheck, Factory, Ship, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "Identify and shortlist qualified manufacturers that match your product specs, budget, and order volume.",
    imgId: "svc-supplier-sourcing",
  },
  {
    icon: Building2,
    title: "Factory Verification",
    desc: "Validate business licenses, production capacity, equipment, and export experience before you place an order.",
    imgId: "svc-factory-verification",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    desc: "Inspect materials, in-process goods, and finished products against your quality standards and AQL levels.",
    imgId: "svc-quality-control",
  },
  {
    icon: Factory,
    title: "Production Follow-up",
    desc: "Monitor lead times, milestones, and corrective actions to keep your order on schedule.",
    imgId: "svc-production-followup",
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    desc: "Consolidate cargo, prepare export documents, and arrange freight forwarding by sea or air.",
    imgId: "svc-shipping",
  },
  {
    icon: FileText,
    title: "Contract & Negotiation Support",
    desc: "Assist with terms, pricing benchmarks, payment methods, and supplier agreements.",
    imgId: "svc-contract",
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p id="services-subtitle" className="text-sm font-semibold uppercase tracking-wide text-accent">
            What We Do
          </p>
          <h2 id="services-title" className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            End-to-End Sourcing Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            From the first supplier search to final delivery, we manage the details so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden">
              <div className="aspect-video w-full bg-muted">
                <img
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${service.imgId}-desc] [${service.imgId}-title] [services-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
                <span id={`${service.imgId}-title`} className="sr-only">{service.title}</span>
                <span id={`${service.imgId}-desc`} className="sr-only">{service.desc}</span>
              </div>
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
