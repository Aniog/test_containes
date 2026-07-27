import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Requirement Briefing',
      duration: '1-2 days',
      desc: 'We start with a detailed discussion of your product requirements, target pricing, expected volumes, quality standards, and delivery timeline.',
      activities: ['Product specifications review', 'Volume and timeline discussion', 'Quality requirements definition', 'Budget parameters']
    },
    {
      number: '02',
      title: 'Supplier Identification',
      duration: '5-10 business days',
      desc: 'Our team researches and identifies potential suppliers from our database and industry networks, then conducts initial screening.',
      activities: ['Database and network search', 'Capability pre-screening', 'Preliminary pricing comparison', 'Shortlist of 3-5 candidates']
    },
    {
      number: '03',
      title: 'Factory Verification',
      duration: '7-14 business days',
      desc: 'We conduct on-site audits of shortlisted factories to verify legitimacy, production capacity, quality systems, and export readiness.',
      activities: ['Business documentation review', 'Production floor assessment', 'Quality system evaluation', 'Sample collection and review']
    },
    {
      number: '04',
      title: 'Order Placement & Production',
      duration: 'Varies by product',
      desc: 'Once a supplier is selected, we assist with purchase order preparation, deposit coordination, and production scheduling.',
      activities: ['Contract and PO review', 'Payment milestone setup', 'Production timeline confirmation', 'Regular progress monitoring']
    },
    {
      number: '05',
      title: 'Quality Control',
      duration: '2-5 business days',
      desc: 'Before shipment, we perform inspections to verify that finished goods meet agreed specifications and quality standards.',
      activities: ['Pre-shipment inspection', 'Defect documentation', 'Corrective action coordination', 'Final approval sign-off']
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      duration: 'Varies by destination',
      desc: 'We coordinate freight booking, prepare export documentation, and manage the logistics process through to final delivery.',
      activities: ['Freight booking', 'Export documentation', 'Customs clearance support', 'Delivery confirmation']
    }
  ]

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-lg text-slate-600">A structured, transparent process designed to minimize risk and maximize accountability at every stage.</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-12 border-b border-slate-200 pb-12 last:border-0 last:pb-0">
              <div className="md:w-48 flex-shrink-0">
                <div className="text-5xl font-semibold text-slate-200 mb-2">{step.number}</div>
                <div className="text-sm text-slate-500">{step.duration}</div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
                <p className="text-slate-600 mb-6">{step.desc}</p>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  {step.activities.map((activity, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700">
                      <span className="text-emerald-600">•</span> {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to begin?</h2>
          <p className="text-slate-400 mb-8">Contact us to discuss your sourcing requirements and receive a preliminary project assessment.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3.5 rounded-lg font-medium hover:bg-slate-100 transition-colors">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}