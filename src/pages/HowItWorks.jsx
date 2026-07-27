import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, FileCheck, Truck } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirements',
      desc: 'Complete our sourcing request form with product details, specifications, target pricing, quantity, and timeline.',
      icon: FileCheck,
      duration: 'Day 1'
    },
    {
      number: '02',
      title: 'Supplier Identification',
      desc: 'Our team searches our supplier database and industry networks to identify 5-8 potential suppliers matching your criteria.',
      icon: Users,
      duration: 'Days 2-5'
    },
    {
      number: '03',
      title: 'Initial Screening & Quotes',
      desc: 'We contact suppliers, verify basic credentials, and collect detailed quotes with samples, MOQs, and lead times.',
      icon: Clock,
      duration: 'Days 6-12'
    },
    {
      number: '04',
      title: 'Factory Verification',
      desc: 'On-site audits of shortlisted suppliers to verify production capacity, quality systems, and business legitimacy.',
      icon: FileCheck,
      duration: 'Days 13-20'
    },
    {
      number: '05',
      title: 'Supplier Selection & Samples',
      desc: 'You review verified supplier profiles and quotes. We coordinate sample orders from your top choices.',
      icon: Users,
      duration: 'Days 21-30'
    },
    {
      number: '06',
      title: 'Order Placement & Management',
      desc: 'Once you approve a supplier, we manage production monitoring, quality inspections, and shipping coordination.',
      icon: Truck,
      duration: 'Ongoing'
    }
  ]

  const deliverables = [
    'Supplier comparison report with pricing and capabilities',
    'Factory audit reports with photos and findings',
    'Sample evaluation summaries',
    'Production progress updates at key milestones',
    'Quality inspection reports with photos',
    'Shipping documentation and tracking'
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold mb-6">How It Works</h1>
          <p className="text-xl text-slate-300">A structured, transparent process designed to minimize risk and maximize results.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 p-8 border border-gray-200 rounded-2xl">
              <div className="md:w-24 flex-shrink-0">
                <div className="text-5xl font-semibold text-slate-200">{step.number}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <span className="text-sm px-3 py-1 bg-slate-100 text-slate-600 rounded-full whitespace-nowrap ml-4">{step.duration}</span>
                </div>
                <p className="text-lg text-slate-600">{step.desc}</p>
              </div>
              <div className="md:w-16 flex-shrink-0 hidden md:block">
                <step.icon className="w-10 h-10 text-slate-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">What You Receive</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-5 bg-white rounded-xl border border-gray-200">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-600 text-sm">✓</span>
                </div>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Begin?</h2>
        <p className="text-lg text-slate-600 mb-8">Start your sourcing project today with a free consultation.</p>
        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">
          Submit Your Requirements <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </section>
    </div>
  )
}

export default HowItWorks