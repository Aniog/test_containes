import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Search, ShieldCheck, ClipboardCheck, Eye, Truck, FileCheck,
  ArrowRight, CheckCircle2
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Search & Matching',
    subtitle: 'Find the right factory for your product',
    desc: 'We identify and evaluate suppliers across China that match your product specifications, quality standards, and budget requirements. Our database covers thousands of factories across major manufacturing hubs including Shenzhen, Guangzhou, Shanghai, Yiwu, and more.',
    details: [
      'Product-specific factory search across China',
      'Initial screening for capability and reliability',
      'Price comparison across multiple qualified suppliers',
      'Background check on business licenses and export history',
      'Detailed supplier report with recommendations',
    ],
    imgId: 'svc-search-a1b2c3',
    titleId: 'svc-search-title',
    descId: 'svc-search-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    subtitle: 'Confirm the factory is real and capable',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and real manufacturing capabilities. We distinguish real factories from trading companies and assess whether a supplier can reliably meet your requirements.',
    details: [
      'On-site visit to verify physical manufacturing facilities',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Worker conditions and environmental compliance check',
      'Distinction between factories and trading companies',
    ],
    imgId: 'svc-verify-d4e5f6',
    titleId: 'svc-verify-title',
    descId: 'svc-verify-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Ensure your products meet specifications',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards. Our inspectors visit the factory to check materials, workmanship, dimensions, functionality, packaging, and labeling against your specifications.',
    details: [
      'Pre-production inspection (material and component check)',
      'During-production inspection (inline quality check)',
      'Pre-shipment inspection (final AQL-based inspection)',
      'Loading supervision at warehouse or port',
      'Detailed photo and video reports for every inspection',
      'Testing coordination for certifications (CE, FCC, RoHS, etc.)',
    ],
    imgId: 'svc-inspect-g7h8i9',
    titleId: 'svc-inspect-title',
    descId: 'svc-inspect-desc',
  },
  {
    icon: Eye,
    title: 'Production Follow-up',
    subtitle: 'Keep your orders on track',
    desc: 'Regular monitoring of production progress, material sourcing, and timeline tracking. We provide weekly updates with photos and status reports, intervene early when issues arise, and ensure your orders stay on schedule.',
    details: [
      'Weekly production status updates with photos',
      'Material procurement tracking',
      'Production timeline monitoring and milestone tracking',
      'Early intervention when delays or issues are detected',
      'Coordination of modifications and change orders',
      'Final production completion confirmation',
    ],
    imgId: 'svc-followup-j1k2l3',
    titleId: 'svc-followup-title',
    descId: 'svc-followup-desc',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'From factory floor to your door',
    desc: 'End-to-end logistics coordination including freight booking, customs documentation, and delivery tracking. We work with reliable freight forwarders to arrange sea, air, or rail shipments and manage the entire logistics chain to your destination.',
    details: [
      'Freight booking (FCL/LCL sea, air, rail)',
      'Shipping route optimization for cost and speed',
      'Container loading supervision',
      'Bill of lading and shipping document preparation',
      'Real-time shipment tracking',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-ship-m4n5o6',
    titleId: 'svc-ship-title',
    descId: 'svc-ship-desc',
  },
  {
    icon: FileCheck,
    title: 'Customs & Compliance',
    subtitle: 'Navigate regulations with confidence',
    desc: 'Navigate import regulations, product certifications, labeling requirements, and customs procedures for your target markets. We ensure your products meet the legal and regulatory requirements of your destination country before they ship.',
    details: [
      'Import regulation research for your target market',
      'Product certification coordination (CE, UL, FDA, etc.)',
      'Labeling and packaging compliance review',
      'Customs declaration preparation',
      'Duty and tariff estimation',
      'Documentation for smooth customs clearance',
    ],
    imgId: 'svc-compliance-p7q8r9',
    titleId: 'svc-compliance-title',
    descId: 'svc-compliance-desc',
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
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 id="svc-page-title" className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p id="svc-page-subtitle" className="text-lg text-navy-200 max-w-2xl">
            Comprehensive China sourcing support from supplier search to delivered goods. Each service can be engaged individually or as part of a full sourcing package.
          </p>
        </div>
      </section>

      {/* Service Details */}
      {services.map((svc, idx) => (
        <section key={svc.title} className={`py-16 md:py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-navy-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <svc.icon className="w-8 h-8 text-primary-500" />
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy-900">{svc.title}</h2>
                </div>
                <p className="text-sm font-medium text-primary-500 mb-4">{svc.subtitle}</p>
                <p id={svc.descId} className="text-navy-500 leading-relaxed mb-6">{svc.desc}</p>
                <div className="space-y-3">
                  {svc.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5" />
                      <span className="text-sm text-navy-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  alt={svc.title}
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}] [svc-page-subtitle] [svc-page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-primary-500 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-primary-100 mb-8">
            Tell us about your product and requirements. We'll provide a free initial assessment within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-accent-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-600 transition-colors inline-flex items-center gap-2"
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
