import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      desc: 'We discuss your product requirements, target specifications, volume, timeline, and budget. This helps us understand exactly what you need.'
    },
    {
      number: '02',
      title: 'Supplier Research',
      desc: 'Our team identifies potential suppliers based on your criteria. We screen for capability, legitimacy, and alignment with your quality standards.'
    },
    {
      number: '03',
      title: 'Supplier Shortlist',
      desc: 'We present 3-5 qualified suppliers with detailed profiles including capabilities, pricing, and verification status for your review.'
    },
    {
      number: '04',
      title: 'Sample Evaluation',
      desc: 'We coordinate sample production and delivery. You evaluate quality, materials, and workmanship before committing to bulk orders.'
    },
    {
      number: '05',
      title: 'Order Placement & Monitoring',
      desc: 'Once you approve a supplier, we assist with purchase orders and monitor production progress with regular status updates.'
    },
    {
      number: '06',
      title: 'Quality Inspection',
      desc: 'Before shipment, we conduct quality inspections according to agreed AQL standards. You receive a detailed inspection report with photos.'
    },
    {
      number: '07',
      title: 'Shipping & Delivery',
      desc: 'We coordinate logistics, prepare export documentation, and track your shipment until it reaches your destination.'
    }
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-wider mb-3">OUR PROCESS</div>
          <h1 className="text-5xl font-semibold mb-6">How It Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A structured, transparent approach to China sourcing that keeps you informed at every stage.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8 md:gap-12">
              <div className="flex-shrink-0 w-16 text-4xl font-semibold text-slate-200">{step.number}</div>
              <div className="pt-1">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Ready to begin?</h2>
          <p className="text-lg text-slate-600 mb-8">Start with a no-obligation consultation about your sourcing needs.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks