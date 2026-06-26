import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      desc: 'We discuss your product requirements, target pricing, quality standards, and delivery timeline. This consultation is complimentary.',
      duration: '1-2 days'
    },
    {
      number: '02',
      title: 'Requirement Documentation',
      desc: 'We prepare a detailed sourcing brief including specifications, compliance requirements, and evaluation criteria.',
      duration: '2-3 days'
    },
    {
      number: '03',
      title: 'Supplier Identification',
      desc: 'We search our supplier database and conduct outreach to identify 3-5 qualified candidates matching your criteria.',
      duration: '5-7 days'
    },
    {
      number: '04',
      title: 'Factory Verification',
      desc: 'On-site audits verify business legitimacy, production capacity, quality systems, and compliance documentation.',
      duration: '7-10 days'
    },
    {
      number: '05',
      title: 'Sample Evaluation',
      desc: 'We coordinate sample production and evaluation. Samples are inspected before being shipped for your review.',
      duration: '10-14 days'
    },
    {
      number: '06',
      title: 'Supplier Selection',
      desc: 'Based on audit reports, sample quality, pricing, and capacity, we provide a recommendation for supplier selection.',
      duration: '2-3 days'
    },
    {
      number: '07',
      title: 'Production Oversight',
      desc: 'We monitor production progress with regular reports, conduct in-process inspections, and address issues as they arise.',
      duration: 'Per production schedule'
    },
    {
      number: '08',
      title: 'Pre-Shipment Inspection',
      desc: 'Final quality inspection using AQL standards with detailed documentation before goods are released for shipment.',
      duration: '2-3 days'
    },
    {
      number: '09',
      title: 'Shipping Coordination',
      desc: 'We manage freight booking, documentation, customs requirements, and coordinate delivery to your specified destination.',
      duration: 'Per shipping method'
    },
    {
      number: '10',
      title: 'Project Completion',
      desc: 'Final documentation handover and post-delivery review to ensure all requirements have been met.',
      duration: '1-2 days'
    }
  ]

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-16">
        <div className="container">
          <h1 className="text-5xl mb-4 text-white">How It Works</h1>
          <p className="text-xl text-[#94A3B8] max-w-2xl">
            A structured, transparent process from initial inquiry through final delivery.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 pb-12 border-l-2 border-[#E2E8F0] last:border-l-0 last:pb-0 pl-8 relative">
                <div className="absolute -left-[13px] w-6 h-6 bg-white border-2 border-[#1E40AF] rounded-full" />
                <div className="w-20 flex-shrink-0">
                  <div className="text-3xl font-bold text-[#1E40AF]">{step.number}</div>
                  <div className="text-sm text-[#64748B] mt-1">{step.duration}</div>
                </div>
                <div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-[#64748B]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-[#E2E8F0]">
        <div className="container text-center">
          <h2 className="text-3xl mb-4">Ready to Begin?</h2>
          <p className="text-[#64748B] mb-6 max-w-xl mx-auto">
            Contact us to discuss your sourcing requirements and receive a detailed proposal.
          </p>
          <Link to="/contact">
            <Button>Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks