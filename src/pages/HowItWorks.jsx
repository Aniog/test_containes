import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — including product type, specifications, target quantity, target price, and any certifications needed. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Required certifications (CE, FDA, etc.)',
      'Packaging and labeling requirements',
      'Delivery timeline',
    ],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and conducts fresh market research to identify manufacturers that match your requirements. We evaluate each supplier on capability, pricing, certifications, and track record.',
    details: [
      'Database and market research',
      'Initial supplier screening calls',
      'Capability and certification check',
      'Pricing and MOQ verification',
      'Shortlist of 3–5 qualified suppliers',
    ],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    title: 'Quotation Collection & Comparison',
    desc: 'We request detailed quotations from shortlisted suppliers and compile them into a clear comparison report. You receive a structured overview of pricing, lead times, payment terms, and supplier profiles — making it easy to make an informed decision.',
    details: [
      'Standardized RFQ to all suppliers',
      'Quotation collection and review',
      'Comparative pricing report',
      'Supplier profile summaries',
      'Recommendation with rationale',
    ],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    title: 'Sample Procurement & Evaluation',
    desc: 'Once you select a preferred supplier, we arrange product samples and evaluate them against your specifications before shipping them to you. This step ensures you approve the quality before committing to a bulk order.',
    details: [
      'Sample request and coordination',
      'Sample quality inspection',
      'Comparison against specifications',
      'Feedback to supplier if needed',
      'International sample shipping',
    ],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    title: 'Factory Audit',
    desc: 'Before placing a bulk order, we conduct an on-site factory audit to verify the supplier\'s legitimacy, production capacity, quality systems, and compliance. You receive a detailed audit report with photos and a clear recommendation.',
    details: [
      'Business license and export record check',
      'Production facility walkthrough',
      'Quality management system review',
      'Worker welfare and compliance check',
      'Detailed audit report with photos',
    ],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    title: 'Production Monitoring',
    desc: 'After the order is placed, we monitor production progress with regular factory visits and structured status reports. If issues arise, we escalate and resolve them directly with the factory on your behalf.',
    details: [
      'Weekly production status reports',
      'Factory visit documentation',
      'Issue identification and escalation',
      'Timeline and milestone tracking',
      'Photo and video updates',
    ],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    num: '07',
    title: 'Pre-Shipment Quality Inspection',
    desc: 'Before goods are loaded, our inspectors conduct a thorough pre-shipment inspection using AQL sampling standards. We check product quality, quantity, packaging, and labeling — and provide a detailed report within 24 hours.',
    details: [
      'AQL-based product sampling',
      'Specification compliance check',
      'Packaging and labeling review',
      'Quantity verification',
      'Inspection report within 24 hours',
    ],
    imgId: 'hiw-step7-img-s1t2u3',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
  },
  {
    num: '08',
    title: 'Shipping & Delivery',
    desc: 'Once goods pass inspection, we coordinate with freight forwarders to arrange shipment by sea, air, or express courier. We handle export documentation and track your shipment until it reaches your destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea, air, and express options',
      'Customs clearance support',
      'Shipment tracking to destination',
    ],
    imgId: 'hiw-step8-img-v4w5x6',
    titleId: 'hiw-step8-title',
    descId: 'hiw-step8-desc',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process designed to reduce risk and deliver results. Here's exactly what happens when you work with SSourcing China.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.num} className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="text-6xl font-bold text-primary/10 leading-none mb-2">{step.num}</div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-3">{step.title}</h2>
                    <p id={step.descId} className="text-muted leading-relaxed mb-5">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-darktext">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-md aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
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
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-blue-200 mb-8">Submit your inquiry and we'll get back to you within 48 hours with a tailored sourcing plan.</p>
          <CTAButton variant="secondary" size="lg">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  );
}
