import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight, FileText, Search, ShieldCheck, Package,
  ClipboardCheck, Truck, CheckCircle2
} from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    desc: 'Share your product specifications, target pricing, order quantity, and quality standards. We review your needs and confirm feasibility within 48 hours.',
    details: [
      'Product specifications and technical drawings',
      'Target price range and order volume',
      'Quality standards and certification requirements',
      'Timeline and delivery expectations',
    ],
    imgId: 'hiw-step1-a1b2c3',
    titleId: 'hiw-s1-title',
    descId: 'hiw-s1-desc',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Matching & Verification',
    desc: 'We search our network and identify 3-5 qualified suppliers. Each supplier undergoes our verification process before being presented to you.',
    details: [
      'Database search and new supplier outreach',
      'Initial quotation and capability screening',
      'Factory audit and verification report',
      'Supplier comparison matrix with recommendations',
    ],
    imgId: 'hiw-step2-d4e5f6',
    titleId: 'hiw-s2-title',
    descId: 'hiw-s2-desc',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Sample & Price Negotiation',
    desc: 'We coordinate sample production with shortlisted suppliers, evaluate quality, and negotiate pricing and terms on your behalf.',
    details: [
      'Sample production coordination and review',
      'Price negotiation and payment terms discussion',
      'Contract preparation and order confirmation',
      'Production timeline agreement',
    ],
    imgId: 'hiw-step3-g7h8i9',
    titleId: 'hiw-s3-title',
    descId: 'hiw-s3-desc',
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Order Management & Quality Control',
    desc: 'We place orders, monitor production progress, and conduct inspections at key stages to ensure quality and timeline compliance.',
    details: [
      'Order placement and deposit payment coordination',
      'Weekly production status updates with photos',
      'Pre-production, during-production, and pre-shipment inspections',
      'Issue identification and resolution management',
    ],
    imgId: 'hiw-step4-j1k2l3',
    titleId: 'hiw-s4-title',
    descId: 'hiw-s4-desc',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We arrange freight, prepare customs documentation, and coordinate delivery to your destination. Full tracking until goods arrive.',
    details: [
      'Freight quotation and booking (sea, air, rail)',
      'Customs documentation and compliance',
      'Container loading supervision',
      'Shipment tracking and delivery confirmation',
    ],
    imgId: 'hiw-step5-m4n5o6',
    titleId: 'hiw-s5-title',
    descId: 'hiw-s5-desc',
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
      <section className="bg-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">How It Works</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              A clear, structured process from your initial inquiry to final delivery. Here is what happens at each step when you work with SSourcing China.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => (
              <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-brand-500 bg-brand-50 px-3 py-1 rounded-full">Step {step.num}</span>
                  </div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">{step.title}</h2>
                  <p id={step.descId} className="text-neutral-600 leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-3">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 text-sm leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl bg-neutral-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 text-center mb-12">
            Typical Project Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {[
              { label: 'Requirements Review', time: '1-2 days' },
              { label: 'Supplier Search & Audit', time: '1-2 weeks' },
              { label: 'Sample & Negotiation', time: '2-4 weeks' },
              { label: 'Production & QC', time: '4-8 weeks' },
              { label: 'Shipping & Delivery', time: '2-6 weeks' },
            ].map((item, i) => (
              <div key={item.label} className="bg-white rounded-xl p-4 border border-neutral-200">
                <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                  {i + 1}
                </div>
                <div className="font-semibold text-neutral-800 text-sm mb-1">{item.label}</div>
                <div className="text-neutral-500 text-xs">{item.time}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-500 text-sm mt-6">
            Timelines vary based on product complexity, order volume, and supplier availability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Submit your requirements and receive a free sourcing plan within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
