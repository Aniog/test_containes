import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, FileCheck, Package, Ship, Handshake, ArrowRight, Clock, AlertCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell Us Your Needs',
    duration: 'Day 1',
    description: 'Share your product specifications, target price, quantity, and any special requirements through our inquiry form or a discovery call. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product specifications and drawings',
      'Target price range and quantity',
      'Packaging and branding requirements',
      'Delivery timeline and destination',
      'Certification requirements (CE, FCC, etc.)',
    ],
    tip: 'Include photos, sketches, or reference samples if available.',
  },
  {
    icon: Search,
    number: '02',
    title: 'We Source & Shortlist',
    duration: 'Days 2-5',
    description: 'Our team researches the market, leverages our supplier network, and shortlists 3-5 qualified manufacturers. We evaluate each based on capability, pricing, certifications, and past performance.',
    details: [
      'Market research across key manufacturing hubs',
      'Supplier pre-qualification and background checks',
      'Initial RFQ collection and comparison',
      'Factory profile compilation with photos',
    ],
    tip: 'We focus on matching your MOQ, quality level, and delivery needs.',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Verify & Sample',
    duration: 'Days 6-15',
    description: 'Before you commit to any supplier, we conduct on-site or remote verification and arrange product samples. This ensures the factory can actually produce what you need at the quality you expect.',
    details: [
      'Factory audit (on-site or virtual)',
      'Sample production and shipping to you',
      'Sample quality evaluation and feedback',
      'Final supplier selection and negotiation',
    ],
    tip: 'Never place a bulk order without approving a production sample first.',
  },
  {
    icon: Package,
    number: '04',
    title: 'Place & Monitor Orders',
    duration: 'Days 16-45',
    description: 'Once you approve a supplier, we help structure the purchase agreement, place the order, and monitor production. You receive regular updates with photos and progress reports.',
    details: [
      'Purchase agreement review and advice',
      'Deposit payment coordination',
      'Weekly production monitoring',
      'Milestone reporting with photos/videos',
    ],
    tip: 'We recommend a 30% deposit / 70% before shipment payment structure.',
  },
  {
    icon: Ship,
    number: '05',
    title: 'Quality Check & Ship',
    duration: 'Days 46-55',
    description: 'Before anything leaves the factory, we conduct a pre-shipment inspection. Once passed, we coordinate shipping, handle customs documentation, and track delivery to your destination.',
    details: [
      'Pre-shipment inspection (AQL 2.5)',
      'Container loading supervision',
      'Freight forwarding and booking',
      'Customs clearance documentation',
    ],
    tip: 'We can arrange delivery to your warehouse, Amazon FBA, or any third-party logistics center.',
  },
  {
    icon: Handshake,
    number: '06',
    title: 'Ongoing Partnership',
    duration: 'Ongoing',
    description: 'Our relationship does not end with the first shipment. We stay engaged for reorders, supplier performance reviews, price renegotiations, and new product development.',
    details: [
      'Reorder management and scheduling',
      'Supplier performance tracking',
      'Price renegotiation for volume',
      'New product sourcing support',
    ],
    tip: 'Long-term partnerships lead to better pricing and priority production slots.',
  },
];

const timelineNotes = [
  { label: 'Typical First Order', value: '6-8 weeks', icon: Clock },
  { label: 'Repeat Orders', value: '3-5 weeks', icon: Clock },
  { label: 'Custom Products', value: '8-12 weeks', icon: AlertCircle },
];

const HowItWorks = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-800 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Process</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            How It Works
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            A clear, step-by-step process designed to take you from inquiry to delivered goods with minimum risk and maximum transparency.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-8 md:pl-16 pb-12 last:pb-0">
                {/* Timeline line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[19px] md:left-[27px] top-12 bottom-0 w-0.5 bg-slate-200" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-2 w-10 h-10 md:w-12 md:h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary-500 bg-primary-50 px-2.5 py-1 rounded uppercase tracking-wider">
                      Step {step.number}
                    </span>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-5">{step.description}</p>

                  <div className="bg-slate-50 rounded-lg p-5 mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">What happens in this step</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <ArrowRight className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start gap-2 bg-accent-50 rounded-lg p-3">
                    <svg className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-sm text-accent-700"><span className="font-semibold">Pro tip:</span> {step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              Typical Timelines
            </h2>
            <p className="text-slate-600">
              Every project is different, but here are general timeframes you can expect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {timelineNotes.map((note, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <note.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                <p className="text-2xl font-bold text-slate-800">{note.value}</p>
                <p className="text-slate-500 text-sm mt-1">{note.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            The first step is free. Tell us what you need and we will get back to you within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;