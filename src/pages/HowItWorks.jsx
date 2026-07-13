import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SectionHeader, CTAButton, TrustBar } from '@/components/ui/SharedComponents';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Brief',
    desc: 'Fill out our sourcing request form with your product details — specifications, target price, quantity, quality requirements, and delivery timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product name, category, and specifications',
      'Target unit price and order quantity',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Packaging and labeling requirements',
      'Delivery destination and timeline',
    ],
    duration: '1–2 days',
    imgId: 'hiw-img-step1-ss1',
    titleId: 'hiw-title-step1',
    descId: 'hiw-desc-step1',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches the Chinese market to identify manufacturers that match your requirements. We screen suppliers based on production capability, quality standards, export experience, and pricing.',
    details: [
      'Market research across trade databases and industry contacts',
      'Initial supplier screening and qualification',
      'Request for quotation (RFQ) sent to shortlisted factories',
      'Price and capability comparison',
      'Shortlist of 3–5 recommended suppliers with profiles',
    ],
    duration: '5–10 days',
    imgId: 'hiw-img-step2-ss2',
    titleId: 'hiw-title-step2',
    descId: 'hiw-desc-step2',
  },
  {
    number: '03',
    title: 'Factory Audit & Sample Review',
    desc: 'Before you commit to an order, we visit the factory in person to verify their capabilities and conduct a quality audit. We also arrange product samples so you can evaluate quality firsthand.',
    details: [
      'On-site factory visit and audit',
      'Verification of certifications and licenses',
      'Sample arrangement and shipment to your location',
      'Detailed audit report with photos',
      'Supplier recommendation with risk assessment',
    ],
    duration: '7–14 days',
    imgId: 'hiw-img-step3-ss3',
    titleId: 'hiw-title-step3',
    descId: 'hiw-desc-step3',
  },
  {
    number: '04',
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve a supplier, we assist with contract negotiation and order placement. Throughout production, we monitor progress, communicate with the factory, and send you regular updates.',
    details: [
      'Contract review and negotiation support',
      'Order confirmation and deposit management',
      'Regular production status updates',
      'Issue identification and resolution',
      'Photo and video documentation',
    ],
    duration: 'Varies by product',
    imgId: 'hiw-img-step4-ss4',
    titleId: 'hiw-title-step4',
    descId: 'hiw-desc-step4',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    desc: 'Before goods are shipped, our inspectors conduct a thorough pre-shipment inspection. We check quantity, quality, packaging, and labeling against your specifications using AQL sampling standards.',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL-based sampling and defect classification',
      'Measurement and functionality checks',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
    duration: '1–2 days',
    imgId: 'hiw-img-step5-ss5',
    titleId: 'hiw-title-step5',
    descId: 'hiw-desc-step5',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange shipment by sea, air, or express courier. We handle export documentation and keep you updated on the status of your shipment until it arrives.',
    details: [
      'Freight forwarder selection and booking',
      'Export documentation preparation',
      'Cargo insurance coordination',
      'Customs clearance support',
      'Delivery tracking and final confirmation',
    ],
    duration: '15–45 days (sea freight)',
    imgId: 'hiw-img-step6-ss6',
    titleId: 'hiw-title-step6',
    descId: 'hiw-desc-step6',
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
      {/* Header */}
      <section className="bg-brand-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              How We Source Products from China for You
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              A transparent, step-by-step process designed to minimize risk and give you full visibility at every stage.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-bold text-brand-blue/15">{step.number}</span>
                      <div className="flex items-center gap-2 bg-brand-blue-light text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3 tracking-tight">{step.title}</h2>
                    <p id={step.descId} className="text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={step.imgId}
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

      {/* CTA */}
      <section className="bg-brand-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-12 h-12 text-brand-orange mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Submit your sourcing brief today and receive a free consultation and quote within 24 hours.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
