import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ClipboardCheck, Zap, Truck, FileCheck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — specifications, target quantity, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Required certifications (CE, FDA, etc.)',
      'Delivery timeline and destination',
    ],
    duration: '5 minutes',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier network and conducts additional research to identify 3–5 manufacturers that best match your requirements. We screen for production capability, quality track record, and export experience.',
    details: [
      'Database search across verified suppliers',
      'Initial supplier qualification calls',
      'Capability and capacity assessment',
      'Shortlist of 3–5 recommended suppliers',
    ],
    duration: '5–10 business days',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit (Optional)',
    desc: 'For new suppliers or high-value orders, we recommend an on-site factory audit. Our team visits the facility, verifies business licenses, inspects equipment, and assesses working conditions. You receive a full audit report.',
    details: [
      'On-site factory visit',
      'Business license and certification check',
      'Production capacity verification',
      'Detailed audit report with photos',
    ],
    duration: '3–5 business days',
  },
  {
    num: '04',
    icon: FileCheck,
    title: 'Quotation & Sample Review',
    desc: 'We collect and compare quotes from shortlisted suppliers, negotiate pricing and terms on your behalf, and coordinate sample production so you can evaluate quality before placing a bulk order.',
    details: [
      'Competitive quote comparison',
      'Price and MOQ negotiation',
      'Sample order coordination',
      'Sample evaluation and feedback',
    ],
    duration: '1–3 weeks',
  },
  {
    num: '05',
    icon: Zap,
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve the sample and confirm the order, we place it with the factory and monitor production progress. Regular updates and factory visits keep your order on track.',
    details: [
      'Purchase order management',
      'Production schedule tracking',
      'Regular factory visits',
      'Weekly progress reports',
    ],
    duration: 'Throughout production',
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before goods are packed and shipped, our QC team conducts a pre-shipment inspection based on your specifications and AQL standards. You receive a detailed report within 24 hours.',
    details: [
      'AQL-based random sampling',
      'Defect classification and measurement',
      'Packaging and labeling check',
      'Pass/fail report with photos',
    ],
    duration: '1–2 days',
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to book the most suitable shipping option (sea, air, or express), prepare export documentation, and track your shipment to destination.',
    details: [
      'Freight booking (FCL, LCL, or air)',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
    duration: 'Varies by destination',
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            How We Work With You
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process designed to reduce risk and give you full visibility from inquiry to delivery.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex gap-6 md:gap-10">
                {/* Step indicator */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 mt-3" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-12">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">Step {step.num}</span>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                      ⏱ {step.duration}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Have Questions About the Process?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Our team is happy to walk you through how we work and answer any questions before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors"
            >
              Start Your Inquiry <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/#faq"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors"
            >
              Read Our FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
