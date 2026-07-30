import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    id: 'step-inquiry',
    titleId: 'step-inquiry-title',
    descId: 'step-inquiry-desc',
    imgId: 'step-img-inquiry-a1b2c3',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, target quantity, and budget. The more detail you provide, the faster and more accurate our sourcing will be.',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target order quantity (MOQ)',
      'Target price range',
      'Destination country and delivery timeline',
    ],
  },
  {
    num: '02',
    id: 'step-research',
    titleId: 'step-research-title',
    descId: 'step-research-desc',
    imgId: 'step-img-research-d4e5f6',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our supplier network, trade databases, and industry contacts to identify manufacturers that match your requirements. We shortlist 3–5 qualified candidates for your review.',
    details: [
      'Database and network search',
      'Initial supplier screening',
      'Capability and capacity check',
      'Shortlist report with supplier profiles',
      'Preliminary price benchmarking',
    ],
  },
  {
    num: '03',
    id: 'step-audit',
    titleId: 'step-audit-title',
    descId: 'step-audit-desc',
    imgId: 'step-img-audit-g7h8i9',
    title: 'Factory Audit & Verification',
    desc: 'Before recommending a supplier, we conduct an on-site factory visit to verify their legitimacy, production capacity, and quality systems. You receive a detailed audit report with photos.',
    details: [
      'Business license verification',
      'Production facility inspection',
      'Equipment and workforce assessment',
      'Certification and compliance check',
      'Audit report with photo documentation',
    ],
  },
  {
    num: '04',
    id: 'step-sampling',
    titleId: 'step-sampling-title',
    descId: 'step-sampling-desc',
    imgId: 'step-img-sampling-j1k2l3',
    title: 'Sampling & Approval',
    desc: 'We arrange samples from the selected factory, inspect them against your specifications, and ship them to you for final approval. Any issues are addressed before production begins.',
    details: [
      'Sample request and coordination',
      'Sample inspection against specs',
      'Feedback and revision management',
      'Final sample approval confirmation',
      'Pre-production specification sign-off',
    ],
  },
  {
    num: '05',
    id: 'step-production',
    titleId: 'step-production-title',
    descId: 'step-production-desc',
    imgId: 'step-img-production-m4n5o6',
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we monitor progress and conduct quality inspections at key stages. Our pre-shipment inspection ensures goods meet your standards before they leave the factory.',
    details: [
      'Production schedule tracking',
      'In-line quality inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Defect reporting and rework management',
      'Final quantity and packing verification',
    ],
  },
  {
    num: '06',
    id: 'step-shipping',
    titleId: 'step-shipping-title',
    descId: 'step-shipping-desc',
    imgId: 'step-img-shipping-p7q8r9',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange the most suitable shipping method for your cargo. We handle export documentation and track your shipment until it reaches your destination.',
    details: [
      'Freight forwarder coordination',
      'Sea, air, or express shipping options',
      'Export documentation preparation',
      'Cargo tracking and status updates',
      'Delivery confirmation',
    ],
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
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process that keeps you informed and in control from your first inquiry to final delivery.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{step.num}</span>
                      </div>
                      <span className="text-brand-red font-semibold text-sm uppercase tracking-wider">Step {step.num}</span>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden h-72 bg-gray-100 ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">Submit your sourcing inquiry today and we'll respond within one business day.</p>
          <CTAButton to="/contact" variant="primary">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  );
}
