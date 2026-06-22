import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ClipboardCheck, Truck, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Brief',
    desc: 'Fill out our inquiry form with your product requirements — specifications, target price, quantity, timeline, and any compliance or certification needs. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Delivery timeline and destination',
      'Packaging and labeling requirements',
    ],
    duration: '1 day',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches qualified manufacturers from our verified supplier network, trade databases, and industry contacts. We screen suppliers against your criteria and prepare a shortlist of 3–5 candidates.',
    details: [
      'Database and network research',
      'Initial supplier screening calls',
      'Capability and capacity verification',
      'Price and MOQ confirmation',
      'Shortlist report with supplier profiles',
    ],
    duration: '5–10 days',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify business registration, production capabilities, quality systems, and working conditions. You receive a detailed audit report with photos.',
    details: [
      'On-site factory visit',
      'Business license and certification check',
      'Production line inspection',
      'Quality management system review',
      'Photo and video documentation',
    ],
    duration: '3–7 days',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Sampling & Approval',
    desc: 'We arrange product samples from your chosen supplier and manage the review process. We check samples against your specifications and coordinate revisions until you approve the final sample.',
    details: [
      'Sample request and coordination',
      'Sample quality check against specs',
      'Feedback and revision management',
      'Final sample approval',
      'Pre-production confirmation',
    ],
    duration: '7–21 days',
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we monitor progress against the agreed schedule, conduct in-line inspections, and perform a final pre-shipment inspection before goods are loaded.',
    details: [
      'Production schedule tracking',
      'In-line quality checks',
      'Pre-shipment inspection (AQL)',
      'Defect reporting and resolution',
      'Final inspection report',
    ],
    duration: 'Throughout production',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to book shipment, prepare export documentation, and track your goods from factory to destination. We keep you updated at every stage.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking',
      'Delivery confirmation',
    ],
    duration: '15–45 days (sea freight)',
  },
];

const guarantees = [
  { title: 'Transparent Communication', desc: 'You receive regular updates at every stage. No surprises.' },
  { title: 'Verified Suppliers Only', desc: 'We only recommend factories we have personally audited or verified.' },
  { title: 'Independent Quality Control', desc: 'Our inspectors work for you, not the factory.' },
  { title: 'Fixed Fees, No Hidden Costs', desc: 'We quote clearly upfront. No commissions from suppliers.' },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            A clear, step-by-step process designed to reduce risk and give you full visibility into your China sourcing project.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {steps.map(({ number, icon: Icon, title, desc, details, duration }, index) => (
              <div key={number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-200 hidden md:block" style={{ top: '4rem', height: 'calc(100% + 3rem)' }} />
                )}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center relative z-10">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-brand-navy/20 font-bold text-2xl">{number}</span>
                        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
                      </div>
                      <span className="bg-brand-gold/10 text-brand-gold text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        {duration}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
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

      {/* Our Guarantees */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Our Commitment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What You Can Expect From Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map(({ title, desc }) => (
              <div key={title} className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-center">
                <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-red-100 text-lg mb-8">
            Submit your sourcing brief today and we'll respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-red font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
