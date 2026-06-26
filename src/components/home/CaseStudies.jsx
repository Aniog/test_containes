import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-startup',
    title: 'Electronics Startup Cuts Defect Rate by 85%',
    client: 'US Consumer Electronics Brand',
    summary: 'A US-based startup was struggling with a 22% defect rate from their Chinese supplier. We identified the root cause, switched to a verified factory, and implemented strict QC protocols.',
    result: 'Defect rate dropped to 3%, saving $120K in annual returns.',
    tag: 'Electronics',
  },
  {
    id: 'furniture-brand',
    title: 'Furniture Brand Scales Production 3x',
    client: 'European Furniture Retailer',
    summary: 'A European retailer needed to triple their order volume without sacrificing quality. We sourced two additional factories and coordinated production across all three.',
    result: 'On-time delivery for 3x volume with consistent quality standards.',
    tag: 'Furniture',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts Importer Avoids $200K Loss',
    client: 'Middle East Auto Distributor',
    summary: 'During a pre-shipment inspection, we discovered critical dimensional errors in 40% of the order. We halted shipment and worked with the factory to remake the parts.',
    result: 'Client received correct parts, avoiding a $200K loss from defective stock.',
    tag: 'Auto Parts',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            Case Studies
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses source better from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all flex flex-col"
            >
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                {cs.tag}
              </span>
              <h3 className="text-lg font-semibold text-primary mb-2">{cs.title}</h3>
              <p className="text-slate-500 text-sm mb-3">{cs.client}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">{cs.summary}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <p className="text-green-800 text-sm font-medium">{cs.result}</p>
              </div>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-primary-light transition-colors"
              >
                Read Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
          >
            View All Case Studies
            <span className="text-accent">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
