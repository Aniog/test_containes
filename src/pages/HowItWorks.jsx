import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      desc: 'We discuss your product requirements, target specifications, budget parameters, and timeline expectations.',
      duration: '1-2 days'
    },
    {
      number: '02',
      title: 'Requirement Documentation',
      desc: 'Detailed product specifications, quality standards, and compliance requirements are documented for supplier outreach.',
      duration: '2-3 days'
    },
    {
      number: '03',
      title: 'Supplier Identification',
      desc: 'We search our supplier database and industry networks to identify potential matches for your requirements.',
      duration: '1-2 weeks'
    },
    {
      number: '04',
      title: 'Initial Screening',
      desc: 'Preliminary verification of business credentials, production capabilities, and basic quality systems.',
      duration: '3-5 days'
    },
    {
      number: '05',
      title: 'Supplier Shortlist',
      desc: 'A curated list of 3-5 qualified suppliers is presented with capability summaries and initial pricing indications.',
      duration: '1 week'
    },
    {
      number: '06',
      title: 'Factory Verification',
      desc: 'On-site audits are conducted for shortlisted suppliers to verify capabilities and assess quality systems.',
      duration: '1-2 weeks'
    },
    {
      number: '07',
      title: 'Sample Evaluation',
      desc: 'Product samples are obtained and evaluated against your specifications before proceeding with orders.',
      duration: '2-4 weeks'
    },
    {
      number: '08',
      title: 'Order Coordination',
      desc: 'We assist with order placement, production monitoring, quality inspections, and shipping arrangements.',
      duration: 'Ongoing'
    },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-xl text-[#94A3B8]">A structured process for finding and working with Chinese suppliers.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#0D9488] text-white flex items-center justify-center font-semibold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <span className="text-sm text-[#0D9488] font-medium">{step.duration}</span>
                  </div>
                  <p className="text-[#64748B]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Ready to Begin?</h2>
          <p className="text-[#64748B] mb-6">Start with a free consultation to discuss your sourcing needs.</p>
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks