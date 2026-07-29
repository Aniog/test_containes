import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, TrendingUp, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    title: 'Electronics Manufacturer Saves 23% on Component Costs',
    industry: 'Electronics',
    challenge: 'A US electronics company was overpaying for PCB components through a middleman trading company.',
    result: 'We identified a direct manufacturer in Shenzhen, verified their ISO certification, and negotiated a 23% cost reduction with improved quality control.',
    metric: '23% cost reduction',
    metricLabel: 'vs. previous supplier',
  },
  {
    title: 'Fashion Brand Avoids $150K in Defective Goods',
    industry: 'Apparel',
    challenge: 'A European fashion brand was about to ship 10,000 units with color inconsistencies and stitching defects.',
    result: 'Our pre-shipment inspection caught the issues before goods left the factory. The supplier reworked the order at their cost, saving the client from a costly return.',
    metric: '$150K saved',
    metricLabel: 'in potential losses',
  },
  {
    title: 'Startup Launches Product Line in 8 Weeks',
    industry: 'Consumer Goods',
    challenge: 'An Australian startup needed to source, sample, and produce a new home products line with a tight deadline.',
    result: 'We sourced 3 qualified factories, managed sampling iterations, and coordinated production to deliver on time for their product launch.',
    metric: '8 weeks',
    metricLabel: 'from inquiry to delivery',
  },
]

export default function HomeCaseStudies() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results from real sourcing projects. See how we have helped buyers like you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full w-fit mb-4">
                {study.industry}
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>

              <div className="space-y-3 mb-4 flex-1">
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">Challenge</span>
                  <p className="text-sm text-gray-600 mt-0.5">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500 uppercase">Result</span>
                  <p className="text-sm text-gray-600 mt-0.5">{study.result}</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3 mb-4 flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-green-700">{study.metric}</div>
                  <div className="text-xs text-green-600">{study.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all"
          >
            View all case studies <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
