import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Supplier Identification & Sourcing',
    intro: 'We locate and qualify manufacturers that meet your technical, commercial, and compliance requirements.',
    details: [
      'Product specification analysis and supplier matching',
      'RFQ management and supplier communication',
      'Price benchmarking and negotiation support',
      'MOQ, lead time, and capacity verification',
      'Alternative supplier development for risk mitigation',
    ],
  },
  {
    title: 'Factory Verification & Audits',
    intro: 'We verify that suppliers are legitimate, capable, and aligned with your standards before you place orders.',
    details: [
      'On-site factory audits (structure, equipment, workforce)',
      'Business license and export capability verification',
      'Quality management system review (ISO, BSCI, etc.)',
      'Social compliance and ethical sourcing checks',
      'Remote video audits for initial screening',
    ],
  },
  {
    title: 'Quality Control & Inspection',
    intro: 'We protect your brand and margins by catching quality issues before goods leave China.',
    details: [
      'Pre-production inspection and sample approval',
      'During-production (in-line) quality monitoring',
      'Final random inspection (AQL standards)',
      'Container loading supervision',
      'Detailed inspection reports with photos and findings',
    ],
  },
  {
    title: 'Production Management & Follow-up',
    intro: 'We act as your on-the-ground team, keeping production on schedule and issues visible.',
    details: [
      'Production schedule tracking and milestone reporting',
      'Daily or weekly progress updates',
      'Issue escalation and corrective action coordination',
      'Material and component quality verification',
      'Timeline risk identification and mitigation',
    ],
  },
  {
    title: 'Shipping & Logistics Coordination',
    intro: 'We ensure your goods are properly documented, packed, and handed over to your forwarder.',
    details: [
      'Booking coordination with freight forwarders',
      'Export documentation review (commercial invoice, packing list, certificates)',
      'Customs and regulatory compliance checks',
      'Container and LCL consolidation support',
      'Post-shipment issue resolution',
    ],
  },
];

const additionalServices = [
  'Product development and OEM/ODM coordination',
  'Private label and packaging development',
  'Trade show support and supplier meetings',
  'Ongoing supplier relationship management',
  'Training for your team on China sourcing best practices',
];

export default function Services() {
  return (
    <div>
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-400 mb-3">OUR SERVICES</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none mb-6">
              Professional sourcing services for international buyers
            </h1>
            <p className="text-xl text-slate-300">
              We provide the on-the-ground expertise and disciplined processes that allow you to source from China with confidence and control.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20 space-y-16">
        {services.map((service, idx) => (
          <div key={idx} className="grid md:grid-cols-12 gap-x-10 gap-y-6">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight mb-3">{service.title}</h2>
              <p className="text-slate-600 leading-relaxed">{service.intro}</p>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-3 text-slate-700">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 block w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Additional support we provide</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-slate-700">
            {additionalServices.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="mt-2 block w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">Ready to discuss your sourcing needs?</h2>
        <p className="text-slate-600 mb-8">Tell us about your project and we will provide a clear proposal with scope, timeline, and pricing.</p>
        <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Get a Free Sourcing Quote
        </Link>
      </section>
    </div>
  );
}
