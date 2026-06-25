import { Link } from 'react-router-dom';
import {
  MessageSquare, Search, HardHat, BarChart3, ClipboardCheck, Ship,
  ArrowRight, CheckCircle, FileText, Phone, Users, Clock
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: '1. Submit Your Requirements',
    desc: 'Fill out our inquiry form or reach out directly. Share your product specifications, target price range, quality requirements, certifications needed, and any other relevant details.',
    details: [
      'Complete product specifications and drawings',
      'Target price range and budget',
      'Quality standards and certifications',
      'Estimated order quantities and timeline'
    ]
  },
  {
    icon: Search,
    title: '2. Supplier Research & Shortlisting',
    desc: 'Our team searches our database and manufacturing networks to identify suppliers that match your requirements. We present you with a shortlist of qualified candidates.',
    details: [
      'Database search across relevant manufacturing hubs',
      'Initial screening based on your criteria',
      'Pricing and capability comparison',
      'Shortlist of 3-5 qualified suppliers'
    ]
  },
  {
    icon: HardHat,
    title: '3. Factory Audits & Verification',
    desc: 'We visit shortlisted factories in person to verify their credentials, production capabilities, quality systems, and working conditions. You receive detailed audit reports.',
    details: [
      'On-site physical inspection of facilities',
      'Verification of business licenses and certifications',
      'Assessment of production capacity and equipment',
      'Photo and video documentation'
    ]
  },
  {
    icon: BarChart3,
    title: '4. Price Negotiation & Sampling',
    desc: 'We negotiate pricing, payment terms, and MOQs on your behalf. Samples are ordered and evaluated to ensure they meet your specifications before mass production.',
    details: [
      'Price and term negotiations with suppliers',
      'Sample ordering and quality evaluation',
      'Specification adjustments and finalization',
      'Contract review and final agreement'
    ]
  },
  {
    icon: ClipboardCheck,
    title: '5. Production & Quality Control',
    desc: 'Throughout the production process, we provide regular updates, conduct milestone inspections, and ensure quality standards are maintained every step of the way.',
    details: [
      'Raw material inspection before production',
      'In-process quality checks during manufacturing',
      'Pre-shipment inspection (AQL sampling)',
      'Weekly progress reports with photos'
    ]
  },
  {
    icon: Ship,
    title: '6. Shipping & Final Delivery',
    desc: 'We coordinate all logistics including packaging, shipping documentation, customs clearance, and final delivery to your warehouse or port of destination.',
    details: [
      'Professional packaging and labeling',
      'Freight booking (sea, air, or express)',
      'Customs documentation and clearance',
      'Real-time tracking until delivery'
    ]
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How It Works</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              A clear, structured process designed to take you from initial inquiry to successful delivery with minimal risk and maximum transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <div key={i} className="md:flex gap-8 items-start">
                <div className="md:w-14 shrink-0 mb-4 md:mb-0">
                  <div className="w-14 h-14 bg-brand-800 rounded-xl flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-5">{step.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex flex-col items-center ml-7 mt-2">
                    <div className="w-0.5 h-12 bg-slate-200" />
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Typical Timeline</h2>
            <p className="text-slate-600">Estimated timeframes for each stage of the sourcing process.</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-200">
              {[
                { step: 'Initial research & supplier shortlisting', time: '1-2 weeks' },
                { step: 'Factory audits & verification', time: '1-2 weeks' },
                { step: 'Price negotiation & sampling', time: '2-4 weeks' },
                { step: 'Production (varies by product)', time: '4-12 weeks' },
                { step: 'Shipping & delivery', time: '2-6 weeks' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-600" />
                    <span className="text-sm font-medium text-slate-900">{item.step}</span>
                  </div>
                  <span className="text-sm text-brand-800 font-semibold">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">
            Timelines are estimates and vary based on product complexity, supplier availability, and order requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-brand-200 mb-8 max-w-xl mx-auto">
            Tell us about your sourcing needs and we will begin the process within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition-colors"
          >
            Submit Your Sourcing Request
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}