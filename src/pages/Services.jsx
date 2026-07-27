import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, PackageCheck } from 'lucide-react';

const services = [
  {
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Search & Matching',
    desc: 'We identify and evaluate suppliers across China that match your product requirements, quality standards, and budget. Our team searches our verified supplier network, industry contacts, and trade show resources to find the best options.',
    details: [
      'Product-specific supplier identification',
      '2-3 qualified supplier options per project',
      'Price comparison and negotiation support',
      'Supplier background and reputation check',
    ],
    imgId: 'service-search-e1f2g3',
    titleId: 'service-search-title',
    descId: 'service-search-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'We visit factories in person to verify business licenses, production capacity, equipment, and real operating conditions. You receive a detailed report with photos so you can make informed decisions.',
    details: [
      'In-person factory visit and inspection',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Manufacturer vs. trading company identification',
      'Detailed report with photos and findings',
    ],
    imgId: 'service-verification-h4i5j6',
    titleId: 'service-verification-title',
    descId: 'service-verification-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection (QC)',
    desc: 'We conduct inspections at three critical stages: pre-production, during-production, and pre-shipment. Each inspection follows your agreed specifications and AQL standards.',
    details: [
      'Pre-production inspection (materials & components)',
      'During-production inspection (mid-line check)',
      'Pre-shipment inspection (final AQL check)',
      'Detailed inspection reports with photos',
      'Defect classification and resolution support',
    ],
    imgId: 'service-inspection-k7l8m9',
    titleId: 'service-inspection-title',
    descId: 'service-inspection-desc',
  },
  {
    id: 'production-followup',
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor production schedules, track milestones, and report progress so your orders stay on time. If delays occur, we identify the cause and work with the factory to find solutions.',
    details: [
      'Production schedule monitoring',
      'Weekly progress reports with photos',
      'Delay identification and resolution',
      'Communication bridge between you and the factory',
    ],
    imgId: 'service-followup-n1o2p3',
    titleId: 'service-followup-title',
    descId: 'service-followup-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    desc: 'We arrange freight forwarding, handle customs documentation, and coordinate delivery to your destination. Whether by sea, air, or express, we manage the logistics so you do not have to.',
    details: [
      'Freight forwarding arrangement (sea, air, express)',
      'Customs documentation preparation',
      'Shipping cost comparison and optimization',
      'Delivery tracking and status updates',
    ],
    imgId: 'service-shipping-q4r5s6',
    titleId: 'service-shipping-title',
    descId: 'service-shipping-desc',
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="services-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            End-to-end sourcing support from finding suppliers to delivering products. Each service can be used independently or as part of a full sourcing package.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4x3] rounded-xl overflow-hidden">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}] [services-page-subtitle] [services-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <h2 id={service.titleId} className="text-xl md:text-2xl font-bold text-neutral-900">{service.title}</h2>
                </div>
                <p id={service.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-neutral-700">
                      <PackageCheck className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-neutral-600 text-sm mb-6">Get a free consultation and supplier recommendations within 24 hours.</p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base no-underline transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
