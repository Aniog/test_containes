import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/SectionHeading'
import { CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form or contact us directly. Tell us about the products you need, target specifications, estimated quantities, quality requirements, and timeline.',
    deliverables: ['Requirement brief', 'Target pricing guidance', 'Timeline expectations']
  },
  {
    number: '02',
    title: 'Supplier Identification',
    description: 'We search our supplier database and network to identify manufacturers that match your criteria. We screen for legitimacy, capability, and interest in your project.',
    deliverables: ['Initial supplier shortlist (3-5)', 'Capability summaries', 'Preliminary pricing indications']
  },
  {
    number: '03',
    title: 'Factory Verification',
    description: 'We conduct on-site audits of shortlisted factories to verify their legitimacy, production capacity, quality systems, and working conditions. We provide detailed audit reports.',
    deliverables: ['Factory audit reports', 'Photo documentation', 'Risk assessment']
  },
  {
    number: '04',
    title: 'Sample Evaluation',
    description: 'We coordinate sample production and evaluate samples against your specifications. We provide clear feedback to suppliers and help you make informed decisions.',
    deliverables: ['Sample evaluation reports', 'Specification clarifications', 'Supplier feedback']
  },
  {
    number: '05',
    title: 'Order Placement & Contracts',
    description: 'Once you approve a supplier, we help structure the order with clear terms, quality standards, and milestone payments. We ensure both parties have aligned expectations.',
    deliverables: ['Purchase order support', 'Quality agreement', 'Payment term recommendations']
  },
  {
    number: '06',
    title: 'Production Monitoring',
    description: 'We track production progress against the agreed schedule. You receive regular updates with photos and reports. Issues are identified and addressed early.',
    deliverables: ['Weekly progress reports', 'Photo/video updates', 'Issue escalation logs']
  },
  {
    number: '07',
    title: 'Quality Inspection',
    description: 'Before shipment, we conduct independent quality inspections according to agreed AQL standards. We document findings and work with suppliers on any required corrections.',
    deliverables: ['Inspection reports', 'Photo documentation', 'Corrective action records']
  },
  {
    number: '08',
    title: 'Shipping & Documentation',
    description: 'We coordinate freight booking, prepare export documentation, and support customs clearance. We track shipments and keep you informed until delivery.',
    deliverables: ['Shipping documents', 'Tracking updates', 'Delivery confirmation']
  }
]

const HowItWorks = () => {
  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] uppercase text-slate-400 mb-3">OUR METHOD</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">How It Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A structured, transparent process designed to minimize risk and maximize clarity at every stage.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-8 items-start border-b border-slate-200 pb-12 last:border-0 last:pb-0">
              <div className="md:col-span-2">
                <div className="text-5xl font-semibold text-slate-200">{step.number}</div>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
              </div>
              <div className="md:col-span-4">
                <div className="bg-slate-50 rounded-lg p-5">
                  <div className="text-xs font-semibold tracking-wider text-slate-500 mb-3">DELIVERABLES</div>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Ready to get started?</h2>
          <p className="text-slate-600 mb-6">Tell us about your sourcing needs and we'll guide you through the process.</p>
          <Link to="/contact">
            <Button size="lg">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
