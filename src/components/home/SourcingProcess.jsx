import React from 'react';
import { MessageSquare, Search, FileCheck, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'Share your product requirements, target price, quantity, and timeline. We provide a free assessment and sourcing plan.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    description: 'We search our verified supplier network and present you with qualified options including factory profiles and pricing.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Verification & Sampling',
    description: 'Factory audits, sample evaluation, and specification confirmation before moving to mass production.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections at multiple stages to ensure compliance.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics, customs documentation, and ensure your goods arrive safely at destination.',
  },
];

const SourcingProcess = () => {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            Our 5-Step Sourcing Process
          </h2>
          <p className="text-lg text-text-secondary">
            A systematic approach to ensure quality, reduce risk, and streamline your sourcing from China.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border-light" />
              )}
              
              <div className="relative bg-white rounded-xl p-6 text-center shadow-sm border border-border-light hover:shadow-md transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  Step {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SourcingProcess;
