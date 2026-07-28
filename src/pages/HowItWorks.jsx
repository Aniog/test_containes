import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Fill out our inquiry form with your product details, specifications, target price, quantity, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product description and specifications', 'Target unit price and total budget', 'Required certifications (CE, FDA, etc.)', 'Desired delivery timeline'],
    titleId: 'step-1-title',
    descId: 'step-1-desc',
    imgId: 'step-1-img-a3b7c2',
  },
  {
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches potential suppliers across our verified network and major manufacturing hubs. We evaluate each candidate against your requirements and present a shortlist of 3-5 qualified options.',
    details: ['Database and market research', 'Initial supplier screening', 'Capability and capacity assessment', 'Shortlist presentation with comparison'],
    titleId: 'step-2-title',
    descId: 'step-2-desc',
    imgId: 'step-2-img-d4e8f1',
  },
  {
    step: '03',
    title: 'Factory Verification & Samples',
    desc: 'We visit shortlisted factories to verify their legitimacy, production capacity, and quality systems. Once verified, we coordinate sample production so you can evaluate quality before committing to a full order.',
    details: ['On-site factory audit', 'Business license verification', 'Sample production coordination', 'Sample shipping to your location'],
    titleId: 'step-3-title',
    descId: 'step-3-desc',
    imgId: 'step-3-img-g5h9i3',
  },
  {
    step: '04',
    title: 'Negotiation & Order Placement',
    desc: 'We negotiate pricing, payment terms, and production timelines on your behalf. Once terms are agreed, we help structure the purchase order and payment schedule to protect your interests.',
    details: ['Price and MOQ negotiation', 'Payment term structuring', 'Purchase order preparation', 'Production timeline agreement'],
    titleId: 'step-4-title',
    descId: 'step-4-desc',
    imgId: 'step-4-img-j6k0l4',
  },
  {
    step: '05',
    title: 'Production Monitoring & QC',
    desc: 'Throughout production, we monitor progress and conduct quality inspections at key stages. You receive regular updates with photos and reports, and we flag any issues immediately for resolution.',
    details: ['Weekly production progress reports', 'In-line quality inspections', 'Pre-shipment final inspection', 'Defect documentation and resolution'],
    titleId: 'step-5-title',
    descId: 'step-5-desc',
    imgId: 'step-5-img-m7n1o5',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate the entire logistics chain — from factory pickup to delivery at your warehouse. This includes freight booking, export documentation, customs support, and real-time tracking.',
    details: ['Freight method selection (sea/air)', 'Export documentation preparation', 'Customs clearance coordination', 'Delivery tracking and confirmation'],
    titleId: 'step-6-title',
    descId: 'step-6-desc',
    imgId: 'step-6-img-p8q2r6',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              How It Works
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Our Sourcing Process
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured, transparent approach to sourcing from China. You stay informed at every step — no surprises, no guesswork.
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((item, idx) => (
              <div key={item.step} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-xl aspect-[4/3] object-cover"
                  />
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center text-orange font-bold text-sm">
                      {item.step}
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <h2 id={item.titleId} className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h2>
                  <p id={item.descId} className="text-slate-600 leading-relaxed mb-5">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Start Your Sourcing Project Today
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Submit your requirements and receive a sourcing plan within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-dark transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
