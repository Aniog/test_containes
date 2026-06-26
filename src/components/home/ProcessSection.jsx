import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, ClipboardCheck, MessageSquare, Package, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what products you need, including specifications, quantity, target price, and quality standards.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching',
    description: 'We search our verified supplier network and present you with the best-matched manufacturers.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Sample & Verification',
    description: 'We arrange samples, verify factory credentials, and conduct on-site audits if needed.',
  },
  {
    icon: MessageSquare,
    step: '04',
    title: 'Negotiation & Order',
    description: 'We help negotiate pricing, terms, and manage the order placement process on your behalf.',
  },
  {
    icon: Package,
    step: '05',
    title: 'Production & QC',
    description: 'We monitor production progress and perform quality inspections before shipment.',
  },
  {
    icon: ArrowRight,
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle customs documentation, and track delivery to your destination.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to minimize risk and maximize value for your China sourcing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="bg-white p-6 lg:p-8 rounded-xl border border-gray-200 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-blue-700" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-blue-300" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
