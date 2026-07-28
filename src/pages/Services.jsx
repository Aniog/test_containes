import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Users,
  ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    desc: 'We leverage our network of 500+ verified manufacturers across China to find the right supplier for your specific product requirements.',
    features: [
      'Product-specific supplier research',
      'Multiple supplier shortlisting (3-5 options)',
      'Price comparison and capability assessment',
      'Background checks and trade history review',
    ],
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
    imgId: 'svc-page-sourcing-img-2a4f8c',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'On-site factory visits to verify production capacity, certifications, working conditions, and business legitimacy before you commit.',
    features: [
      'On-site facility inspection',
      'Production capacity verification',
      'Certification and license checks',
      'Worker conditions assessment',
    ],
    titleId: 'svc-page-audit-title',
    descId: 'svc-page-audit-desc',
    imgId: 'svc-page-audit-img-7b3e1d',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional inspections at every stage — from initial production samples to final pre-shipment checks following international AQL standards.',
    features: [
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed photo and video reports',
    ],
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
    imgId: 'svc-page-qc-img-5c9a2f',
  },
  {
    id: 'production-monitoring',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    desc: 'Regular factory visits and progress tracking to ensure your order stays on schedule and meets your quality specifications throughout manufacturing.',
    features: [
      'Weekly production progress reports',
      'Timeline and milestone tracking',
      'Issue identification and resolution',
      'Direct factory communication',
    ],
    titleId: 'svc-page-production-title',
    descId: 'svc-page-production-desc',
    imgId: 'svc-page-production-img-8d6e3a',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight coordination from factory to your warehouse, including documentation, customs clearance, and delivery tracking.',
    features: [
      'Sea, air, and rail freight options',
      'Customs documentation preparation',
      'Cargo consolidation services',
      'Door-to-door delivery coordination',
    ],
    titleId: 'svc-page-shipping-title',
    descId: 'svc-page-shipping-desc',
    imgId: 'svc-page-shipping-img-1f4b7e',
  },
  {
    id: 'negotiation-support',
    icon: Users,
    title: 'Negotiation & Contract Support',
    desc: 'We negotiate on your behalf using local market knowledge to secure better pricing, favorable payment terms, and clear contractual protections.',
    features: [
      'Price benchmarking and negotiation',
      'Payment terms optimization',
      'MOQ reduction negotiation',
      'Contract review and protection clauses',
    ],
    titleId: 'svc-page-negotiation-title',
    descId: 'svc-page-negotiation-desc',
    imgId: 'svc-page-negotiation-img-4a2c9d',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Our Services</p>
          <h1 id="services-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Full-Service China Sourcing
          </h1>
          <p id="services-page-subtitle" className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
            From supplier discovery to doorstep delivery — we manage every aspect of your China sourcing project.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isReversed = idx % 2 !== 0;
              return (
                <div
                  key={svc.id}
                  className={`grid lg:grid-cols-2 gap-10 md:gap-16 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
                      {svc.title}
                    </h2>
                    <p id={svc.descId} className="text-neutral-500 leading-relaxed mb-6">
                      {svc.desc}
                    </p>
                    <ul className="space-y-3">
                      {svc.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}] [services-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="rounded-xl shadow-sm w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-primary-light mb-8 max-w-xl mx-auto">
            Tell us about your product requirements and get a free sourcing plan within 24 hours.
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

export default Services;
