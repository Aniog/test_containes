import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-2 days',
      desc: 'We schedule a call to understand your product requirements, target pricing, quality expectations, and delivery timeline.',
      items: ['Product specifications review', 'Quantity and timeline discussion', 'Budget parameters', 'Compliance requirements'],
    },
    {
      number: '02',
      title: 'Supplier Research',
      duration: '5-10 business days',
      desc: 'Our team searches our supplier database and industry networks to identify manufacturers capable of meeting your needs.',
      items: ['Database and network search', 'Capability matching', 'Preliminary pricing analysis', 'Geographic considerations'],
    },
    {
      number: '03',
      title: 'Supplier Shortlisting',
      duration: '3-5 business days',
      desc: 'We present 3-5 qualified suppliers with detailed profiles, capabilities, and preliminary quotations for your review.',
      items: ['Detailed supplier profiles', 'Capability comparison', 'Initial price indications', 'Sample availability check'],
    },
    {
      number: '04',
      title: 'Factory Verification',
      duration: '7-14 business days',
      desc: 'We conduct on-site audits of shortlisted factories to verify legitimacy, capacity, and quality systems.',
      items: ['On-site factory visit', 'Equipment and capacity check', 'Quality system assessment', 'Reference verification'],
    },
    {
      number: '05',
      title: 'Sample Development',
      duration: '2-6 weeks',
      desc: 'Selected suppliers produce samples according to your specifications. We coordinate sample review and feedback.',
      items: ['Sample order coordination', 'Specification compliance check', 'Sample quality review', 'Feedback and iteration'],
    },
    {
      number: '06',
      title: 'Order Placement',
      duration: '1-3 business days',
      desc: 'We assist with purchase order finalization, contract review, and payment term negotiation.',
      items: ['Contract review support', 'Payment term negotiation', 'Order confirmation', 'Timeline finalization'],
    },
    {
      number: '07',
      title: 'Production Oversight',
      duration: 'Production timeline',
      desc: 'We monitor production progress, conduct in-process inspections, and provide regular status updates.',
      items: ['Production timeline tracking', 'In-process quality checks', 'Weekly progress reports', 'Issue resolution'],
    },
    {
      number: '08',
      title: 'Final Inspection & Shipping',
      duration: '5-10 business days',
      desc: 'Pre-shipment inspection, documentation preparation, and coordination of freight and customs clearance.',
      items: ['Pre-shipment inspection', 'Export documentation', 'Freight booking', 'Customs coordination'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-semibold text-[#0F172A] mb-4">How It Works</h1>
        <p className="text-xl text-[#64748B]">A transparent, step-by-step process from inquiry to delivery</p>
      </div>

      <div className="space-y-8 mb-16">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-8 border border-[#E2E8F0] rounded-xl p-8">
            <div className="lg:w-48 flex-shrink-0">
              <div className="text-5xl font-semibold text-[#1E40AF] mb-2">{step.number}</div>
              <div className="text-sm text-[#64748B]">{step.duration}</div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-3">{step.title}</h3>
              <p className="text-[#64748B] mb-4">{step.desc}</p>
              <ul className="grid md:grid-cols-2 gap-x-6 gap-y-1 text-sm text-[#1E293B]">
                {step.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center bg-[#F8FAFC] rounded-xl p-10">
        <h2 className="text-2xl font-semibold mb-3">Ready to begin?</h2>
        <p className="text-[#64748B] mb-6">Contact us to discuss your sourcing requirements.</p>
        <Link to="/contact" className="inline-flex px-8 py-3 bg-[#0F172A] text-white rounded-lg font-medium hover:bg-[#1E293B]">Get Started</Link>
      </div>
    </div>
  );
};

export default HowItWorks;
