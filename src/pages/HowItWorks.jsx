import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight, CheckCircle2, MessageSquare, Search, ShieldCheck,
  Package, ClipboardCheck, Truck, Clock
} from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quantity, quality requirements, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product description, specifications, and reference samples',
      'Target price range and estimated order quantity',
      'Quality standards and certification requirements',
      'Desired delivery timeline and destination',
    ],
    imgId: 'step1-inquiry-n1o2p3',
    titleId: 'step1-title',
    descId: 'step1-desc',
  },
  {
    step: 2,
    icon: Search,
    title: 'We Find & Verify Suppliers',
    desc: 'We search our verified supplier network, contact potential matches, and conduct on-site factory audits. You receive a shortlist of 3-5 qualified suppliers with detailed profiles and our verification report.',
    details: [
      'Search across 2,000+ verified suppliers in key industrial hubs',
      'On-site factory verification and capability assessment',
      'Price negotiation and sample arrangement',
      'Detailed supplier profile report with photos',
    ],
    imgId: 'step2-verify-q4r5s6',
    titleId: 'step2-title',
    descId: 'step2-desc',
  },
  {
    step: 3,
    icon: Package,
    title: 'Sample & Confirm Order',
    desc: 'Review samples from shortlisted suppliers, compare quality and pricing, and place your order with confidence. We handle sample coordination, price negotiation, and contract preparation.',
    details: [
      'Sample production and delivery coordination',
      'Quality and specification comparison across suppliers',
      'Price and terms negotiation support',
      'Order confirmation and contract preparation',
    ],
    imgId: 'step3-sample-t7u8v9',
    titleId: 'step3-title',
    descId: 'step3-desc',
  },
  {
    step: 4,
    icon: ClipboardCheck,
    title: 'We Monitor Production',
    desc: 'Our team follows your order throughout production. We track milestones, conduct in-line quality checks, and provide regular progress updates so you always know where your order stands.',
    details: [
      'Production schedule monitoring and milestone tracking',
      'During-production quality inspections',
      'Weekly progress reports with photos',
      'Proactive delay risk identification and resolution',
    ],
    imgId: 'step4-monitor-w1x2y3',
    titleId: 'step4-title',
    descId: 'step4-desc',
  },
  {
    step: 5,
    icon: Truck,
    title: 'Final Inspection & Ship',
    desc: 'Before shipment, we conduct a comprehensive pre-shipment inspection. Once approved, we coordinate freight booking, customs documentation, and delivery to your door.',
    details: [
      'Pre-shipment AQL inspection with detailed report',
      'Freight booking and logistics optimization',
      'Customs documentation and compliance preparation',
      'Shipment tracking and delivery confirmation',
    ],
    imgId: 'step5-ship-z4a5b6',
    titleId: 'step5-title',
    descId: 'step5-desc',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">From Inquiry to Delivery in 5 Steps</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            A clear, structured process that keeps you informed and in control at every stage of your China sourcing journey.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((s, idx) => (
        <section key={s.step} className={`py-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {s.step}
                  </div>
                  <s.icon className="w-6 h-6 text-navy-800" />
                </div>
                <h2 id={s.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">{s.title}</h2>
                <p id={s.descId} className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="rounded-lg overflow-hidden bg-slate-100 aspect-[4/3]">
                  <img
                    alt={s.title}
                    data-strk-img-id={s.imgId}
                    data-strk-img={`[${s.descId}] [${s.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Tell us about your product and we'll begin the sourcing process right away. No commitment required.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors no-underline">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
