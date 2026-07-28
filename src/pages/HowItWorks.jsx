import { Link } from 'react-router-dom';
import SectionCTA from '../components/shared/SectionCTA';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, quantity, target price, and destination country. The more detail you provide, the faster we can help.',
    detail: 'We respond to all inquiries within 24 business hours with an initial assessment and a proposed action plan.',
    color: 'bg-blue-600',
  },
  {
    number: '02',
    title: 'Initial Consultation',
    desc: 'We schedule a call or exchange messages to clarify your requirements, discuss your timeline, and agree on the scope of work and service fees.',
    detail: 'This step ensures we fully understand your needs before investing time in research.',
    color: 'bg-blue-600',
  },
  {
    number: '03',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches the Chinese market — using our existing supplier network, trade databases, and direct outreach — to identify 3–5 qualified manufacturers.',
    detail: 'Each shortlisted supplier receives a preliminary profile covering company background, certifications, production capacity, and initial pricing.',
    color: 'bg-blue-600',
  },
  {
    number: '04',
    title: 'Factory Audit & Verification',
    desc: 'For shortlisted suppliers, we conduct on-site factory visits to verify business registration, production capabilities, quality systems, and working conditions.',
    detail: 'You receive a written audit report with photos for each factory visited. We only recommend factories that pass our audit criteria.',
    color: 'bg-blue-600',
  },
  {
    number: '05',
    title: 'Sample Development & Review',
    desc: 'We request samples from approved factories, review them against your specifications, and coordinate revisions if needed before shipping samples to you.',
    detail: 'We provide a sample evaluation report so you know exactly what to look for when you receive the samples.',
    color: 'bg-blue-600',
  },
  {
    number: '06',
    title: 'Negotiation & Order Placement',
    desc: 'Once you select a supplier, we negotiate pricing, payment terms, lead times, and contract terms on your behalf — then help you place the order correctly.',
    detail: 'We review the purchase agreement and flag any terms that could create risk for you.',
    color: 'bg-blue-600',
  },
  {
    number: '07',
    title: 'Production Monitoring',
    desc: 'During production, we maintain regular contact with the factory, track progress against the agreed timeline, and alert you to any issues or delays.',
    detail: 'You receive milestone updates at key production stages — raw material procurement, production start, mid-production, and completion.',
    color: 'bg-blue-600',
  },
  {
    number: '08',
    title: 'Quality Inspection',
    desc: 'Before goods are shipped, we conduct a pre-shipment inspection to verify product quality, quantity, packaging, and labeling against your specifications.',
    detail: 'You receive a detailed inspection report with photos. If goods fail inspection, we work with the factory to resolve issues before shipment.',
    color: 'bg-blue-600',
  },
  {
    number: '09',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with your freight forwarder, verify export documentation, and ensure goods are loaded and shipped correctly.',
    detail: 'We provide all shipping documents and tracking information so you have full visibility until delivery.',
    color: 'bg-blue-600',
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            A clear, structured process from your first inquiry to final delivery. No surprises, no hidden steps.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <div key={step.number} className="relative flex gap-6 md:gap-8">
                  {/* Step number circle */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 shadow-md">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 pb-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">{step.desc}</p>
                    <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
                      <p className="text-blue-700 text-xs leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Typical Timeline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { phase: 'Phase 1', label: 'Sourcing & Audit', time: '2–3 weeks', desc: 'Supplier research, shortlisting, and factory verification' },
              { phase: 'Phase 2', label: 'Samples & Order', time: '1–3 weeks', desc: 'Sample development, review, negotiation, and order placement' },
              { phase: 'Phase 3', label: 'Production & Delivery', time: 'Varies by product', desc: 'Production monitoring, inspection, and shipping coordination' },
            ].map((p) => (
              <div key={p.phase} className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 block mb-2">{p.phase}</span>
                <h4 className="font-bold text-slate-900 mb-1">{p.label}</h4>
                <div className="text-blue-600 font-semibold text-sm mb-3">{p.time}</div>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Ready to Get Started?"
        subtitle="Submit your sourcing inquiry today and we'll respond within 24 hours."
        ctaLabel="Get a Free Sourcing Quote"
      />
    </>
  );
}
