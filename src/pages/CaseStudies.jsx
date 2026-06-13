import { Link } from 'react-router-dom'
import {
  CheckCircle, ArrowRight, Globe, TrendingUp,
  Shield, Clock, DollarSign, Users
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Electronics Retailer Cuts Procurement Costs by 32%',
    industry: 'Consumer Electronics',
    region: 'United States',
    challenge: 'A US-based electronics retailer was sourcing LED lighting products through a trading company with significant markups. They wanted to reduce costs while maintaining quality standards.',
    solution: 'We identified three alternative LED manufacturers in Shenzhen, conducted comprehensive factory audits, and evaluated samples from each. We then negotiated directly with the chosen factory, eliminating the middleman markup.',
    results: [
      '32% reduction in unit cost',
      'Quality maintained at AQL 2.5 standard',
      'Lead time reduced by 7 days',
      'Direct factory relationship established',
    ],
    quote: 'SSourcing China helped us cut out the middleman and build a direct relationship with a verified factory. The cost savings were immediate and significant.',
    client: 'James Mitchell, Procurement Director at TechFlow Electronics',
    duration: '3 weeks',
    imgId: 'case-study-electronics-8f2a4c',
    altId: 'case-detail-electronics-alt',
  },
  {
    id: 2,
    title: 'Australian Home Goods Brand Launches 15-SKU Private Label Line',
    industry: 'Home & Garden',
    region: 'Australia',
    challenge: 'An Australian home goods brand wanted to launch a private-label product line but had no experience sourcing from China. They needed end-to-end support from supplier selection to final delivery.',
    solution: 'We managed the entire sourcing process: identifying suppliers for each product category, coordinating samples, negotiating contracts, monitoring production across three different factories, and arranging consolidated shipping.',
    results: [
      '15 SKUs successfully launched',
      '3 verified factories onboarded',
      'All products met Australian safety standards',
      'On-time delivery for launch deadline',
    ],
    quote: 'The SSourcing team made what seemed impossible actually straightforward. They managed three different factories simultaneously and kept everything on track for our launch.',
    client: 'Emma Watson, Founder at Pacific Home Co.',
    duration: '8 weeks',
    imgId: 'case-study-homegoods-1b3d5e',
    altId: 'case-detail-home-alt',
  },
  {
    id: 3,
    title: 'UK Retail Chain Resolves Recurring Quality Issues',
    industry: 'Apparel',
    region: 'United Kingdom',
    challenge: 'A UK retail chain was experiencing recurring quality defects with their existing garment supplier. Defect rates had reached 12%, causing costly returns and customer complaints.',
    solution: 'We conducted a root-cause analysis at the existing factory, identifying issues in their cutting and sewing processes. We then identified and transitioned production to a verified manufacturer with stronger QC systems.',
    results: [
      'Defect rate reduced from 12% to under 2%',
      'Return costs decreased by 85%',
      'Production capacity increased by 40%',
      'Ongoing QC monitoring implemented',
    ],
    quote: 'The quality improvement was dramatic. Our returns dropped to almost nothing, and we finally have confidence in our supply chain.',
    client: 'Sarah Lindberg, Supply Chain Manager at NordHome AB',
    duration: '6 weeks',
    imgId: 'case-study-apparel-6a8c2f',
    altId: 'case-detail-apparel-alt',
  },
  {
    id: 4,
    title: 'German Industrial Buyer Reduces Supplier Risk',
    industry: 'Industrial Equipment',
    region: 'Germany',
    challenge: 'A German industrial equipment company was sourcing CNC machined parts from a single supplier with no backup. They needed to diversify their supply chain to reduce risk.',
    solution: 'We audited five potential alternative suppliers across Guangdong and Zhejiang provinces, evaluating their CNC capabilities, quality systems, and capacity. We helped onboard two additional suppliers and implemented a scorecard system.',
    results: [
      'Supply chain diversified across 3 suppliers',
      '15% cost reduction through competitive bidding',
      'Lead time reduced by 10 days',
      'Risk scorecard system implemented',
    ],
    quote: 'Having multiple verified suppliers gives us the resilience we need. SSourcing China made the diversification process smooth and efficient.',
    client: 'Klaus Weber, Head of Procurement at MaschinenTech GmbH',
    duration: '5 weeks',
    imgId: 'case-study-industrial-2d4e6f',
    altId: 'case-detail-industrial-alt',
  },
]

export default function CaseStudies() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary-dark py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Real Results for Real Businesses
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              See how we have helped international buyers solve sourcing challenges, reduce costs, and improve quality across different industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {caseStudies.map((cs, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={cs.id} className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="bg-surface-light rounded-2xl overflow-hidden border border-border">
                      <img
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.altId}]`}
                        data-strk-img-ratio="3x2"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.title}
                        id={cs.altId}
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    {/* Client Quote */}
                    <div className="mt-6 bg-accent-light rounded-xl p-6 border border-accent/20">
                      <p className="text-text-primary text-sm italic leading-relaxed mb-3">
                        &ldquo;{cs.quote}&rdquo;
                      </p>
                      <p className="text-accent font-medium text-sm">{cs.client}</p>
                    </div>
                  </div>

                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full">
                        {cs.industry}
                      </span>
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {cs.region}
                      </span>
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {cs.duration}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-text-primary mb-4">{cs.title}</h2>

                    <div className="mb-6">
                      <h3 className="font-semibold text-text-primary mb-2">Challenge</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-text-primary mb-2">Solution</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{cs.solution}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-text-primary mb-3">Results</h3>
                      <div className="space-y-2.5">
                        {cs.results.map((result) => (
                          <div key={result} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                            <span className="text-text-primary font-medium text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, num: '500+', label: 'Clients Served' },
              { icon: TrendingUp, num: '30%', label: 'Avg. Cost Savings' },
              { icon: Shield, num: '98%', label: 'Satisfaction Rate' },
              { icon: DollarSign, num: '$50M+', label: 'Products Sourced' },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-text-primary mb-1">{stat.num}</div>
                  <div className="text-text-secondary text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Similar Results?</h2>
          <p className="text-white/90 text-lg mb-8">
            Tell us about your sourcing challenge and we will put together a plan to solve it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent hover:bg-gray-100 font-semibold rounded-lg transition-colors"
          >
            Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
