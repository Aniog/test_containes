import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — type, specifications, target quantity, target price, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target unit price and MOQ',
      'Required certifications (CE, FDA, etc.)',
      'Delivery timeline and destination',
    ],
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier database and conducts outreach to identify 3–5 manufacturers that match your requirements. We communicate in Chinese to get accurate quotes and production details.',
    details: [
      'Database search across 10,000+ verified suppliers',
      'Direct outreach and qualification calls',
      'Quotation collection and comparison',
      'Initial capability assessment',
      'Shortlist report delivered within 5–10 business days',
    ],
  },
  {
    num: '03',
    title: 'Factory Audit & Verification',
    desc: 'Before recommending any supplier, we conduct an on-site factory audit to verify business legitimacy, production capabilities, certifications, and working conditions. You receive a full audit report.',
    details: [
      'Business license and export record check',
      'On-site visit with photos and video',
      'Production capacity and equipment assessment',
      'Certification and compliance verification',
      'Detailed audit report within 48 hours',
    ],
  },
  {
    num: '04',
    title: 'Sample Development & Approval',
    desc: 'Once you select a supplier, we coordinate sample production, review samples against your specifications, and manage revisions until you are satisfied. We ship samples directly to you for final approval.',
    details: [
      'Sample request and timeline coordination',
      'Sample review against specifications',
      'Revision management with factory',
      'Sample shipping to your location',
      'Approval sign-off before production',
    ],
  },
  {
    num: '05',
    title: 'Production Monitoring & QC',
    desc: 'During production, we track milestones, conduct in-line inspections, and perform a full pre-shipment inspection before goods leave the factory. Any issues are flagged and resolved before shipping.',
    details: [
      'Production schedule tracking',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'AQL sampling and defect reporting',
      'Inspection report within 24 hours',
    ],
  },
  {
    num: '06',
    title: 'Shipping & Delivery Coordination',
    desc: 'We coordinate with freight forwarders, prepare all export documentation, and track your shipment from factory gate to your destination. We keep you updated at every stage.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
      'Delivery confirmation',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A clear, structured process from your first inquiry to delivery at your door.
              No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 md:gap-10">
                {/* Step Number */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-neutral-200 mt-3" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-12">
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                    {step.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-5">{step.desc}</p>
                  <div className="bg-white rounded-xl border border-neutral-200 p-5">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                      What this includes
                    </p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {d}
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

      {/* Timeline Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Typical Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: 'Sourcing & Audit', time: '1–2 weeks', desc: 'Supplier research, shortlisting, and factory audit' },
              { phase: 'Sample & Approval', time: '1–3 weeks', desc: 'Sample production, review, and approval' },
              { phase: 'Production & Shipping', time: '4–12 weeks', desc: 'Production, QC inspection, and shipping (varies by product)' },
            ].map((t) => (
              <div key={t.phase} className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 text-center">
                <div className="text-2xl font-bold text-brand-navy mb-1">{t.time}</div>
                <div className="font-semibold text-neutral-900 mb-2">{t.phase}</div>
                <p className="text-sm text-neutral-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Sourcing Journey Today
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Submit your inquiry and we will get back to you within 24 hours with a free proposal.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
