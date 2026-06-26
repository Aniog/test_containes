import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, ShieldCheck, ClipboardCheck, Clock, Ship, FileText, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist qualified suppliers from our verified network based on your product requirements, target price, and quality standards.',
    details: [
      'Product-specific supplier search across China\'s manufacturing hubs',
      'Initial supplier screening and capability assessment',
      'Price comparison and negotiation support',
      '3-5 qualified supplier shortlist with detailed profiles',
    ],
    imgId: 'svc-sourcing-e1f2g3',
    titleId: 'svc-sourcing-title',
    descId: 'svc-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    desc: 'On-site factory audits to verify business licenses, production capacity, quality management systems, and real manufacturing capabilities.',
    details: [
      'Business license and registration verification',
      'On-site production capacity assessment',
      'Quality management system evaluation (ISO, etc.)',
      'Worker conditions and environmental compliance check',
      'Detailed audit report with photos and findings',
    ],
    imgId: 'svc-verification-h4i5j6',
    titleId: 'svc-verification-title',
    descId: 'svc-verification-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Pre-production, during-production, and pre-shipment inspections following international AQL standards to protect your order quality.',
    details: [
      'Pre-production inspection (raw materials & components)',
      'During-production inspection (in-line quality checks)',
      'Pre-shipment inspection (AQL-based final inspection)',
      'Detailed photo and video documentation',
      'Clear pass/fail reports with corrective action recommendations',
    ],
    imgId: 'svc-inspection-k7l8m9',
    titleId: 'svc-inspection-title',
    descId: 'svc-inspection-desc',
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    desc: 'Regular monitoring of production progress, milestone updates, and proactive issue resolution to keep your orders on schedule.',
    details: [
      'Production schedule planning and milestone tracking',
      'Weekly progress updates with photos',
      'Proactive identification and resolution of delays',
      'Direct communication with factory management',
      'Real-time status reporting',
    ],
    imgId: 'svc-production-n1o2p3',
    titleId: 'svc-production-title',
    descId: 'svc-production-desc',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    desc: 'End-to-end logistics management including freight booking, customs documentation, and door-to-door delivery coordination.',
    details: [
      'Sea freight, air freight, and rail shipping options',
      'Freight rate comparison and booking',
      'Customs documentation preparation',
      'Import compliance and regulation guidance',
      'Shipment tracking and delivery confirmation',
    ],
    imgId: 'svc-shipping-q4r5s6',
    titleId: 'svc-shipping-title',
    descId: 'svc-shipping-desc',
  },
  {
    icon: FileText,
    title: 'Trade Compliance',
    desc: 'Guidance on import regulations, documentation requirements, and compliance standards to ensure smooth customs clearance.',
    details: [
      'Product regulation and standard research',
      'Certification requirements analysis (CE, FCC, FDA, etc.)',
      'Labeling and marking compliance review',
      'Import duty and tariff assessment',
      'Documentation preparation and verification',
    ],
    imgId: 'svc-compliance-t7u8v9',
    titleId: 'svc-compliance-title',
    descId: 'svc-compliance-desc',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Our Services</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            End-to-end China sourcing services designed to protect your interests and ensure product quality from factory to door.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p id={service.descId} className="text-text-secondary leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        <span className="text-text-secondary text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] bg-surface rounded-lg overflow-hidden">
                    <img
                      alt={service.title}
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[${service.descId}] [${service.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary rounded-t-2xl">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Service Package?</h2>
          <p className="text-white/70 mb-8">
            Every sourcing project is different. Tell us what you need and we'll create a tailored solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
