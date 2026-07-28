import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  MessageSquare, Search, ClipboardCheck, Package, Truck, Handshake,
  ArrowRight, Clock, Shield
} from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    timeframe: 'Day 1',
    desc: 'Fill out our inquiry form with product specifications, target price range, order quantity, and any other requirements. Our team reviews your request and responds within 24 hours with initial feedback and questions.',
    whatWeDo: [
      'Review your product specifications in detail',
      'Identify the right manufacturing regions for your product',
      'Provide initial feasibility assessment and timeline estimate',
      'Schedule a call to clarify any open questions',
    ],
    whatYouDo: [
      'Share product details, drawings, or reference samples',
      'Tell us your budget and volume expectations',
      'Let us know any certifications required (CE, FDA, etc.)',
    ],
    imgId: 'how-step1-z9a8b7',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification & Matching',
    timeframe: 'Day 2–7',
    desc: 'We search our database of 5,000+ pre-vetted factories and reach out to qualified suppliers. We screen responses, compare capabilities, and prepare a shortlist of 3-5 best-matched factories for your review.',
    whatWeDo: [
      'Search database & network for matching suppliers',
      'Send RFQs and gather initial quotations',
      'Screen responses for capability and reliability',
      'Present shortlist with detailed factory profiles',
    ],
    whatYouDo: [
      'Review supplier profiles and shortlist',
      'Provide feedback on initial quotations',
      'Select top candidates for factory visits',
    ],
    imgId: 'how-step2-c6d5e4',
  },
  {
    step: '03',
    icon: ClipboardCheck,
    title: 'Factory Verification & Audits',
    timeframe: 'Day 8–14',
    desc: 'Our team visits the shortlisted factories in person. We verify business licenses, inspect production lines, assess quality systems, and confirm certifications. You receive a comprehensive audit report with photos and scoring.',
    whatWeDo: [
      'Conduct on-site factory audits',
      'Verify business licenses, certifications & export history',
      'Assess production capacity, quality systems & workforce',
      'Deliver detailed audit report with photos and recommendations',
    ],
    whatYouDo: [
      'Review audit reports',
      'Select preferred factory for sampling',
    ],
    imgId: 'how-step3-f2g3h1',
  },
  {
    step: '04',
    icon: Package,
    title: 'Sampling & Negotiation',
    timeframe: 'Day 15–28',
    desc: 'We coordinate sample production with your selected factory, negotiate pricing and payment terms, and finalize contracts with clear quality standards, delivery timelines, and IP protection clauses.',
    whatWeDo: [
      'Coordinate sample production & international shipping',
      'Negotiate pricing, MOQ, payment & delivery terms',
      'Draft contracts with quality & IP protection clauses',
      'Arrange NNN agreements with all parties',
    ],
    whatYouDo: [
      'Review and approve samples',
      'Confirm final pricing and terms',
      'Sign contract and issue deposit',
    ],
    imgId: 'how-step4-i8j7k6',
  },
  {
    step: '05',
    icon: Truck,
    title: 'Production Monitoring & QC',
    timeframe: 'Ongoing (per order)',
    desc: 'Once production begins, we conduct regular in-line inspections at critical stages. Before shipment, we perform a comprehensive pre-shipment inspection using AQL standards. You receive reports within 24 hours of each inspection.',
    whatWeDo: [
      'Conduct Initial Production Check (IPC)',
      'Perform During Production Inspections (DUPRO)',
      'Complete Pre-Shipment Inspection (PSI) with AQL sampling',
      'Provide inspection reports with photos within 24 hours',
    ],
    whatYouDo: [
      'Review inspection reports',
      'Approve shipment or request corrective actions',
    ],
    imgId: 'how-step5-l5m4n3',
  },
  {
    step: '06',
    icon: Handshake,
    title: 'Shipping & Ongoing Support',
    timeframe: '2–6 weeks (transit)',
    desc: 'We coordinate freight, customs clearance, and final delivery. After delivery, we remain available for reorders, new product development, and ongoing supplier management.',
    whatWeDo: [
      'Coordinate freight (FCL, LCL, air, rail) at best rates',
      'Manage customs documentation and clearance',
      'Track shipment and provide updates until delivery',
      'Support reorders and new product sourcing',
    ],
    whatYouDo: [
      'Receive and inspect goods upon arrival',
      'Provide feedback for continuous improvement',
    ],
    imgId: 'how-step6-o2p1q0',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider">How It Works</p>
          <h1 id="how-page-title" className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Your Roadmap to Sourcing Success
          </h1>
          <p id="how-page-subtitle" className="mt-4 text-lg text-steel-400 max-w-2xl mx-auto leading-relaxed">
            A clear, six-step process from your initial inquiry to final delivery. We manage the complexity so you don't have to.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-steel-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-400" />
              <span>Typical timeline: 4–8 weeks from inquiry to first shipment</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-brand-400" />
              <span>100% confidential throughout the process</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((s, idx) => (
              <div key={s.step} id={`how-step-section-${idx}`} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2">
                  <img
                    alt={s.title}
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[how-step-${idx}-desc] [how-step-${idx}-title] [how-page-subtitle] [how-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl shadow-md"
                  />
                </div>
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-extrabold text-steel-200">{s.step}</span>
                    <span className="rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-semibold">{s.timeframe}</span>
                  </div>
                  <h2 id={`how-step-${idx}-title`} className="text-2xl font-extrabold text-steel-900">{s.title}</h2>
                  <p id={`how-step-${idx}-desc`} className="mt-3 text-steel-500 leading-relaxed">{s.desc}</p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="rounded-lg bg-brand-50/50 p-5">
                      <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-3">What We Do</p>
                      <ul className="space-y-2">
                        {s.whatWeDo.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-steel-600">
                            <svg className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-steel-50 p-5">
                      <p className="text-xs font-semibold text-steel-600 uppercase tracking-wider mb-3">What You Do</p>
                      <ul className="space-y-2">
                        {s.whatYouDo.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-steel-600">
                            <svg className="h-4 w-4 text-steel-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-brand-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-brand-200 max-w-xl mx-auto leading-relaxed">
            Share your requirements and we will begin within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-lg hover:bg-brand-50 transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
