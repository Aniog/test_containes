import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Search, Eye, ClipboardCheck, Package, Ship } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what you need: product details, quantity, quality standards, and target price. We review your request within 24 hours.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching',
    description: 'We search our verified supplier network and shortlist the best manufacturers that match your requirements.',
  },
  {
    icon: Eye,
    step: '03',
    title: 'Factory Verification',
    description: 'We conduct on-site audits to verify the factory\'s credentials, production capacity, and quality systems.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Quotation',
    description: 'We arrange samples for your approval and negotiate the best pricing on your behalf.',
  },
  {
    icon: Package,
    step: '05',
    title: 'Production & QC',
    description: 'We monitor production progress and perform quality inspections at key stages before shipment.',
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics, customs documentation, and coordinate delivery to your destination.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</span>
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            A Clear, Transparent Sourcing Process
          </h2>
          <p id="process-subtitle" className="text-lg text-slate-600">
            From your initial inquiry to final delivery, we keep you informed at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-slate-100">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
