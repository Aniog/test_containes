import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Factory, ClipboardCheck, Truck, Clock, DollarSign, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/button'

const caseStudies = [
  {
    title: 'Industrial Packaging Line for German Buyer',
    company: 'Mid-Size Manufacturing Company, Germany',
    challenge: 'The client needed a complete packaging line but had been burned by unreliable suppliers in the past. They needed a partner who could verify factory capabilities and manage quality throughout production.',
    solution: 'We audited 6 suppliers across Guangdong and Zhejiang, shortlisted 3, and accompanied the client on factory visits. We managed the entire order, conducted during-production and pre-shipment inspections, and coordinated sea freight to Hamburg.',
    results: [
      { icon: CheckCircle, label: '30% cost savings vs. European suppliers' },
      { icon: Clock, label: 'Project delivered on schedule (10 weeks)' },
      { icon: Factory, label: 'Factory passed all quality benchmarks' },
      { icon: Truck, label: '3 subsequent repeat orders placed' },
    ],
  },
  {
    title: 'Consumer Electronics for US E-Commerce Brand',
    company: 'Direct-to-Consumer Brand, United States',
    challenge: 'A fast-growing e-commerce brand needed reliable suppliers for Bluetooth audio products. Their previous sourcing agent delivered inconsistent quality, resulting in high return rates.',
    solution: 'We identified and audited 4 potential suppliers, negotiated better payment terms, implemented AQL-based inspection protocols, and established ongoing quality monitoring. We also helped with FCC compliance documentation.',
    results: [
      { icon: CheckCircle, label: 'Defect rate reduced from 12% to 2.5%' },
      { icon: DollarSign, label: '15% cost reduction through negotiation' },
      { icon: Clock, label: 'Lead time reduced by 3 weeks' },
      { icon: Star, label: 'Amazon rating improved from 3.2 to 4.5 stars' },
    ],
  },
  {
    title: 'Furniture Collection for Australian Retail Chain',
    company: 'Retail Chain, Australia',
    challenge: 'An Australian furniture retailer needed to source 40 SKUs across multiple factories while maintaining consistent quality and finish across different production sites.',
    solution: 'We coordinated 5 factories for different product categories, established standardized quality checkpoints, managed sample approvals across all SKUs, and consolidated shipments to optimize freight costs.',
    results: [
      { icon: CheckCircle, label: 'All 40 SKUs delivered within specification' },
      { icon: Truck, label: 'Consolidated shipping saved 22% on freight' },
      { icon: Clock, label: 'Full order delivered in 14 weeks' },
      { icon: Star, label: '98% customer satisfaction on first order' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-900 to-brand-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">Case Studies</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Real projects, real results. See how we\'ve helped buyers across industries and regions source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-16">
          {caseStudies.map((cs, i) => (
            <article key={i} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
              <div className="p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-block text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                    Case Study {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-1">{cs.title}</h2>
                <p className="text-sm text-neutral-500 mb-6">{cs.company}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                    <h3 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide text-neutral-500">Challenge</h3>
                    <p className="text-sm text-neutral-700 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                    <h3 className="font-semibold text-neutral-900 mb-2 text-sm uppercase tracking-wide text-neutral-500">Solution</h3>
                    <p className="text-sm text-neutral-700 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <h3 className="font-semibold text-neutral-900 mb-4">Results</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cs.results.map((res, j) => (
                    <div key={j} className="flex items-center gap-3 bg-green-50 rounded-lg p-3 border border-green-100">
                      <res.icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-neutral-800">{res.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Start Your Success Story</h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Every project is different. Tell us about your sourcing needs, and we\'ll create a plan that works for you.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}