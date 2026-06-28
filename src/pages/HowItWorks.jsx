import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      desc: 'We discuss your product requirements, target specifications, volume expectations, and timeline.',
    },
    {
      number: '02',
      title: 'Requirement Documentation',
      desc: 'You provide detailed product specifications, quality standards, and any compliance requirements.',
    },
    {
      number: '03',
      title: 'Supplier Identification',
      desc: 'We search our verified supplier network and conduct preliminary screening based on your criteria.',
    },
    {
      number: '04',
      title: 'Factory Verification',
      desc: 'On-site audits verify production capabilities, quality systems, and business legitimacy.',
    },
    {
      number: '05',
      title: 'Sample Evaluation',
      desc: 'Approved suppliers produce samples for your review and approval before mass production.',
    },
    {
      number: '06',
      title: 'Production Management',
      desc: 'We monitor production schedules, conduct inspections, and address issues as they arise.',
    },
    {
      number: '07',
      title: 'Quality Assurance',
      desc: 'Pre-shipment inspections ensure products meet agreed specifications and quality standards.',
    },
    {
      number: '08',
      title: 'Logistics & Delivery',
      desc: 'We coordinate shipping, documentation, customs clearance, and final delivery to your destination.',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">How It Works</h1>
          <p className="text-lg text-slate-300">A transparent, step-by-step process designed to minimize risk.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-24 flex-shrink-0">
                <div className="text-4xl font-semibold text-blue-700">{step.number}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Ready to Begin?</h2>
          <p className="text-slate-600 mb-6">Start with a free consultation to discuss your sourcing needs.</p>
          <Link to="/contact" className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;