import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '1',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quality requirements, and order volume.',
  },
  {
    icon: Search,
    step: '2',
    title: 'We Find Matching Suppliers',
    desc: 'We search our network and evaluate factories that meet your criteria, then present you with vetted options.',
  },
  {
    icon: ShieldCheck,
    step: '3',
    title: 'Factory Verification',
    desc: 'We visit the factory, verify their credentials, check production lines, and confirm they can deliver.',
  },
  {
    icon: ClipboardCheck,
    step: '4',
    title: 'Sample & Quality Check',
    desc: 'We arrange samples, conduct inspections during production, and perform a final check before shipment.',
  },
  {
    icon: Ship,
    step: '5',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics, handle documentation, and track your shipment until it reaches your door.',
  },
  {
    icon: PackageCheck,
    step: '6',
    title: 'Ongoing Support',
    desc: 'Repeat orders, new products, or supply chain adjustments — we continue to support your sourcing needs.',
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="process-title" className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            How It Works
          </h2>
          <p id="process-subtitle" className="text-neutral-500 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process from your first inquiry to delivered goods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.step} className="bg-white border border-neutral-200 rounded-lg p-6 md:p-8 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <div className="w-8 h-8 bg-primary-50 rounded flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-primary-500" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">{step.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="text-primary-500 hover:text-primary-600 font-medium text-sm inline-flex items-center gap-1 transition-colors"
          >
            See the full process →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
