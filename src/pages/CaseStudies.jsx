import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, Package, DollarSign, Clock, MapPin } from 'lucide-react'

const caseStudies = [
  {
    title: 'US Retailer Sourced Electronics in 3 Weeks',
    client: 'Mid-size US Consumer Electronics Retailer',
    industry: 'Consumer Electronics',
    challenge: 'Client needed 10,000 units of a proprietary USB-C charging cable within 6 weeks to meet a retail launch deadline. Existing supplier had quality issues and could not meet the timeline.',
    approach: 'We identified 8 potential factories within 48 hours, conducted on-site verification at 3 facilities, negotiated pricing and MOQs, and selected a supplier with proven OEM experience in cables.',
    result: 'Supplier secured within 3 weeks. First shipment delivered on time. Unit cost 34% lower than the previous supplier. Defect rate dropped from 12% to under 1%.',
    resultMetric: '34% cost savings',
    icon: TrendingUp,
    imgId: 'cs-detail-electronics-01',
    titleId: 'cs-detail-title-0',
  },
  {
    title: 'European Brand Launched Private Label Line',
    client: 'German Wellness & Home Brand',
    industry: 'Home & Garden',
    challenge: 'Client wanted to launch a full line of bamboo kitchenware products under their own brand. No existing supplier relationships in China and limited knowledge of sustainable materials sourcing.',
    approach: 'We sourced specialized bamboo manufacturers, managed OEM development including mold creation and packaging design, conducted quality inspections at every stage, and coordinated the first production run.',
    result: 'Full product line launched 2 weeks ahead of schedule. All products met EU food safety standards. Client placed a second order within 30 days of launch.',
    resultMetric: '2 weeks ahead of schedule',
    icon: Package,
    imgId: 'cs-detail-bamboo-02',
    titleId: 'cs-detail-title-1',
  },
  {
    title: 'Australian Distributor Switched Suppliers',
    client: 'Australian Industrial Supplies Distributor',
    industry: 'Machinery & Industrial',
    challenge: 'Client was experiencing 15% defect rates with their current supplier of industrial hand tools, leading to returns and customer complaints. Needed to find a new supplier without disrupting supply chain.',
    approach: 'We audited the existing supplier to identify root causes, then verified 5 alternative factories. Selected a supplier with ISO 9001 certification and placed a test order before transitioning full volume.',
    result: 'Defect rate dropped from 15% to under 2%. Customer complaints dropped by 90%. Client saved approximately $40,000 in annual rework and return costs.',
    resultMetric: 'Defect rate dropped to <2%',
    icon: DollarSign,
    imgId: 'cs-detail-aus-03',
    titleId: 'cs-detail-title-2',
  },
  {
    title: 'UK Startup Scaled from Prototype to Mass Production',
    client: 'UK Consumer Tech Startup',
    industry: 'Consumer Electronics',
    challenge: 'Startup had a working prototype of a smart device but needed a manufacturing partner capable of scaling from 500 units to 50,000 units within 12 months while maintaining strict quality standards.',
    approach: 'We managed the full product development cycle: refined the design for manufacturability, sourced and managed tooling/mold creation, handled sample approvals, and oversaw the first production batch.',
    result: 'First batch of 2,000 units delivered with 0.5% defect rate. Scaled successfully to 50,000 units within 10 months. Client secured Series A funding partly due to manufacturing readiness.',
    resultMetric: '0.5% defect rate at scale',
    icon: Clock,
    imgId: 'cs-detail-uk-04',
    titleId: 'cs-detail-title-3',
  },
  {
    title: 'Middle East Retail Chain Expanded Product Line',
    client: 'Retail Chain in the Middle East',
    industry: 'Textiles & Apparel',
    challenge: 'Chain needed to expand their home textile line with 15 new SKUs across bedding, towels, and curtains. Required specific fabric certifications and custom packaging in Arabic and English.',
    approach: 'We identified specialized textile factories, managed fabric sourcing and certification, coordinated custom packaging design and printing, and conducted pre-shipment inspections for each SKU.',
    result: 'All 15 SKUs delivered on schedule. Products met OEKO-TEX certification requirements. Custom packaging exactly as specified. Client expanded the line by another 20 SKUs the following year.',
    resultMetric: '15 SKUs on schedule',
    icon: MapPin,
    imgId: 'cs-detail-me-05',
    titleId: 'cs-detail-title-4',
  },
  {
    title: 'Canadian E-commerce Brand Found Sustainable Packaging',
    client: 'Canadian Eco-friendly E-commerce Brand',
    industry: 'Packaging & Printing',
    challenge: 'Brand needed custom eco-friendly packaging that matched their sustainability values: compostable materials, soy-based inks, and zero-plastic shipping materials at competitive prices.',
    approach: 'We identified specialized eco-packaging manufacturers, reviewed material certifications, managed sample iterations, and coordinated the first production run with full quality oversight.',
    result: 'Packaging cost 18% lower than the client\'s previous non-eco supplier. All materials compostable within 90 days. Customer feedback on packaging quality was overwhelmingly positive.',
    resultMetric: '18% cost savings + eco certified',
    icon: TrendingUp,
    imgId: 'cs-detail-can-06',
    titleId: 'cs-detail-title-5',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[#1A365D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-[#C27A3E]/20 text-[#F5EDE3] text-xs font-medium tracking-wider uppercase rounded-full mb-4">
            Client Results
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real results from real clients across industries and continents. See how we have helped businesses like yours.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => {
              const Icon = cs.icon
              const isReversed = i % 2 === 1
              return (
                <div
                  key={cs.title}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
                    <div className={`relative h-64 lg:h-auto bg-slate-100 ${isReversed ? 'lg:order-2' : ''}`}>
                      <img
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.titleId}]`}
                        data-strk-img-ratio="3x2"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A365D]/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                        <div className="bg-[#C27A3E] text-white text-xs font-semibold px-3 py-1.5 rounded-md inline-flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          {cs.resultMetric}
                        </div>
                      </div>
                    </div>
                    <div className={`p-6 lg:p-10 ${isReversed ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#C27A3E] text-xs font-semibold uppercase tracking-wider">{cs.industry}</span>
                      </div>
                      <h2 id={cs.titleId} className="text-xl lg:text-2xl font-bold text-[#1A365D] mb-2">{cs.title}</h2>
                      <p className="text-slate-500 text-sm mb-6">{cs.client}</p>

                      <div className="space-y-5">
                        <div>
                          <h4 className="text-xs font-semibold text-[#1A365D] uppercase tracking-wider mb-1">The Challenge</h4>
                          <p className="text-[#64748B] text-sm leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#1A365D] uppercase tracking-wider mb-1">Our Approach</h4>
                          <p className="text-[#64748B] text-sm leading-relaxed">{cs.approach}</p>
                        </div>
                        <div className="bg-[#F5EDE3] rounded-lg p-4">
                          <h4 className="text-xs font-semibold text-[#C27A3E] uppercase tracking-wider mb-1">The Result</h4>
                          <p className="text-[#1A365D] text-sm font-medium leading-relaxed">{cs.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">Ready for Results Like These?</h2>
          <p className="text-[#64748B] mb-6">
            Let us discuss how we can help you achieve similar outcomes for your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C27A3E] text-white text-sm font-semibold rounded-md hover:bg-[#A8642E] transition-colors"
          >
            Get Your Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
