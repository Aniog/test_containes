import { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { CtaButton } from '@/components/shared';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Fill out our sourcing inquiry form with your product requirements — specifications, target price, quantity, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price or budget',
      'Required quantity (MOQ)',
      'Delivery timeline',
      'Any certifications or standards required',
    ],
    imgId: 'hiw-step1-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier network and conducts fresh market research to identify manufacturers that match your requirements. We shortlist 3–5 qualified options for your review.',
    details: [
      'Search across verified supplier database',
      'Fresh market research if needed',
      'Supplier profile and capability summary',
      'Preliminary pricing and MOQ information',
      'Recommendation with rationale',
    ],
    imgId: 'hiw-step2-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    title: 'Factory Audit & Verification',
    desc: 'Before you commit to any supplier, we visit the factory in person to verify their credentials, production capacity, and quality systems. You receive a written audit report with photos.',
    details: [
      'On-site factory visit',
      'Business license verification',
      'Production capacity check',
      'Certification and compliance review',
      'Written report with photos',
    ],
    imgId: 'hiw-step3-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    title: 'Sampling & Approval',
    desc: 'We coordinate sample production with the selected supplier, inspect samples against your specifications, and ship them to you for final approval before any bulk order is placed.',
    details: [
      'Sample order coordination',
      'Sample inspection against specs',
      'Feedback and revision management',
      'Sample shipping to your location',
      'Approval confirmation before bulk order',
    ],
    imgId: 'hiw-step4-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    title: 'Production Monitoring',
    desc: 'Once you confirm the bulk order, we follow up with the factory at key production milestones. We conduct mid-production inspections and keep you updated with regular progress reports.',
    details: [
      'Production kick-off confirmation',
      'Raw material inspection',
      'Mid-production (DUPRO) inspection',
      'Regular status updates with photos',
      'Issue escalation and resolution',
    ],
    imgId: 'hiw-step5-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    title: 'Pre-Shipment Inspection & Shipping',
    desc: 'Before goods leave the factory, our QC team conducts a final pre-shipment inspection. We then coordinate with freight forwarders and prepare all export documentation for smooth delivery.',
    details: [
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Export documentation preparation',
      'Freight forwarder coordination',
      'Shipment tracking and delivery confirmation',
    ],
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
      <section className="bg-blue-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-accent text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            A clear, structured process designed to reduce sourcing risk and deliver consistent results for global buyers.
          </p>
          <CtaButton variant="white" label="Start Your Sourcing Request" />
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.num}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-navy rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.num}</span>
                    </div>
                    <span className="text-red-china text-sm font-semibold uppercase tracking-wide">Step {step.num}</span>
                  </div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-blue-navy mb-3">{step.title}</h2>
                  <p id={step.descId} className="text-gray-600 mb-5 leading-relaxed">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden h-64 md:h-80 ${isEven ? '' : 'lg:order-1'}`}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6">
            Submit your sourcing request today. Our team will review your requirements and respond within 24 hours.
          </p>
          <CtaButton variant="white" label="Get a Free Sourcing Quote" />
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
