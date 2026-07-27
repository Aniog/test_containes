import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, Factory, ClipboardCheck, Eye, Truck, MessageSquare,
  FileText, Shield, ArrowRight
} from 'lucide-react';

const allServices = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We leverage our network of 2,000+ verified suppliers and on-the-ground market knowledge to find manufacturers that match your exact specifications.',
    details: [
      'Product matching based on specs, MOQ, and budget',
      'Multiple supplier options for comparison',
      'Background checks on all recommended factories',
      'Sample arrangement and evaluation',
    ],
    imgId: 'svc-sourcing-img-2a4f8c',
  },
  {
    id: 'factory-audit',
    icon: Factory,
    title: 'Factory Verification & Audit',
    desc: 'Our team conducts comprehensive on-site factory audits to verify production capabilities, certifications, and business legitimacy.',
    details: [
      'Business license and export license verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker conditions and compliance check',
    ],
    imgId: 'svc-audit-img-7b3e1d',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional QC inspections at every stage of production to ensure your products meet specifications before shipping.',
    details: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
    ],
    imgId: 'svc-qc-img-5d9a2f',
  },
  {
    id: 'production-monitoring',
    icon: Eye,
    title: 'Production Monitoring',
    desc: 'Regular factory visits and detailed progress reports keep you informed about your order status throughout the manufacturing process.',
    details: [
      'Weekly production progress reports',
      'Photo and video documentation',
      'Timeline tracking and delay alerts',
      'Direct communication with factory management',
    ],
    imgId: 'svc-production-img-8c1f4a',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    desc: 'End-to-end freight management from factory door to your warehouse, including documentation and customs coordination.',
    details: [
      'Sea freight, air freight, and express options',
      'Customs documentation preparation',
      'Cargo consolidation for smaller orders',
      'Real-time shipment tracking',
    ],
    imgId: 'svc-shipping-img-3e7b9d',
  },
  {
    id: 'negotiation',
    icon: MessageSquare,
    title: 'Negotiation & Contract Support',
    desc: 'We negotiate on your behalf to secure the best prices, payment terms, and contractual protections.',
    details: [
      'Price benchmarking and negotiation',
      'Payment term structuring (T/T, L/C, escrow)',
      'Contract review and risk assessment',
      'Intellectual property protection guidance',
    ],
    imgId: 'svc-negotiation-img-6a2d8e',
  },
];

const Services = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="bg-brand-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Comprehensive China sourcing support from supplier identification to final delivery. Every service designed to reduce risk and save you time.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {allServices.map((service, idx) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h2 id={`svc-${service.id}-title`} className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                    {service.title}
                  </h2>
                  <p id={`svc-${service.id}-desc`} className="text-brand-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-2.5 list-none p-0 m-0">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <Shield className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-brand-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden shadow-md ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[svc-${service.id}-desc] [svc-${service.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Tell us about your product requirements and get a free sourcing proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-600 transition-colors no-underline"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
