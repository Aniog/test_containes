import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import SectionHeader from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"

const cases = [
  {
    client: "European Retail Chain",
    title: "Reducing defect rates by 60%",
    description:
      "A home goods retailer was seeing repeated quality issues. We introduced pre-shipment inspections and supplier scorecards, cutting defect returns within two orders.",
    imgId: "case-retail-img",
    titleId: "case-retail-title",
  },
  {
    client: "US Distributor",
    title: "Launching a private-label product line",
    description:
      "From concept to container, we sourced packaging, negotiated MOQs, managed samples, and coordinated the first shipment to a West Coast warehouse.",
    imgId: "case-distributor-img",
    titleId: "case-distributor-title",
  },
  {
    client: "Australian E-commerce Brand",
    title: "Cutting lead times by 3 weeks",
    description:
      "By consolidating suppliers and improving production planning, we shortened the average order cycle and improved in-stock rates.",
    imgId: "case-ecommerce-img",
    titleId: "case-ecommerce-title",
  },
]

export default function CaseStudiesSection() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="section bg-white">
      <div className="container-main">
        <SectionHeader
          badge="Case Studies"
          title="Results our clients have achieved"
          description="Real sourcing challenges we have helped solve across retail, distribution, and e-commerce."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="card overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.client}
                </p>
                <h3 id={item.titleId} className="mt-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link to="/case-studies">Read More Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
