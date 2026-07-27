import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, ShieldCheck, ClipboardCheck, PackageCheck, Ship, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    icon: FileText,
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need to source — product type, specifications, quantity, target price, and timeline. We review your request and confirm feasibility within 24 hours.',
    details: [
      'Free initial consultation',
      'Product feasibility assessment',
      'Requirement clarification',
      'Timeline and budget discussion',
    ],
    imgId: 'howto-step1-t1u2v3',
    titleId: 'howto-step1-title',
    descId: 'howto-step1-desc',
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier Search & Screening',
    description: 'We search our verified supplier network and industry databases to find manufacturers that match your requirements. We screen 3–5 qualified candidates for you to choose from.',
    details: [
      'Search verified supplier network',
      'Initial capability screening',
      'Price and MOQ comparison',
      'Shortlist 3–5 best candidates',
    ],
    imgId: 'howto-step2-w4x5y6',
    titleId: 'howto-step2-title',
    descId: 'howto-step2-desc',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Factory Verification',
    description: 'Before you commit, we visit the factory to verify business credentials, production capacity, quality systems, and working conditions. You get a detailed audit report with photos.',
    details: [
      'Business license verification',
      'On-site production capacity check',
      'Quality management system audit',
      'Detailed report with photos',
    ],
    imgId: 'howto-step3-z7a8b9',
    titleId: 'howto-step3-title',
    descId: 'howto-step3-desc',
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Sample & Quality Check',
    description: 'We arrange samples from the selected supplier and evaluate them against your specifications. Once approved, we establish quality standards for production.',
    details: [
      'Sample arrangement and shipping',
      'Specification matching evaluation',
      'Quality standard documentation',
      'Approval before production starts',
    ],
    imgId: 'howto-step4-c1d2e3',
    titleId: 'howto-step4-title',
    descId: 'howto-step4-desc',
  },
  {
    icon: PackageCheck,
    number: '05',
    title: 'Production Monitoring',
    description: 'We follow production progress with regular updates and during-production inspections. This keeps you informed and helps catch issues early before they affect delivery.',
    details: [
      'Regular production status updates',
      'During-production quality checks',
      'Timeline adherence monitoring',
      'Early issue detection and resolution',
    ],
    imgId: 'howto-step5-f4g5h6',
    titleId: 'howto-step5-title',
    descId: 'howto-step5-desc',
  },
  {
    icon: Ship,
    number: '06',
    title: 'Final Inspection & Shipping',
    description: 'We conduct a pre-shipment inspection to confirm quality, then coordinate freight booking, customs documentation, and delivery tracking to your destination.',
    details: [
      'Pre-shipment quality inspection',
      'Freight booking and coordination',
      'Customs documentation preparation',
      'Delivery tracking to your door',
    ],
    imgId: 'howto-step6-i7j8k9',
    titleId: 'howto-step6-title',
    descId: 'howto-step6-desc',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Banner */}
      <section className="bg-navy-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="howto-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            How It Works
          </h1>
          <p id="howto-page-subtitle" className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            A clear, transparent process from your first request to delivered goods. You stay informed at every step.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, index) => (
        <section key={step.number} className={`py-16 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? '' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-amber-500 font-bold text-3xl">{step.number}</span>
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-navy-700" />
                  </div>
                </div>
                <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{step.title}</h2>
                <p id={step.descId} className="mt-4 text-slate-600 leading-relaxed">{step.description}</p>
                <ul className="mt-6 space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                      </div>
                      <span className="text-slate-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
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
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Start? It Begins with One Request.
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Submit your sourcing request and we will take care of the rest. Free initial consultation, no commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors mt-8"
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
