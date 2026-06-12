import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare, Search, Factory, ClipboardCheck, Package,
  Truck, CheckCircle, ArrowRight, Clock, FileText, Phone
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '@/components/shared/CtaBanner';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, quantity, target price, and destination. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target quantity and budget',
      'Required certifications or compliance standards',
      'Delivery timeline and destination',
    ],
    time: '5 minutes',
    id: 'step-inquiry',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Matching',
    desc: 'Our sourcing team searches our verified manufacturer database and conducts targeted research to identify 3–5 suppliers that match your requirements. We evaluate each supplier on capability, pricing, and reliability.',
    details: [
      'Database search across 500+ verified factories',
      'Capability and capacity assessment',
      'Initial price benchmarking',
      'Supplier profile preparation',
      'Shortlist delivered to you for review',
    ],
    time: '5–10 business days',
    id: 'step-research',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'For shortlisted suppliers, our team conducts on-site factory audits. We verify business registration, production equipment, quality management systems, and certifications. You receive a detailed audit report.',
    details: [
      'On-site visit by our local team',
      'Business license and export record check',
      'Production line and equipment review',
      'Quality management system assessment',
      'Photo documentation and written report',
    ],
    time: '3–5 business days',
    id: 'step-audit',
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample Arrangement & Approval',
    desc: 'We coordinate sample production with the selected factory, inspect the samples against your specifications, and ship them to you for final approval. We manage all communication with the factory during this stage.',
    details: [
      'Sample request and production coordination',
      'Sample inspection against specifications',
      'Sample shipping to your location',
      'Feedback relay to factory',
      'Revised samples if required',
    ],
    time: '1–3 weeks',
    id: 'step-sample',
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    desc: 'Once you approve the sample and place the order, we monitor production progress and conduct quality inspections at key milestones. We report any issues immediately and work with the factory to resolve them.',
    details: [
      'Production milestone tracking',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'AQL-based defect sampling',
      'Pass/fail report with photos',
    ],
    time: 'Throughout production',
    id: 'step-production',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'After goods pass inspection, we coordinate with freight forwarders to arrange shipping. We handle export documentation, booking, and tracking — and keep you updated until your goods arrive.',
    details: [
      'Freight forwarder coordination',
      'Sea, air, or express shipping options',
      'Export documentation support',
      'Shipment booking and tracking',
      'Delivery confirmation',
    ],
    time: '2–6 weeks (sea freight)',
    id: 'step-shipping',
  },
];

const faqs = [
  {
    q: 'Do I need to visit China myself?',
    a: 'No. Our team handles all on-the-ground activities — factory visits, inspections, and supplier meetings. You manage everything remotely through our reports and communication.',
  },
  {
    q: 'Can I use my own freight forwarder?',
    a: 'Yes. We can coordinate with your preferred freight forwarder or recommend one from our network.',
  },
  {
    q: 'What happens if quality fails inspection?',
    a: 'We document all defects and work with the factory to arrange rework or replacement before shipment. You decide whether to accept, rework, or reject the goods.',
  },
  {
    q: 'How do I pay the factory?',
    a: 'You pay the factory directly. We do not handle your payments to suppliers. Our fee covers our service only.',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = React.useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              How We Source for You
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              A transparent, step-by-step process that keeps you informed and in control — from your first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={step.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-navy/10 leading-none">{step.num}</span>
                      <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h2 id={step.id} className="text-2xl md:text-3xl font-bold text-dark-text mb-3">
                      {step.title}
                    </h2>
                    <p className="text-body-text leading-relaxed mb-5">{step.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-body-text">
                          <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-sm text-muted-text">
                      <Clock className="w-4 h-4" />
                      <span>Typical timeframe: <strong className="text-dark-text">{step.time}</strong></span>
                    </div>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-md aspect-[4/3] ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={`hiw-img-${step.id}-x9y8z7`}
                      data-strk-img={`[${step.id}] China sourcing factory`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark-text mb-3">Process Questions</h2>
            <p className="text-body-text">Common questions about how we work.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-dark-text text-sm md:text-base">{faq.q}</span>
                  <span className={`text-navy font-bold text-lg flex-shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-body-text text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
