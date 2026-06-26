import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { TrendingUp, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { SectionHeader } from "@/components/ui/SectionHeader"

const caseStudies = [
  {
    id: "uk-furniture",
    category: "Furniture",
    country: "United Kingdom",
    title: "UK Furniture Retailer Reduces Sourcing Costs by 23%",
    challenge: "A UK-based furniture importer was paying above-market prices from a single supplier and experiencing inconsistent quality. They needed to diversify their supply base without disrupting their product range.",
    solution: "We identified 4 alternative suppliers through our network, conducted on-site factory audits at each, and coordinated sample production. After reviewing samples and audit reports, the client selected 2 new primary suppliers. We renegotiated pricing and payment terms on their behalf.",
    results: ["23% reduction in unit cost", "0 quality rejections over 12 months", "Lead time reduced from 65 to 48 days", "2 backup suppliers established"],
    duration: "3 months",
    imgId: "cs-uk-furniture-img-a1b2c3",
    titleId: "cs-uk-furniture-title",
    descId: "cs-uk-furniture-desc",
  },
  {
    id: "us-electronics",
    category: "Electronics",
    country: "United States",
    title: "US Brand Launches Private Label Electronics Line in 4 Months",
    challenge: "An American e-commerce brand wanted to develop a private label line of smart home accessories. They had no existing supplier relationships in China and needed end-to-end support from factory selection to branded packaging.",
    solution: "We managed the entire OEM process: factory identification, capability assessment, sample development across 3 revision rounds, branded packaging design coordination, and production management. We conducted pre-shipment inspection before the first container was loaded.",
    results: ["Product launched in 4 months", "15,000 units shipped in first order", "Branded packaging approved in 2 rounds", "Pre-shipment inspection passed first time"],
    duration: "4 months",
    imgId: "cs-us-electronics-img-d4e5f6",
    titleId: "cs-us-electronics-title",
    descId: "cs-us-electronics-desc",
  },
  {
    id: "au-apparel",
    category: "Apparel",
    country: "Australia",
    title: "Australian Fashion Brand Achieves Full Compliance for Seasonal Launch",
    challenge: "An Australian fashion brand needed to source a new apparel line from China with full REACH and OEKO-TEX compliance for the European market. Previous suppliers had failed compliance testing, causing costly delays.",
    solution: "We sourced certified factories with existing OEKO-TEX certification, coordinated pre-production material testing, and managed production follow-up to ensure no non-compliant materials were introduced during manufacturing. We arranged third-party lab testing before shipment.",
    results: ["100% compliance on first test", "On-time delivery for seasonal launch", "3 certified factories onboarded", "Zero compliance issues in 2 subsequent orders"],
    duration: "6 weeks",
    imgId: "cs-au-apparel-img-g7h8i9",
    titleId: "cs-au-apparel-title",
    descId: "cs-au-apparel-desc",
  },
  {
    id: "de-industrial",
    category: "Industrial",
    country: "Germany",
    title: "German Distributor Verifies New Supplier After Quality Dispute",
    challenge: "A German industrial equipment distributor had received a shipment with significant quality defects from a new Chinese supplier. They needed an independent assessment of the factory before deciding whether to continue the relationship.",
    solution: "We conducted a comprehensive factory audit covering production processes, quality control systems, and root cause analysis of the defect issue. We provided a detailed report with corrective action recommendations and monitored the factory's implementation before the next order.",
    results: ["Root cause identified and documented", "Corrective actions implemented and verified", "Next order passed pre-shipment inspection", "Ongoing QC monitoring established"],
    duration: "2 weeks",
    imgId: "cs-de-industrial-img-j1k2l3",
    titleId: "cs-de-industrial-title",
    descId: "cs-de-industrial-desc",
  },
  {
    id: "ca-toys",
    category: "Toys",
    country: "Canada",
    title: "Canadian Toy Brand Meets EN71 and ASTM Safety Standards",
    challenge: "A Canadian toy brand was expanding into the EU market and needed to ensure their China-manufactured products met EN71 safety standards. They also needed to update their product range with new designs.",
    solution: "We sourced factories with experience in EN71-compliant production, coordinated sample testing at accredited labs, and managed production monitoring to ensure no material substitutions occurred. We also helped coordinate CE marking documentation.",
    results: ["EN71 compliance achieved for full range", "CE marking documentation completed", "2 new product designs developed", "EU market launch on schedule"],
    duration: "5 months",
    imgId: "cs-ca-toys-img-m4n5o6",
    titleId: "cs-ca-toys-title",
    descId: "cs-ca-toys-desc",
  },
  {
    id: "sg-packaging",
    category: "Packaging",
    country: "Singapore",
    title: "Singapore Retailer Switches to Eco-Friendly Packaging at Scale",
    challenge: "A Singapore-based retailer needed to transition their entire packaging range to FSC-certified and biodegradable materials to meet new sustainability commitments, without increasing costs significantly.",
    solution: "We identified 3 packaging manufacturers with FSC certification and experience in biodegradable materials. We coordinated sample production for 12 SKUs, managed pricing negotiations, and arranged a pilot order with full quality inspection.",
    results: ["12 SKUs transitioned to eco packaging", "Cost increase kept under 8%", "FSC certification verified for all suppliers", "Pilot order delivered on time"],
    duration: "8 weeks",
    imgId: "cs-sg-packaging-img-p7q8r9",
    titleId: "cs-sg-packaging-title",
    descId: "cs-sg-packaging-desc",
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#1A1F2E] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-3">Case Studies</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Real Results for Real Buyers</h1>
            <p className="text-lg text-[#9AAABB] leading-relaxed">
              See how we've helped businesses across industries and countries source smarter, reduce risk, and grow their supply chains from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className="bg-[#F7F9FC] rounded-2xl overflow-hidden border border-[#D8E0EA]">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "" : ""}`}>
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge>{cs.category}</Badge>
                      <Badge className="bg-white/90 text-[#3D4A5C]">{cs.country}</Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-[#6B7A8D]" />
                      <span className="text-[#6B7A8D] text-sm">Project duration: {cs.duration}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-[#1A1F2E] mb-4">{cs.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#1A4B8C] mb-1">Challenge</p>
                        <p id={cs.descId} className="text-[#3D4A5C] text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#1A4B8C] mb-1">Our Approach</p>
                        <p className="text-[#3D4A5C] text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl border border-[#D8E0EA] p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#27AE60] mb-3 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> Results
                      </p>
                      <ul className="space-y-1">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-[#1A1F2E] text-sm font-medium">
                            <CheckCircle className="w-4 h-4 text-[#27AE60] flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A4B8C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-[#93C5FD] text-lg mb-8">
            Tell us about your sourcing challenge and we'll put together a plan to address it.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
