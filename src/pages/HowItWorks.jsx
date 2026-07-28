import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-2 days',
      desc: 'We schedule a call to understand your product requirements, target pricing, quality standards, and timeline expectations.',
      activities: ['Requirement documentation', 'Budget and timeline discussion', 'Quality specification review', 'Communication preferences']
    },
    {
      number: '02',
      title: 'Supplier Research',
      duration: '5-10 days',
      desc: 'Our team searches our supplier database and industry networks to identify manufacturers matching your criteria.',
      activities: ['Database search', 'Industry referrals', 'Capability matching', 'Initial price comparison']
    },
    {
      number: '03',
      title: 'Supplier Shortlist',
      duration: '2-3 days',
      desc: 'We present 3-5 qualified suppliers with detailed profiles including capabilities, pricing, and references.',
      activities: ['Profile compilation', 'Price comparison matrix', 'Reference verification', 'Risk assessment']
    },
    {
      number: '04',
      title: 'Factory Verification',
      duration: '7-14 days',
      desc: 'We conduct on-site audits of shortlisted factories to verify legitimacy, capacity, and quality systems.',
      activities: ['On-site factory visit', 'Document verification', 'Production assessment', 'Quality system review']
    },
    {
      number: '05',
      title: 'Sample Development',
      duration: '2-4 weeks',
      desc: 'We coordinate sample production and evaluation to confirm supplier capability before bulk orders.',
      activities: ['Sample order placement', 'Quality evaluation', 'Specification refinement', 'Supplier selection']
    },
    {
      number: '06',
      title: 'Order Management',
      duration: 'Project duration',
      desc: 'We oversee production, conduct inspections, manage documentation, and coordinate logistics.',
      activities: ['Production monitoring', 'Quality inspections', 'Documentation handling', 'Shipping coordination']
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">How It Works</h1>
        <p className="text-xl text-[#64748B]">A structured, transparent process designed to minimize sourcing risks and deliver reliable results.</p>
      </div>

      <div className="space-y-12 mb-16">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 border-l-4 border-[#3A8A7B] pl-8 md:pl-0 md:border-l-0">
            <div className="md:w-48 flex-shrink-0">
              <div className="text-5xl font-semibold text-[#3A8A7B] mb-2">{step.number}</div>
              <div className="text-sm text-[#64748B] font-medium">{step.duration}</div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#0F2942] mb-3">{step.title}</h3>
              <p className="text-[#64748B] mb-4">{step.desc}</p>
              <div className="flex flex-wrap gap-2">
                {step.activities.map((activity, i) => (
                  <span key={i} className="inline-block px-3 py-1 bg-[#F8FAFC] text-sm text-[#1E293B] rounded">{activity}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0F2942] rounded-xl p-10 text-center text-white">
        <h2 className="text-2xl font-semibold mb-3">Ready to begin?</h2>
        <p className="text-gray-300 mb-6">Start with a no-obligation consultation to discuss your sourcing needs.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#3A8A7B] text-white font-medium rounded-lg hover:bg-[#2F6F63]">
          Schedule a Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}