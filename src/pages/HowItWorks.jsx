import {
  MessageSquare,
  Search,
  ShieldCheck,
  Factory,
  ClipboardCheck,
  PackageCheck,
  Ship,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Share Your Requirements',
    description:
      'We start with a detailed briefing. Tell us about the product you want to source, target quantity, quality standards, certifications, budget range, and timeline. The more details you provide, the better we can match you with the right suppliers.',
    deliverables: [
      'Product specification document',
      'Target pricing and quantity',
      'Required certifications or standards',
      'Delivery timeline expectations',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Research',
    description:
      'We search our supplier network, industry databases, and trade show records to shortlist 3-5 qualified manufacturers. Each candidate is evaluated on production capability, export experience, certifications, and reputation.',
    deliverables: [
      'Supplier shortlist with profiles',
      'Capability comparison matrix',
      'Initial quotation summary',
      'Risk assessment notes',
    ],
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification',
    description:
      'Before you commit, we visit or audit the shortlisted factories. We verify their business registration, inspect production lines, review quality systems, and assess social compliance. You receive a comprehensive report with photos.',
    deliverables: [
      'On-site factory audit report',
      'Photo documentation',
      'Capability and capacity assessment',
      'Compliance checklist results',
    ],
  },
  {
    icon: Factory,
    step: '04',
    title: 'Sample & Negotiation',
    description:
      'We coordinate sample production from your preferred supplier, manage revisions, and negotiate pricing, payment terms, and delivery schedules on your behalf. We ensure the contract protects your interests.',
    deliverables: [
      'Sample coordination and feedback loop',
      'Negotiated pricing and terms',
      'Purchase agreement review',
      'Payment milestone schedule',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '05',
    title: 'Production Monitoring',
    description:
      'Once production begins, we follow up at key milestones. Our team checks material readiness, monitors output against schedule, and reports any delays or issues so they can be resolved quickly.',
    deliverables: [
      'Weekly production status reports',
      'Milestone completion tracking',
      'Issue alerts and resolution updates',
      'Mid-production progress photos',
    ],
  },
  {
    icon: PackageCheck,
    step: '06',
    title: 'Quality Control',
    description:
      'Before any goods ship, we conduct rigorous pre-shipment inspections following AQL sampling standards. We check dimensions, functionality, packaging, labeling, and workmanship against your specifications.',
    deliverables: [
      'Pre-shipment inspection report',
      'AQL sampling results',
      'Defect classification and photos',
      'Pass / Fail recommendation',
    ],
  },
  {
    icon: Ship,
    step: '07',
    title: 'Shipping & Delivery',
    description:
      'We book freight, prepare all export documentation, arrange consolidation if needed, and track the shipment until it reaches your warehouse. We also support customs clearance and delivery coordination.',
    deliverables: [
      'Freight booking confirmation',
      'Export documentation package',
      'Shipping tracking and updates',
      'Delivery confirmation report',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Process
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            How Our Sourcing Process Works
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A clear, structured 7-step workflow designed to reduce risk, save
            time, and deliver consistent results for every sourcing project.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-12 md:space-y-16">
              {steps.map((s, idx) => (
                <div key={s.step} className="relative md:pl-20">
                  {/* Step Circle */}
                  <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-brand text-white rounded-full items-center justify-center font-bold text-lg shadow-lg z-10">
                    {s.step}
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 md:hidden">
                      <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {s.step}
                      </div>
                      <s.icon className="w-6 h-6 text-brand" />
                    </div>
                    <div className="hidden md:flex items-center gap-3 mb-3">
                      <s.icon className="w-6 h-6 text-brand" />
                      <h2 className="text-xl md:text-2xl font-bold text-navy">
                        {s.title}
                      </h2>
                    </div>
                    <h2 className="md:hidden text-xl font-bold text-navy mb-3">
                      {s.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-5">
                      {s.description}
                    </p>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                        What you receive
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Tell us what you need and we will guide you through each step.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
