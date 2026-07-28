import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileCheck, Beaker, ClipboardList, Ship, Handshake } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import InquiryForm from '../components/InquiryForm.jsx';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Requirement Review',
    description: 'You share product specifications, target price, quantity, timeline, and any preferred regions or certifications. We clarify ambiguities and define the sourcing scope.',
  },
  {
    number: '02',
    icon: FileCheck,
    title: 'Supplier Research & Verification',
    description: 'We search the market, contact candidates, and verify licenses, export experience, production capacity, and existing client references.',
  },
  {
    number: '03',
    icon: Beaker,
    title: 'Quotation & Sampling',
    description: 'We collect and compare quotations, negotiate terms, and coordinate samples so you can evaluate quality before committing to an order.',
  },
  {
    number: '04',
    icon: Handshake,
    title: 'Order Placement & Contract',
    description: 'Once you select a supplier, we help structure the purchase contract, payment terms, and quality standards to protect your interests.',
  },
  {
    number: '05',
    icon: ClipboardList,
    title: 'Production Monitoring & QC',
    description: 'We track milestones and conduct inspections during production, before shipment, and at container loading if needed.',
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Handover',
    description: 'We support export documentation, booking, consolidation, and final delivery tracking to your chosen destination.',
  },
];

const expectations = [
  {
    title: 'Regular reporting',
    description: 'Receive written updates with photos, status summaries, and next steps at each project stage.',
  },
  {
    title: 'Bilingual communication',
    description: 'Our team bridges language gaps so nothing is lost between you and the factory.',
  },
  {
    title: 'Buyer representation',
    description: 'We negotiate and escalate issues on your behalf, not the supplier\'s.',
  },
  {
    title: 'Flexible engagement',
    description: 'Use us for a single inspection or a full end-to-end sourcing project.',
  },
];

const HowItWorks = () => {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wide uppercase text-amber mb-3">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              A sourcing process built for clarity
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              We keep every step transparent, from first contact to final delivery, so you always know where your order stands.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="hiw-steps-title"
            eyebrow="The Process"
            title="Six steps from inquiry to delivery"
          />
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`flex-1 w-full ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                      <div className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-card hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-amber-light text-amber flex items-center justify-center">
                            <step.icon className="w-6 h-6" />
                          </div>
                          <span className="text-3xl font-extrabold text-border">{step.number}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                        <p className="text-slate-muted leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex w-10 h-10 rounded-full bg-navy text-white items-center justify-center text-sm font-bold z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1 hidden lg:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="hiw-expectations-title"
            eyebrow="What to Expect"
            title="Working with SSourcing China"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {expectations.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-border p-6 shadow-card">
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-slate-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
