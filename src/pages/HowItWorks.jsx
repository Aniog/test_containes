import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';

const steps = [
  {
    num: '01',
    id: 'step-inquiry',
    titleId: 'step-title-inquiry',
    descId: 'step-desc-inquiry',
    imgId: 'step-img-inquiry-a1b2c3',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — category, specifications, target quantity, and budget. The more detail you provide, the faster we can find the right match.',
    details: [
      'Product description and specifications',
      'Target unit price or budget range',
      'Estimated order quantity',
      'Required certifications or compliance standards',
      'Preferred delivery timeline',
    ],
    duration: 'Takes 5 minutes',
  },
  {
    num: '02',
    id: 'step-research',
    titleId: 'step-title-research',
    descId: 'step-desc-research',
    imgId: 'step-img-research-d4e5f6',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our supplier network and industry databases to identify manufacturers that match your criteria. We shortlist 3–5 qualified factories and prepare a comparison report.',
    details: [
      'Search across verified supplier database',
      'Filter by product type, MOQ, and certifications',
      'Prepare supplier comparison report',
      'Initial contact and capability confirmation',
    ],
    duration: '5–10 business days',
  },
  {
    num: '03',
    id: 'step-audit',
    titleId: 'step-title-audit',
    descId: 'step-desc-audit',
    imgId: 'step-img-audit-g7h8i9',
    title: 'Factory Audit & Verification',
    desc: 'Before recommending a supplier, we visit the factory in person to verify their legitimacy, production capabilities, and compliance. You receive a detailed audit report with photos.',
    details: [
      'On-site factory visit',
      'Business license and export license check',
      'Production equipment and capacity review',
      'Quality management system assessment',
      'Worker conditions and safety check',
    ],
    duration: '3–5 business days per factory',
  },
  {
    num: '04',
    id: 'step-sampling',
    titleId: 'step-title-sampling',
    descId: 'step-desc-sampling',
    imgId: 'step-img-sampling-j1k2l3',
    title: 'Sampling & Approval',
    desc: 'We arrange product samples from your selected supplier and ship them to you for evaluation. If modifications are needed, we coordinate revisions with the factory until you approve.',
    details: [
      'Sample request and production coordination',
      'Sample quality review before shipping',
      'Express shipping to your location',
      'Revision coordination if needed',
    ],
    duration: '1–3 weeks depending on product',
  },
  {
    num: '05',
    id: 'step-production',
    titleId: 'step-title-production',
    descId: 'step-desc-production',
    imgId: 'step-img-production-m4n5o6',
    title: 'Production Monitoring',
    desc: 'Once production begins, we monitor progress on your behalf. We conduct in-line inspections, communicate with the factory, and send you regular status updates.',
    details: [
      'Production kick-off confirmation',
      'In-line inspection at key milestones',
      'Regular status reports to you',
      'Issue escalation and resolution',
    ],
    duration: 'Throughout production',
  },
  {
    num: '06',
    id: 'step-inspection',
    titleId: 'step-title-inspection',
    descId: 'step-desc-inspection',
    imgId: 'step-img-inspection-p7q8r9',
    title: 'Pre-Shipment Inspection',
    desc: 'Before goods leave the factory, our inspectors conduct a thorough pre-shipment inspection based on your specifications and AQL standards. You receive a full report within 24 hours.',
    details: [
      'AQL sampling and defect classification',
      'Dimensions, functionality, and packaging check',
      'Quantity and labeling verification',
      'Detailed inspection report with photos',
    ],
    duration: '1–2 days',
  },
  {
    num: '07',
    id: 'step-shipping',
    titleId: 'step-title-shipping',
    descId: 'step-desc-shipping',
    imgId: 'step-img-shipping-s1t2u3',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange sea, air, or express delivery to your destination. We handle export documentation and keep you updated on shipment status.',
    details: [
      'Freight forwarder coordination',
      'Sea, air, or express shipping options',
      'Export documentation preparation',
      'Cargo tracking and delivery updates',
    ],
    duration: 'Varies by shipping method',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="How Our Sourcing Process Works"
        subtitle="A structured, transparent process from inquiry to delivery. We handle the complexity so you can focus on your business."
        breadcrumb="How It Works"
        cta="Start Your Sourcing Project"
      />

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-bold text-[#e8f0fb]">{step.num}</span>
                      <span className="bg-[#e8f0fb] text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full">{step.duration}</span>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-[#1a202c] mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-[#64748b] leading-relaxed mb-6">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-[#1a202c]">
                          <CheckCircle className="w-4 h-4 text-[#1a4f8a] flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden aspect-[4/3] bg-[#e8f0fb] ${isEven ? '' : 'lg:order-1'}`}>
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

      <CtaBanner
        title="Ready to Get Started?"
        subtitle="Submit your sourcing inquiry today and we'll get back to you within one business day."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
};

export default HowItWorks;
