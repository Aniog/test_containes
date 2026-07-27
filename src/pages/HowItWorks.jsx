import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, Clock, FileText, Users, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Requirements',
    description: 'Fill out our inquiry form with your product details, target quantity, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and specifications',
      'Target unit price or budget range',
      'Estimated order quantity',
      'Required certifications (CE, FDA, etc.)',
      'Delivery timeline',
    ],
    icon: FileText,
    titleId: 'step-01-title',
    descId: 'step-01-desc',
    imgId: 'step-01-img-a1b2c3',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'Our team researches our supplier database and conducts outreach to identify factories that match your requirements. We screen for production capability, certifications, and reliability.',
    details: [
      'Database and trade show research',
      'Initial supplier contact and screening',
      'Capability and certification check',
      'Shortlist of 3–5 verified suppliers',
      'Comparative supplier report',
    ],
    icon: Users,
    titleId: 'step-02-title',
    descId: 'step-02-desc',
    imgId: 'step-02-img-d4e5f6',
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    description: 'For shortlisted factories, we conduct on-site audits to verify their legitimacy, production capacity, quality systems, and working conditions. You receive a full audit report.',
    details: [
      'On-site factory visit',
      'Business license and registration check',
      'Production line inspection',
      'Quality management system review',
      'Photo and video documentation',
    ],
    icon: CheckCircle,
    titleId: 'step-03-title',
    descId: 'step-03-desc',
    imgId: 'step-03-img-g7h8i9',
  },
  {
    number: '04',
    title: 'Sampling & Price Negotiation',
    description: 'We arrange product samples from your selected factory and negotiate pricing, payment terms, and lead times on your behalf. We handle all communication in Chinese.',
    details: [
      'Sample request and coordination',
      'Sample quality review',
      'Price and MOQ negotiation',
      'Payment terms discussion',
      'Contract review support',
    ],
    icon: Package,
    titleId: 'step-04-title',
    descId: 'step-04-desc',
    imgId: 'step-04-img-j1k2l3',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    description: 'Once you place your order, we monitor production progress, conduct in-line inspections, and send you regular updates with photos and reports.',
    details: [
      'Production schedule tracking',
      'In-line quality checks',
      'Regular photo updates',
      'Issue identification and resolution',
      'Milestone reporting',
    ],
    icon: Clock,
    titleId: 'step-05-title',
    descId: 'step-05-desc',
    imgId: 'step-05-img-m4n5o6',
  },
  {
    number: '06',
    title: 'Pre-Shipment Inspection & Delivery',
    description: 'Before goods leave the factory, our inspectors conduct a final pre-shipment inspection. We then coordinate freight, customs documentation, and delivery to your destination.',
    details: [
      'Final pre-shipment inspection',
      'AQL sampling and pass/fail report',
      'Freight forwarder coordination',
      'Export documentation',
      'Delivery tracking and updates',
    ],
    icon: ArrowRight,
    titleId: 'step-06-title',
    descId: 'step-06-desc',
    imgId: 'step-06-img-p7q8r9',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process that keeps you informed and in control from inquiry to delivery.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={step.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-brand-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h2>
                    <p id={step.descId} className="text-slate-600 leading-relaxed mb-5">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-slate-200 h-64 lg:h-80 ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Typical Timeline</h2>
            <p className="text-slate-600">From inquiry to first shipment — what to expect</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { phase: 'Supplier Research', time: '5–10 days' },
              { phase: 'Factory Audit', time: '3–7 days' },
              { phase: 'Sampling', time: '7–21 days' },
              { phase: 'Production', time: '20–45 days' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                <div className="text-xl font-bold text-brand-blue mb-1">{item.time}</div>
                <div className="text-sm text-slate-600">{item.phase}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">Timelines vary by product complexity and factory availability.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Submit your sourcing requirements and we'll get back to you within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
