import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Building2, ClipboardCheck, Eye, Ship, Headphones, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'svc-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We research, contact, and shortlist qualified manufacturers based on your exact product specifications.',
    features: [
      'Market research across manufacturing hubs',
      'Supplier comparison with pricing analysis',
      'Background checks on business licenses',
      'Sample coordination and evaluation',
    ],
    imgId: 'svc-sourcing-img-a1b2c3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    id: 'svc-verification',
    icon: Building2,
    title: 'Factory Verification',
    description: 'On-site audits to confirm a factory is legitimate, capable, and suitable for your order.',
    features: [
      'Physical factory visit with photo/video report',
      'Production capacity assessment',
      'Certification and license verification',
      'Worker conditions and compliance check',
    ],
    imgId: 'svc-verification-img-d4e5f6',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    id: 'svc-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Professional QC inspections at every stage to ensure your products meet specifications.',
    features: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
    ],
    imgId: 'svc-inspection-img-g7h8i9',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    id: 'svc-production',
    icon: Eye,
    title: 'Production Follow-up',
    description: 'Regular monitoring of your order throughout the manufacturing process.',
    features: [
      'Weekly progress reports with photos',
      'Timeline tracking and delay alerts',
      'Material and component verification',
      'On-site visits during critical stages',
    ],
    imgId: 'svc-production-img-j1k2l3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    id: 'svc-shipping',
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics management from factory to your warehouse.',
    features: [
      'Freight forwarder selection and booking',
      'Export documentation preparation',
      'Customs clearance support',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-img-m4n5o6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    id: 'svc-support',
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Dedicated account management for long-term sourcing partnerships.',
    features: [
      'Dedicated bilingual account manager',
      'Price negotiation and contract support',
      'Supplier relationship management',
      'Reorder and inventory planning',
    ],
    imgId: 'svc-support-img-p7q8r9',
    titleId: 'svc-support-title',
    descId: 'svc-support-desc',
  },
];

const Services = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="services-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Comprehensive support at every stage of your China sourcing journey — from finding suppliers to delivering goods.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 !== 0;
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">{service.title}</h2>
                    <p id={service.descId} className="text-neutral-600 text-base mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                          <span className="text-neutral-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 ${isReversed ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}] [services-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-100 text-lg mb-8">Tell us what you need and get a free sourcing assessment within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-3.5 rounded-lg font-semibold hover:bg-neutral-100 transition text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
