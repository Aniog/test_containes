import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, ClipboardCheck, Factory, PackageCheck, Ship, ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell Us Your Needs',
    description: 'Start by filling out our inquiry form or scheduling a discovery call. Share your product specifications, target pricing, quantity requirements, and any certifications or standards your product must meet. The more detail you provide, the better we can match you with the right suppliers.',
    timeline: 'Day 1',
    deliverables: ['Initial needs assessment', 'Feasibility feedback', 'Service proposal'],
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Sourcing',
    description: 'Our team researches and shortlists 3-5 qualified suppliers from our verified network. We evaluate each candidate based on production capability, quality systems, pricing, lead times, and export experience. You receive a comparison report with our recommendations.',
    timeline: 'Days 2-7',
    deliverables: ['Supplier shortlist with profiles', 'Capability comparison matrix', 'Initial quotations'],
  },
  {
    icon: ClipboardCheck,
    number: '03',
    title: 'Verification & Quotes',
    description: 'We conduct on-site factory audits for your top candidates. This includes verifying business licenses, inspecting production lines, reviewing quality management systems, and checking references. We compile detailed reports with photos and risk ratings.',
    timeline: 'Days 8-14',
    deliverables: ['Factory audit reports with photos', 'Verified business documentation', 'Final quotations with terms'],
  },
  {
    icon: Factory,
    number: '04',
    title: 'Production Monitoring',
    description: 'Once you select a supplier and place your order, we monitor production progress. Our team visits the factory regularly, tracks milestones against the agreed schedule, and provides photo and video updates. If delays or issues arise, we flag them immediately.',
    timeline: 'Throughout production',
    deliverables: ['Weekly progress reports', 'Factory visit photos/videos', 'Milestone tracking dashboard'],
  },
  {
    icon: PackageCheck,
    number: '05',
    title: 'Quality Inspection',
    description: 'Before any goods ship, we conduct a pre-shipment inspection (PSI) using AQL sampling standards. We check product specifications, packaging, labeling, and quantity. You receive a detailed inspection report with photos and a pass/fail recommendation.',
    timeline: 'Before shipment',
    deliverables: ['Pre-shipment inspection report', 'Product photos and measurements', 'Pass/fail recommendation'],
  },
  {
    icon: Ship,
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight booking, prepare export documentation, and track your shipment until delivery. Whether by sea, air, or rail, we work with reliable freight partners to ensure competitive rates and on-time delivery to your destination.',
    timeline: 'Post-production',
    deliverables: ['Freight booking confirmation', 'Export documentation', 'Delivery tracking updates'],
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-800 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Our Process</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            How We Work
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A transparent, six-step process designed to minimize risk and deliver reliable results for your sourcing projects.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-teal-100 hidden sm:block" style={{ height: 'calc(100% + 3rem)' }} />
                  )}
                  <div className="flex gap-5 sm:gap-6">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-teal-700 rounded-full">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">Step {step.number}</span>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">{step.timeline}</span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h2>
                      <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                      <div className="bg-slate-50 rounded-lg border border-slate-200 p-4">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">What you receive</span>
                        <ul className="mt-2 space-y-1.5">
                          {step.deliverables.map((d) => (
                            <li key={d} className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                              <span className="text-sm text-slate-700">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Begin?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Start with a free sourcing assessment. No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
