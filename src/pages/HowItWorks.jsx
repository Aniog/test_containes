import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MessageSquare, Search, Building2, ClipboardCheck, Package, Ship, ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    id: 'hiw-1',
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form with your product details, specifications, target price, quantity, and any certifications needed. The more detail you provide, the better we can match you.',
    details: ['Product specifications and drawings', 'Target unit price and MOQ', 'Required certifications (CE, UL, FDA, etc.)', 'Preferred delivery timeline'],
    imgId: 'hiw-requirements-img-a1b2c3',
    titleId: 'hiw-1-title',
    descId: 'hiw-1-desc',
  },
  {
    id: 'hiw-2',
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: 'Our team searches across manufacturing hubs, trade databases, and our existing network to identify 3–5 qualified suppliers that match your criteria.',
    details: ['Database and network search', 'Initial supplier screening', 'Quote comparison and analysis', 'Shortlist presentation with recommendations'],
    imgId: 'hiw-research-img-d4e5f6',
    titleId: 'hiw-2-title',
    descId: 'hiw-2-desc',
  },
  {
    id: 'hiw-3',
    number: '03',
    icon: Building2,
    title: 'Factory Audit & Verification',
    description: 'We visit the shortlisted factories in person to verify their legitimacy, production capabilities, quality systems, and working conditions.',
    details: ['On-site factory visit', 'Production line inspection', 'License and certification check', 'Detailed audit report with photos'],
    imgId: 'hiw-audit-img-g7h8i9',
    titleId: 'hiw-3-title',
    descId: 'hiw-3-desc',
  },
  {
    id: 'hiw-4',
    number: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Order Placement',
    description: 'We coordinate sample production, manage revisions, negotiate final pricing and terms, and place the production order once you approve.',
    details: ['Sample coordination and shipping', 'Price and terms negotiation', 'Contract and payment terms setup', 'Production order confirmation'],
    imgId: 'hiw-sampling-img-j1k2l3',
    titleId: 'hiw-4-title',
    descId: 'hiw-4-desc',
  },
  {
    id: 'hiw-5',
    number: '05',
    icon: Package,
    title: 'Production Monitoring & QC',
    description: 'Throughout production, we visit the factory regularly to monitor progress, check quality, and ensure your specifications are being followed.',
    details: ['Weekly progress updates', 'In-line quality checks', 'Pre-shipment final inspection', 'Defect reporting and resolution'],
    imgId: 'hiw-monitoring-img-m4n5o6',
    titleId: 'hiw-5-title',
    descId: 'hiw-5-desc',
  },
  {
    id: 'hiw-6',
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We arrange freight, prepare export documents, supervise container loading, and track your shipment until it arrives at your destination.',
    details: ['Freight booking (sea/air/rail)', 'Export documentation', 'Container loading supervision', 'Shipment tracking to destination'],
    imgId: 'hiw-shipping-img-p7q8r9',
    titleId: 'hiw-6-title',
    descId: 'hiw-6-desc',
  },
];

const HowItWorks = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hiw-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p id="hiw-page-subtitle" className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Our structured 6-step process ensures transparency, quality, and reliability from start to finish.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isReversed = index % 2 !== 0;
              return (
                <div key={step.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-bold text-brand-blue/20">{step.number}</span>
                      <Icon className="w-7 h-7 text-brand-blue" />
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">{step.title}</h2>
                    <p id={step.descId} className="text-neutral-600 text-base mb-5">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                          <span className="text-neutral-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 ${isReversed ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}] [hiw-page-title]`}
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

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Ready to Get Started?</h2>
          <p className="text-neutral-600 text-lg mb-8">Submit your sourcing requirements and receive a free assessment within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
