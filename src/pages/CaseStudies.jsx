import { useEffect, useRef } from "react"
import useDocumentTitle from "@/hooks/useDocumentTitle"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "@/components/PageHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import CTASection from "@/components/sections/CTASection"

const cases = [
  {
    client: "European Retail Chain",
    industry: "Home Goods",
    title: "Cutting defect returns by 60%",
    challenge:
      "A major European retailer was receiving repeated customer returns due to inconsistent product quality from multiple Chinese suppliers.",
    approach: [
      "Mapped every supplier and product family in the sourcing portfolio",
      "Introduced AQL-based pre-shipment inspections for every order",
      "Created supplier scorecards tied to defect rates and on-time delivery",
    ],
    result:
      "Defect returns fell by 60% within two order cycles, and supplier accountability improved significantly.",
    imgId: "case-page-retail-img",
    titleId: "case-page-retail-title",
  },
  {
    client: "US Distributor",
    industry: "Private Label Electronics",
    title: "Launching a private-label product line",
    challenge:
      "A US distributor wanted to launch a new electronics accessory line but had no existing supplier relationships in China.",
    approach: [
      "Sourced 4 qualified factories and obtained samples within two weeks",
      "Negotiated tooling costs and MOQs to fit the launch budget",
      "Managed packaging sourcing and coordinated the first container shipment",
    ],
    result:
      "The product line launched on schedule and met the target margin, with reorders already scheduled.",
    imgId: "case-page-distributor-img",
    titleId: "case-page-distributor-title",
  },
  {
    client: "Australian E-commerce Brand",
    industry: "Fashion Accessories",
    title: "Reducing lead times by 3 weeks",
    challenge:
      "An online brand struggled with stockouts caused by unpredictable production and shipping delays.",
    approach: [
      "Consolidated suppliers to improve material planning and coordination",
      "Implemented weekly production status updates with milestone tracking",
      "Pre-booked freight capacity during peak season",
    ],
    result:
      "Average order lead time dropped by 3 weeks, improving in-stock rates and customer reviews.",
    imgId: "case-page-ecommerce-img",
    titleId: "case-page-ecommerce-title",
  },
]

export default function CaseStudies() {
  useDocumentTitle("Case Studies | SSourcing China")
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <PageHeader
        badge="Case Studies"
        title="Client sourcing results"
        description="Real examples of how we help businesses source better from China."
      />

      <section className="section bg-white">
        <div className="container-main space-y-12">
          {cases.map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 lg:aspect-auto">
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <CardHeader className="p-0">
                    <p className="text-sm font-semibold text-accent">
                      {item.client} · {item.industry}
                    </p>
                    <CardTitle className="mt-2 text-2xl">{item.title}</CardTitle>
                    <CardDescription className="mt-2">{item.challenge}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-6 p-0">
                    <h4 className="text-sm font-semibold text-slate-900">Our approach</h4>
                    <ul className="mt-3 space-y-2">
                      {item.approach.map((step) => (
                        <li key={step} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {step}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 rounded-lg bg-green-50 p-4">
                      <p className="text-sm font-semibold text-green-800">Result</p>
                      <p className="mt-1 text-sm leading-relaxed text-green-700">
                        {item.result}
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
