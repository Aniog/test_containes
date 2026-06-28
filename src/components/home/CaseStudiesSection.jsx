import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    title: 'US Retailer Reduces Sourcing Costs by 35%',
    client: 'HomeGoods Direct, USA',
    category: 'Home & Garden',
    result: '35% cost reduction',
    desc: 'Helped a mid-size US retailer transition from domestic suppliers to verified Chinese manufacturers for their kitchenware line, reducing unit costs while maintaining quality standards.',
    metric1: { icon: DollarSign, value: '35%', label: 'Cost Savings' },
    metric2: { icon: Clock, value: '6 weeks', label: 'Setup Time' },
    metric3: { icon: TrendingUp, value: '40%', label: 'Margin Increase' },
    imgId: 'case-study-1-7d3f2a',
    query: 'retail kitchenware products warehouse',
  },
  {
    title: 'EU Brand Launches Custom Product Line',
    client: 'TechNova GmbH, Germany',
    category: 'Electronics',
    result: 'On-time delivery',
    desc: 'Managed the complete sourcing process for a German tech startup launching their first branded electronics product line, from supplier selection to quality control and shipping.',
    metric1: { icon: DollarSign, value: '28%', label: 'Below Budget' },
    metric2: { icon: Clock, value: '12 weeks', label: 'Time to Market' },
    metric3: { icon: TrendingUp, value: '0', label: 'Defect Rate' },
    imgId: 'case-study-2-4b8e1c',
    query: 'electronics manufacturing product inspection',
  },
  {
    title: 'Australian Distributor Expands Product Range',
    client: 'Pacific Trade Co., Australia',
    category: 'Building Materials',
    result: '3x product range',
    desc: 'Enabled an Australian building materials distributor to triple their product range by connecting them with verified suppliers for tiles, fixtures, and hardware across China.',
    metric1: { icon: DollarSign, value: '22%', label: 'Cost Reduction' },
    metric2: { icon: Clock, value: '8 weeks', label: 'Full Onboarding' },
    metric3: { icon: TrendingUp, value: '3x', label: 'Product Range' },
    imgId: 'case-study-3-2c9f4a',
    query: 'building materials tiles hardware distribution',
  },
]

export default function CaseStudiesSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-text-secondary text-lg max-w-xl">
              See how we have helped companies around the world source products from China more efficiently and cost-effectively.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-accent font-semibold mt-4 md:mt-0 hover:text-accent-hover transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] overflow-hidden bg-bg-card">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[case-${cs.title.replace(/\s+/g, '-').toLowerCase()}] ${cs.query}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                    {cs.category}
                  </span>
                  <span className="text-text-muted text-xs">{cs.client}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {cs.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {cs.desc}
                </p>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  {[cs.metric1, cs.metric2, cs.metric3].map((m, i) => {
                    const Icon = m.icon
                    return (
                      <div key={i} className="text-center">
                        <p className="text-lg font-bold text-primary">{m.value}</p>
                        <p className="text-xs text-text-muted">{m.label}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
