import { ClipboardList, Search, ShieldCheck, ClipboardCheck, Truck, PackageCheck, Phone, FileText, MessageSquare } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Submit Your Inquiry',
    description: 'Start by filling out our inquiry form or scheduling a call. Tell us about your product, target price, quantity, quality requirements, and delivery timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product specifications and images',
      'Target price and MOQ',
      'Quality standards or certifications required',
      'Preferred delivery timeline and destination',
    ],
    timeline: 'Day 1',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Research Suppliers',
    description: 'Our team searches our verified network and conducts fresh research to identify 3-5 qualified manufacturers. We evaluate each against your criteria, checking production capabilities, certifications, and past performance.',
    details: [
      'Database and network search',
      'Initial supplier contact and interest confirmation',
      'Capability and capacity evaluation',
      'Shortlist presentation with pros and cons',
    ],
    timeline: 'Days 2-4',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification & Quotes',
    description: 'For shortlisted suppliers, we conduct on-site factory audits or virtual verification calls. We then collect and compare quotes, negotiate terms, and present a clear recommendation with pricing breakdown.',
    details: [
      'Physical or remote factory audit',
      'Quote collection and comparison',
      'Term negotiation (payment, delivery, warranty)',
      'Final supplier recommendation report',
    ],
    timeline: 'Days 5-10',
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Sample Evaluation',
    description: 'Before placing a bulk order, we coordinate sample production and delivery to you for approval. We document any required changes and ensure the factory understands your feedback before production begins.',
    details: [
      'Sample request and tracking',
      'Sample quality documentation',
      'Feedback loop with factory',
      'Pre-production approval confirmation',
    ],
    timeline: 'Days 11-20',
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production & QC',
    description: 'Once production starts, we monitor progress with regular updates. Our inspectors visit the factory at key milestones to check quality against your specifications and AQL standards.',
    details: [
      'Production schedule tracking',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI) with photo report',
      'Issue resolution and rework coordination',
    ],
    timeline: 'Days 21-45+',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'After final approval, we coordinate freight booking, prepare customs documents, and track the shipment until it reaches your destination. We provide all necessary paperwork for smooth customs clearance.',
    details: [
      'Freight booking and rate confirmation',
      'Customs documentation preparation',
      'Container loading supervision (CLS)',
      'Shipment tracking and delivery confirmation',
    ],
    timeline: 'Days 46-70+',
  },
  {
    number: '07',
    icon: PackageCheck,
    title: 'After-Sales Support',
    description: 'Our relationship does not end at delivery. We remain available for reorders, dispute resolution, supplier relationship management, and any post-delivery issues that may arise.',
    details: [
      'Delivery confirmation and feedback review',
      'Reorder facilitation',
      'Dispute mediation if needed',
      'Ongoing supplier relationship management',
    ],
    timeline: 'Ongoing',
  },
];

export default function HowItWorks() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-surface border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              How It Works
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              A clear, step-by-step process designed to minimize risk and give you full visibility from inquiry to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-[-48px] w-0.5 bg-border hidden sm:block" />
                  )}
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Number / Icon */}
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-surface rounded-xl p-6 border border-border">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-primary/40 uppercase tracking-wider">
                            Step {step.number}
                          </span>
                          <h3 className="text-xl font-bold text-primary">
                            {step.title}
                          </h3>
                        </div>
                        <span className="inline-flex items-center gap-1.5 bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-semibold shrink-0">
                          <FileText className="w-3.5 h-3.5" />
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-text-secondary leading-relaxed mb-5 text-sm">
                        {step.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail, di) => (
                          <li key={di} className="flex items-start gap-2 text-sm text-text-secondary">
                            <Phone className="w-3.5 h-3.5 text-success shrink-0 mt-1" />
                            {detail}
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

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-secondary mb-8">
            Every project is different. Contact us for a tailored sourcing plan that fits your product, budget, and timeline.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent/90 transition-colors shadow-lg"
          >
            Start Your Sourcing Project
          </a>
        </div>
      </section>
    </div>
  );
}
