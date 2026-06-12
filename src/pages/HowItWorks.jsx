import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, Search, ShieldCheck, ClipboardCheck, Factory, Truck, Package } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — type, quantity, target price, quality requirements, and destination country. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and specifications',
      'Target quantity (MOQ and order volume)',
      'Budget and target unit price',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Delivery timeline and destination',
    ],
    duration: 'Day 1',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and conducts fresh market research to identify manufacturers that match your requirements. We shortlist 3–5 qualified candidates.',
    details: [
      'Database search across 500+ verified suppliers',
      'New market research if needed',
      'Initial supplier screening calls',
      'Comparative supplier summary report',
      'Recommended supplier ranking',
    ],
    duration: 'Days 2–7',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    desc: 'We visit the shortlisted factories in person to verify their legitimacy, production capacity, certifications, and quality systems. You receive a detailed written audit report with photos.',
    details: [
      'Business license and registration check',
      'On-site production capacity assessment',
      'Certification and compliance verification',
      'Workforce and equipment review',
      'Photo-documented audit report',
    ],
    duration: 'Days 5–12',
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample Development & Approval',
    desc: 'We arrange product samples from your preferred supplier, coordinate shipping to your location, and manage revision rounds until you are satisfied with the sample quality.',
    details: [
      'Sample request and coordination',
      'Sample quality pre-check before shipping',
      'International sample shipping',
      'Revision and re-sample management',
      'Final sample approval confirmation',
    ],
    duration: 'Days 10–25',
  },
  {
    num: '05',
    icon: Factory,
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve the sample, we assist with contract review, order placement, and monitor production milestones. You receive regular updates throughout the manufacturing process.',
    details: [
      'Contract and PO review support',
      'Production schedule confirmation',
      'Weekly production progress reports',
      'Issue escalation and resolution',
      'Milestone photo and video updates',
    ],
    duration: 'Production period',
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before goods leave the factory, our inspectors perform a pre-shipment inspection using AQL standards. Any defects are flagged and resolved before shipment is approved.',
    details: [
      'AQL-based sampling inspection',
      'Product specification compliance check',
      'Packaging and labeling verification',
      'Defect classification and reporting',
      'Rework or replacement coordination if needed',
    ],
    duration: '1–2 days before shipment',
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange sea, air, or express shipping. We handle export documentation and track your shipment until it reaches your destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
      'Delivery confirmation',
    ],
    duration: 'Varies by shipping method',
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1A3C6E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#C0392B] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Source for You
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A structured, transparent 7-step process designed to minimize risk and deliver results — from your first inquiry to final delivery.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex gap-6 md:gap-10">
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-[#E2E8F0] -mb-12" />
                  )}
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1A3C6E] rounded-xl flex items-center justify-center z-10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-[#1A3C6E] bg-[#EBF2FA] px-2 py-0.5 rounded">
                        Step {step.num}
                      </span>
                      <span className="text-xs text-[#475569] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {step.duration}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#1E293B] mb-3">{step.title}</h2>
                    <p className="text-[#475569] leading-relaxed mb-4">{step.desc}</p>
                    <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#E2E8F0]">
                      <p className="text-xs font-semibold text-[#1A3C6E] uppercase tracking-wide mb-3">What's included:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-[#475569]">
                            <CheckCircle className="w-4 h-4 text-[#1A3C6E] flex-shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-[#EBF2FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E293B] mb-3">Typical Project Timeline</h2>
            <p className="text-[#475569]">From inquiry to first shipment — most projects complete within 6–10 weeks.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Supplier Shortlist', time: '1 week' },
              { label: 'Factory Audit', time: '1–2 weeks' },
              { label: 'Sample Approval', time: '2–3 weeks' },
              { label: 'Production + QC', time: '3–6 weeks' },
            ].map(({ label, time }) => (
              <div key={label} className="bg-white rounded-xl p-5 text-center border border-[#E2E8F0]">
                <div className="text-xl font-bold text-[#1A3C6E] mb-1">{time}</div>
                <div className="text-sm text-[#475569]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A3C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Submit your inquiry today and we'll respond within 24 hours with a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
