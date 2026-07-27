import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, TrendingUp, Clock, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 'european-electronics',
    title: 'European Electronics Brand Cuts Costs by 30%',
    industry: 'Consumer Electronics',
    country: 'Germany',
    challenge: 'A German electronics company was struggling with high production costs from their existing supplier and needed to find a more cost-effective alternative without compromising quality.',
    solution: 'We identified three qualified PCB assembly factories in Shenzhen, conducted on-site audits, coordinated sample production, and negotiated pricing. We also implemented a three-stage QC process to ensure consistent quality.',
    result: '30% cost reduction on unit price, 98% on-time delivery rate, zero quality rejections over 12 months.',
    metrics: [
      { label: 'Cost Reduction', value: '30%', icon: TrendingDown },
      { label: 'On-Time Delivery', value: '98%', icon: Clock },
      { label: 'Defect Rate', value: '0%', icon: Shield },
    ],
  },
  {
    id: 'us-furniture',
    title: 'US Furniture Retailer Scales from 1 to 5 Containers Monthly',
    industry: 'Furniture & Home Goods',
    country: 'United States',
    challenge: 'A growing US furniture retailer needed to scale production rapidly while maintaining quality. Their existing supplier could not handle the increased volume.',
    solution: 'We sourced a medium-sized furniture factory in Foshan with the capacity to scale. We managed the transition from prototype to mass production, implemented weekly production monitoring, and coordinated container loading inspections.',
    result: 'Scaled from 1 to 5 containers per month, zero defect shipments, 15% lower unit cost at higher volumes.',
    metrics: [
      { label: 'Volume Growth', value: '5x', icon: TrendingUp },
      { label: 'Defect Rate', value: '0%', icon: Shield },
      { label: 'Cost Savings', value: '15%', icon: TrendingDown },
    ],
  },
  {
    id: 'australian-packaging',
    title: 'Australian Cosmetics Brand Finds Premium Packaging Partner',
    industry: 'Packaging & Beauty',
    country: 'Australia',
    challenge: 'An Australian cosmetics brand needed premium custom packaging with specific finishes, but local suppliers were too expensive and previous overseas attempts had quality issues.',
    solution: 'We identified a specialized packaging manufacturer in Yiwu with experience in luxury cosmetics packaging. We coordinated design files, managed three rounds of sampling, and conducted pre-production and pre-shipment inspections.',
    result: '40% savings on packaging costs, 100% on-spec delivery, packaging won a design award.',
    metrics: [
      { label: 'Cost Savings', value: '40%', icon: TrendingDown },
      { label: 'Quality Rate', value: '100%', icon: Shield },
      { label: 'Time Saved', value: '6 weeks', icon: Clock },
    ],
  },
  {
    id: 'uk-industrial',
    title: 'UK Industrial Parts Distributor Streamlines Supply Chain',
    industry: 'Industrial Parts & Machinery',
    country: 'United Kingdom',
    challenge: 'A UK distributor of industrial components was dealing with multiple unreliable suppliers, inconsistent quality, and frequent delays that were affecting their customer relationships.',
    solution: 'We consolidated their sourcing into three verified factories in Ningbo and Wenzhou. We implemented a supplier scorecard system, regular factory visits, and a standardized quality inspection protocol.',
    result: 'Consolidated 8 suppliers to 3, 25% overall cost reduction, 99% on-time delivery across all orders.',
    metrics: [
      { label: 'Supplier Reduction', value: '8 → 3', icon: Shield },
      { label: 'Cost Savings', value: '25%', icon: TrendingDown },
      { label: 'On-Time Rate', value: '99%', icon: Clock },
    ],
  },
  {
    id: 'canadian-sports',
    title: 'Canadian Sports Brand Launches New Product Line',
    industry: 'Sports & Outdoor',
    country: 'Canada',
    challenge: 'A Canadian sports brand wanted to launch a new line of fitness accessories but had no experience sourcing from China and needed end-to-end support from product development to delivery.',
    solution: 'We helped develop product specifications, sourced materials, identified a factory in Xiamen, managed prototyping and sampling, and coordinated the entire production run with quality inspections.',
    result: 'Successfully launched 12 SKUs, first-year sales exceeded projections by 40%, established a reliable long-term supply chain.',
    metrics: [
      { label: 'SKUs Launched', value: '12', icon: TrendingUp },
      { label: 'Sales vs Target', value: '+40%', icon: TrendingUp },
      { label: 'Lead Time', value: '10 weeks', icon: Clock },
    ],
  },
  {
    id: 'dutch-promotional',
    title: 'Dutch Promotional Products Company Doubles Margins',
    industry: 'Promotional Products',
    country: 'Netherlands',
    challenge: 'A Dutch promotional products company was buying from European middlemen at high markups. They wanted to source directly from China but had no idea where to start.',
    solution: 'We connected them with five specialized factories for different product categories. We managed sample coordination, negotiated factory-direct pricing, and set up a quality control process for each product line.',
    result: 'Doubled gross margins from 25% to 50%, reduced lead times by 30%, expanded product catalog by 200+ items.',
    metrics: [
      { label: 'Margin Growth', value: '25% → 50%', icon: TrendingUp },
      { label: 'Lead Time', value: '-30%', icon: Clock },
      { label: 'New Products', value: '200+', icon: TrendingUp },
    ],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Case Studies
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real Results for Real Clients
          </h1>
          <p className="mt-4 text-navy-200 text-lg max-w-2xl mx-auto">
            See how we have helped businesses across industries and continents source better, reduce costs, and scale their operations.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={cs.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-gray-50 rounded-2xl overflow-hidden ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                >
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="p-8 md:p-10 lg:p-12">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                          {cs.industry}
                        </span>
                        <span className="text-xs text-navy-400">{cs.country}</span>
                      </div>
                      <h2 id={`case-title-${cs.id}`} className="text-xl md:text-2xl font-bold text-navy-900 mb-6">
                        {cs.title}
                      </h2>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-navy-700 mb-1">Challenge</h4>
                          <p className="text-sm text-navy-500 leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-navy-700 mb-1">Our Solution</h4>
                          <p className="text-sm text-navy-500 leading-relaxed">{cs.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-navy-700 mb-1">Results</h4>
                          <p className="text-sm text-navy-500 leading-relaxed">{cs.result}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {cs.metrics.map((m) => {
                          const Icon = m.icon
                          return (
                            <div key={m.label} className="bg-white rounded-lg p-3 text-center border border-gray-100">
                              <Icon className="w-4 h-4 text-brand-600 mx-auto mb-1" />
                              <div className="text-lg font-bold text-navy-900">{m.value}</div>
                              <div className="text-xs text-navy-400">{m.label}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="aspect-[4/3] bg-gray-200">
                      <img
                        alt={cs.title}
                        data-strk-img-id={`case-study-detail-${cs.id}-${idx}b6f1`}
                        data-strk-img={`[case-title-${cs.id}] manufacturing success China`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        className="w-full h-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-brand-100 text-lg mb-8">
            Tell us about your sourcing needs and we will create a customized plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}