import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Search, Building2, FileCheck, Ship, ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-8 h-8" />,
    step: 'Step 1',
    title: 'Submit Your Requirements',
    desc: 'Fill out our brief form with your product specifications, target pricing, quantity, quality standards, and expected timeline. The more detail, the better.',
    details: [
      'Product type, specifications, and drawings if available',
      'Target unit price and order quantity',
      'Required certifications and compliance standards',
      'Preferred timeline and delivery destination',
    ],
  },
  {
    icon: <Search className="w-8 h-8" />,
    step: 'Step 2',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier network and runs targeted sourcing campaigns. Within 48 hours, you receive a shortlist of 3-5 qualified suppliers.',
    details: [
      'Multi-channel search across databases and factory clusters',
      'Initial screening based on your requirements',
      'Supplier comparison report with profiles',
      'Recommended suppliers ranked by fit',
    ],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    step: 'Step 3',
    title: 'Factory Audit & Sampling',
    desc: 'We visit shortlisted factories in person, audit their operations, and coordinate sample production for your evaluation and approval.',
    details: [
      'On-site factory visit and comprehensive audit',
      'Verification of business licenses and certifications',
      'Production capability and equipment assessment',
      'Sample coordination and shipping to you',
    ],
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    step: 'Step 4',
    title: 'Order Placement & Production',
    desc: 'Once you select a supplier, we help negotiate terms, manage contracts, and oversee production from raw material sourcing to finished goods.',
    details: [
      'Price and payment term negotiation',
      'Contract review and management',
      'Production schedule creation',
      'Regular progress updates with photos',
      'Raw material quality verification',
    ],
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    step: 'Step 5',
    title: 'Quality Control',
    desc: 'Our QC team performs inspections at multiple stages to ensure products meet your specifications and quality standards.',
    details: [
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Defect identification and remediation',
      'Final quality report with photos',
    ],
  },
  {
    icon: <Ship className="w-8 h-8" />,
    step: 'Step 6',
    title: 'Shipping & Delivery',
    desc: 'We handle all logistics, export documentation, and shipping arrangements so your goods arrive safely and on time.',
    details: [
      'Freight booking (sea or air)',
      'Export customs clearance and documentation',
      'Cargo consolidation if needed',
      'Real-time tracking',
      'Door-to-door delivery',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">How It Works</h1>
            <p className="text-lg lg:text-xl text-primary-100">
              A clear, six-step process that takes you from product requirement to delivered goods with minimal hassle.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-20 bottom-0 w-px bg-neutral-200" />
                )}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:w-16 shrink-0">
                    <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-sm font-semibold text-primary-600 whitespace-nowrap">{step.step}</span>
                  </div>
                  <div className="flex-1 bg-white p-6 lg:p-8 rounded-xl border border-neutral-200">
                    <h2 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">{step.title}</h2>
                    <p className="text-neutral-600 mb-4">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-neutral-600">
                          <ArrowRight className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Tell us what you need and we will begin the sourcing process within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-primary-50 transition-colors text-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}