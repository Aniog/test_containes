import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader, { CTAButton } from '@/components/ui/SectionHeader';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, target price, quantity, and timeline. No commitment required at this stage.',
    details: [
      'Product description and specifications',
      'Target unit price and MOQ',
      'Required certifications (CE, RoHS, etc.)',
      'Delivery timeline and destination',
    ],
    imgId: 'hiw-img-1-a1b2c3',
    titleId: 'hiw-1-title',
    descId: 'hiw-1-desc',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our vetted supplier network and major Chinese platforms to identify 3–5 manufacturers that match your requirements. We pre-screen each one before presenting them.',
    details: [
      'Search across verified supplier database',
      'Match against your product specs and MOQ',
      'Background check on each candidate',
      'Comparative supplier summary report',
    ],
    imgId: 'hiw-img-2-d4e5f6',
    titleId: 'hiw-2-title',
    descId: 'hiw-2-desc',
  },
  {
    num: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify their legitimacy, production capacity, certifications, and quality systems. You receive a detailed audit report with photos.',
    details: [
      'On-site factory visit by our team',
      'Business license and export license check',
      'Production capacity assessment',
      'Quality management system review',
    ],
    imgId: 'hiw-img-3-g7h8i9',
    titleId: 'hiw-3-title',
    descId: 'hiw-3-desc',
  },
  {
    num: '04',
    title: 'Sample Request & Approval',
    desc: 'We request product samples from your chosen supplier, evaluate them against your specifications, and ship them to you for final approval before bulk production begins.',
    details: [
      'Sample request and follow-up with supplier',
      'Quality evaluation against your specs',
      'Structured feedback to supplier if needed',
      'Sample shipping to your location',
    ],
    imgId: 'hiw-img-4-j0k1l2',
    titleId: 'hiw-4-title',
    descId: 'hiw-4-desc',
  },
  {
    num: '05',
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we monitor progress at key milestones and conduct quality inspections. Any issues are flagged and resolved before they become costly problems.',
    details: [
      'Weekly production status updates',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'AQL sampling and defect reporting',
    ],
    imgId: 'hiw-img-5-m3n4o5',
    titleId: 'hiw-5-title',
    descId: 'hiw-5-desc',
  },
  {
    num: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders for sea, air, or express shipment. We prepare all export documentation and track your cargo from the factory to your destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking to destination',
    ],
    imgId: 'hiw-img-6-p6q7r8',
    titleId: 'hiw-6-title',
    descId: 'hiw-6-desc',
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
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Source for You
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A structured, transparent six-step process — from your first inquiry to goods arriving at your warehouse.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="text-5xl font-bold text-primary/15 mb-2">{step.num}</div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                      {step.title}
                    </h2>
                    <p id={step.descId} className="text-text-muted leading-relaxed mb-6">
                      {step.desc}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-text-dark">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-neutral-bg h-72 lg:h-80 ${!isEven ? 'lg:order-1' : ''}`}>
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
      <section className="py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-red-100 mb-8">
            Submit your inquiry and we will get back to you within 24 hours with a tailored sourcing plan.
          </p>
          <CTAButton to="/contact" variant="outline" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
