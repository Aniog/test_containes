import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship,
  MessageSquare, FileText, Handshake, ArrowRight
} from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We leverage our extensive network and on-ground research to identify manufacturers that match your exact requirements.',
    details: [
      'Product specification analysis',
      'Supplier database search and shortlisting',
      'Initial supplier screening and comparison',
      'Price and MOQ negotiation',
      'Sample arrangement and evaluation',
    ],
    imgId: 'svc-sourcing-img-2f8a4c',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Our team visits factories in person to verify their legitimacy, capacity, and quality management systems.',
    details: [
      'Business license and export license verification',
      'Production capacity assessment',
      'Equipment and facility inspection',
      'Quality management system review',
      'Worker conditions and compliance check',
    ],
    imgId: 'svc-verification-img-7d3e9b',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    desc: 'Professional QC inspections at every stage of production to ensure your products meet specifications.',
    details: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL sampling standards',
    ],
    imgId: 'svc-inspection-img-5a1c8e',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    desc: 'We stay on top of your order from start to finish, providing regular updates and resolving issues proactively.',
    details: [
      'Production timeline monitoring',
      'Regular factory visits and photo reports',
      'Issue identification and resolution',
      'Schedule adherence tracking',
      'Direct communication with factory management',
    ],
    imgId: 'svc-production-img-9b4f2d',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics',
    desc: 'End-to-end logistics management from factory gate to your warehouse, including documentation and customs.',
    details: [
      'Freight forwarder selection and booking',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
      'Insurance arrangement',
    ],
    imgId: 'svc-shipping-img-3e7a1f',
  },
  {
    id: 'negotiation-support',
    icon: MessageSquare,
    title: 'Negotiation & Communication',
    desc: 'Our bilingual team handles all supplier communication, ensuring nothing is lost in translation.',
    details: [
      'Price and terms negotiation',
      'Contract review and drafting',
      'Payment terms optimization',
      'Ongoing supplier relationship management',
      'Dispute resolution support',
    ],
    imgId: 'svc-negotiation-img-6c2d8a',
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
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="services-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Sourcing Services
          </h1>
          <p id="services-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            Comprehensive China sourcing support — from finding suppliers to delivering products at your door.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, i) => (
              <div key={service.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
                    <img
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[svc-${service.id}-title] [services-page-subtitle] [services-page-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="w-12 h-12 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h2 id={`svc-${service.id}-title`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Tell us about your product requirements and get a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange text-white px-7 py-3.5 rounded-lg font-semibold no-underline hover:bg-orange-dark transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
