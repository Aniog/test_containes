import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Inquiry',
      desc: 'Provide product specifications, target price range, quantity, and timeline. We review requirements and respond within 24 hours.',
    },
    {
      number: '02',
      title: 'Supplier Identification',
      desc: 'We search our supplier database and industry networks to identify candidates that match your criteria. Initial screening removes unqualified options.',
    },
    {
      number: '03',
      title: 'Supplier Shortlist',
      desc: 'You receive a shortlist of 3-5 suppliers with profiles, pricing estimates, and our assessment notes. We discuss options and narrow the field.',
    },
    {
      number: '04',
      title: 'Verification & Samples',
      desc: 'Selected suppliers undergo on-site verification. Samples are ordered and evaluated against your specifications before proceeding.',
    },
    {
      number: '05',
      title: 'Order Placement',
      desc: 'We assist with purchase order terms, payment arrangements, and production scheduling. Contracts are reviewed for clarity.',
    },
    {
      number: '06',
      title: 'Production Oversight',
      desc: 'Production progress is tracked with regular updates. Issues are flagged early and addressed with the supplier.',
    },
    {
      number: '07',
      title: 'Quality Inspection',
      desc: 'Before shipment, we conduct inspection per agreed AQL standards. Non-conforming goods are identified and handled.',
    },
    {
      number: '08',
      title: 'Shipping & Delivery',
      desc: 'Freight is booked, documentation prepared, and customs clearance coordinated. We confirm delivery and close the order.',
    },
  ];

  const deliverables = [
    'Supplier profiles and comparison reports',
    'Factory audit reports with photos',
    'Sample evaluation summaries',
    'Weekly production status updates',
    'Inspection reports with findings',
    'Shipping documents and tracking',
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-[#1E3A5F] mb-4">How It Works</h1>
        <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
          A transparent, step-by-step process from inquiry to delivery.
        </p>
      </div>

      <div className="space-y-8 mb-16">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-6 md:gap-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center font-mono text-lg">
              {step.number}
            </div>
            <div className="pt-1">
              <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F8FAFC] p-10 rounded-xl mb-16">
        <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-6">What You Receive</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
          {deliverables.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[#1F2937]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A5F]" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-[#6B7280] mb-6">Ready to begin? Start with a free consultation.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#162d4a] transition-colors">
          Get Started <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
