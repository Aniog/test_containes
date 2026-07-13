import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Requirement Analysis', desc: 'We discuss your product specifications, target price, quality standards, volume requirements, and timeline.' },
    { num: '02', title: 'Supplier Research', desc: 'Our team identifies and shortlists qualified manufacturers based on your criteria and our supplier database.' },
    { num: '03', title: 'Verification & Audit', desc: 'We conduct background checks and on-site factory audits to confirm legitimacy and production capability.' },
    { num: '04', title: 'Sample Evaluation', desc: 'Approved suppliers produce samples for your review. We coordinate logistics and provide quality feedback.' },
    { num: '05', title: 'Order Management', desc: 'Once samples are approved, we manage production monitoring, quality inspections, and shipping coordination.' },
    { num: '06', title: 'Delivery & Support', desc: 'We track shipments to your destination and provide post-delivery support for any issues.' },
  ]

  const deliverables = [
    'Supplier shortlist with detailed profiles',
    'Factory audit reports with photos',
    'Sample evaluation summaries',
    'Production progress reports',
    'Inspection reports with findings',
    'Shipping and customs documentation',
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-lg text-slate-300">A structured, transparent process designed to reduce sourcing risk.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-8 items-start border-b border-slate-200 pb-10 last:border-0 last:pb-0">
              <div className="text-4xl font-semibold text-slate-200 w-16 flex-shrink-0">{step.num}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-slate-600 max-w-3xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">What You Receive</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded p-4 text-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <Button size="lg" asChild>
          <Link to="/contact">Start Your Sourcing Project</Link>
        </Button>
      </section>
    </div>
  )
}

export default HowItWorks