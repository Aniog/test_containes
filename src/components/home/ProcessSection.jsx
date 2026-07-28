import React from 'react';
import { MessageSquare, Search, Building2, ClipboardCheck, Ship } from 'lucide-react';

const steps = [
  {
    id: 'step-1',
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    description: 'Tell us what you need — product specs, target price, MOQ, certifications, and timeline.',
  },
  {
    id: 'step-2',
    number: '02',
    icon: Search,
    title: 'We Source & Shortlist',
    description: 'Our team identifies qualified suppliers, requests quotes, and presents you with vetted options.',
  },
  {
    id: 'step-3',
    number: '03',
    icon: Building2,
    title: 'Factory Verification',
    description: 'We visit the factory, verify credentials, check production lines, and confirm capabilities.',
  },
  {
    id: 'step-4',
    number: '04',
    icon: ClipboardCheck,
    title: 'Sample & Production',
    description: 'We manage sampling, negotiate terms, monitor production, and conduct quality inspections.',
  },
  {
    id: 'step-5',
    number: '05',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle documentation, and ensure your goods arrive safely.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">How It Works</span>
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Our Sourcing Process
          </h2>
          <p id="process-subtitle" className="text-neutral-600 text-lg max-w-2xl mx-auto">
            A structured, transparent process designed to minimize risk and maximize value for your business.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-neutral-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative text-center">
                  <div className="relative z-10 w-16 h-16 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-7 h-7 text-brand-blue" />
                  </div>
                  <span className="text-brand-blue font-bold text-sm mb-2 block">{step.number}</span>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
