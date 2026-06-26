import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, ThumbsUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quantity, and quality requirements. We respond within 24 hours with an initial assessment.',
    details: [
      'Product description and specifications',
      'Target price range and order quantity',
      'Quality standards and certifications needed',
      'Timeline and delivery requirements',
    ],
    imgId: 'hiw-step1-w1x2y3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    icon: Search,
    num: '02',
    title: 'Supplier Identification',
    desc: 'We search our verified supplier network and market resources to find 3-5 qualified factories that match your criteria.',
    details: [
      'Search across verified supplier database',
      'Contact and screen potential suppliers',
      'Compare quotations and capabilities',
      'Present shortlist with detailed profiles',
    ],
    imgId: 'hiw-step2-z4a5b6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    icon: ShieldCheck,
    num: '03',
    title: 'Factory Verification',
    desc: 'We conduct on-site audits to verify each supplier\'s capabilities, certifications, and production conditions before you commit.',
    details: [
      'Business license and registration check',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker conditions and compliance evaluation',
    ],
    imgId: 'hiw-step3-c7d8e9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    icon: ClipboardCheck,
    num: '04',
    title: 'Sample & Quality Check',
    desc: 'We arrange samples, evaluate quality against your specifications, and confirm all details before production begins.',
    details: [
      'Sample arrangement and evaluation',
      'Specification confirmation with factory',
      'Pre-production meeting and quality plan',
      'Material and component inspection',
    ],
    imgId: 'hiw-step4-f1g2h3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    icon: Ship,
    num: '05',
    title: 'Production & Inspection',
    desc: 'We monitor production progress and conduct inspections at key milestones to ensure quality and timing are on track.',
    details: [
      'Production schedule monitoring',
      'During-production quality checks',
      'Pre-shipment AQL inspection',
      'Detailed photo and video reports',
    ],
    imgId: 'hiw-step5-i4j5k6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    icon: ThumbsUp,
    num: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics, handle documentation, and track your shipment until it reaches your door.',
    details: [
      'Freight booking and coordination',
      'Customs documentation preparation',
      'Shipment tracking and updates',
      'Delivery confirmation and feedback',
    ],
    imgId: 'hiw-step6-l7m8n9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">How It Works</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            A clear, step-by-step process that keeps you informed and in control from your first inquiry to final delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold text-accent/30">{step.num}</span>
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {step.title}
                  </h2>
                  <p id={step.descId} className="text-text-secondary leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        <span className="text-text-secondary text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] bg-surface rounded-lg overflow-hidden">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Get Started?</h2>
          <p className="text-text-secondary mb-8">
            The first step is simple — tell us what you're looking for. We'll take it from there.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
