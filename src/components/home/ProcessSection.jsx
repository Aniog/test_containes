import React from 'react';
import { MessageSquare, Search, ClipboardCheck, Factory, PackageCheck, Ship } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell Us Your Needs',
    description: 'Share your product requirements, target price, and order volume through our inquiry form or a discovery call.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Sourcing',
    description: 'We research and shortlist 3-5 qualified suppliers from our network that match your specifications.',
  },
  {
    icon: ClipboardCheck,
    number: '03',
    title: 'Verification & Quotes',
    description: 'We verify factories and collect detailed quotations including pricing, MOQ, lead time, and samples.',
  },
  {
    icon: Factory,
    number: '04',
    title: 'Production Monitoring',
    description: 'Once you place the order, we monitor production progress with regular factory visits and photo reports.',
  },
  {
    icon: PackageCheck,
    number: '05',
    title: 'Quality Inspection',
    description: 'Pre-shipment inspection (PSI) ensures your products meet agreed specifications before they leave the factory.',
  },
  {
    icon: Ship,
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate freight booking, customs documentation, and delivery to your warehouse or fulfillment center.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">How We Work</h2>
          <p className="text-lg text-slate-600">
            A transparent, step-by-step process designed to minimize risk and deliver results for your sourcing projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-teal-700 rounded-lg shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block w-0.5 h-8 bg-teal-100" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Step {step.number}</span>
                    <h3 className="text-lg font-semibold text-slate-800 mt-1 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
