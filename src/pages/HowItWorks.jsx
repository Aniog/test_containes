import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare } from 'lucide-react';

const steps = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'Submit Your Sourcing Request',
    description:
      'Fill out our sourcing inquiry form with your product details, target price, quantity, and any specific requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name, category, and specifications',
      'Target unit price and order quantity',
      'Required certifications or compliance standards',
      'Destination country and preferred shipping method',
      'Timeline and any other constraints',
    ],
    time: 'Day 1',
    color: 'bg-blue-600',
  },
  {
    number: '02',
    phase: 'Research',
    title: 'Supplier Research & Shortlisting',
    description:
      'Our team searches our verified supplier database, trade contacts, and industry networks to identify factories that match your requirements. We evaluate each candidate before presenting them to you.',
    details: [
      'Search across 500+ verified supplier database',
      'Cross-reference with trade show contacts and industry networks',
      'Initial screening for capacity, certifications, and MOQ',
      'Prepare supplier profiles with key information',
      'Shortlist 3–5 best-matched factories',
    ],
    time: 'Days 2–5',
    color: 'bg-indigo-600',
  },
  {
    number: '03',
    phase: 'Verification',
    title: 'Factory Audit & Verification',
    description:
      'For shortlisted suppliers, we conduct on-site or document-based audits to verify their legitimacy, production capabilities, and quality systems. You receive a written audit report.',
    details: [
      'Business license and registration verification',
      'On-site factory visit with photos',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Certification and compliance check',
    ],
    time: 'Days 5–10',
    color: 'bg-violet-600',
  },
  {
    number: '04',
    phase: 'Sampling',
    title: 'Sampling & Approval',
    description:
      'We arrange samples from your preferred suppliers and coordinate shipping to your location. We review samples against your specifications before they are sent to you.',
    details: [
      'Sample request and coordination with factory',
      'Pre-shipment sample review by our QC team',
      'Sample shipping to your address',
      'Feedback collection and revision requests',
      'Final sample approval confirmation',
    ],
    time: 'Weeks 2–4',
    color: 'bg-purple-600',
  },
  {
    number: '05',
    phase: 'Production',
    title: 'Order Placement & Production Follow-up',
    description:
      'Once you approve the sample and supplier, we place the order and monitor production from start to finish. We keep you updated at every milestone.',
    details: [
      'Purchase order review and placement',
      'Production schedule confirmation',
      'Regular production updates with photos',
      'Issue escalation and resolution',
      'Packaging and labeling verification',
    ],
    time: 'Weeks 4–10',
    color: 'bg-brand-navy',
  },
  {
    number: '06',
    phase: 'Quality Control',
    title: 'Quality Inspection',
    description:
      'Before goods are shipped, our local QC team conducts a pre-shipment inspection using your specifications and AQL standards. You receive a detailed report and approve shipment.',
    details: [
      'Pre-shipment inspection scheduling',
      'AQL-based sampling and defect classification',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
      'Shipment approval or rework request',
    ],
    time: 'Week 10–11',
    color: 'bg-teal-600',
  },
  {
    number: '07',
    phase: 'Shipping',
    title: 'Shipping & Delivery',
    description:
      'We coordinate freight forwarding, export documentation, and delivery to your warehouse. We keep you informed of shipment status throughout transit.',
    details: [
      'Freight booking (sea, air, or express)',
      'Export documentation preparation',
      'Cargo consolidation if needed',
      'Shipment tracking and updates',
      'Customs clearance coordination',
    ],
    time: 'Weeks 11–15',
    color: 'bg-green-600',
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Our Sourcing Process Works
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to reduce risk and give you full visibility
            from inquiry to delivery.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 bg-slate-200 flex-1 mt-2" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-8 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-brand-blue bg-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {step.phase}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {step.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" /> What we do
                    </p>
                    <ul className="space-y-1.5">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
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

      {/* FAQ teaser + CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 mb-6">
            Submit your sourcing request today and we'll respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
