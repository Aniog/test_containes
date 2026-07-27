import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/shared/SectionHeading.jsx';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      id: 'step-requirements',
      number: '01',
      title: 'Share Your Requirements',
      description: 'Fill out our inquiry form or send us an email with your product specifications, target price, quantity, quality standards, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
      details: ['Product specifications & drawings', 'Target unit price & total budget', 'Order quantity & MOQ flexibility', 'Quality certifications needed', 'Delivery timeline & destination'],
      imgId: 'hiw-requirements-x1y2z3',
    },
    {
      id: 'step-research',
      number: '02',
      title: 'Supplier Research & Shortlisting',
      description: 'Our sourcing team researches the market, leverages our supplier database, and identifies 3-5 qualified factories that match your criteria. We conduct preliminary background checks before presenting options.',
      details: ['Database search & market research', 'Preliminary supplier screening', 'Capability & capacity assessment', 'Price quotation collection', 'Shortlist presentation with comparison'],
      imgId: 'hiw-research-a3b4c5',
    },
    {
      id: 'step-verification',
      number: '03',
      title: 'Factory Verification & Samples',
      description: 'We visit shortlisted factories in person to verify their legitimacy, production capabilities, and quality systems. We arrange product samples for your review and approval.',
      details: ['On-site factory audit', 'Business license verification', 'Sample arrangement & shipping', 'Quality system evaluation', 'Detailed audit report with photos'],
      imgId: 'hiw-verification-d6e7f8',
    },
    {
      id: 'step-negotiation',
      number: '04',
      title: 'Negotiation & Order Placement',
      description: 'Once you approve a supplier and samples, we negotiate final pricing, payment terms, and production timelines. We help review contracts and ensure all terms protect your interests.',
      details: ['Price & terms negotiation', 'Payment structure setup', 'Contract review & finalization', 'Production schedule confirmation', 'Order placement & deposit coordination'],
      imgId: 'hiw-negotiation-g9h1i2',
    },
    {
      id: 'step-production',
      number: '05',
      title: 'Production Monitoring & QC',
      description: 'During production, we conduct regular factory visits, provide progress reports with photos, and perform quality inspections at key stages to catch issues early.',
      details: ['Weekly progress updates', 'In-line quality inspections', 'Issue identification & resolution', 'Photo & video documentation', 'Pre-shipment final inspection'],
      imgId: 'hiw-production-j3k4l5',
    },
    {
      id: 'step-shipping',
      number: '06',
      title: 'Shipping & Delivery',
      description: 'We coordinate the entire logistics process — from booking freight to preparing customs documents — ensuring your goods arrive safely and on schedule.',
      details: ['Freight method selection & booking', 'Export documentation preparation', 'Container loading supervision', 'Shipment tracking & updates', 'Delivery confirmation & follow-up'],
      imgId: 'hiw-shipping-m6n7o8',
    },
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Our structured 6-step process ensures transparency, minimizes risk, and delivers results at every stage of your sourcing journey.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white font-bold text-sm">
                      {step.number}
                    </span>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Step {step.number}</span>
                  </div>
                  <h2 id={`${step.id}-title`} className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
                    {step.title}
                  </h2>
                  <p id={`${step.id}-desc`} className="text-neutral-500 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2.5">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.id}-desc] [${step.id}-title]`}
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

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-500 text-lg mb-8">
            Share your sourcing requirements and receive a tailored proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
