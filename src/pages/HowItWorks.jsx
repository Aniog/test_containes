import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ClipboardCheck, BarChart3, Truck, Package } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, target quantity, budget, and any certifications needed. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product type and specifications',
      'Target quantity and MOQ',
      'Budget and target price',
      'Required certifications (CE, FDA, etc.)',
      'Delivery timeline',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our factory network and databases to identify 3–5 qualified manufacturers. We evaluate each supplier on production capacity, quality track record, pricing, and communication responsiveness.',
    details: [
      'Database search across 500+ vetted factories',
      'Initial supplier qualification calls',
      'Price and MOQ comparison',
      'Delivery capability assessment',
      'Shortlist report delivered to you',
    ],
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify business legitimacy, production capabilities, equipment, workforce, and compliance. You receive a detailed audit report with photos.',
    details: [
      'Business license verification',
      'On-site factory visit',
      'Production capacity check',
      'Certification review',
      'Photo documentation',
    ],
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample Development & Negotiation',
    desc: 'We arrange product samples from your chosen supplier and coordinate the review process. Simultaneously, we negotiate pricing, payment terms, MOQ, and lead times on your behalf.',
    details: [
      'Sample request and coordination',
      'Sample quality review',
      'Price negotiation',
      'Payment terms discussion',
      'Contract review support',
    ],
  },
  {
    num: '05',
    icon: BarChart3,
    title: 'Production Monitoring',
    desc: 'Once your order is placed, we monitor production progress and provide regular updates. Our team communicates directly with the factory to resolve any issues before they become problems.',
    details: [
      'Production schedule tracking',
      'Weekly status updates',
      'Issue identification and resolution',
      'In-line quality checks',
      'Milestone reporting',
    ],
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'Pre-Shipment Quality Inspection',
    desc: 'Before goods leave the factory, our QC inspectors conduct a thorough pre-shipment inspection based on AQL standards. We check product quality, packaging, labeling, and quantity — and provide a full report within 24 hours.',
    details: [
      'AQL random sampling',
      'Product quality & function check',
      'Packaging & labeling verification',
      'Quantity count',
      'Inspection report within 24 hours',
    ],
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate the full logistics chain — from factory pickup to international freight, customs documentation, and final delivery to your warehouse or port. We work with trusted freight forwarders for competitive rates.',
    details: [
      'Freight forwarder coordination',
      'Export customs documentation',
      'FCL, LCL, or air freight options',
      'Cargo insurance',
      'Delivery tracking',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1A2332] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Source for You
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A clear, structured process from your first inquiry to final delivery. No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-6 md:gap-10">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#1A3C6E] rounded-full flex items-center justify-center flex-shrink-0 z-10">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 bg-slate-200 flex-1 my-2" style={{ minHeight: '40px' }} />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-12 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-[#C0392B] uppercase tracking-widest">Step {step.num}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                  <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                          <span className="text-slate-700 text-sm">{d}</span>
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Typical Project Timeline</h2>
            <p className="text-slate-600">From inquiry to first shipment, here's what to expect.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { phase: 'Supplier Research', time: '1–2 weeks' },
              { phase: 'Factory Audit', time: '1–2 weeks' },
              { phase: 'Sample & Negotiation', time: '2–3 weeks' },
              { phase: 'Production & Shipping', time: '4–8 weeks' },
            ].map((t) => (
              <div key={t.phase} className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                <div className="text-2xl font-bold text-[#1A3C6E] mb-1">{t.time}</div>
                <div className="text-slate-600 text-sm">{t.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A3C6E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Submit your sourcing inquiry today and we'll respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C0392B] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
