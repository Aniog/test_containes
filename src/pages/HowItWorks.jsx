import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import SectionCTA from '@/components/shared/SectionCTA';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Inquiry',
    duration: 'Day 1',
    description:
      'Fill out our inquiry form with your product requirements — type, specifications, target price, quantity, and destination. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product description and specifications',
      'Target unit price and total budget',
      'Required certifications (CE, FCC, etc.)',
      'Delivery timeline and destination',
      'Any existing supplier contacts (optional)',
    ],
    outcome: 'We confirm receipt and assign a dedicated sourcing manager within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    duration: 'Days 2–7',
    description:
      'Our team researches qualified manufacturers from verified databases, trade associations, and our established network. We screen suppliers against your criteria and shortlist the best 3–5 candidates.',
    details: [
      'Database and network research',
      'Initial supplier screening calls',
      'Capability and capacity verification',
      'Preliminary pricing inquiry',
      'Comparative supplier summary report',
    ],
    outcome: 'You receive a shortlist report with supplier profiles, pros/cons, and our recommendation.',
  },
  {
    number: '03',
    title: 'Factory Audit',
    duration: 'Days 8–14',
    description:
      'For shortlisted suppliers, we conduct on-site factory audits to verify their legitimacy, production capabilities, and quality systems. This step is critical before placing any order.',
    details: [
      'Business license and registration verification',
      'Production floor and equipment inspection',
      'Quality management system review',
      'Worker conditions and compliance check',
      'Photographic documentation',
    ],
    outcome: 'Detailed audit report delivered within 48 hours of the visit.',
  },
  {
    number: '04',
    title: 'Sample Development & Approval',
    duration: 'Weeks 2–4',
    description:
      'We request samples from approved suppliers, review them against your specifications, and coordinate revisions if needed. We only recommend proceeding to bulk order once samples meet your standards.',
    details: [
      'Sample request and coordination',
      'Sample quality review against specs',
      'Feedback and revision management',
      'Sample shipping to your location',
      'Final sample approval confirmation',
    ],
    outcome: 'Approved sample and confirmed supplier ready for bulk order.',
  },
  {
    number: '05',
    title: 'Price Negotiation & Order Placement',
    duration: 'Week 3–5',
    description:
      'Using our local market knowledge and supplier relationships, we negotiate the best possible price, payment terms, and lead time on your behalf. We review the purchase contract before you sign.',
    details: [
      'Price and MOQ negotiation',
      'Payment terms discussion',
      'Lead time confirmation',
      'Purchase order review',
      'Contract and deposit coordination',
    ],
    outcome: 'Signed purchase order with agreed terms and production start date.',
  },
  {
    number: '06',
    title: 'Production Monitoring',
    duration: 'During Production',
    description:
      'Once production begins, we track progress against the agreed timeline. We visit the factory at key milestones and send you regular updates with photos and status reports.',
    details: [
      'Production timeline tracking',
      'Weekly progress updates',
      'Mid-production factory visit',
      'Issue identification and resolution',
      'Delivery date confirmation',
    ],
    outcome: 'Regular reports keeping you informed throughout production.',
  },
  {
    number: '07',
    title: 'Quality Inspection',
    duration: 'Before Shipment',
    description:
      'Before goods leave the factory, our inspectors conduct a thorough pre-shipment inspection using AQL sampling standards. Any defects are documented and resolved before loading.',
    details: [
      'AQL sampling inspection',
      'Defect identification and classification',
      'Specification compliance check',
      'Packaging and labeling review',
      'Container loading supervision',
    ],
    outcome: 'Inspection report with pass/fail result and photographic evidence.',
  },
  {
    number: '08',
    title: 'Shipping & Delivery',
    duration: 'Post-Inspection',
    description:
      'We coordinate with freight forwarders to arrange sea or air shipment. We handle all export documentation from the Chinese side and provide tracking updates until goods arrive at your destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Cargo booking and scheduling',
      'Shipment tracking updates',
      'Delivery confirmation',
    ],
    outcome: 'Goods delivered to your destination with full documentation.',
  },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        badge="Our Process"
        title="How We Source for You"
        subtitle="A clear, step-by-step process designed to reduce risk and give you full visibility from inquiry to delivery."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-200 hidden md:block" style={{ top: '4rem', height: 'calc(100% + 2rem)' }} />
                )}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:shadow-card-hover transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1 flex md:flex-col items-start gap-4">
                      <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                      <div>
                        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                        {step.details.map((d) => (
                          <div key={d} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{d}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Outcome: </span>
                        <span className="text-slate-700 text-sm">{step.outcome}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Start Your Sourcing Project Today"
        subtitle="Submit your inquiry and we'll respond within 24 hours with a tailored plan."
      />
    </>
  );
}
