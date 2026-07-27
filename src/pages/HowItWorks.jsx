import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare, Package, Search, ShieldCheck, Truck } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Inquiry & Briefing',
    color: 'bg-brand-blue',
    steps: [
      {
        number: '01',
        icon: MessageSquare,
        title: 'Submit Your Sourcing Request',
        description: 'Fill out our inquiry form with your product requirements — specifications, target price, quantity, timeline, and any compliance or certification needs. The more detail you provide, the faster we can help.',
        duration: 'Day 1',
      },
      {
        number: '02',
        icon: FileText,
        title: 'Requirements Review & Proposal',
        description: 'Our team reviews your request and prepares a sourcing brief. We may ask clarifying questions to ensure we fully understand your needs. We then send you a clear scope of work and fee proposal.',
        duration: 'Day 1–2',
      },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Supplier Research',
    color: 'bg-brand-orange',
    steps: [
      {
        number: '03',
        icon: Search,
        title: 'Supplier Research & Identification',
        description: 'We search our verified supplier database, trade networks, and industry contacts to identify manufacturers that match your criteria. We focus on factories with relevant experience, appropriate scale, and a track record of exporting.',
        duration: 'Days 3–7',
      },
      {
        number: '04',
        icon: ShieldCheck,
        title: 'Supplier Shortlisting & Initial Vetting',
        description: 'We narrow the list to 3–5 qualified candidates, conduct initial background checks, and prepare a supplier comparison report covering capabilities, certifications, MOQ, and pricing.',
        duration: 'Days 5–10',
      },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Verification & Sampling',
    color: 'bg-green-600',
    steps: [
      {
        number: '05',
        icon: ShieldCheck,
        title: 'Factory Audit',
        description: 'For shortlisted suppliers, we conduct on-site factory audits to verify business registration, production capacity, equipment, workforce, and compliance. You receive a detailed audit report with photos.',
        duration: 'Days 7–14',
      },
      {
        number: '06',
        icon: Package,
        title: 'Sample Request & Review',
        description: 'We request product samples from the preferred supplier, review them against your specifications, and provide feedback. If needed, we coordinate sample revisions until you\'re satisfied.',
        duration: 'Days 10–21',
      },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Order & Production',
    color: 'bg-purple-600',
    steps: [
      {
        number: '07',
        icon: FileText,
        title: 'Price Negotiation & Order Placement',
        description: 'Once you approve the sample, we negotiate final pricing, payment terms, and delivery schedule on your behalf. We review the purchase contract and assist with order placement.',
        duration: 'Days 14–21',
      },
      {
        number: '08',
        icon: Clock,
        title: 'Production Monitoring',
        description: 'We maintain regular contact with the factory throughout production, track milestones, and provide you with scheduled status updates. Any issues are flagged and addressed early.',
        duration: 'During production',
      },
    ],
  },
  {
    phase: 'Phase 5',
    title: 'QC & Shipping',
    color: 'bg-brand-navy',
    steps: [
      {
        number: '09',
        icon: CheckCircle,
        title: 'Pre-Shipment Inspection',
        description: 'Before goods leave the factory, our inspector conducts a pre-shipment inspection following AQL sampling standards. You receive a full inspection report with photos. You decide whether to approve shipment.',
        duration: 'Before shipment',
      },
      {
        number: '10',
        icon: Truck,
        title: 'Shipping & Documentation',
        description: 'We coordinate with freight forwarders, prepare export documentation, and manage the logistics process from factory to your destination port. We keep you updated on shipment status throughout.',
        duration: 'After approval',
      },
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            How We Source for You
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A structured, transparent 10-step process designed to reduce risk and give you full visibility at every stage of your sourcing project.
          </p>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {phases.map((phase) => (
              <div key={phase.phase}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`${phase.color} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {phase.phase}
                  </div>
                  <h2 className="text-xl font-bold text-brand-text">{phase.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {phase.steps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.number} className="bg-brand-gray rounded-xl p-6 border border-brand-border relative">
                        <div className="text-5xl font-bold text-brand-blue/8 absolute top-4 right-5 select-none">
                          {step.number}
                        </div>
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-brand-blue" />
                          </div>
                          <div>
                            <span className="text-brand-muted text-xs font-medium">{step.duration}</span>
                            <h3 className="font-semibold text-brand-text mt-0.5">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-brand-blue-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-text mb-4">What You Receive at Each Stage</h2>
            <p className="text-brand-muted">Clear deliverables so you always know what to expect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Supplier Report', desc: 'Shortlist of 3–5 qualified suppliers with profiles, capabilities, pricing, and MOQ comparison.' },
              { title: 'Factory Audit Report', desc: 'Detailed on-site audit report with photos, scoring, and our recommendation.' },
              { title: 'Inspection Report', desc: 'Pre-shipment inspection report with AQL results, defect photos, and pass/fail recommendation.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-brand-border shadow-sm">
                <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-semibold text-brand-text mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-4">Ready to Get Started?</h2>
          <p className="text-brand-muted mb-8">
            Submit your sourcing request and we'll walk you through the process step by step.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
