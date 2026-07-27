import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-2 days',
      desc: 'We start with a detailed discussion about your product requirements, target pricing, quality standards, and delivery timeline.',
      activities: ['Requirements gathering', 'Budget and timeline alignment', 'Product specification review', 'Market feasibility assessment']
    },
    {
      number: '02',
      title: 'Supplier Research',
      duration: '5-10 days',
      desc: 'Our team searches our supplier database and industry networks to identify manufacturers capable of meeting your needs.',
      activities: ['Database and network search', 'Initial capability screening', 'Preliminary pricing research', 'Supplier shortlisting']
    },
    {
      number: '03',
      title: 'Verification & Sampling',
      duration: '2-4 weeks',
      desc: 'We conduct factory visits, verify credentials, request samples, and obtain detailed quotations from shortlisted suppliers.',
      activities: ['On-site factory audits', 'Sample production and review', 'Detailed quotation collection', 'Supplier comparison report']
    },
    {
      number: '04',
      title: 'Order Placement',
      duration: '1-3 days',
      desc: 'We assist with contract review, payment terms negotiation, and ensure all order details are clearly documented.',
      activities: ['Contract review and negotiation', 'Payment term setup', 'Order confirmation', 'Production scheduling']
    },
    {
      number: '05',
      title: 'Production Oversight',
      duration: 'Production dependent',
      desc: 'Throughout manufacturing, we monitor progress, conduct inspections, and keep you informed of any issues.',
      activities: ['Production milestone tracking', 'Quality inspections', 'Progress reporting', 'Issue resolution']
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      duration: '2-6 weeks',
      desc: 'We coordinate logistics, manage documentation, and track your shipment until it reaches your warehouse.',
      activities: ['Freight booking', 'Export documentation', 'Customs clearance support', 'Final delivery confirmation']
    }
  ]

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-slate-300">A transparent, step-by-step process designed for reliability and clarity.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row gap-8 border-l-4 border-sky-600 pl-8 lg:pl-0 lg:border-l-0">
              <div className="lg:w-48 flex-shrink-0">
                <div className="text-5xl font-bold text-sky-600 mb-2">{step.number}</div>
                <div className="text-sm text-slate-500 font-medium">{step.duration}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-600 mb-4">{step.desc}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {step.activities.map((activity, i) => (
                    <div key={i} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="text-emerald-500">•</span> {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-slate-600 mb-6">Start with a free consultation. No commitment required.</p>
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks