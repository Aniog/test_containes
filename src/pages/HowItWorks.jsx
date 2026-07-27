import React from 'react'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirements',
      desc: 'Complete our inquiry form with product specifications, target pricing, quality standards, and timeline. We respond within 24 hours to discuss your project.',
    },
    {
      number: '02',
      title: 'Supplier Research',
      desc: 'We search our supplier database and industry networks to identify manufacturers that match your criteria. Initial screening includes capability, capacity, and compliance review.',
    },
    {
      number: '03',
      title: 'Shortlist Presentation',
      desc: 'You receive a detailed comparison of 3-5 qualified suppliers including factory profiles, sample costs, MOQs, lead times, and preliminary pricing.',
    },
    {
      number: '04',
      title: 'Factory Verification',
      desc: 'We conduct on-site audits of your preferred suppliers. Reports include production capability, quality systems, equipment, workforce, and compliance documentation.',
    },
    {
      number: '05',
      title: 'Sample Evaluation',
      desc: 'Approved suppliers produce samples according to your specifications. We coordinate sample shipping and provide feedback on quality and production feasibility.',
    },
    {
      number: '06',
      title: 'Order Placement',
      desc: 'Once samples are approved, we support contract negotiation, payment terms, and production scheduling. Purchase orders are placed directly with the supplier.',
    },
    {
      number: '07',
      title: 'Production Monitoring',
      desc: 'Throughout manufacturing, we track progress against milestones and provide regular updates. Issues are identified and addressed promptly.',
    },
    {
      number: '08',
      title: 'Quality Inspection',
      desc: 'Before shipment, we perform comprehensive inspection using AQL sampling. Products are verified against specifications and approved for release.',
    },
    {
      number: '09',
      title: 'Shipping Coordination',
      desc: 'We assist with freight booking, export documentation, and customs requirements. You receive tracking information and estimated delivery dates.',
    },
    {
      number: '10',
      title: 'Delivery & Follow-Up',
      desc: 'After delivery, we coordinate any required follow-up and document lessons learned for future orders. Ongoing support is available for repeat business.',
    },
  ]

  return (
    <div>
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-[#475569]">
            A transparent, step-by-step process designed to minimize risk and maximize clarity.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#1E40AF] text-white flex items-center justify-center font-mono text-xl font-semibold">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-[#475569] text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC] text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Questions About the Process?</h2>
          <p className="text-lg text-[#475569] mb-8 max-w-xl mx-auto">
            We're happy to explain any step in detail or customize the approach for your specific needs.
          </p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks