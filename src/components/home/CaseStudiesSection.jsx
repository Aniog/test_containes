import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react'

const caseStudies = [
  {
    title: 'US Retailer Reduces Costs by 35%',
    client: 'Major US Home Goods Retailer',
    industry: 'Home & Garden',
    result: '35% cost reduction',
    description: 'Helped a US retailer source home décor products from verified Guangdong factories, reducing costs while maintaining quality standards.',
    metrics: [
      { icon: DollarSign, value: '35%', label: 'Cost Saved' },
      { icon: TrendingUp, value: '200+', label: 'SKUs Sourced' },
      { icon: Clock, value: '45 days', label: 'Lead Time' },
    ],
    image: 'home decor products retail warehouse shelf display',
    imgId: 'case-study-1-img',
    titleId: 'case-study-1-title',
    descId: 'case-study-1-desc',
  },
  {
    title: 'European Brand Launches Product Line',
    client: 'German Consumer Electronics Brand',
    industry: 'Electronics',
    result: 'Successful product launch',
    description: 'Managed end-to-end sourcing for a new consumer electronics product line, from prototype to mass production with full QC oversight.',
    metrics: [
      { icon: DollarSign, value: '28%', label: 'Below Budget' },
      { icon: TrendingUp, value: '50K units', label: 'First Order' },
      { icon: Clock, value: '60 days', label: 'To Market' },
    ],
    image: 'consumer electronics products packaging assembly line manufacturing',
    imgId: 'case-study-2-img',
    titleId: 'case-study-2-title',
    descId: 'case-study-2-desc',
  },
  {
    title: 'Australian Startup Scales Production',
    client: 'Australian Outdoor Equipment Startup',
    industry: 'Outdoor & Sports',
    result: '10x production scale-up',
    description: 'Guided an Australian startup from small batch orders to full-scale production, establishing reliable supply chain for rapid growth.',
    metrics: [
      { icon: DollarSign, value: '42%', label: 'Margin Improved' },
      { icon: TrendingUp, value: '10x', label: 'Scale Achieved' },
      { icon: Clock, value: '30 days', label: 'Setup Time' },
    ],
    image: 'outdoor equipment sports gear manufacturing factory production',
    imgId: 'case-study-3-img',
    titleId: 'case-study-3-title',
    descId: 'case-study-3-desc',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Real results from real clients. See how we have helped businesses like yours succeed with China sourcing.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}] sourcing case study success`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  className="w-full h-full object-cover bg-gray-100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.title}
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  {study.industry}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 id={study.titleId} className="text-xl font-bold text-navy mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{study.client}</p>
                <p id={study.descId} className="text-gray-600 mb-5">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {study.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center p-3 bg-gray-50 rounded-lg">
                      <metric.icon className="h-4 w-4 text-primary mx-auto mb-1" />
                      <div className="text-lg font-bold text-navy">{metric.value}</div>
                      <div className="text-xs text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Read full case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
