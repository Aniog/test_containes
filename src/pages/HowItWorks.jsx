import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Initial Consultation', desc: 'We discuss your product requirements, target price range, quality standards, and timeline expectations.' },
    { num: '02', title: 'Supplier Search', desc: 'Our team identifies potential manufacturers from our database and conducts initial screening based on your criteria.' },
    { num: '03', title: 'Shortlist & Quotes', desc: 'We present 3-5 qualified suppliers with pricing, capabilities, and MOQ information for your review.' },
    { num: '04', title: 'Factory Verification', desc: 'We conduct on-site audits of your preferred suppliers to verify legitimacy and production capabilities.' },
    { num: '05', title: 'Sample Development', desc: 'We coordinate sample production and approval to ensure the product meets your specifications.' },
    { num: '06', title: 'Production Monitoring', desc: 'We oversee production, conduct quality checks, and provide regular progress updates.' },
    { num: '07', title: 'Quality Inspection', desc: 'Pre-shipment inspection ensures products meet agreed quality standards before release.' },
    { num: '08', title: 'Shipping & Delivery', desc: 'We coordinate logistics, customs documentation, and track delivery to your destination.' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">How It Works</h1>
        <p className="text-[#475569] max-w-2xl mx-auto">A structured 8-step process from inquiry to delivery</p>
      </div>

      <div className="space-y-4 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 bg-white p-6 rounded-lg border border-[#E2E8F0]">
            <div className="text-3xl font-semibold text-[#0D9488] flex-shrink-0 w-16">{step.num}</div>
            <div>
              <h3 className="font-semibold text-[#0F2942] mb-2">{step.title}</h3>
              <p className="text-[#475569]">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/contact"><Button size="lg">Start Your Sourcing Project</Button></Link>
      </div>
    </div>
  )
}

export default HowItWorks