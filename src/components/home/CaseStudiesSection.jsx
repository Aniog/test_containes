import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Package } from 'lucide-react'

const caseStudies = [
  {
    icon: TrendingUp,
    title: 'Electronics Importer Saves 22% on Component Costs',
    category: 'Electronics',
    summary: 'A US-based electronics company needed reliable PCB manufacturers. We identified 3 verified factories, negotiated pricing, and managed quality control for their first 50,000-unit order.',
    result: '22% cost reduction, zero defect rate on first shipment',
  },
  {
    icon: Shield,
    title: 'European Retailer Avoids $80K in Defective Goods',
    category: 'Quality Control',
    summary: 'During a pre-shipment inspection, our team discovered that 30% of a home goods order did not meet the agreed specifications. The buyer avoided shipping defective products and renegotiated with the supplier.',
    result: '$80K in potential losses prevented',
  },
  {
    icon: Package,
    title: 'Australian Brand Launches Private Label Line',
    category: 'Full Sourcing',
    summary: 'An Australian startup wanted to launch a private label kitchenware line. We handled everything from supplier selection and sampling to production monitoring and freight forwarding.',
    result: 'Product launched on time, 15% under budget',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Case Studies</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Real Results for Real Buyers</h2>
          <p className="text-muted-foreground text-lg">
            See how we have helped businesses around the world source from China with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <study.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/5 px-2 py-1 rounded-full">
                  {study.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3">{study.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{study.summary}</p>

              <div className="bg-green-50 rounded-lg p-3 mb-4">
                <p className="text-sm font-medium text-green-700">Result: {study.result}</p>
              </div>

              <Link to="/case-studies" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                Read more
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
