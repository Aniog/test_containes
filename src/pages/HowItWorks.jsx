import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Factory, ClipboardCheck, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Share Requirements',
      description: 'Tell us your product specs, target price, and quantity. We review your needs and propose a sourcing plan.',
      details: [
        'Product specification review',
        'Budget and timeline alignment',
        'Risk assessment and mitigation plan',
        'Clear milestones and deliverables',
      ],
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We search, shortlist, and verify suppliers. You review profiles and we arrange video calls or factory visits.',
      details: [
        'Supplier database search',
        'Initial vetting and capability check',
        'Profile presentation with photos and videos',
        'Video calls or on-site visits arranged',
      ],
    },
    {
      number: '03',
      title: 'Sample & Negotiation',
      description: 'We coordinate samples, track feedback, and negotiate pricing, payment terms, and delivery schedules.',
      details: [
        'Sample request and shipping coordination',
        'Feedback collection and analysis',
        'Price and terms negotiation',
        'Contract review and agreement',
      ],
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production, conduct inspections, and provide detailed reports with photos and videos.',
      details: [
        'Production timeline monitoring',
        'Pre-production inspection',
        'During-production checks',
        'Pre-shipment final inspection',
      ],
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We arrange logistics, handle export documentation, and track shipment until it reaches your warehouse.',
      details: [
        'Freight forwarding and carrier selection',
        'Export documentation and customs clearance',
        'Shipment tracking and updates',
        'Delivery confirmation and follow-up',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">How It Works</h1>
            <p className="mt-4 text-slate-600 text-lg">
              A proven 5-step process designed to reduce risk and deliver consistent results for overseas buyers.
            </p>
          </div>
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-slate-200">{step.number}</span>
                    <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Key activities</h3>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to start sourcing?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Tell us about your product and goals. We will put together a tailored proposal with timelines, costs, and risk mitigation steps.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
