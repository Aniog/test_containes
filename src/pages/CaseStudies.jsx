import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, Clock, DollarSign, Award } from 'lucide-react'

const cases = [
  {
    client: 'European Retail Chain',
    industry: 'Retail / Kitchenware',
    title: 'Sourcing $2M in Private Label Kitchenware',
    challenge: 'A major European retail chain needed to source 40 new SKUs of kitchenware for a nationwide rollout across 200+ stores. They needed consistent quality, competitive pricing, and on-time delivery across multiple product lines.',
    approach: [
      'Researched 50+ potential suppliers across 3 provinces',
      'Conducted on-site audits at 12 shortlisted factories',
      'Negotiated consolidated pricing across the full SKU range',
      'Implemented DUPRO and PSI inspections for every SKU',
    ],
    result: '32% cost reduction versus previous supplier, zero defect rate on first shipment, delivery completed 2 weeks ahead of schedule.',
    imgId: 'case-detail-1',
    titleId: 'case-d-title-1',
    descId: 'case-d-desc-1',
  },
  {
    client: 'US E-commerce Brand',
    industry: 'E-commerce / Electronics Accessories',
    title: 'Scaling from Prototype to $500K/month',
    challenge: 'A US-based e-commerce startup had a product idea for mobile accessories but no manufacturing experience. They needed a supplier who could scale from prototype to 50,000 units per month within 6 months.',
    approach: [
      'Sourced 8 manufacturers capable of prototype-to-scale production',
      'Managed tooling development and mold creation',
      'Implemented progressive quality checkpoints',
      'Coordinated air and sea freight based on demand forecasts',
    ],
    result: 'Launched in 4 months (2 months ahead of target), achieved 15% below target cost, zero returns in first 90 days.',
    imgId: 'case-detail-2',
    titleId: 'case-d-title-2',
    descId: 'case-d-desc-2',
  },
  {
    client: 'Australian Distributor',
    industry: 'Industrial / Mining Equipment',
    title: 'Industrial Parts Sourcing for Mining Contracts',
    challenge: 'An Australian industrial distributor needed a reliable supply chain for heavy machinery replacement parts to fulfill a $1.2M annual mining contract. Quality failures were not an option.',
    approach: [
      'Audited 15 heavy machinery parts manufacturers',
      'Verified ISO 9001 and mining-specific certifications',
      'Negotiated extended warranty and replacement terms',
      'Set up quarterly production audits and sample testing',
    ],
    result: 'Contract renewed for a second year, 3 suppliers verified, zero quality complaints, 12% cost reduction year-over-year.',
    imgId: 'case-detail-3',
    titleId: 'case-d-title-3',
    descId: 'case-d-desc-3',
  },
  {
    client: 'UK Fashion Brand',
    industry: 'Fashion / Apparel',
    title: 'Sustainable Apparel Manufacturing',
    challenge: 'A UK-based sustainable fashion brand needed a manufacturing partner who could produce organic cotton garments while meeting strict environmental and labor compliance standards.',
    approach: [
      'Sourced factories with GOTS and Fair Trade certifications',
      'Conducted social compliance audits at 8 facilities',
      'Implemented blockchain-tracked supply chain transparency',
      'Managed dyeing and finishing processes with eco-friendly partners',
    ],
    result: '100% compliant with brand sustainability standards, 25% faster production cycle than industry average, brand featured in major sustainability reports.',
    imgId: 'case-detail-4',
    titleId: 'case-d-title-4',
    descId: 'case-d-desc-4',
  },
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
      <section className="bg-[#1a2b4a] pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container-main text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Client Case Studies
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Real results from real projects. See how we have helped businesses across industries succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white py-10 border-b border-[#e2e8f0]">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, value: '500+', label: 'Buyers Served' },
              { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
              { icon: DollarSign, value: '$50M+', label: 'Products Sourced' },
              { icon: Clock, value: '10+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="w-5 h-5 text-[#c4951a] mx-auto mb-2" />
                <p className="text-xl md:text-2xl font-extrabold text-[#1a2b4a]">
                  {s.value}
                </p>
                <p className="text-xs text-[#64748b] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-[#f6f7f9] section-padding">
        <div className="container-main">
          <div className="space-y-12 md:space-y-16">
            {cases.map((c, idx) => (
              <div
                key={c.title}
                className={`bg-white rounded-xl overflow-hidden border border-[#e2e8f0] flex flex-col lg:flex-row gap-0 ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-2/5 overflow-hidden shrink-0">
                  <img
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={c.title}
                    className="w-full h-56 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-3/5 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#c4951a] uppercase tracking-wide">
                      {c.client}
                    </span>
                    <span className="text-xs text-[#64748b]">
                      {c.industry}
                    </span>
                  </div>
                  <h2
                    id={c.titleId}
                    className="text-lg md:text-xl font-bold text-[#1a2b4a] mb-4"
                  >
                    {c.title}
                  </h2>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-1.5">
                      Challenge
                    </h4>
                    <p
                      id={c.descId}
                      className="text-sm text-[#1e293b] leading-relaxed"
                    >
                      {c.challenge}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#64748b] mb-1.5">
                      Our Approach
                    </h4>
                    <ul className="space-y-1.5">
                      {c.approach.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-[#1e293b]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c4951a] mt-1.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#f6f7f9] rounded-lg p-4 border border-[#e2e8f0]">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#16a34a] mb-1.5 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Result
                    </h4>
                    <p className="text-sm text-[#1e293b] font-medium">
                      {c.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16 md:py-20">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Let Us Write Your Success Story
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Every client starts with a conversation. Tell us about your project and we will show you how we can help.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
