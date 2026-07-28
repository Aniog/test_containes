import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import SectionHeader from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import CTABanner from "@/components/CTABanner"
import strkImgConfig from "@/strk-img-config.json"

const cases = [
  {
    client: "US Home Goods Retailer",
    title: "Cutting defect rates through structured QC",
    challenge: "A Midwest retailer was receiving inconsistent product quality from multiple direct factory relationships, leading to customer returns and rework costs.",
    solution: "We introduced supplier consolidation, pre-shipment inspections using AQL sampling, and corrective action tracking for every defect category.",
    result: "Defect rate dropped from 8% to under 3% within two production cycles. Return-related costs fell by approximately 60%.",
    tags: ["Quality Control", "Home Goods", "Retail"],
  },
  {
    client: "EU Electronics Distributor",
    title: "Reducing lead-time delays with production monitoring",
    challenge: "Long and unpredictable lead times were causing stockouts and forcing the client to air-freight goods at high cost.",
    solution: "We restructured the supplier base, implemented weekly milestone tracking, and added capacity audits before peak season.",
    result: "Average production delay reduced by four weeks. Emergency air freight usage decreased significantly.",
    tags: ["Electronics", "Production Monitoring", "Logistics"],
  },
  {
    client: "UK Consumer Startup",
    title: "From prototype to three full container loads",
    challenge: "A startup had a working prototype but no factory network or experience scaling production in China.",
    solution: "We managed tooling, sampling, supplier selection, mass production, quality inspections, and FBA-ready shipping.",
    result: "The startup shipped three FCL containers to Amazon warehouses in the US and UK within the first six months.",
    tags: ["End-to-End Sourcing", "FBA Shipping", "Startups"],
  },
  {
    client: "Australian Industrial Brand",
    title: "Verifying a new heavy-machinery supplier",
    challenge: "The client needed to qualify a new factory for a large industrial order but could not travel to China for an audit.",
    solution: "We conducted a two-day on-site audit covering licenses, equipment, quality records, and environmental compliance.",
    result: "The client received a detailed audit report with video evidence and proceeded with a staged PO based on our risk rating.",
    tags: ["Factory Audit", "Machinery", "Compliance"],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
          <div className="container-site">
            <SectionHeader
              label="Case Studies"
              title="Results from real sourcing projects"
              description="See how we have helped businesses reduce risk, save time, and scale their China supply chains."
            />
            <div className="grid gap-8 lg:grid-cols-2">
              {cases.map((item, index) => (
                <Card key={item.title} className="flex flex-col overflow-hidden p-0">
                  <div className="aspect-video bg-slate-100">
                    <img
                      data-strk-img-id={`case-page-${index}`}
                      data-strk-img={`[case-title-${index}] [case-client-${index}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span id={`case-client-${index}`} className="text-sm font-semibold text-blue-600">{item.client}</span>
                    <h3 id={`case-title-${index}`} className="mt-1 text-xl font-bold text-navy-900 md:text-2xl">{item.title}</h3>
                    <div className="mt-4 space-y-3 text-slate-600">
                      <p><strong className="text-navy-900">Challenge:</strong> {item.challenge}</p>
                      <p><strong className="text-navy-900">Solution:</strong> {item.solution}</p>
                      <p><strong className="text-navy-900">Result:</strong> {item.result}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          title="Want results like these?"
          description="Get in touch and we will discuss how to improve your China sourcing process."
        />
    </div>
  )
}
