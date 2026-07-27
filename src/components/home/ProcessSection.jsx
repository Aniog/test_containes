import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Search,
  ShieldCheck,
  Factory,
  ClipboardCheck,
  PackageCheck,
  Ship,
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Share Your Requirements',
    desc: 'Tell us what products you need, target pricing, quantity, and any specific standards or certifications required.',
    step: '01',
  },
  {
    icon: Search,
    title: 'Supplier Research',
    desc: 'We search our network and databases to shortlist 3-5 qualified suppliers that match your criteria.',
    step: '02',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'We visit or audit shortlisted factories to verify credentials, capacity, and compliance before you commit.',
    step: '03',
  },
  {
    icon: Factory,
    title: 'Sample & Negotiation',
    desc: 'We coordinate sample production, review quotations, and negotiate pricing and payment terms on your behalf.',
    step: '04',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Monitoring',
    desc: 'Our team follows production at key milestones with inline and pre-shipment inspections.',
    step: '05',
  },
  {
    icon: PackageCheck,
    title: 'Quality Control',
    desc: 'Comprehensive QC checks before shipment to ensure products meet your specifications and standards.',
    step: '06',
  },
  {
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We handle freight booking, customs paperwork, and track delivery until goods arrive at your warehouse.',
    step: '07',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 bg-light-blue text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our 7-Step Sourcing Process
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A structured, transparent process designed to reduce risk, save
            time, and deliver reliable results.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-4">
            {steps.map((s, idx) => (
              <div key={s.step} className="relative flex flex-col items-center text-center">
                {/* Step Number / Icon Circle */}
                <div className="relative z-10 w-16 h-16 bg-white border-2 border-brand rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <s.icon className="w-6 h-6 text-brand" />
                </div>

                <div className="text-xs font-bold text-brand mb-2">
                  STEP {s.step}
                </div>
                <h3 className="text-sm font-bold text-navy mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-light-blue transition-colors"
          >
            View Full Process Details
          </Link>
        </div>
      </div>
    </section>
  );
}
