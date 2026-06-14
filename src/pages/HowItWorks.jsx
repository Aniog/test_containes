import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Requirement Review',
    duration: '1–2 days',
    description: 'We start with a detailed discussion of your product, specifications, target price, volume, quality requirements, certifications, and timeline.',
    deliverables: ['Requirement brief', 'Preliminary supplier strategy', 'Estimated project timeline and cost'],
  },
  {
    number: '02',
    title: 'Supplier Identification',
    duration: '3–7 days',
    description: 'We search our database and supplier network to identify manufacturers that match your criteria. We screen out trading companies and unqualified factories.',
    deliverables: ['Shortlist of 3–5 suppliers', 'Supplier profiles with capabilities and pricing', 'Initial risk assessment'],
  },
  {
    number: '03',
    title: 'Factory Verification',
    duration: '5–10 days',
    description: 'We conduct on-site or remote audits to verify legitimacy, production capability, quality systems, and compliance. We provide a detailed audit report with photos.',
    deliverables: ['Factory audit report', 'Photo documentation', 'Capability and risk summary'],
  },
  {
    number: '04',
    title: 'Sampling & Approval',
    duration: '7–21 days',
    description: 'We coordinate sample production, review samples against your specifications, and manage revisions until you are satisfied.',
    deliverables: ['Approved samples', 'Sample evaluation report', 'Final specification confirmation'],
  },
  {
    number: '05',
    title: 'Order Placement & Production',
    duration: 'Varies by product',
    description: 'We support contract negotiation, deposit coordination, and then monitor production daily. We flag issues early and coordinate corrective actions.',
    deliverables: ['Production schedule', 'Weekly progress reports', 'Issue logs and resolutions'],
  },
  {
    number: '06',
    title: 'Quality Inspection',
    duration: '1–3 days',
    description: 'Before shipment, we conduct a final inspection using AQL standards. We only recommend release if the goods meet your quality criteria.',
    deliverables: ['Detailed inspection report', 'Photo and video evidence', 'Clear pass/fail recommendation'],
  },
  {
    number: '07',
    title: 'Shipping & Handover',
    duration: '1–5 days',
    description: 'We review all export documentation, coordinate with your freight forwarder, and ensure the goods are properly packed and loaded.',
    deliverables: ['Export document package', 'Loading supervision report', 'Complete handover file'],
  },
];

const principles = [
  'We work exclusively for buyers — we do not accept commissions from factories.',
  'Every recommendation is documented. We explain our reasoning and the evidence behind it.',
  'We communicate proactively. You will not be surprised by problems we discovered weeks earlier.',
  'We protect your commercial interests. We negotiate hard on price, terms, and quality.',
];

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-400 mb-3">OUR PROCESS</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none mb-6">
              A disciplined, transparent sourcing process
            </h1>
            <p className="text-xl text-slate-300">
              We follow a structured methodology that minimizes risk and keeps you informed at every stage. No black boxes.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-x-10 gap-y-4 border-b border-slate-200 pb-10 last:border-b-0 last:pb-0">
              <div className="md:col-span-3">
                <div className="font-mono text-sm text-slate-400 mb-1">{step.number}</div>
                <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                <div className="text-sm text-slate-500 mt-1">{step.duration}</div>
              </div>
              <div className="md:col-span-5">
                <p className="text-slate-700 leading-relaxed">{step.description}</p>
              </div>
              <div className="md:col-span-4">
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">DELIVERABLES</div>
                <ul className="text-sm text-slate-700 space-y-1">
                  {step.deliverables.map((d, i) => (
                    <li key={i}>• {d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">How we operate</h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {principles.map((p, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                <p className="text-slate-700">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">Ready to start?</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">Tell us about your product and timeline. We will outline the exact steps and cost before any work begins.</p>
        <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Get a Free Sourcing Quote
        </Link>
      </section>
    </div>
  );
}
