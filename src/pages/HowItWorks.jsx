import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';
import SectionHeader from '../components/shared/SectionHeader';

const steps = [
  {
    num: '01',
    id: 'step-inquiry',
    titleId: 'step-inquiry-title',
    descId: 'step-inquiry-desc',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, target quantity, and budget. No commitment required at this stage.',
    details: [
      'Product description and specifications',
      'Target quantity and budget range',
      'Destination country and timeline',
      'Any specific certifications or compliance requirements',
    ],
    duration: 'Day 1',
  },
  {
    num: '02',
    id: 'step-research',
    titleId: 'step-research-title',
    descId: 'step-research-desc',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches verified supplier databases, trade show records, and our established network to identify 3–5 qualified manufacturers.',
    details: [
      'Search across Alibaba, Global Sources, and private databases',
      'Initial screening for capabilities and certifications',
      'Shortlist 3–5 suppliers with detailed profiles',
      'Present options with pricing and MOQ comparison',
    ],
    duration: '5–10 business days',
  },
  {
    num: '03',
    id: 'step-audit',
    titleId: 'step-audit-title',
    descId: 'step-audit-desc',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify their capabilities, quality systems, certifications, and working conditions.',
    details: [
      'Physical visit to factory premises',
      'Verification of business licenses and export rights',
      'Assessment of production equipment and capacity',
      'Review of quality management systems',
      'Detailed audit report with photos delivered within 48 hours',
    ],
    duration: '3–5 business days',
  },
  {
    num: '04',
    id: 'step-sample',
    titleId: 'step-sample-title',
    descId: 'step-sample-desc',
    title: 'Sample Production & Negotiation',
    desc: 'We coordinate sample production with your chosen factory and negotiate pricing, MOQ, lead times, and payment terms on your behalf.',
    details: [
      'Sample request and production coordination',
      'Sample quality review before shipping to you',
      'Price negotiation using local market knowledge',
      'Contract and purchase order review',
    ],
    duration: '1–3 weeks (sample lead time varies)',
  },
  {
    num: '05',
    id: 'step-production',
    titleId: 'step-production-title',
    descId: 'step-production-desc',
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we monitor progress and conduct quality inspections at key milestones to catch issues early.',
    details: [
      'Weekly production status updates',
      'Pre-production material inspection',
      'During-production (DUPRO) checks',
      'Pre-shipment final inspection (AQL standard)',
      'Detailed inspection report with photos',
    ],
    duration: 'Throughout production',
  },
  {
    num: '06',
    id: 'step-shipping',
    titleId: 'step-shipping-title',
    descId: 'step-shipping-desc',
    title: 'Shipping & Delivery',
    desc: 'After goods pass inspection, we coordinate logistics, prepare export documentation, and track your shipment to destination.',
    details: [
      'Freight forwarder coordination (sea, air, or express)',
      'Export documentation and customs clearance support',
      'Cargo insurance advisory',
      'Shipment tracking and delivery updates',
    ],
    duration: 'Varies by shipping method',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            A structured, transparent process from your first inquiry to final delivery — with clear communication at every step.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={step.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-bold text-navy-100">{step.num}</span>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h2>
                    <p id={step.descId} className="text-slate-600 text-lg mb-6 leading-relaxed">
                      {step.desc}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-slate-700 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 h-64 lg:h-72 ${isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={`${step.id}-img-hiw`}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
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

      <CTABanner />
    </div>
  );
}
