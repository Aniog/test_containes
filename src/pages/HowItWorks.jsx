import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Requirement Analysis',
      desc: 'We discuss your product specifications, target price, quality requirements, volume, and timeline. A detailed sourcing brief is prepared.',
    },
    {
      number: '02',
      title: 'Supplier Identification',
      desc: 'We search our supplier database and industry networks to identify manufacturers matching your criteria. Initial screening eliminates unsuitable candidates.',
    },
    {
      number: '03',
      title: 'Verification & Audit',
      desc: 'Shortlisted suppliers undergo business verification and on-site audits. We assess production capacity, quality systems, and compliance.',
    },
    {
      number: '04',
      title: 'Sample Evaluation',
      desc: 'Approved suppliers produce samples for your review. We coordinate sample shipping and provide feedback on quality and specifications.',
    },
    {
      number: '05',
      title: 'Order Placement',
      desc: 'Once samples are approved, we support contract negotiation, payment terms, and production scheduling with the selected supplier.',
    },
    {
      number: '06',
      title: 'Production Oversight',
      desc: 'We monitor production milestones, conduct inspections at key stages, and provide regular progress reports.',
    },
    {
      number: '07',
      title: 'Quality Control',
      desc: 'Pre-shipment inspection verifies product quality, packaging, and quantity. Issues are documented and addressed before release.',
    },
    {
      number: '08',
      title: 'Logistics & Delivery',
      desc: 'We coordinate shipping arrangements, prepare export documentation, and track the shipment to the destination port.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-slate-900 mb-4">How It Works</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          A structured, transparent process from initial inquiry to final delivery.
        </p>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-8 items-start border-b border-slate-200 pb-8 last:border-0">
            <div className="text-4xl font-semibold text-blue-800 w-20 flex-shrink-0">{step.number}</div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-lg">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600 mb-6">Ready to begin the sourcing process?</p>
        <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 bg-blue-800 text-white font-medium rounded hover:bg-blue-900 transition-colors">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
