import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, TrendingDown, Clock, ShieldCheck, Star } from "lucide-react"
import Button from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const cases = [
  {
    company: "EuroTech GmbH",
    industry: "Industrial Automation",
    location: "Munich, Germany",
    result: "Reduced supplier costs by 22%",
    icon: TrendingDown,
    challenge: "EuroTech needed reliable PCB and controller manufacturers in China but had been burned by inconsistent quality and missed deadlines with previous suppliers. They needed a partner who could vet factories thoroughly and manage production remotely.",
    solution: "We audited 12 potential suppliers across Shenzhen, Suzhou, and Shanghai. After selecting 3 finalists, we coordinated sample production and negotiated pricing. We implemented a multi-stage inspection process covering raw materials, during-production, and pre-shipment checks.",
    outcome: "EuroTech reduced component costs by 22% while improving on-time delivery from 65% to 97%. The first production run of 10,000 units passed inspection with a 99.3% acceptance rate.",
    resultIcon: TrendingDown,
    bgIndex: 0
  },
  {
    company: "Pacific Home Goods",
    industry: "Home & Lifestyle",
    location: "Sydney, Australia",
    result: "Cut lead time from 90 to 45 days",
    icon: Clock,
    challenge: "Pacific Home Goods sourced home products from multiple suppliers, resulting in fragmented logistics, inconsistent quality, and lead times exceeding 90 days. They needed a consolidated approach.",
    solution: "We restructured their supply chain by reducing their supplier base from 8 to 3 strategic partners. We negotiated consolidated shipping and implemented a continuous quality monitoring program with monthly factory visits.",
    outcome: "Lead times dropped from 90 to 45 days, shipping costs decreased by 18% through consolidation, and product defect rates fell by 60%. Pacific Home Goods expanded their product line by 40% in the following year.",
    resultIcon: Clock,
    bgIndex: 1
  },
  {
    company: "NorthStar Medical",
    industry: "Medical Devices",
    location: "Chicago, USA",
    result: "Zero defects on first shipment of 5,000 units",
    icon: ShieldCheck,
    challenge: "A US medical device company needed to manufacture specialized monitoring equipment components in China while maintaining FDA-compliant quality standards. Any defects could have serious regulatory implications.",
    solution: "We selected a supplier with ISO 13485 certification and conducted an extensive 3-day audit covering all production processes. We developed a custom QC checklist aligned with FDA requirements and performed three separate inspections during production.",
    outcome: "The first shipment of 5,000 units arrived with zero defects. NorthStar saved 35% compared to their previous European supplier and has since expanded to 15,000 units per quarter with SSourcing China managing all quality control.",
    resultIcon: ShieldCheck,
    bgIndex: 2
  },
  {
    company: "GreenPack Solutions",
    industry: "Sustainable Packaging",
    location: "London, UK",
    result: "42% cost savings on custom packaging",
    icon: TrendingDown,
    challenge: "GreenPack needed eco-friendly custom packaging manufactured in China but struggled to find suppliers who could meet both sustainability requirements and budget constraints.",
    solution: "We identified 6 suppliers specializing in sustainable materials, negotiated sample runs, and tested compostability certifications. We arranged factory visits and coordinated prototype iterations.",
    outcome: "GreenPack achieved 42% cost savings compared to European suppliers while maintaining all sustainability certifications. Order volume grew from 20,000 to 150,000 units in 18 months.",
    resultIcon: TrendingDown,
    bgIndex: 3
  },
  {
    company: "Triton Automotive",
    industry: "Automotive Parts",
    location: "Detroit, USA",
    result: "Reduced defect rate from 8% to 0.5%",
    icon: ShieldCheck,
    challenge: "Triton was sourcing automotive sensors from China with an 8% defect rate, causing costly rework and delayed shipments to their OEM customers.",
    solution: "We replaced 2 underperforming suppliers with vetted alternatives, implemented rigorous incoming quality checks, and stationed an inspector at the factory full-time during production runs.",
    outcome: "Defect rates dropped from 8% to 0.5%. Triton saved $340,000 annually in rework costs and improved their own on-time delivery to automotive clients.",
    resultIcon: ShieldCheck,
    bgIndex: 4
  },
  {
    company: "VeloSport International",
    industry: "Sporting Goods",
    location: "Amsterdam, Netherlands",
    result: "Scaled from 500 to 8,000 units per order",
    icon: TrendingDown,
    challenge: "VeloSport needed a reliable supplier for bicycle components as demand grew rapidly. Their existing supplier couldn't scale production while maintaining quality.",
    solution: "We identified a larger manufacturer with spare capacity, negotiated tiered pricing for volume growth, and set up a quality control system that scaled with order size.",
    outcome: "VeloSport scaled from 500 to 8,000 units per order within 12 months. Per-unit costs dropped 31%, and quality scores improved from 92% to 99.2%.",
    resultIcon: TrendingDown,
    bgIndex: 5
  }
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-4">Case Studies</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Real Results from Real Partnerships
            </h1>
            <p className="text-lg text-surface-300 leading-relaxed">
              See how we've helped businesses across industries source better, faster, and more cost-effectively from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 md:py-24 bg-surface-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
          {cases.map((cs, i) => (
            <article key={cs.company} className="bg-white rounded-xl shadow-sm border border-surface-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <div
                    data-strk-bg-id={`case-detail-${i}`}
                    data-strk-bg={`[case-company-${i}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                    className="h-48 md:h-full bg-brand-100"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 id={`case-company-${i}`} className="text-xl md:text-2xl font-bold text-brand-900">{cs.company}</h2>
                      <p className="text-sm text-brand-500 font-medium">{cs.industry} | {cs.location}</p>
                    </div>
                    <cs.resultIcon className="w-8 h-8 text-brand-500 flex-shrink-0" />
                  </div>

                  <div className="inline-block bg-accent-50 text-accent-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {cs.result}
                  </div>

                  <div className="space-y-4 text-sm text-surface-600">
                    <div>
                      <h3 className="font-semibold text-surface-800 mb-1">Challenge</h3>
                      <p className="leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-800 mb-1">Solution</h3>
                      <p className="leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-surface-800 mb-1">Outcome</h3>
                      <p className="leading-relaxed">{cs.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Success Story</h2>
          <p className="text-lg text-brand-300 mb-8">
            Tell us about your sourcing needs and we'll show you how we can deliver similar results.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}