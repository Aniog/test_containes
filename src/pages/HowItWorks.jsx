import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, FileText, Users, ClipboardCheck, Truck } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      number: '01',
      title: 'Requirement Briefing',
      duration: '1-2 days',
      desc: 'We begin with a detailed discussion of your product requirements, target pricing, quality standards, certifications needed, and delivery timeline.',
      details: ['Product specifications and drawings', 'Quantity and packaging requirements', 'Target price range and payment terms', 'Required certifications and compliance', 'Timeline expectations'],
    },
    {
      icon: Users,
      number: '02',
      title: 'Supplier Sourcing',
      duration: '7-10 days',
      desc: 'Our team identifies and evaluates potential manufacturers from our database and industry networks. We provide a comparison report with 3-5 qualified options.',
      details: ['Supplier capability matching', 'Initial pricing and MOQ verification', 'Location and logistics assessment', 'Comparison matrix with pros/cons', 'Sample request coordination'],
    },
    {
      icon: ClipboardCheck,
      number: '03',
      title: 'Verification & Sampling',
      duration: '10-20 days',
      desc: 'We conduct on-site factory audits and coordinate sample production. This stage confirms supplier legitimacy and product feasibility before order placement.',
      details: ['Physical factory inspection', 'Equipment and capacity verification', 'Sample production and evaluation', 'Quality system review', 'Final supplier selection'],
    },
    {
      icon: Calendar,
      number: '04',
      title: 'Production Oversight',
      duration: 'Varies by product',
      desc: 'Once production begins, we monitor progress through regular inspections, status reports, and direct communication with the factory. Issues are identified and resolved early.',
      details: ['Pre-production sample approval', 'During-production inspection', 'Weekly progress reports', 'Photo/video documentation', 'Issue escalation and resolution'],
    },
    {
      icon: Truck,
      number: '05',
      title: 'Shipping & Delivery',
      duration: '15-45 days',
      desc: 'We coordinate freight booking, prepare shipping documentation, and manage customs clearance support. Final inspection ensures goods meet specifications before departure.',
      details: ['Pre-shipment inspection (AQL)', 'Freight booking and tracking', 'Documentation preparation', 'Customs clearance support', 'Delivery confirmation'],
    },
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">How It Works</h1>
          <p className="text-xl text-slate-300">A structured, transparent process from initial inquiry to final delivery. Each step includes clear deliverables and communication checkpoints.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-20">
          {steps.map((step, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="sticky top-24">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center text-white">
                      <step.icon size={28} />
                    </div>
                    <div className="text-6xl font-mono font-semibold text-slate-200">{step.number}</div>
                  </div>
                  <h2 className="text-3xl font-semibold text-slate-900 mb-2">{step.title}</h2>
                  <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm">{step.duration}</div>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-slate-600 mb-6">{step.desc}</p>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="text-sm font-semibold text-slate-900 mb-4">Key Activities</div>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <span className="text-teal-600 mt-1">•</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Ready to begin?</h3>
          <p className="text-slate-600 mb-8">Start with a no-obligation discussion of your sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Request a Quote <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks