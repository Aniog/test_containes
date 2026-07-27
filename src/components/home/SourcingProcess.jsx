import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, ShieldCheck, ClipboardCheck, Ship, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need — product type, specifications, quantity, and target price. We review and confirm within 24 hours.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Search & Screening',
    description: 'We search our verified supplier network and conduct initial screening based on your requirements.',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Factory Verification',
    description: 'We visit the factory to verify business credentials, production capacity, and quality management systems.',
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Sample & Quality Check',
    description: 'We arrange samples, evaluate quality, and ensure the product meets your specifications before production starts.',
  },
  {
    icon: PackageCheck,
    number: '05',
    title: 'Production Monitoring',
    description: 'We follow production progress with regular updates, during-production inspections, and timeline tracking.',
  },
  {
    icon: Ship,
    number: '06',
    title: 'Final Inspection & Shipping',
    description: 'Pre-shipment quality inspection, logistics coordination, customs documentation, and delivery to your door.',
  },
];

const SourcingProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            How Our Sourcing Process Works
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A clear, step-by-step process that takes you from initial request to delivered goods — with full transparency at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-white rounded-lg border border-slate-200 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-amber-500 font-bold text-2xl">{step.number}</span>
                <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-navy-700" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            See Full Process Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SourcingProcess;
