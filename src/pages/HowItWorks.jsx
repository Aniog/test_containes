import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MessageSquare, Search, FileCheck, Factory, ClipboardCheck, Truck } from 'lucide-react';

const steps = [
  {
    id: 'step-1',
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product specifications, target price, quantity, quality standards, and delivery timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product specifications and drawings', 'Target FOB/CIF price range', 'Order quantity and frequency', 'Required certifications or standards'],
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-3b7e2a',
  },
  {
    id: 'step-2',
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches and contacts potential suppliers from our verified network and industry databases. We evaluate each candidate based on your criteria and present 3-5 qualified options.',
    details: ['Database and network search', 'Initial capability screening', 'Price and MOQ comparison', 'Supplier profile reports'],
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-9c4d1f',
  },
  {
    id: 'step-3',
    number: '03',
    icon: FileCheck,
    title: 'Samples & Negotiation',
    desc: 'We arrange product samples from shortlisted suppliers for your evaluation. Once you approve a supplier, we negotiate final pricing, payment terms, and production timeline on your behalf.',
    details: ['Sample arrangement and shipping', 'Price and terms negotiation', 'Contract preparation', 'Payment milestone planning'],
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-6a8b3e',
  },
  {
    id: 'step-4',
    number: '04',
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'During manufacturing, we visit the factory regularly to monitor progress, check quality at key milestones, and ensure your order stays on schedule. You receive weekly photo reports.',
    details: ['Regular factory visits', 'Production timeline tracking', 'In-line quality checks', 'Weekly progress reports with photos'],
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-2d5f7c',
  },
  {
    id: 'step-5',
    number: '05',
    icon: ClipboardCheck,
    title: 'Pre-Shipment Inspection',
    desc: 'Before goods leave the factory, our QC team conducts a thorough inspection following AQL standards. We check functionality, appearance, packaging, and labeling against your approved samples.',
    details: ['AQL sampling inspection', 'Functionality and safety testing', 'Packaging and labeling verification', 'Detailed inspection report with photos'],
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-8e1a4b',
  },
  {
    id: 'step-6',
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight forwarding, prepare all customs documentation, and track your shipment until it arrives at your warehouse. We handle sea, air, or rail freight based on your needs.',
    details: ['Freight method selection', 'Customs documentation', 'Shipment tracking', 'Delivery confirmation'],
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-4c9d2e',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Our Process</p>
          <h1 id="hiw-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            How It Works
          </h1>
          <p id="hiw-page-subtitle" className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
            A clear, step-by-step process from your initial inquiry to goods delivered at your door.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isReversed = idx % 2 !== 0;
              return (
                <div
                  key={step.id}
                  className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center"
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-bold text-primary opacity-40">{step.number}</span>
                      <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
                      {step.title}
                    </h2>
                    <p id={step.descId} className="text-neutral-500 leading-relaxed mb-5">
                      {step.desc}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-sm text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}] [hiw-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="rounded-xl shadow-sm w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
            Submit your sourcing requirements today and receive a tailored plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors"
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
