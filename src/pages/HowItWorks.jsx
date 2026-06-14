import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CtaBanner from '../components/shared/CtaBanner';
import SectionHeader from '../components/shared/SectionHeader';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Inquiry',
    description:
      'Fill out our inquiry form with your product details, target specifications, quantity, and budget. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product type and specifications',
      'Target unit price and MOQ',
      'Required certifications (CE, FCC, etc.)',
      'Delivery timeline and destination',
    ],
    duration: 'Day 1',
  },
  {
    number: '02',
    title: 'Initial Consultation',
    description:
      'We review your inquiry and schedule a call or email exchange to clarify requirements, discuss your sourcing goals, and agree on the scope of work and fees.',
    details: [
      'Requirements clarification call',
      'Scope of work agreement',
      'Fee structure and timeline confirmation',
      'NDA signing if required',
    ],
    duration: 'Days 1–2',
  },
  {
    number: '03',
    title: 'Supplier Research & Shortlisting',
    description:
      'Our team searches our verified supplier network, trade databases, and industry contacts to identify 3–5 manufacturers that match your requirements. We prepare a supplier comparison report.',
    details: [
      'Search across verified supplier database',
      'Evaluation against your specifications',
      'Supplier profile and capability summary',
      'Initial price and lead time estimates',
    ],
    duration: 'Days 3–10',
  },
  {
    number: '04',
    title: 'Factory Audit & Verification',
    description:
      'For shortlisted suppliers, we conduct on-site factory audits to verify credentials, production capacity, and quality systems. You receive a written audit report before committing to any supplier.',
    details: [
      'On-site factory visit by our team',
      'Business license and certification check',
      'Production capacity assessment',
      'Written audit report with photos',
    ],
    duration: 'Days 5–15',
  },
  {
    number: '05',
    title: 'Sample Arrangement & Approval',
    description:
      'We coordinate sample production with the selected factory, inspect samples against your specifications, and ship them to you for final approval. We manage revision rounds as needed.',
    details: [
      'Sample order placement and tracking',
      'Sample inspection before shipping',
      'Revision coordination with factory',
      'Sample shipping to your location',
    ],
    duration: '2–4 weeks',
  },
  {
    number: '06',
    title: 'Order Placement & Production Monitoring',
    description:
      'Once you approve the sample and confirm the order, we place the purchase order, monitor production milestones, and conduct quality inspections at key stages.',
    details: [
      'Purchase order review and placement',
      'Production schedule tracking',
      'During-production quality checks',
      'Regular progress reports with photos',
    ],
    duration: '4–12 weeks',
  },
  {
    number: '07',
    title: 'Pre-Shipment Inspection',
    description:
      'Before goods leave the factory, our inspectors conduct a final pre-shipment inspection using AQL sampling standards. We provide a pass/fail report and resolve any issues before loading.',
    details: [
      'AQL-based sampling inspection',
      'Detailed photo inspection report',
      'Pass/fail recommendation',
      'Issue resolution with factory if needed',
    ],
    duration: '1–2 days',
  },
  {
    number: '08',
    title: 'Shipping Coordination & Delivery',
    description:
      'We coordinate with your freight forwarder, prepare export documentation, supervise container loading, and confirm cargo departure. Your goods are on their way.',
    details: [
      'Export documentation preparation',
      'Freight forwarder coordination',
      'Container loading supervision',
      'Shipping confirmation and tracking',
    ],
    duration: 'Ongoing',
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">How It Works</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to final delivery. No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex gap-6 md:gap-10">
                {/* Step number + connector */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 bg-gray-200 flex-1 mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-12 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-brand-navy">{step.title}</h2>
                    <span className="text-xs font-semibold bg-brand-light text-brand-red px-2 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-brand-slate leading-relaxed mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="text-brand-slate text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Typical Timeline"
            title="From Inquiry to Delivery"
            subtitle="Most sourcing projects from initial inquiry to first shipment take 8–16 weeks depending on product complexity and factory lead times."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { phase: 'Supplier Research', time: '1–2 weeks' },
              { phase: 'Factory Audit', time: '1 week' },
              { phase: 'Sample Approval', time: '2–4 weeks' },
              { phase: 'Production & Shipping', time: '6–12 weeks' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                <div className="text-brand-red font-bold text-lg mb-1">{item.time}</div>
                <div className="text-brand-navy text-sm font-medium">{item.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Get Started?"
        subtitle="Submit your sourcing inquiry today and we'll respond within 24 hours."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
