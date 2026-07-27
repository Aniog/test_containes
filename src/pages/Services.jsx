import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, DollarSign,
  FileText, ArrowRight, CheckCircle2
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: <Search className="w-8 h-8 text-brand-blue" />,
    title: 'Supplier Sourcing',
    imgId: 'svc-sourcing-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
    description: 'We identify, contact, and shortlist qualified manufacturers based on your product specifications, target price, MOQ, and certification requirements.',
    features: [
      'Database of 500+ pre-vetted suppliers',
      'Multi-supplier comparison reports',
      'Price benchmarking against market rates',
      'Supplier background checks',
    ],
  },
  {
    id: 'factory-verification',
    icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
    title: 'Factory Verification & Audit',
    imgId: 'svc-audit-d4e5f6',
    titleId: 'svc-audit-title',
    descId: 'svc-audit-desc',
    description: 'On-site factory audits to verify production capacity, certifications, working conditions, and business legitimacy before you place an order.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance checks',
    ],
  },
  {
    id: 'quality-inspection',
    icon: <ClipboardCheck className="w-8 h-8 text-brand-blue" />,
    title: 'Quality Control & Inspection',
    imgId: 'svc-qc-g7h8i9',
    titleId: 'svc-qc-title',
    descId: 'svc-qc-desc',
    description: 'Multi-stage quality inspections following international AQL standards to ensure your products meet specifications before shipping.',
    features: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
    ],
  },
  {
    id: 'production-followup',
    icon: <Factory className="w-8 h-8 text-brand-blue" />,
    title: 'Production Follow-up',
    imgId: 'svc-production-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
    description: 'Regular factory visits and progress reports so you always know the status of your order and can address issues before they become problems.',
    features: [
      'Weekly production status reports',
      'Photo and video documentation',
      'Timeline tracking and alerts',
      'Issue escalation and resolution',
    ],
  },
  {
    id: 'shipping-logistics',
    icon: <Ship className="w-8 h-8 text-brand-blue" />,
    title: 'Shipping & Logistics',
    imgId: 'svc-shipping-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
    description: 'We coordinate freight forwarding, customs documentation, and delivery to your warehouse or port — by sea, air, or rail.',
    features: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Door-to-door delivery options',
    ],
  },
  {
    id: 'negotiation',
    icon: <DollarSign className="w-8 h-8 text-brand-blue" />,
    title: 'Price Negotiation',
    imgId: 'svc-negotiation-p7q8r9',
    titleId: 'svc-negotiation-title',
    descId: 'svc-negotiation-desc',
    description: 'Leverage our local market knowledge and supplier relationships to negotiate the best possible pricing and payment terms for your orders.',
    features: [
      'Market price research',
      'Multi-supplier bidding',
      'Payment term negotiation',
      'Volume discount strategies',
    ],
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="services-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="mt-4 text-gray-300 text-lg max-w-2xl">
            Comprehensive sourcing support from supplier identification to final delivery. Every service designed to reduce your risk and save you time.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full rounded-xl object-cover aspect-[3/2]"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    {service.icon}
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark">{service.title}</h2>
                  </div>
                  <p id={service.descId} className="text-brand-gray text-base leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                        <span className="text-brand-dark text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
            Need Help Sourcing from China?
          </h2>
          <p className="mt-4 text-brand-gray text-lg">
            Tell us about your project and we'll put together a custom sourcing plan for you.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
