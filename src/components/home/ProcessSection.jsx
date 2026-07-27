import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '1',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quantity, and quality requirements. We respond within 24 hours.',
  },
  {
    icon: Search,
    step: '2',
    title: 'We Find Matching Suppliers',
    desc: 'Our team searches our verified supplier network and identifies factories that match your requirements.',
  },
  {
    icon: ShieldCheck,
    step: '3',
    title: 'Factory Verification',
    desc: 'We visit the factory, verify their credentials, check production capacity, and confirm they can deliver on your terms.',
  },
  {
    icon: ClipboardCheck,
    step: '4',
    title: 'Sample & Quality Check',
    desc: 'We arrange samples, review them with you, and set quality standards before production begins.',
  },
  {
    icon: PackageCheck,
    step: '5',
    title: 'Production Monitoring',
    desc: 'We follow production progress, conduct mid-line inspections, and keep you updated on milestones.',
  },
  {
    icon: Ship,
    step: '6',
    title: 'Final Inspection & Shipping',
    desc: 'Pre-shipment inspection, then we coordinate freight, customs, and delivery to your warehouse.',
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="process-title" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p id="process-subtitle" className="text-neutral-600 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process from your first inquiry to product delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => (
            <div key={s.step} className="bg-white border border-neutral-200 rounded-xl p-6 md:p-8 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {s.step}
                </div>
                <s.icon className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-sm no-underline transition-colors inline-flex items-center gap-2"
          >
            See Full Process Details →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
