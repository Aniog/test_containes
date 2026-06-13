import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Search, ShieldCheck, PackageOpen, ClipboardCheck, Truck, FileText, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    num: '01',
    title: 'Share Your Requirements',
    desc: 'Fill out our inquiry form or schedule a call. Tell us what product you need, your target quantity, quality standards, budget, and timeline. The more detail you provide, the better we can serve you.',
    icon: MessageSquare,
    details: [
      'Product specifications and photos',
      'Target price and budget range',
      'Expected order quantity (MOQ)',
      'Quality certifications required',
      'Desired delivery timeline',
    ],
  },
  {
    num: '02',
    title: 'Supplier Research & Verification',
    desc: 'Our team searches our network and industry databases to identify 3-5 qualified factories. We then verify each one through on-site audits, license checks, and reference calls.',
    icon: Search,
    details: [
      'Identify 3-5 potential suppliers',
      'Check business licenses and registration',
      'Verify production capacity and equipment',
      'Review certifications and export history',
      'Assess financial stability',
    ],
  },
  {
    num: '03',
    title: 'Factory Audit Reports',
    desc: 'You receive a detailed comparison report on each factory with photos, scores, pros and cons, and our recommendation. You decide which factories to move forward with.',
    icon: ShieldCheck,
    details: [
      'Side-by-side supplier comparison',
      'Photo evidence from factory floor',
      'Scoring across key criteria',
      'Risk assessment and recommendations',
      'Transparent pricing breakdown',
    ],
  },
  {
    num: '04',
    title: 'Sampling & Negotiation',
    desc: 'We coordinate samples from your chosen factories, negotiate pricing and payment terms, and help you evaluate which supplier delivers the best value.',
    icon: PackageOpen,
    details: [
      'Order samples from selected factories',
      'Negotiate pricing, MOQ, and terms',
      'Evaluate sample quality and accuracy',
      'Finalize supplier selection',
      'Agree on production contract terms',
    ],
  },
  {
    num: '05',
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we visit the factory regularly, monitor progress, perform inspections at key milestones, and catch any issues before they become costly problems.',
    icon: ClipboardCheck,
    details: [
      'Daily production status updates',
      'In-process quality inspections',
      'Photo and video reports',
      'Early issue identification and resolution',
      'Milestone tracking against schedule',
    ],
  },
  {
    num: '06',
    title: 'Final Inspection & Shipping',
    desc: 'We perform pre-shipment inspections, supervise container loading, prepare all export documents, and coordinate with freight forwarders for smooth delivery.',
    icon: Truck,
    details: [
      'Pre-shipment inspection with AQL standard',
      'Container loading supervision',
      'Export documentation preparation',
      'Freight coordination (sea/air)',
      'Delivery tracking and confirmation',
    ],
  },
];

const timeline = [
  { day: 'Day 1-3', label: 'Inquiry Review', desc: 'We review your requirements and ask clarifying questions.' },
  { day: 'Day 4-7', label: 'Supplier Search', desc: 'Initial sourcing and shortlisting of 3-5 factories.' },
  { day: 'Day 8-14', label: 'Verification', desc: 'On-site audits and detailed reports delivered to you.' },
  { day: 'Day 15-28', label: 'Sampling', desc: 'Sample production, evaluation, and supplier selection.' },
  { day: 'Day 29+', label: 'Order Placement', desc: 'PO signed, deposit paid, production begins.' },
  { day: 'Ongoing', label: 'Production Monitoring', desc: 'Daily follow-up and QC throughout production cycle.' },
];

export default function HowItWorksPage() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A proven 6-step process that takes you from inquiry to delivery — with full visibility and zero surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-sm">
                      {step.num}
                    </div>
                    <step.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      data-strk-img-id={`step-${i}-img`}
                      data-strk-img={`[step-${i}-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Typical Timeline</h2>
            <p className="text-slate-500 text-lg">Every project is different, but here is a general timeline for a standard sourcing engagement.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
                  <div className="lg:w-[120px] lg:text-right shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">{item.day}</span>
                  </div>
                  <div className="hidden lg:block w-3 h-3 rounded-full bg-blue-500 border-4 border-white shadow mt-1.5 shrink-0" style={{ marginLeft: '-6px' }} />
                  <div className="flex-1 bg-white rounded-xl p-5 border border-slate-100 lg:-ml-3">
                    <h3 className="font-semibold text-slate-900 mb-1">{item.label}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-slate-300 mb-8">Share your requirements and we will get back to you within 24 hours with a free sourcing plan.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
