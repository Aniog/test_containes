import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Submit Your Requirements', desc: 'Provide product specifications, target quantities, quality standards, and timeline. We review and clarify details as needed.' },
    { num: '02', title: 'Supplier Identification', desc: 'We search our supplier database and industry networks to identify manufacturers matching your criteria. Initial screening eliminates unsuitable candidates.' },
    { num: '03', title: 'Shortlist & Presentation', desc: 'You receive a detailed comparison of 3-5 qualified suppliers including capabilities, pricing estimates, and verification status.' },
    { num: '04', title: 'Factory Verification', desc: 'On-site audits verify production capacity, quality systems, and compliance. We provide comprehensive audit reports with photos and findings.' },
    { num: '05', title: 'Sample Evaluation', desc: 'Approved suppliers produce samples for your review. We coordinate sample shipping and provide feedback on quality and specifications.' },
    { num: '06', title: 'Order Placement', desc: 'Once samples are approved, we assist with purchase order negotiation, contract terms, and payment arrangement coordination.' },
    { num: '07', title: 'Production Monitoring', desc: 'Regular factory visits and progress reports keep you informed. Issues are identified early and addressed promptly.' },
    { num: '08', title: 'Quality Inspection', desc: 'Pre-shipment inspection verifies product quality, packaging, and quantities. We provide detailed inspection reports with photos.' },
    { num: '09', title: 'Shipping Coordination', desc: 'We book freight, prepare export documentation, and coordinate with your forwarder or arrange door-to-door delivery.' },
    { num: '10', title: 'Delivery & Follow-up', desc: 'Products arrive at your destination. We assist with any post-delivery issues and prepare for future orders.' },
  ]

  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h1>
        <p className="text-xl text-slate-600">A structured, transparent process from inquiry to delivery.</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 items-start border-l-2 border-slate-200 pl-8 relative">
              <div className="absolute -left-[13px] w-6 h-6 bg-white border-2 border-sky-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-mono text-sky-600">{step.num}</span>
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-xl text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to begin?</h2>
          <p className="text-slate-300 mb-8">Start with a free consultation to discuss your sourcing needs.</p>
          <Link to="/contact"><Button size="lg" className="bg-sky-600 hover:bg-sky-700">Get Started</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks