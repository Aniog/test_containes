import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill in our inquiry form with your product requirements — category, specifications, target quantity, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product type and specifications',
      'Target unit price or budget range',
      'Estimated order quantity (MOQ)',
      'Required certifications or standards',
      'Preferred delivery timeline',
    ],
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-a1b2c3',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our vetted supplier network and conducts targeted research to identify manufacturers that match your requirements. We evaluate each candidate on capability, capacity, certifications, and track record.',
    details: [
      'Search across 10+ manufacturing regions',
      'Evaluate 20–50 potential suppliers',
      'Shortlist 3–5 qualified candidates',
      'Prepare comparative supplier report',
    ],
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-d4e5f6',
  },
  {
    num: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify their legitimacy, production capabilities, quality systems, and working conditions. You receive a detailed audit report before committing to any supplier.',
    details: [
      'On-site factory visit',
      'Business registration verification',
      'Production capacity and equipment check',
      'Quality management system review',
      'Photo-documented audit report',
    ],
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-g7h8i9',
  },
  {
    num: '04',
    title: 'Sample Ordering & Negotiation',
    desc: 'We arrange product samples from your preferred supplier and negotiate pricing, MOQ, lead times, and payment terms on your behalf. We communicate in Mandarin to ensure nothing is lost in translation.',
    details: [
      'Sample request and coordination',
      'Price and MOQ negotiation',
      'Lead time and payment term discussion',
      'Sample review and feedback loop',
    ],
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-j1k2l3',
  },
  {
    num: '05',
    title: 'Production Monitoring & QC',
    desc: 'Once your order is placed, we monitor production progress and conduct quality inspections at key milestones. We catch issues early and resolve them before they affect your shipment.',
    details: [
      'Production schedule tracking',
      'In-line and pre-shipment inspections',
      'AQL defect sampling',
      'Issue escalation and resolution',
      'Inspection report with photos',
    ],
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-m4n5o6',
  },
  {
    num: '06',
    title: 'Shipping & Final Delivery',
    desc: 'We coordinate with freight forwarders and customs brokers to manage export documentation, cargo booking, and shipment tracking. Your goods are delivered to your specified destination on schedule.',
    details: [
      'Freight forwarder coordination',
      'Export customs documentation',
      'Cargo insurance arrangement',
      'Shipment tracking and updates',
      'Delivery confirmation',
    ],
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-p7q8r9',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Source for You
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to final delivery. No guesswork, no surprises — just reliable sourcing with full transparency at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-6xl font-bold text-primary opacity-15 mb-2">{step.num}</div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-darktext mb-4">{step.title}</h2>
                  <p id={step.descId} className="text-mutedtext leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-darktext">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-lightblue h-72 lg:h-80 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-lightblue border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Get Started"
            title="Ready to Begin Your Sourcing Project?"
            subtitle="Submit your inquiry today and we will get back to you within 24 hours with an initial assessment."
          />
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
