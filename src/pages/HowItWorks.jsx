import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, PackageCheck, Ship } from 'lucide-react';

const steps = [
  {
    id: 'inquiry',
    icon: MessageSquare,
    step: '1',
    title: 'Submit Your Inquiry',
    desc: 'Share your product specifications, target price, quantity, and quality requirements. You can include reference photos, technical drawings, or links to similar products. We respond within 24 hours.',
    imgId: 'howto-inquiry-a1b2c3',
    titleId: 'howto-inquiry-title',
    descId: 'howto-inquiry-desc',
  },
  {
    id: 'search',
    icon: Search,
    step: '2',
    title: 'Supplier Search & Selection',
    desc: 'Our team searches our verified supplier network and identifies 2-3 factories that match your requirements. We evaluate each supplier on production capability, quality standards, pricing, and reliability.',
    imgId: 'howto-search-d4e5f6',
    titleId: 'howto-search-title',
    descId: 'howto-search-desc',
  },
  {
    id: 'verify',
    icon: ShieldCheck,
    step: '3',
    title: 'Factory Verification',
    desc: 'We visit the factory in person to verify their business license, production equipment, workforce, and quality control systems. You receive a detailed report with photos so you can make an informed decision.',
    imgId: 'howto-verify-g7h8i9',
    titleId: 'howto-verify-title',
    descId: 'howto-verify-desc',
  },
  {
    id: 'sample',
    icon: ClipboardCheck,
    step: '4',
    title: 'Sample Development & Review',
    desc: 'We coordinate sample production and ship samples to you for review. Once you approve the sample and confirm specifications, we set clear quality standards for production.',
    imgId: 'howto-sample-j1k2l3',
    titleId: 'howto-sample-title',
    descId: 'howto-sample-desc',
  },
  {
    id: 'production',
    icon: PackageCheck,
    step: '5',
    title: 'Production Monitoring',
    desc: 'We follow production progress with regular updates. During-production inspections catch issues early. You receive weekly reports with photos so you always know the status of your order.',
    imgId: 'howto-production-m4n5o6',
    titleId: 'howto-production-title',
    descId: 'howto-production-desc',
  },
  {
    id: 'shipping',
    icon: Ship,
    step: '6',
    title: 'Final QC & Shipping',
    desc: 'A pre-shipment inspection confirms your products meet agreed specifications. Then we coordinate freight forwarding, customs documentation, and delivery to your destination.',
    imgId: 'howto-shipping-p7q8r9',
    titleId: 'howto-shipping-title',
    descId: 'howto-shipping-desc',
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
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="howto-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p id="howto-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            A clear, step-by-step process from your first inquiry to product delivery. You stay informed at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div key={step.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4x3] rounded-xl overflow-hidden">
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}] [howto-page-subtitle] [howto-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <step.icon className="w-5 h-5 text-primary-500" />
                  <h2 id={step.titleId} className="text-xl md:text-2xl font-bold text-neutral-900">{step.title}</h2>
                </div>
                <p id={step.descId} className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-neutral-600 text-sm mb-6">Submit your inquiry and receive supplier recommendations within 24 hours.</p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
