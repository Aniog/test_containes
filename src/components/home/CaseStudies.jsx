import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import SectionHeader from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import strkImgConfig from "@/strk-img-config.json"

const cases = [
  {
    title: "US Retailer Cuts QC Issues by 60%",
    description: "A home-goods retailer switched from direct factory ordering to our managed sourcing. Inline inspections and consolidated reporting reduced defect rates from 8% to under 3%.",
    tags: ["Quality Control", "Home Goods"],
  },
  {
    title: "EU Distributor Saves 4 Weeks on Lead Time",
    description: "We restructured the supplier base for an electronics distributor, introduced milestone tracking, and cut average production delays by four weeks.",
    tags: ["Electronics", "Production Monitoring"],
  },
  {
    title: "Startup Scales from Samples to 3 Containers",
    description: "A UK startup launched a new consumer product. We managed sampling, tooling, mass production, and the first three FCL shipments to Amazon warehouses.",
    tags: ["End-to-End", "FBA Shipping"],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-white">
        <div className="container-site">
          <SectionHeader
            label="Case Studies"
            title="Results our clients have seen"
            description="Real sourcing outcomes for businesses sourcing from China."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, index) => (
              <Card key={item.title} className="flex flex-col overflow-hidden p-0">
                <div className="aspect-video bg-slate-100">
                  <img
                    data-strk-img-id={`case-study-${index}`}
                    data-strk-img={`[case-title-${index}] [case-desc-${index}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 id={`case-title-${index}`} className="text-lg font-bold text-navy-900">{item.title}</h3>
                  <p id={`case-desc-${index}`} className="mt-2 flex-1 text-sm text-slate-600">{item.description}</p>
                  <Link to="/case-studies" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
    </section>
  )
}
