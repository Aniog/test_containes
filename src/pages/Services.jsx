import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, FileText } from 'lucide-react';

const services = [
  {
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Search & Matching',
    desc: 'We identify suppliers across China that match your product requirements, quality standards, and budget. Our team searches through verified factory networks, industry contacts, and trade show connections to find the best fit for your needs.',
    details: [
      'Product-specific supplier identification',
      'Multi-supplier comparison with pricing and capability analysis',
      'Background checks on business licenses and export history',
      'Initial communication and negotiation support',
    ],
    imgId: 'service-search-e1f2g3',
    titleId: 'service-search-title',
    descId: 'service-search-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    desc: 'Before you commit to a supplier, we visit the factory in person. We verify their business credentials, inspect production lines, review quality control systems, and confirm they have the capacity and capability to deliver on your requirements.',
    details: [
      'On-site factory visits with detailed photo reports',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker conditions and compliance check',
    ],
    imgId: 'service-verification-h4i5j6',
    titleId: 'service-verification-title',
    descId: 'service-verification-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'We conduct inspections at key stages of production to catch issues early and ensure your products meet agreed specifications. All inspections follow internationally recognized AQL standards with detailed photo and written reports.',
    details: [
      'Pre-production inspection (materials and components check)',
      'During-production inspection (process monitoring)',
      'Pre-shipment inspection (final quality check)',
      'AQL-based sampling with detailed reports and photos',
      'Defect classification and corrective action tracking',
    ],
    imgId: 'service-inspection-k7l8m9',
    titleId: 'service-inspection-title',
    descId: 'service-inspection-desc',
  },
  {
    id: 'production-followup',
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'We monitor your order throughout the production cycle. Our team tracks milestones, checks progress on-site, and keeps you informed with regular updates so that delays are identified early and managed proactively.',
    details: [
      'Production schedule tracking and milestone monitoring',
      'On-site progress checks with photo updates',
      'Early delay detection and proactive problem-solving',
      'Regular status reports to keep you informed',
      'Coordination between you and the factory on changes',
    ],
    imgId: 'service-followup-n1o2p3',
    titleId: 'service-followup-title',
    descId: 'service-followup-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    desc: 'We handle the logistics from factory to your door. From booking freight to preparing customs documentation, we coordinate the entire shipping process and track your goods until they arrive at your destination.',
    details: [
      'Freight booking (sea, air, rail) based on your timeline and budget',
      'Export documentation and customs declaration preparation',
      'Compliance verification for destination market requirements',
      'Shipment tracking from departure to arrival',
      'Door-to-door or port-to-port delivery arrangements',
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
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="services-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
          <p id="services-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            End-to-end sourcing support — from finding suppliers to delivering your goods on time and on spec.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
              <div className="lg:w-1/2">
                <img
                  alt={service.title}
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${service.descId}] [${service.titleId}] [services-page-subtitle] [services-page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-lg bg-neutral-200 object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <h2 id={service.titleId} className="text-xl md:text-2xl font-bold text-neutral-800">{service.title}</h2>
                </div>
                <p id={service.descId} className="text-neutral-500 text-sm md:text-base leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-8">
            Tell us about your product and requirements. We'll provide a free initial assessment within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md text-base font-semibold transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
