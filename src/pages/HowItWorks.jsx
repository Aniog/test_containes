import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      desc: 'We discuss your product requirements, target price range, quality standards, and timeline. This helps us understand your sourcing needs.',
    },
    {
      number: '02',
      title: 'Supplier Identification',
      desc: 'We search our supplier database and industry networks to identify manufacturers that match your specifications and volume requirements.',
    },
    {
      number: '03',
      title: 'Supplier Shortlist',
      desc: 'You receive a shortlist of 3-5 qualified suppliers with details on capabilities, pricing, and lead times for your review.',
    },
    {
      number: '04',
      title: 'Factory Verification',
      desc: 'For your preferred suppliers, we conduct on-site verification to confirm legitimacy, production capacity, and quality systems.',
    },
    {
      number: '05',
      title: 'Sample Coordination',
      desc: 'We arrange sample production and delivery so you can evaluate product quality before committing to a full order.',
    },
    {
      number: '06',
      title: 'Order Management',
      desc: 'Once you place an order, we monitor production, conduct inspections, and coordinate logistics until delivery.',
    },
  ];

  const timeline = [
    { phase: 'Sourcing & Shortlisting', days: '3-5 days' },
    { phase: 'Factory Verification', days: '5-7 days' },
    { phase: 'Sample Production', days: '7-14 days' },
    { phase: 'Production & QC', days: '15-45 days' },
    { phase: 'Shipping & Delivery', days: '15-35 days' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A structured process designed to minimize risk and ensure quality at every stage.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8 border-b border-slate-200 last:border-0">
              <div className="md:w-24 flex-shrink-0">
                <span className="text-4xl font-semibold text-blue-800">{step.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 max-w-3xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">Typical Project Timeline</h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 bg-white rounded-xl border border-slate-200">
                <div className="md:w-80 font-medium text-slate-900">{item.phase}</div>
                <div className="text-slate-600">{item.days}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-6 text-center">
            Actual timelines vary based on product complexity, order volume, and supplier location.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Ready to Begin?</h2>
        <p className="text-slate-600 mb-8">Contact us to discuss your sourcing requirements.</p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default HowItWorks;
