import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, MessageSquare, Search, ShieldCheck, Package, ClipboardCheck, Truck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    desc: 'Tell us about the product you want to source — specifications, target price, quantity, quality standards, and timeline. The more detail you provide, the better we can match you with the right supplier.',
    details: ['Product description and specifications', 'Target price range', 'Order quantity (MOQ)', 'Quality standards and certifications needed', 'Desired delivery timeline'],
    imgId: 'hiw-step1-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Search & Screening',
    desc: 'Our team searches our database and network across China\'s manufacturing hubs to find factories that match your requirements. We screen each candidate for capability, reliability, and pricing before presenting you with the best options.',
    details: ['Search across verified factory network', 'Screen for production capability', 'Compare pricing from multiple suppliers', 'Check export experience and references', 'Present top 2-3 candidates with detailed reports'],
    imgId: 'hiw-step2-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Before you commit, we visit the factory on your behalf to verify it\'s a real manufacturer (not a trading company), assess production capacity, check quality systems, and confirm they can deliver what they promise.',
    details: ['On-site factory visit and verification', 'Business license and registration check', 'Production line and equipment assessment', 'Quality management system review', 'Detailed audit report with photos and findings'],
    imgId: 'hiw-step3-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample & Negotiation',
    desc: 'We arrange product samples from the verified factory, review them against your specifications, and negotiate pricing, payment terms, and production details on your behalf.',
    details: ['Sample arrangement and shipping to you', 'Sample evaluation against your specs', 'Price negotiation with the factory', 'Payment terms agreement', 'Production order confirmation and timeline'],
    imgId: 'hiw-step4-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    desc: 'Once production starts, we monitor progress with regular on-site checks. We track material procurement, production milestones, and conduct during-production inspections to catch issues early.',
    details: ['Weekly production status updates', 'During-production quality inspection', 'Material and component verification', 'Timeline tracking and milestone confirmation', 'Early issue detection and intervention'],
    imgId: 'hiw-step5-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Final Inspection & Shipping',
    desc: 'Before shipment, we conduct a comprehensive pre-shipment inspection (PSI) following AQL standards. After your approval, we coordinate freight booking, customs documentation, and delivery tracking to your destination.',
    details: ['Pre-shipment inspection (AQL standard)', 'Loading supervision', 'Freight booking and coordination', 'Customs documentation preparation', 'Shipment tracking and delivery confirmation'],
    imgId: 'hiw-step6-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
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
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 id="hiw-page-title" className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p id="hiw-page-subtitle" className="text-lg text-navy-200 max-w-2xl">
            A clear, step-by-step process from your first inquiry to delivered goods. You stay informed and in control at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, idx) => (
        <section key={step.num} className={`py-16 md:py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-navy-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {step.num}
                  </div>
                  <step.icon className="w-8 h-8 text-primary-500" />
                </div>
                <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">{step.title}</h2>
                <p id={step.descId} className="text-navy-500 leading-relaxed mb-6">{step.desc}</p>
                <div className="space-y-3">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5" />
                      <span className="text-sm text-navy-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  alt={step.title}
                  data-strk-img-id={step.imgId}
                  data-strk-img={`[${step.descId}] [${step.titleId}] [hiw-page-subtitle] [hiw-page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Timeline Summary */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">Typical Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">2-6 Weeks</div>
              <div className="text-sm font-semibold text-navy-900 mb-1">Supplier Search & Verification</div>
              <div className="text-xs text-navy-500">Finding and auditing the right factory</div>
            </div>
            <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">1-3 Weeks</div>
              <div className="text-sm font-semibold text-navy-900 mb-1">Sample & Negotiation</div>
              <div className="text-xs text-navy-500">Sample arrangement and order confirmation</div>
            </div>
            <div className="bg-navy-50 rounded-xl p-6 border border-navy-100 text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">4-8 Weeks</div>
              <div className="text-sm font-semibold text-navy-900 mb-1">Production & Delivery</div>
              <div className="text-xs text-navy-500">Manufacturing, QC, and shipping</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Share your product requirements and get a free assessment within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors inline-flex items-center gap-2"
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
