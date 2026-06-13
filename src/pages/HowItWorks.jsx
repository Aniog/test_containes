import React from 'react'
import CTAButton from '../components/CTAButton'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirements',
      desc: 'Complete our sourcing inquiry form with details about your product specifications, target price range, estimated quantity, quality requirements, and timeline.',
    },
    {
      number: '02',
      title: 'Requirement Review',
      desc: 'Our sourcing team reviews your specifications and clarifies any details. We assess feasibility and prepare a project scope.',
    },
    {
      number: '03',
      title: 'Supplier Identification',
      desc: 'We search our supplier database and industry networks to identify manufacturers that match your criteria. Initial screening eliminates unqualified suppliers.',
    },
    {
      number: '04',
      title: 'Supplier Shortlist',
      desc: 'You receive a shortlist of 3-5 qualified suppliers with profiles including capabilities, certifications, and preliminary pricing.',
    },
    {
      number: '05',
      title: 'Sample & Quotation Phase',
      desc: 'Selected suppliers provide detailed quotations and produce samples for your approval. We coordinate sample shipping and feedback.',
    },
    {
      number: '06',
      title: 'Order Placement',
      desc: 'Once you approve a supplier and sample, we assist with purchase order preparation, payment terms negotiation, and contract review.',
    },
    {
      number: '07',
      title: 'Production Oversight',
      desc: 'We monitor production progress, conduct quality inspections at key stages, and provide regular updates on timeline and quality status.',
    },
    {
      number: '08',
      title: 'Shipping & Delivery',
      desc: 'We coordinate logistics, prepare export documentation, and work with freight forwarders to ensure on-time delivery to your destination.',
    },
  ]

  const deliverables = [
    'Supplier profiles and audit reports',
    'Sample evaluation summaries',
    'Production progress reports',
    'Quality inspection reports',
    'Export documentation package',
    'Final delivery confirmation',
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-xl text-gray-300">A clear, structured process from inquiry to delivery.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-[#0A2540] text-white rounded-full flex items-center justify-center font-semibold text-xl">
                {step.number}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 max-w-3xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">What You Receive</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-3">
                <span className="text-[#059669] mt-1">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
        <p className="text-gray-600 mb-8">Start with a free sourcing consultation and quote.</p>
        <CTAButton>Get a Free Sourcing Quote</CTAButton>
      </section>
    </div>
  )
}

export default HowItWorks