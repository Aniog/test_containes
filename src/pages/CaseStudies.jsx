import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  TrendingDown,
  PackageCheck,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const caseStudies = [
  {
    company: "EuroHome Retail GmbH",
    location: "Germany",
    category: "Home & Kitchen Products",
    challenge:
      "EuroHome needed to source 40+ SKUs of kitchenware products from multiple factories across China. They had previously experienced quality inconsistency, late deliveries, and communication issues with direct factory engagement.",
    solution:
      "We conducted comprehensive factory audits across 12 potential suppliers in Guangdong and Zhejiang provinces. We selected 6 factories based on capability, quality systems, and pricing. Our team implemented a standardized QC protocol including raw material checks, in-process inspections, and pre-shipment inspection for every batch.",
    results: [
      "Defect rate reduced from 8% to under 1.5%",
      "30% cost savings through optimized supplier selection",
      "On-time delivery rate improved to 97%",
      "Established long-term relationships with 4 core suppliers",
    ],
    image: "warehouse-inspection",
  },
  {
    company: "TechVault Accessories",
    location: "United States",
    category: "Consumer Electronics Accessories",
    challenge:
      "A fast-growing e-commerce brand needed to source Bluetooth earphones, charging cables, and phone accessories. They had been using Alibaba but struggled to find suppliers who could consistently meet their quality specs and MOQ requirements.",
    solution:
      "We identified and validated 3 certified manufacturers with experience exporting to North America. We negotiated favorable payment terms and coordinated the sampling process. During production, we conducted weekly quality checks and provided detailed reports. We also consolidated shipments from multiple factories to reduce freight costs.",
    results: [
      "3 approved suppliers within 6 weeks",
      "Full product line launched in 4 months",
      "40% reduction in shipping costs through consolidation",
      "Product returns rate under 2%",
    ],
    image: "electronics-assembly",
  },
  {
    company: "SafeGuard Industrial",
    location: "Australia",
    category: "Industrial Safety Equipment",
    challenge:
      "An Australian distributor needed to source industrial safety equipment including harnesses, helmets, and protective gear. With strict Australian safety standards compliance required, they needed suppliers who could meet AS/NZS certifications.",
    solution:
      "We performed detailed on-site audits of 8 factories across 3 provinces, focusing on quality management systems and certification validity. We identified 5 factories with valid AS/NZS certifications or the capability to obtain them. Our QC team provided ongoing inspection services for recurring orders.",
    results: [
      "5 qualified and certified factories identified",
      "99% QC pass rate across first year of orders",
      "Full compliance with Australian safety standards",
      "Ongoing monthly inspection program established",
    ],
    image: "safety-gear-factory",
  },
  {
    company: "GreenLeaf Packaging",
    location: "United Kingdom",
    category: "Eco-Friendly Packaging",
    challenge:
      "A UK-based packaging company wanted to source biodegradable and recyclable packaging solutions from China. They needed suppliers who could provide certified eco-friendly materials and meet EU packaging regulations.",
    solution:
      "We researched suppliers specializing in sustainable materials across China. After initial screening, we audited 5 factories for their environmental certifications and material sourcing practices. We coordinated sample development and testing for biodegradability compliance.",
    results: [
      "4 eco-certified suppliers approved",
      "Successful EU compliance certification",
      "25% cost advantage over local European suppliers",
      "Established sustainable supply chain program",
    ],
    image: "eco-packaging",
  },
  {
    company: "FitForge Sports",
    location: "Canada",
    category: "Fitness Equipment",
    challenge:
      "A Canadian fitness brand needed to source a line of home gym equipment including resistance bands, yoga mats, and adjustable dumbbells. They required consistent quality across multiple product types and reliable supply for their e-commerce operations.",
    solution:
      "We identified manufacturing clusters in Jiangsu and Zhejiang specializing in fitness equipment. After auditing 6 factories, we selected 3 that demonstrated strong quality control processes. We set up consolidated shipping and managed inventory buffer stock to ensure continuous supply.",
    results: [
      "Product line launched within 3 months",
      "Supply chain established with 98% fill rate",
      "Quality consistency across all product lines",
      "Cost reduction of 35% vs. previous suppliers",
    ],
    image: "fitness-equipment",
  },
]

export default function CaseStudies() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              See how we've helped businesses around the world source products from
              China with confidence. Real projects, real results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-bg">
        <div className="section-container">
          <div className="space-y-12">
            {caseStudies.map((item, i) => (
              <div key={i} className="card">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1 order-2 lg:order-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-txt-muted">{item.location}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-primary mb-2">{item.company}</h2>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-txt-primary uppercase tracking-wider mb-2">The Challenge</h3>
                      <p className="text-txt-secondary text-sm mb-6">{item.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-txt-primary uppercase tracking-wider mb-2">Our Solution</h3>
                      <p className="text-txt-secondary text-sm">{item.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-txt-primary uppercase tracking-wider mb-3">Results</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {item.results.map((result, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-txt-secondary">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-full lg:w-80 order-1 lg:order-2">
                    <div className="rounded-lg overflow-hidden bg-gray-200 h-60 lg:h-full min-h-[200px]">
                      <div
                        className="w-full h-full bg-primary-dark/10"
                        data-strk-img-id={`cs-img-${i}-x9y8z7`}
                        data-strk-img={`[cs-title-${i}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                      />
                      <span id={`cs-title-${i}`} className="hidden">{item.company} {item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we'll show you how we can deliver results.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
            Start Your Sourcing Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}